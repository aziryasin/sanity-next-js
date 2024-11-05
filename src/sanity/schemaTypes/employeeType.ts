import {defineField, defineType} from 'sanity'

export const employeeType = defineType({
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    defineField({
      name: 'employeeId',
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
      options: {source: 'employeeId'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      type: 'reference',
      to: [{type: 'department'}],
      description: 'Select the department assigned to this employee',
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [{type: 'expertiseLevel'}],
      description: 'select the skills of this employee',
    }),
    defineField({
      name: 'assignedProjects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
      description: 'Select the projects assigned to this employee',
    }),
    defineField({
      name: 'joinedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'designation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
