import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Website-instellingen',
  type: 'document',
  groups: [
    {name: 'bedrijf', title: 'Bedrijfsgegevens'},
    {name: 'hero', title: 'Startscherm (hero)'},
    {name: 'persoon', title: 'Persoonlijk (Jordy)'},
    {name: 'contact', title: 'Contact'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'companyName', title: 'Bedrijfsnaam', type: 'string', group: 'bedrijf'}),
    defineField({name: 'phoneDisplay', title: 'Telefoon (weergave)', type: 'string', group: 'bedrijf'}),
    defineField({name: 'phoneTel', title: 'Telefoon (voor bel-link, bijv. +31646789703)', type: 'string', group: 'bedrijf'}),
    defineField({name: 'email', title: 'E-mailadres', type: 'string', group: 'bedrijf'}),
    defineField({name: 'street', title: 'Straat + huisnummer', type: 'string', group: 'bedrijf'}),
    defineField({name: 'postal', title: 'Postcode', type: 'string', group: 'bedrijf'}),
    defineField({name: 'city', title: 'Plaats', type: 'string', group: 'bedrijf'}),
    defineField({name: 'kvk', title: 'KvK-nummer', type: 'string', group: 'bedrijf'}),

    defineField({name: 'heroEyebrow', title: 'Bovenschrift', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitleLine1', title: 'Titel — regel 1', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitleLine2', title: 'Titel — regel 2 (cursief)', type: 'string', group: 'hero'}),
    defineField({name: 'heroSubtext', title: 'Introtekst', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'heroImage', title: 'Achtergrondfoto', type: 'image', options: {hotspot: true}, group: 'hero'}),
    defineField({name: 'heroAlt', title: 'Fotobeschrijving (voor Google/toegankelijkheid)', type: 'string', group: 'hero'}),

    defineField({name: 'personEyebrow', title: 'Bovenschrift', type: 'string', group: 'persoon'}),
    defineField({name: 'personName', title: 'Naam', type: 'string', group: 'persoon'}),
    defineField({name: 'personRole', title: 'Functie / rol', type: 'string', group: 'persoon'}),
    defineField({name: 'personText', title: 'Persoonlijke tekst', type: 'text', rows: 5, group: 'persoon'}),
    defineField({name: 'personImage', title: 'Foto van Jordy (optioneel)', type: 'image', options: {hotspot: true}, group: 'persoon'}),
    defineField({name: 'personAlt', title: 'Fotobeschrijving', type: 'string', group: 'persoon'}),

    defineField({name: 'contactTitle', title: 'Contact — titel', type: 'string', group: 'contact'}),
    defineField({name: 'contactText', title: 'Contact — tekst', type: 'text', rows: 3, group: 'contact'}),

    defineField({name: 'seoTitle', title: 'SEO-titel (Google-tabblad)', type: 'string', group: 'seo'}),
    defineField({name: 'seoDescription', title: 'SEO-omschrijving', type: 'text', rows: 3, group: 'seo'}),
  ],
  preview: {prepare: () => ({title: 'Website-instellingen'})},
})
