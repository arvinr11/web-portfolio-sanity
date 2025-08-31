import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cv',
  title: 'CV/Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'cvFile',
      title: 'CV File',
      type: 'file',
      description: 'Upload your CV/Resume (PDF, DOC, DOCX, etc.)',
      validation: (Rule) => Rule.required(),
      options: {
        accept: '.pdf,.doc,.docx,.txt,.rtf',
      },
    }),
  ],

  preview: {
    select: {
      media: 'cvFile',
    },
    prepare(selection) {
      const { media } = selection
      return {
        title: 'CV File',
        media: media,
      }
    },
  },
})
