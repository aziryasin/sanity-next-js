import {defineField, defineType} from 'sanity'

export const pageContentType = defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
