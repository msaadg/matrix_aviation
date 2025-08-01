import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Configuration Name',
      type: 'string',
      description: 'Internal name for this contact configuration'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string'
        },
        {
          name: 'city',
          title: 'City',
          type: 'string'
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string'
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string'
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'phones',
      title: 'Phone Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              options: {
                list: [
                  { title: 'Tel', value: 'tel' },
                  { title: 'Mobile/WhatsApp', value: 'mobile' },
                  { title: 'Fax', value: 'fax' }
                ]
              }
            },
            {
              name: 'number',
              title: 'Phone Number',
              type: 'string'
            },
            {
              name: 'isPrimary',
              title: 'Primary Number',
              type: 'boolean',
              description: 'Mark as primary contact number'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'emails',
      title: 'Email Addresses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              options: {
                list: [
                  { title: 'Sales', value: 'sales' },
                  { title: 'Support', value: 'support' },
                  { title: 'General', value: 'general' },
                  { title: 'Info', value: 'info' }
                ]
              }
            },
            {
              name: 'email',
              title: 'Email Address',
              type: 'string'
            },
            {
              name: 'isPrimary',
              title: 'Primary Email',
              type: 'boolean',
              description: 'Mark as primary contact email'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url'
        }
      ]
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'text',
      description: 'Business operating hours'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address.city'
    }
  }
})
