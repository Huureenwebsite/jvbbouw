import LegalPage from './LegalPage'
import { company } from '../content'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacyverklaring"
      updated="juli 2026"
      path="/privacy"
      sections={[
        { h: 'Wie wij zijn', p: [`${company.name}, gevestigd aan ${company.street}, ${company.postal} (KvK ${company.kvk}), is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring.`] },
        { h: 'Welke gegevens wij verwerken', p: ['Wij verwerken de gegevens die u zelf aan ons verstrekt via het contactformulier of telefonisch: naam, e-mailadres, telefoonnummer, postcode en de inhoud van uw aanvraag, inclusief eventuele meegestuurde foto’s.'] },
        { h: 'Waarvoor wij uw gegevens gebruiken', p: ['Uw gegevens gebruiken wij uitsluitend om contact met u op te nemen, een offerte op te stellen en onze werkzaamheden uit te voeren. Wij verkopen uw gegevens niet aan derden.'] },
        { h: 'Bewaartermijn', p: ['Wij bewaren uw gegevens niet langer dan nodig is voor de doeleinden waarvoor ze zijn verzameld, of zolang wettelijk vereist.'] },
        { h: 'Uw rechten', p: ['U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via ' + company.email + '.'] },
        { h: 'Contact', p: [`Voor vragen over deze privacyverklaring kunt u ons bereiken via ${company.email} of ${company.phoneDisplay}.`] },
      ]}
    />
  )
}
