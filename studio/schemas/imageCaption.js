export default {
  name: 'imageCaption',
  type: 'object',
  title: 'image with Caption',
  fields: [
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          name: 'title',
          title: 'title',
          type: 'string',
        }
      ]
    },
    {
      name: 'caption',
      title: 'caption',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'image.title',
      media: 'image'
    }
  }
}