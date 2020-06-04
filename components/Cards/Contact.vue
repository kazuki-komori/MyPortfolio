<template>
  <div class="c-container raised hoge">
    <v-card width="100%" height="100%" light class="p-last-card ">
      <div class="c-section_container">
        <v-card-title class="c-section_title c-v_line text-section-title">
          <span class="text-section-title-first">C</span>ontact
        </v-card-title>
      </div>
      <div class="c-section_container">
        <v-card-text>
          <p class="text-body">
            ご依頼・ご要望・お気づきの点などありましたら、
            お気軽に下記フォームよりお願い致します。
          </p>
          <div class="p-form_container">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4" class="p-form_title_box">
                    <p class="p-form_title text-body">
                      Name
                    </p>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="Name"
                      dense
                      required
                      outlined
                      solo
                      single-line
                      persistent-hint
                      flat
                      :counter="20"
                      hint="必須"
                      background-color="#40b8832a"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4" class="p-form_title_box">
                    <p class="p-form_title text-body">
                      E-mail
                    </p>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      dense
                      required
                      outlined
                      solo
                      single-line
                      persistent-hint
                      flat
                      hint="必須"
                      background-color="#40b8832a"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4" class="p-form_title_box">
                    <p class="p-form_title text-body">
                      件名
                    </p>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="subjects"
                      :rules="subjectsRules"
                      label="件名"
                      dense
                      required
                      outlined
                      solo
                      single-line
                      persistent-hint
                      flat
                      hint="必須"
                      background-color="#40b8832a"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4" class="p-form_title_box">
                    <p class="p-form_title text-body">
                      内容
                    </p>
                  </v-col>
                  <v-col>
                    <v-textarea
                      v-model="content"
                      :rules="contentRules"
                      label="内容"
                      auto-grow
                      outlined
                      rows="5"
                      row-height="30"
                      counter
                      background-color="#40b8832a"
                      hint="必須"
                    />
                  </v-col>
                </v-row>
                <div class="p-btn">
                  <v-btn
                    :disabled="!valid"
                    color="#40b8832a"
                    width="250"
                    @click="sendMsg( name, email, subjects, content)"
                  >
                    送信
                  </v-btn>
                </div>
              </v-container>
            </v-form>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
import { SendLine } from '../../pages/service/SendLine'
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || '氏名は必須項目です',
      v => v.length <= 20 || '氏名は10文字以内でお願いします'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mailは必須項目です',
      v => /.+@.+/.test(v) || '正しいE-mailアドレスを入力してください'
    ],
    subjects: '',
    subjectsRules: [
      v => !!v || '件名は必須項目です'
    ],
    content: '',
    contentRules: [
      v => !!v || '内容は必須項目です',
      v => v.length >= 10 || '内容は20文字以上でお願いします'
    ]
  }),
  methods: {
    async sendMsg (name, email, subjects, contents) {
      const res = await SendLine(name, email, subjects, contents)
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/mixins";
  .p-last-card{
    margin-bottom: 20%;
    @include sp{
      margin-bottom: 55%;
    }
  }
  .p-form_container{
    width: 100%;
    margin: 0 auto;
    padding: 40px 20%;
    @include sp{
      padding: 10px 0;
    }
  }
  .p-form_title{
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    @include sp{
      text-align: left;
    }
    @include md{
      text-align: left;
    }
    &_box{
      padding-top: 2%;
      @include sp{
        padding: 0 12px;
      }
    }
  }
  .p-btn{
    text-align: center;
  }
</style>
