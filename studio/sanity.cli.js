import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xy8q4pjk',
    dataset: 'production'
  },
  studioHost: 'jvb-bouw',
  deployment: {
    appId: 'lk2mhjdliy690g1larhnb5il',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
