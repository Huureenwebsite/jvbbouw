import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'processStep',
  title: 'Werkwijze-stap',
  type: 'document',
  fields: [
    defineField({name: 'step', title: 'Stapnummer (bijv. 01)', type: 'string'}),
    defineField({name: 'eyebrow', title: 'Bovenschrift (bijv. Kennismaking)', type: 'string'}),
    defineField({name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'text', title: 'Tekst', type: 'text', rows: 4}),
    defineField({name: 'image', title: 'Foto', type: 'image', options: {hotspot: true}}),
    defineField({name: 'alt', title: 'Fotobeschrijving', type: 'string'}),
    defineField({name: 'order', title: 'Volgorde', type: 'number'}),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'eyebrow', media: 'image'}},
})
