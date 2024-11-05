import {defineField, defineType} from 'sanity'

export const expertiseLevelType = defineType({
  name: 'expertiseLevel',
  title: 'Expertise Level',
  type: 'object',
  fields: [
    defineField({
      name: 'expertise',
      type: 'reference',
      to: [{type: 'expertise'}],
      description: 'Select the expertise type',
    }),
    defineField({
      name: 'expertiseLevel',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
})
