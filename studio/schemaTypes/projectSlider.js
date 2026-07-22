import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projectSlider',
  title: 'Project slider',
  type: 'document',
  description: 'De draaiende foto-stapel in de eerste tegel op de homepage.',
  fields: [
    defineField({name: 'tag', title: 'Label (bijv. "Badkamer · Uithoorn")', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'image', title: 'Foto', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'Volgorde', type: 'number'}),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'tag', media: 'image'}},
})
