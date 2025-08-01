import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const subProductType = defineType({
  name: 'subProduct',
  title: 'Sub Product',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sub Product Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'parentProduct',
      title: 'Parent Product',
      type: 'reference',
      to: {type: 'product'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for product cards and listings',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        }),
      ],
      description: 'Detailed description for sub product detail pages',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Sub Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'gallery',
      title: 'Sub Product Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            })
          ]
        })
      ],
      description: 'Additional images for the sub product gallery'
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string'
        })
      ],
      description: 'List of key sub product features'
    }),
    defineField({
      name: 'datasheet',
      title: 'Sub Product Datasheet',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx'
      },
      description: 'PDF or document file for sub product specifications'
    }),
    defineField({
      name: 'modelNumber',
      title: 'Model Number',
      type: 'string',
      description: 'Specific model or part number for this sub product'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order in which sub products appear within their parent product'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Sub Product',
      type: 'boolean',
      description: 'Mark as featured to highlight in parent product page'
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this sub product from public listings'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'parentProduct.title',
      media: 'mainImage'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
})
