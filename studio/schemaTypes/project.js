import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'tag', title: 'Label (bijv. "Uithoorn · Renovatie")', type: 'string'}),
    defineField({name: 'order', title: 'Volgorde', type: 'number'}),
    defineField({name: 'image', title: 'Foto', type: 'image', options: {hotspot: true}}),
    defineField({name: 'alt', title: 'Fotobeschrijving', type: 'string'}),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'tag', media: 'image'}},
})
