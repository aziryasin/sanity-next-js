import {defineField, defineType} from 'sanity'

export const expertiseType = defineType({
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'expertiseId',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'expertiseId'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
