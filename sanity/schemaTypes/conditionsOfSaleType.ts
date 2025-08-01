import { defineField, defineType } from 'sanity'

export const conditionsOfSaleType = defineType({
  name: 'conditionsOfSale',
  title: 'Conditions of Sale',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Conditions of Sale',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: 'Terms of Purchase'
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      initialValue: 'These terms govern all transactions with Matrix Aviation.'
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Terms & Conditions'
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      initialValue: 'Legal terms governing your purchases'
    }),
    defineField({
      name: 'terms',
      title: 'Terms and Conditions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Term Number',
              type: 'number',
              validation: Rule => Rule.required().min(1)
            }),
            defineField({
              name: 'title',
              title: 'Term Title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'content',
              title: 'Term Content',
              type: 'text',
              validation: Rule => Rule.required()
            })
          ],
          preview: {
            select: {
              number: 'number',
              title: 'title'
            },
            prepare(selection) {
              const { number, title } = selection
              return {
                title: `${number}. ${title}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Hero Background Image',
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
