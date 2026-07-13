// ─────────────────────────────────────────────────────────────
// JvB Bouw — centrale content-laag
// Alle teksten, foto's, SEO-velden en gegevens staan hier. Dit bestand
// wordt later gevuld/overschreven door het CMS (Sanity), zodat de eigenaar
// alles zelf kan beheren zonder code aan te raken.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'JvB Bouw',
  short: 'JvB',
  tagline: 'Verbouwing, Renovatie & Onderhoud',
  established: 'Vakmanschap sinds de eerste steen',
  region: 'Aalsmeer & omstreken',
  url: 'https://jvbbouw.nl',
  phoneDisplay: '06 46 78 9703',
  phoneTel: '+31646789703',
  whatsapp: '31646789703',
  email: 'info@jvbbouw.nl',
  street: 'Aalsmeerderweg 278',
  postal: '1432 CX',
  city: 'Aalsmeer',
  kvk: '80556353',
  btw: 'NL003455578B11',
  instagram: 'https://www.instagram.com/jvb_bouw/',
}

// Werkgebied — circa 35 km rondom Aalsmeer.
// Gebruikt in copy én in de LocalBusiness structured data (SEO).
export const areasServed = [
  'Aalsmeer', 'Kudelstaart', 'Aalsmeerderbrug', 'Rijsenhout',
  'Uithoorn', 'De Kwakel', 'Amstelveen', 'Ouderkerk aan de Amstel',
  'Nes aan de Amstel', 'Amsterdam', 'Hoofddorp', 'Nieuw-Vennep',
  'Badhoevedorp', 'Haarlem', 'Heemstede', 'Mijdrecht', 'Wilnis',
  'Vinkeveen', 'Abcoude', 'Leimuiden',
]

export const nav = [
  { label: 'Home', href: '/#home' },
  { label: 'Diensten', href: '/#diensten' },
  { label: 'Werkwijze', href: '/#werkwijze' },
  { label: 'Projecten', href: '/#projecten' },
  { label: 'Contact', href: '/#contact' },
]

// SEO voor de homepage
export const seo = {
  title: 'Aannemer in Aalsmeer | Verbouwing, Renovatie & Onderhoud — JvB Bouw',
  description:
    'JvB Bouw is uw aannemer in Aalsmeer voor verbouwing, renovatie, aanbouw, badkamers en onderhoud. Vakwerk in Aalsmeer, Amstelveen, Amsterdam, Hoofddorp, Haarlem en omstreken. Vraag een vrijblijvende offerte aan.',
}

export const hero = {
  image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400&auto=format&fit=crop',
  alt: 'Modern verbouwd en gerenoveerd woonhuis door JvB Bouw in Aalsmeer',
  eyebrow: 'Aannemer in Aalsmeer · sinds de eerste steen',
  titleLine1: 'Uw huis, vakkundig',
  titleLine2: 'verbouwd en gerenoveerd.',
  subtext:
    'JvB Bouw is uw aannemer in Aalsmeer voor verbouwing, renovatie en onderhoud van woning en bedrijfspand. Strak vakwerk met eerlijke communicatie — in Aalsmeer, Amstelveen, Uithoorn, Amsterdam, Hoofddorp, Haarlem en omstreken.',
  ctaPrimary: 'Vraag een offerte aan',
  chips: ['Aalsmeer & omstreken', 'Verbouwing · Renovatie · Onderhoud', 'Vrijblijvende offerte'],
}

// icon = naam van een lucide-react icoon
export const services = [
  {
    slug: 'verbouwing',
    icon: 'Hammer',
    title: 'Verbouwing',
    short: 'Verbouwing in Aalsmeer en omstreken: nieuwe indeling, extra ruimte of een sterkere structuur — doordacht ontworpen en strak uitgevoerd.',
    image: 'https://images.unsplash.com/photo-1593012671976-1422185230fb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Verbouwing van een woning met steiger door aannemer JvB Bouw',
    metaTitle: 'Verbouwing in Aalsmeer | Aannemer JvB Bouw',
    metaDescription:
      'Uw woning of bedrijfspand verbouwen in Aalsmeer, Uithoorn of Amstelveen? JvB Bouw verzorgt de complete verbouwing van schets tot oplevering. Vraag een offerte aan.',
    intro:
      'Uw woning of bedrijfspand verbouwen in Aalsmeer en omstreken? JvB Bouw denkt mee vanaf de eerste schets. Of u nu kiest voor een nieuwe indeling, extra kamers of het verbeteren van de bestaande structuur — wij voeren de verbouwing vakkundig uit, met één vast aanspreekpunt.',
    points: [
      'Doorbraken en nieuwe indelingen',
      'Constructieve aanpassingen (met berekening)',
      'Volledige coördinatie van begin tot oplevering',
      'Eén vast aanspreekpunt gedurende het hele project',
    ],
  },
  {
    slug: 'renovatie',
    icon: 'Paintbrush',
    title: 'Renovatie',
    short: 'Renovatie in Aalsmeer: een frisse uitstraling met verbeterde functionaliteit — van badkamer tot complete woning.',
    image: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Gerenoveerd interieur met open keuken, opgeleverd door JvB Bouw',
    metaTitle: 'Renovatie in Aalsmeer | Woning renoveren — JvB Bouw',
    metaDescription:
      'Uw woning of pand renoveren in Aalsmeer en omstreken? JvB Bouw combineert strakke afwerking met duurzame keuzes. Van gedeeltelijke tot complete renovatie. Vraag een offerte aan.',
    intro:
      'Een renovatie geeft uw woning of pand in Aalsmeer een frisse uitstraling en verbetert tegelijk de functionaliteit. Wij combineren strakke afwerking met slimme, duurzame keuzes die jaren meegaan.',
    points: [
      'Complete of gedeeltelijke renovatie',
      'Verduurzaming: isolatie, kozijnen, installaties',
      'Kwaliteitsmaterialen en nette afwerking',
      'Transparante planning en communicatie',
    ],
  },
  {
    slug: 'onderhoud',
    icon: 'Wrench',
    title: 'Service & Onderhoud',
    short: 'Onderhoud in Aalsmeer dat de waarde en levensduur van uw woning of bedrijfspand beschermt. Snel en zorgvuldig.',
    image: 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Vakkundig gereedschap voor onderhoud en reparaties door JvB Bouw',
    metaTitle: 'Onderhoud & reparatie in Aalsmeer | JvB Bouw',
    metaDescription:
      'Onderhoud en reparaties aan woning of bedrijfspand in Aalsmeer en omstreken. Van houtrot tot periodiek onderhoud — JvB Bouw werkt snel en zorgvuldig. Vraag een offerte aan.',
    intro:
      'Goed onderhoud is cruciaal voor de levensduur en waarde van uw eigendom. Van kleine reparaties tot periodiek onderhoud in Aalsmeer en omstreken — wij houden uw woning of bedrijfspand in topconditie.',
    points: [
      'Periodiek en preventief onderhoud',
      'Reparaties binnen en buiten',
      'Houtrot, kozijnen en schilderklaar maken',
      'Snelle, betrouwbare afhandeling',
    ],
  },
  {
    slug: 'aanbouw-uitbouw',
    icon: 'Boxes',
    title: 'Aan- & uitbouw',
    short: 'Aanbouw of uitbouw in Aalsmeer: meer leefruimte die naadloos aansluit op uw woning — architectonisch én constructief.',
    image: 'https://images.unsplash.com/photo-1593786267440-550458cc882a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Aanbouw aan een woning in aanbouw met steiger, gebouwd door JvB Bouw',
    metaTitle: 'Aanbouw & uitbouw in Aalsmeer | JvB Bouw',
    metaDescription:
      'Aanbouw, opbouw of uitbouw laten bouwen in Aalsmeer en omstreken? JvB Bouw vergroot uw woning inclusief vergunningstraject, constructie en afwerking. Vraag een offerte aan.',
    intro:
      'Meer leefruimte zonder te verhuizen. Met een aanbouw, opbouw of uitbouw vergroot JvB Bouw uw woning in Aalsmeer op een manier die naadloos aansluit op het bestaande — architectonisch én constructief.',
    points: [
      'Aanbouw, opbouw en uitbouw',
      'Meedenken over ontwerp en indeling',
      'Fundering, constructie en afbouw',
      'Afwerking passend bij uw woning',
    ],
  },
  {
    slug: 'badkamers',
    icon: 'Bath',
    title: 'Badkamers',
    short: 'Badkamerrenovatie in Aalsmeer: tegelwerk, sanitair en installatie in één hand, met een strak eindresultaat.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop',
    alt: 'Compleet gerenoveerde badkamer met vrijstaand bad door JvB Bouw',
    metaTitle: 'Badkamer renoveren in Aalsmeer | JvB Bouw',
    metaDescription:
      'Complete badkamerrenovatie in Aalsmeer en omstreken door één partij: ontwerp, sloop, tegelwerk, sanitair en installatie. JvB Bouw levert strak op. Vraag een offerte aan.',
    intro:
      'Een complete badkamer van A tot Z in Aalsmeer, uitgevoerd door één partij. Van het uitbreken tot het laatste voegwerk — u heeft één aanspreekpunt en een strak eindresultaat.',
    points: [
      'Ontwerp en materiaaladvies',
      'Sloop, leidingwerk en installatie',
      'Tegelwerk en waterdichte afwerking',
      'Sanitair, verwarming en ventilatie',
    ],
  },
  {
    slug: 'dakkapellen',
    icon: 'PanelTop',
    title: 'Dakkapellen',
    short: 'Dakkapel plaatsen in Aalsmeer: meer licht en hoofdruimte op zolder, vakkundig geplaatst en waterdicht afgewerkt.',
    image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Woning met moderne dakkapel geplaatst door JvB Bouw',
    metaTitle: 'Dakkapel plaatsen in Aalsmeer | JvB Bouw',
    metaDescription:
      'Dakkapel laten plaatsen in Aalsmeer, Uithoorn of Mijdrecht? JvB Bouw plaatst prefab of op maat, waterdicht en geïsoleerd, meestal binnen één dag. Vraag een offerte aan.',
    intro:
      'Een dakkapel geeft uw zolder in Aalsmeer in één keer meer licht, ruimte en hoofdhoogte. Wij plaatsen vakkundig en werken netjes en waterdicht af, met minimale overlast.',
    points: [
      'Advies over formaat en plaatsing',
      'Prefab of op maat gebouwd',
      'Waterdichte, geïsoleerde afwerking',
      'Meestal binnen één dag geplaatst',
    ],
  },
]

export const pillars = [
  { eyebrow: 'Ervaring', value: 10, suffix: '+', label: 'Jaar', text: 'Jaren vakmanschap in verbouwing, renovatie en onderhoud.' },
  { eyebrow: 'Werkgebied', value: 35, suffix: 'km', label: 'Rondom Aalsmeer', text: 'Aalsmeer, Amstelveen, Uithoorn, Amsterdam, Hoofddorp, Haarlem, Mijdrecht en omstreken.' },
  { eyebrow: 'Aanpak', value: 1, suffix: ':1', label: 'Persoonlijk', text: 'Persoonlijk contact — u kent uw vakman van begin tot eind.' },
]

export const protocol = [
  {
    step: '01',
    eyebrow: 'Kennismaking',
    title: 'Vrijblijvend gesprek & offerte',
    text: 'We komen langs, bekijken de situatie en luisteren naar uw wensen. U ontvangt een heldere, vrijblijvende offerte zonder verrassingen.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
    alt: 'Kennismakingsgesprek en offerte bij JvB Bouw',
  },
  {
    step: '02',
    eyebrow: 'Uitvoering',
    title: 'Vakkundig aan het werk',
    text: 'Onze eigen vakmensen gaan aan de slag met kwaliteitsmaterialen. U blijft op de hoogte en houdt één vast aanspreekpunt.',
    image: 'https://images.unsplash.com/photo-1673865641469-34498379d8af?q=80&w=1600&auto=format&fit=crop',
    alt: 'Vakman van JvB Bouw aan het werk tijdens een verbouwing',
  },
  {
    step: '03',
    eyebrow: 'Oplevering',
    title: 'Netjes opgeleverd',
    text: 'We leveren op zoals afgesproken — strak afgewerkt en opgeruimd. Tevredenheid staat voorop, ook na de oplevering.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Netjes opgeleverd woonhuis na verbouwing door JvB Bouw',
  },
]

export const trust = [
  { icon: 'ShieldCheck', title: 'Betrouwbaar & verzekerd', text: 'Ingeschreven bij de KvK (80556353) en werkend volgens duidelijke afspraken.' },
  { icon: 'MessageSquare', title: 'Eerlijke communicatie', text: 'Transparant over planning, materialen en kosten — geen verrassingen achteraf.' },
  { icon: 'Award', title: 'Vakmanschap', text: 'Klanttevredenheid, vakmanschap en betrouwbaarheid staan centraal in elk project.' },
]

export const projects = [
  {
    slug: 'badkamerrenovatie-uithoorn',
    tag: 'Uithoorn · Renovatie',
    title: 'Complete badkamerrenovatie',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop',
    alt: 'Complete badkamerrenovatie in Uithoorn door JvB Bouw',
    intro:
      'Voor deze woning in Uithoorn verzorgden wij een complete badkamerrenovatie van A tot Z. Van het uitbreken van de oude ruimte tot het tegelwerk, sanitair en de installatie — alles in één hand, strak en waterdicht afgewerkt.',
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'dakkapel-mijdrecht',
    tag: 'Mijdrecht · Verbouwing',
    title: 'Dakkapel plaatsen',
    image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dakkapel geplaatst in Mijdrecht door JvB Bouw',
    intro:
      'In Mijdrecht plaatsten wij een dakkapel die de zolder in één keer voorzag van meer licht, ruimte en hoofdhoogte. Vakkundig geplaatst, netjes geïsoleerd en waterdicht afgewerkt — met minimale overlast voor de bewoners.',
    gallery: [
      'https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593012671976-1422185230fb?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
    ],
  },
]

export const contact = {
  eyebrow: 'Contact',
  title: 'Plan uw project',
  text: 'Vertel ons over uw verbouwing, renovatie of onderhoud in Aalsmeer en omstreken. U ontvangt een vrijblijvende offerte, meestal binnen enkele dagen.',
}

// Contactformulier — verstuurt via Formspree naar info@jvbbouw.nl.
// Zolang formspreeId leeg is, valt het formulier terug op een mailto
// zodat aanvragen tóch aankomen. Vul de ID in zodra de gratis Formspree-form
// is aangemaakt met info@jvbbouw.nl als ontvanger (bijv. 'xldbzabc').
export const contactForm = {
  formspreeId: 'mqerkpkz',
  recipient: 'info@jvbbouw.nl',
}

// FAQ — beantwoordt echte zoekvragen en levert FAQ-structured-data (SEO)
export const faq = [
  {
    q: 'In welke regio werkt JvB Bouw?',
    a: 'JvB Bouw is gevestigd in Aalsmeer en werkt in een straal van circa 35 km, waaronder Kudelstaart, Rijsenhout, Uithoorn, De Kwakel, Amstelveen, Ouderkerk aan de Amstel, Amsterdam, Hoofddorp, Nieuw-Vennep, Badhoevedorp, Haarlem, Heemstede, Mijdrecht, Wilnis, Vinkeveen, Abcoude en Leimuiden.',
  },
  {
    q: 'Kan ik een vrijblijvende offerte aanvragen?',
    a: 'Ja. We komen langs, bekijken de situatie en luisteren naar uw wensen. Daarna ontvangt u een heldere, vrijblijvende offerte zonder verborgen kosten.',
  },
  {
    q: 'Doet JvB Bouw zowel woningen als bedrijfspanden?',
    a: 'Zeker. We verzorgen verbouwing, renovatie en onderhoud voor zowel particuliere woningen als bedrijfspanden.',
  },
  {
    q: 'Wat kost een verbouwing, badkamer of dakkapel?',
    a: 'Elk project is maatwerk, dus een vaste prijs bestaat niet. Na een vrijblijvend bezoek ontvangt u een heldere offerte met een duidelijke prijsopbouw — zonder verrassingen achteraf.',
  },
  {
    q: 'Hoe snel kunnen jullie starten?',
    a: 'Dat hangt af van de omvang van het project en onze planning. Neem gerust contact op voor de actuele mogelijkheden; we denken graag met u mee over een realistische startdatum.',
  },
  {
    q: 'Werken jullie met duidelijke afspraken?',
    a: 'Ja. JvB Bouw is ingeschreven bij de KvK (80556353) en werkt volgens heldere afspraken over planning, materialen en prijs. We leveren netjes op en staan voor de kwaliteit van ons werk.',
  },
]

// Persoonlijke introductie — wie de klant te maken krijgt
export const person = {
  eyebrow: 'De vakman achter JvB Bouw',
  name: 'Jordy van Beek',
  role: 'Eigenaar & uw vaste aanspreekpunt',
  text: 'Ik ben Jordy van Beek — de J, v en B zeggen genoeg. Bij JvB Bouw heeft u geen anoniem bedrijf aan de lijn, maar mij: één vakman die uw project van begin tot eind persoonlijk aanpakt en begeleidt. Ik werk grotendeels zelf, met korte lijnen, eerlijk advies en werk waar ik met mijn eigen naam voor sta.',
  image: '', // leeg = merkpaneel i.p.v. foto; upload later een echte foto van Jordy
  alt: 'Jordy van Beek, eigenaar van JvB Bouw',
}

// Google-reviews koppeling.
// Vul featurableWidgetId in zodra de gratis Featurable-widget is aangemaakt en
// gekoppeld aan het Google Bedrijfsprofiel van JvB Bouw. Dan verschijnen echte
// Google-reviews automatisch (auto-sync). Leeg = toon de reviews hieronder.
export const reviewsConfig = {
  featurableWidgetId: '',
  googleUrl: 'https://www.google.com/maps?cid=6713679187939780122',
}

// Reviews — worden gebruikt zolang er nog geen Google-koppeling is.
export const reviews = [
  { name: 'Mark', place: 'Aalsmeer', rating: 5, text: 'Vakkundig werk en heldere communicatie. De verbouwing is strak opgeleverd en precies volgens afspraak.' },
  { name: 'Linda', place: 'Uithoorn', rating: 5, text: 'Onze badkamer is prachtig geworden. Netjes gewerkt en altijd één aanspreekpunt — echt een aanrader.' },
  { name: 'Peter', place: 'Amstelveen', rating: 5, text: 'Snel, betrouwbaar en meedenkend. De planning klopte en de afwerking is top.' },
  { name: 'Sandra', place: 'Mijdrecht', rating: 5, text: 'Dakkapel binnen een dag geplaatst en keurig afgewerkt. Zeer tevreden over het resultaat!' },
  { name: 'Rob', place: 'Hoofddorp', rating: 5, text: 'Prettig contact van offerte tot oplevering. Alles nagekomen zonder verrassingen.' },
]
