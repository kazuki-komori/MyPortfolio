import axios from 'axios'
import { LineMsg } from './LineBock'

module.exports = async (name, email, subjects, contents, token, url, group) => {
  const Now = () => {
    const date = new Date()
    const Month = date.getMonth()
    const day = date.getDate()
    const Hours = date.getHours()
    const Minutes = date.getMinutes()
    if (String(Minutes).length === 1) {
      return Month + '/' + day + ' ' + Hours + ':0' + Minutes
    } else {
      return Month + '/' + day + ' ' + Hours + ':' + Minutes
    }
  }
  const block = LineMsg(Now, name, email, subjects, contents)
  console.log(block)
  const params = {
    to: group,
    messages: [{
      type: 'flex',
      altText: 'ポートフォリオからのからの通知です',
      contents: block
    }]
  }
  console.log(params)
  try {
    const { status } = await axios.post(
      url,
      params,
      { headers: { 'Content-Type': 'application/json; charset=UTF-8', Authorization: 'Bearer ' + token } })
    console.log(status)
    return status
  } catch (e) {
    console.log(e)
  }
}
