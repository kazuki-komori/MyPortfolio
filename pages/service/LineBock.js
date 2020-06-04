export const LineMsg = (time, name, from, subjects, message) => {
  return {
    type: 'bubble',
    size: 'mega',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: time,
              size: 'lg',
              color: '#ffffff',
              weight: 'bold',
              align: 'end',
              position: 'relative'
            }
          ]
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'Name',
                  color: '#ffffffaa',
                  size: 'sm'
                },
                {
                  type: 'text',
                  text: name,
                  color: '#ffffff',
                  size: 'xs',
                  flex: 4,
                  weight: 'bold'
                }
              ]
            }
          ]
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'FROM',
                  color: '#ffffffaa',
                  size: 'sm'
                },
                {
                  type: 'text',
                  text: from,
                  color: '#ffffff',
                  size: 'xs',
                  flex: 4,
                  weight: 'bold'
                }
              ]
            }
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '件名',
              color: '#ffffffaa',
              size: 'md',
              weight: 'regular'
            },
            {
              type: 'text',
              text: subjects,
              color: '#ffffff',
              size: 'lg',
              flex: 4,
              weight: 'bold'
            }
          ]
        }
      ],
      paddingAll: '20px',
      backgroundColor: '#8E24AA',
      spacing: 'md',
      paddingTop: '22px'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '本文',
          size: 'lg',
          color: '#FFB300',
          weight: 'bold'
        },
        {
          type: 'separator'
        },
        {
          type: 'text',
          text: message,
          wrap: true
        }
      ],
      spacing: 'md'
    }
  }
}
