import type { LocalBusiness, WithContext, CollectionPage } from "schema-dts"
import { SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": SITE_NAP.googleBusinessType,
  name: SITE_NAP.name,
  image: SITE_NAP.images,
  url: SITE_CONFIG.url,
  telephone: SITE_NAP.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_NAP.street,
    addressLocality: SITE_NAP.city,
    addressRegion: SITE_NAP.state,
    postalCode: SITE_NAP.zipCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.717,
    longitude: -122.205,
  },

  review: {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Garrett Harris" },
  },

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE_NAP.phone,
      contactType: "customer service",
    },
  ],
  sameAs: Object.values(SITE_NAP.profiles),
}

// Project data for schema
const projectsData = [
  {
    name: "React Zero-UI",
    url: externalLinks.zeroCore,
    date: "2024-07-01",
    description: "Zero Re-Render State Library",
    isExternal: true,
  },
  {
    name: "Bespoke Tint & PPF",
    url: SITE_SLUGS.projectLinks.bespoke,
    date: "2024-03-11",
    description: "Automotive Styling Website",
    isExternal: false,
  },
  {
    name: "Vets Choice Insurance",
    url: externalLinks.vetsChoice,
    date: "2024-05-20",
    description: "Pet Insurance Website",
    isExternal: true,
  },
  {
    name: "Zero Icon Sprite",
    url: externalLinks.zeroIconSprite,
    date: "2024-06-15",
    description: "SVG Build Tool",
    isExternal: true,
  },
  {
    name: "Automedics",
    url: SITE_SLUGS.projectLinks.automedics,
    date: "2024-02-02",
    description: "Automotive Repair Website",
    isExternal: false,
  },
  {
    name: "Iron & Oak",
    url: SITE_SLUGS.projectLinks.iao,
    date: "2024-01-15",
    description: "Private Security Website",
    isExternal: false,
  },
  {
    name: "Entitled",
    url: externalLinks.entitled,
    date: "2024-04-10",
    description: "Event Management Web App",
    isExternal: true,
  },
]

export const projectsSchema: WithContext<CollectionPage> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects — Austin Serb",
  url: `${SITE_CONFIG.url}${SITE_SLUGS.projects}`,
  about: "Projects and case studies by Austin Serb (Next.js, React, TypeScript).",
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "Descending",
    numberOfItems: projectsData.length,
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: project.isExternal ? project.url : `${SITE_CONFIG.url}${project.url}`,
      name: project.name,
      description: project.description,
      dateCreated: project.date,
    })),
  },
}
