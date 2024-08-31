export default {
  name: 'textPosition',
  title: 'Text Position',
  type: 'string',
  initialValue: 'left',
  options: {
    list: [
      {title: 'Left', value: 'left'},
      {title: 'Right', value: 'right'},
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
}
