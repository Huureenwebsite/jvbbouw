import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug', title: 'URL', type: 'slug',
      options: {source: 'title'},
      description: 'Het webadres van dit project. Klik op "Generate" om er automatisch een te maken.',
      validation: (r) => r.required(),
    }),
    defineField({name: 'tag', title: 'Label (bijv. "Uithoorn · Renovatie")', type: 'string'}),
    defineField({name: 'order', title: 'Volgorde', type: 'number'}),
    defineField({name: 'image', title: 'Omslagfoto', type: 'image', options: {hotspot: true}}),
    defineField({name: 'alt', title: 'Fotobeschrijving', type: 'string'}),
    defineField({name: 'intro', title: 'Projecttekst', type: 'text', rows: 5}),
    defineField({
      name: 'gallery', title: "Foto's (galerij)", type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {layout: 'grid'},
      description: 'Sleep hier meerdere foto’s naartoe. Ze verschijnen als galerij op de projectpagina.',
    }),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'tag', media: 'image'}},
})
