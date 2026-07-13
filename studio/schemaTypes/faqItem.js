import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'Veelgestelde vraag',
  type: 'document',
  fields: [
    defineField({name: 'question', title: 'Vraag', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'answer', title: 'Antwoord', type: 'text', rows: 3}),
    defineField({name: 'order', title: 'Volgorde', type: 'number'}),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'question'}},
})
