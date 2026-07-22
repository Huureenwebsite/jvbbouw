import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function run() {
  await client
    .patch('service-dakkapellen')
    .set({
      points: [
        'Advies over formaat en plaatsing',
        'Op maat gebouwd',
        'Waterdichte, geïsoleerde afwerking',
        'Meestal binnen één dag geplaatst',
      ],
    })
    .commit()

  await client
    .patch('service-badkamers')
    .set({
      intro:
        'Een complete badkamer van A tot Z, uitgevoerd door één partij. Van het uitbreken tot het laatste voegwerk — u heeft één aanspreekpunt en een strak eindresultaat.',
    })
    .commit()

  console.log('PATCH_DONE')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
