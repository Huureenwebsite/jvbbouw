import LegalPage from './LegalPage'
import { company } from '../content'

export default function Terms() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      updated="juli 2026"
      path="/terms"
      sections={[
        { h: 'Toepasselijkheid', p: [`Deze voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten van ${company.name} (KvK ${company.kvk}).`] },
        { h: 'Offertes', p: ['Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld. Prijzen zijn inclusief btw, tenzij anders aangegeven.'] },
        { h: 'Uitvoering van het werk', p: ['Wij voeren de werkzaamheden naar beste inzicht en vakmanschap uit. Meerwerk wordt vooraf met u afgestemd en apart in rekening gebracht.'] },
        { h: 'Betaling', p: ['Betaling geschiedt volgens de afspraken in de offerte of overeenkomst. Bij grotere projecten kan in termijnen worden gefactureerd.'] },
        { h: 'Aansprakelijkheid', p: ['Onze aansprakelijkheid is beperkt tot het bedrag van de betreffende opdracht. Wij zijn niet aansprakelijk voor indirecte schade.'] },
        { h: 'Contact', p: [`Voor vragen over deze voorwaarden kunt u contact opnemen via ${company.email} of ${company.phoneDisplay}.`] },
      ]}
    />
  )
}
