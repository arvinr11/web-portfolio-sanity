import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'portfolioFile',
      title: 'Portfolio File',
      type: 'file',
      description: 'Upload your Portfolio (PDF, DOC, DOCX, etc.)',
      validation: (Rule) => Rule.required(),
      options: {
        accept: '.pdf,.doc,.docx,.txt,.rtf',
      },
    }),
  ],

  preview: {
    select: {
      media: 'portfolioFile',
    },
    prepare(selection) {
      const { media } = selection
      return {
        title: 'Portfolio File',
        media: media,
      }
    },
  },
})
