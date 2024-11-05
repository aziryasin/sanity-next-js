import { defineField, defineType } from "sanity";

export const headerItemType = defineType({
  name: "headerItem",
  title: "Header Item",
  type: "document",
  fields: [
    defineField({
      name: "path",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
