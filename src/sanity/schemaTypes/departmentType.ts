import {defineField, defineType} from 'sanity'

export const departmentType = defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  fields: [
    defineField({
      name: 'departmentId',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'departmentId'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
