// File: schemas/project.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Write full description here. Will show "See more..." if too long',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconUrl',
              title: 'Icon Path',
              type: 'string',
              description: 'Path to SVG icon (e.g., /tech-logos/react.svg)',
              options: {
                list: [
                  { title: 'Dart', value: '/tech-logos/dart.svg' },
                  { title: 'Figma', value: '/tech-logos/figma.svg' },
                  { title: 'Firebase', value: '/tech-logos/firebase.svg' },
                  { title: 'Flutter', value: '/tech-logos/flutter.svg' },
                  { title: 'GitHub', value: '/tech-logos/github.svg' },
                  { title: 'Kotlin', value: '/tech-logos/kotlin.svg' },
                  { title: 'Node.js', value: '/tech-logos/nodejs.svg' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'isMain',
              title: 'Is Main Image',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this project as a featured project',
    }),
    defineField({
      name: 'yearCreated',
      title: 'Year Created',
      type: 'number',
      description: 'Year when project was created (e.g., 2024)',
      validation: (Rule) => Rule.required().min(2020).max(2030),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web App', value: 'web-app' },
          { title: 'Mobile App', value: 'mobile-app' },
          { title: 'API', value: 'api' },
          { title: 'Desktop App', value: 'desktop-app' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: 'Featured First, Then by Year (Newest First)',
      name: 'featuredYearOrder',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'yearCreated', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.image',
      category: 'category',
      featured: 'featured',
      year: 'yearCreated',
    },
    prepare(selection) {
      const { title, media, category, featured, year } = selection
      return {
        title: `${title}${featured ? ' ⭐' : ''}`,
        subtitle: `${category} • ${year}`,
        media: media,
      }
    },
  },
})