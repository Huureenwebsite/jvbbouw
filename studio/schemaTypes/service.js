import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Dienst',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug', title: 'URL (niet wijzigen)', type: 'slug',
      options: {source: 'title'},
      description: 'Bepaalt het webadres van de dienst. Laat dit ongewijzigd om links werkend te houden.',
    }),
    defineField({name: 'order', title: 'Volgorde', type: 'number', description: 'Lager getal = eerder in de lijst.'}),
    defineField({name: 'icon', title: 'Icoon (technisch — niet wijzigen)', type: 'string'}),
    defineField({name: 'short', title: 'Korte omschrijving (op de homepage)', type: 'text', rows: 2}),
    defineField({name: 'image', title: 'Foto', type: 'image', options: {hotspot: true}}),
    defineField({name: 'alt', title: 'Fotobeschrijving', type: 'string'}),
    defineField({name: 'intro', title: 'Introtekst (op de dienstpagina)', type: 'text', rows: 4}),
    defineField({name: 'points', title: 'Opsomming (wat we doen)', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'metaTitle', title: 'SEO-titel', type: 'string'}),
    defineField({name: 'metaDescription', title: 'SEO-omschrijving', type: 'text', rows: 2}),
  ],
  orderings: [{title: 'Volgorde', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', media: 'image'}},
})
