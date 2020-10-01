export default {
  name: 'link',
  type: 'object',
  title: 'link',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'url',
      type: 'url'
    },
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'image', value: 'image'},
          { title: 'link', value: 'link'},
          { title: 'pdf', value: 'pdf'}
        ]
      }
    }
  ]
}