import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {StudioLayout} from './components/StudioLayout'

// Overzichtelijke indeling voor de beheerder
const structure = (S) =>
  S.list()
    .title('JvB Bouw')
    .items([
      S.listItem()
        .title('Website-instellingen')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('service').title('Diensten'),
      S.documentTypeListItem('processStep').title('Werkwijze'),
      S.documentTypeListItem('project').title('Projecten'),
      S.documentTypeListItem('review').title('Reviews'),
      S.documentTypeListItem('faqItem').title('Veelgestelde vragen'),
    ])

export default defineConfig({
  name: 'default',
  title: 'JvB Bouw',

  projectId: 'xy8q4pjk',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  studio: {
    components: {layout: StudioLayout},
  },

  schema: {
    types: schemaTypes,
    // Voorkom een tweede losse "Website-instellingen" in het create-menu
    templates: (templates) => templates.filter((t) => t.schemaType !== 'siteSettings'),
  },
})
