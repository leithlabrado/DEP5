import { SiteContent } from './types';

export const INITIAL_CONTENT: SiteContent = {
  general: {
    phone: "915.588.4252",
    email: "leith@donateelpaso.com",
    address: "813 First Ave, El Paso, TX 79901",
    missionShort: "We work closely with schools to provide essential clothing and financial assistance to families in need. Last year alone, we contributed more than $20,000 to schools across El Paso.",
    missionLong: "Our goal is to supply as much clothing as possible to support students at our local schools, Opportunity Center for the Homeless and the broader community. We also provide clothing and blankets to churches that actively serve individuals and families in need. In the United States, approximately 11.3 million tons of clothing are discarded into landfills each year—equivalent to about 81.5 pounds per person. Much of this material could be repurposed to benefit those facing hardship. At Donate El Paso, we are committed to helping redirect these items from closets to the people who need them most.",
    history: "We have been part of the used clothing industry for more than 12 years. What began with a single donation bin that we built ourselves has grown into a robust community program. Today, we proudly maintain over 30 donation bins throughout El Paso. Our growth has allowed us to support other charities by providing clothing, financial assistance, food, and essential supplies.",
  },
  seo: {
    title: "Donate El Paso | Clothing Donations & Community Support",
    description: "Partner in Education with YISD, EPISD, SISD, and CISD. Donate clothing to support local students and families in need in El Paso, TX.",
    keywords: "Donate Clothes El Paso, Donation Bins, Charity, Schools, YISD, EPISD",
  },
  binLocations: [
    { id: '1', name: "Montwood High School", active: true },
    { id: '2', name: "Montwood Middle School", active: true },
    { id: '3', name: "Christian Schools of El Paso", active: true },
    { id: '4', name: "El Paso High School", active: true },
    { id: '5', name: "Moye Elementary", active: true },
    { id: '6', name: "Colin L Powell Elementary", active: true },
    { id: '7', name: "Bliss Elementary", active: true },
    { id: '8', name: "Andres High School", active: true },
    { id: '9', name: "Hanks High School", active: true },
    { id: '10', name: "Pebble Hills HS", active: true },
    { id: '11', name: "El Dorado HS", active: true },
    { id: '12', name: "Eastwood HS", active: true },
    { id: '13', name: "Franklin HS", active: true },
    { id: '14', name: "Bel Air HS", active: true },
    { id: '15', name: "Burgess HS", active: true },
    { id: '16', name: "Rafael Hernando", active: true },
    { id: '17', name: "Sun Ridge Middle", active: true },
    { id: '18', name: "Jane Hambric Elementary", active: true },
    { id: '19', name: "Hershal Antwine", active: true },
    { id: '20', name: "Walter E Clarke Middle", active: true },
    { id: '21', name: "Wonder World Daycare", active: true },
    { id: '22', name: "Western Hills Elementary", active: true },
    { id: '23', name: "First to Read Day Care", active: true },
    { id: '24', name: "Myrtle Cooper", active: true },
    { id: '25', name: "Eastlake Middle School", active: true },
    { id: '26', name: "Genie's Daycare", active: true },
    { id: '27', name: "Eastlake HS", active: true },
    { id: '28', name: "Ensor Elementary", active: true },
    { id: '29', name: "Triumph High School East", active: true },
    { id: '30', name: "Triumph High School West", active: true },
    { id: '31', name: "Loma Verde Elementary", active: true },
  ],
  events: [
    {
      id: 'e1',
      title: "Sponsor a Child or Family",
      date: "Ongoing",
      description: "We had the honor with the Principal of Parkland High School, Mr. Salgado, to help sponsor two outstanding students who have overcome many obstacles to reach their goals. Every person who donates helps us form partnerships that give students opportunity.",
      image: "https://picsum.photos/seed/student/800/600"
    },
    {
      id: 'e2',
      title: "Community Clothing Drive",
      date: "Fall 2024",
      description: "Join us for our annual city-wide clothing drive. Clean out your closets and help families in need across El Paso.",
      image: "https://picsum.photos/seed/drive/800/600"
    }
  ],
  partners: [
    { id: 'p1', name: "YISD", logo: "https://picsum.photos/seed/yisd/200/100" },
    { id: 'p2', name: "EPISD", logo: "https://picsum.photos/seed/episd/200/100" },
    { id: 'p3', name: "CISD", logo: "https://picsum.photos/seed/cisd/200/100" },
    { id: 'p4', name: "Opportunity Center", logo: "https://picsum.photos/seed/oc/200/100" },
    { id: 'p5', name: "Supreme Cleaners", logo: "https://picsum.photos/seed/cleaners/200/100" },
  ]
};