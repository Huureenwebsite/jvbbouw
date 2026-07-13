import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Naam', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'place', title: 'Plaats', type: 'string'}),
    defineField({
      name: 'rating', title: 'Aantal sterren (1–5)', type: 'number',
      initialValue: 5, validation: (r) => r.min(1).max(5),
    }),
    defineField({name: 'text', title: 'Review-tekst', type: 'text', rows: 3}),
    defineField({name: 'order', title: 'Volgorde', type: 'number'}),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'name', subtitle: 'place', rating: 'rating'},
    prepare: ({title, subtitle, rating}) => ({
      title: `${title}${subtitle ? ' · ' + subtitle : ''}`,
      subtitle: '★'.repeat(rating || 0),
    }),
  },
})
