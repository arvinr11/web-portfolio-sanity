export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare(selection: any) {
      const { media } = selection
      return {
        title: 'Certificate',
        subtitle: 'Click to view image',
        media: media,
      }
    },
  },
}
