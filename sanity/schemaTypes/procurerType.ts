import {defineField, defineType} from 'sanity'

export const procurerType = defineType({
  name: 'procurer',
  title: 'Procurer/Supplier',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'companyName',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the supplier/procurer',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Supplier',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage trusted partners section',
    }),
    defineField({
      name: 'partnershipStartDate',
      title: 'Partnership Start Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo',
      subtitle: 'country',
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title,
        subtitle: subtitle ? `Based in: ${subtitle}` : 'Location not specified',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'companyName', direction: 'asc'},
      ],
    },
    {
      title: 'Company Name A-Z',
      name: 'nameAsc',
      by: [
        {field: 'companyName', direction: 'asc'},
      ],
    },
  ],
})
