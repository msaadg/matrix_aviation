import { defineField, defineType } from 'sanity'

export const companyType = defineType({
  name: 'company',
  title: 'Company Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Section Description',
      type: 'text',
      description: 'Description that appears in the hero section',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'storySubtitle',
      title: 'Story Section Subtitle',
      type: 'string',
      initialValue: 'Our Story'
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'storyDescription',
      title: 'Story Section Description',
      type: 'text',
      description: 'Main description in the story section',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'additionalDescription',
      title: 'Additional Description',
      type: 'text',
      description: 'Additional paragraph below the main story description'
    }),
    defineField({
      name: 'facilityImage',
      title: 'Facility Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})
