export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Certificate Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'issuer',
      title: 'Issuing Organization',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dateIssued',
      title: 'Date Issued',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'credentialId',
      title: 'Credential ID',
      type: 'string',
      description: 'Unique identifier for the certificate',
    },
    {
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Verification URL',
      type: 'url',
      description: 'Link to verify the certificate online',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display certificates (lower numbers first)',
    },
  ],
  orderings: [
    {
      title: 'By Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'dateIssued', direction: 'desc' }],
    },
    {
      title: 'By Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      issuer: 'issuer',
      date: 'dateIssued',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, issuer, date, media } = selection
      return {
        title: title,
        subtitle: `${issuer} • ${date ? new Date(date).getFullYear() : 'N/A'}`,
        media: media,
      }
    },
  },
}
