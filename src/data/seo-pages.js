/**
 * Single source of truth for page-level SEO (titles, descriptions, internal links).
 * Titles front-load primary queries; descriptions stay within ~155 characters.
 */
export const PAGE_SEO = {
  home: {
    title: 'POPIA-Conscious Client Portal for Accountants | Zar Media Group',
    description:
      'POPIA-conscious client portal on your domain + managed firm website for SA accountants. Encrypted uploads, audit trail, less admin. Free compliance audit.',
    keywords:
      'POPIA client portal accountants, compliant client portal South Africa, accounting client portal, POPIA website accountants, CRM integration accountants, client portals for accounting',
    canonical: '/',
    relatedGuides: [
      'best-client-portal-small-accounting-firms',
      'accounting-firm-website-design-guide',
      'how-to-reduce-admin-accounting-firm',
    ],
  },
  'services-index': {
    title: 'Services for Accountants & Financial Firms | Zar Media Group',
    description:
      'Client portals, Website as a Service, CRM & workflow integration, and compliance-first websites for accounting, tax, and bookkeeping firms in South Africa.',
    keywords:
      'services for accountants South Africa, client portal accounting firm, accounting firm website, CRM accountants, compliant website financial services',
    canonical: '/services',
    relatedGuides: [
      'accounting-firm-website-design-guide',
      'best-client-portal-small-accounting-firms',
      'seo-for-accounting-firms-south-africa',
    ],
  },
  'what-we-do': {
    title: 'How We Build Client Portals for Accounting Firms | ZMG',
    description:
      'Our process for accounting firms: discovery, compliance review, portal-led build, CRM integration, and ongoing optimisation—reduce admin and grow enquiries in SA.',
    keywords:
      'how to reduce admin accounting firms, digital workflow accountants, accounting firm digital transformation South Africa',
    canonical: '/what-we-do',
    relatedGuides: ['how-to-reduce-admin-accounting-firm', 'accounting-firm-website-design-guide'],
  },
  team: {
    title: 'Team — Accounting & Financial Web Specialists | ZMG',
    description:
      'Meet the Zar Media Group team: strategists and developers focused on client portals, firm websites, and compliance for accountants across South Africa.',
    keywords: 'Zar Media Group team, financial digital agency Cape Town, accounting website specialists',
    canonical: '/about/team',
    relatedGuides: [],
  },
  'client-portal': {
    title: 'Client Portal & CRM for Accountants | South Africa',
    description:
      'Branded client portal on your domain—document vault, compliance calendar, CRM-connected intake, and firm admin console. Product tour with demo screenshots for SA firms.',
    keywords:
      'client portal for accountants, accounting client portal South Africa, client document portal, client facing CRM, accounting portal, POPIA client portal, tax document portal accountants',
    canonical: '/services/client-portal',
    relatedGuides: [
      'best-client-portal-small-accounting-firms',
      'how-to-reduce-admin-accounting-firm',
      'popia-compliance-accounting-websites',
    ],
  },
  'website-as-a-service': {
    title: 'Accounting Firm Website Design & Management | ZMG',
    description:
      'Website as a Service for accountants: managed firm sites with SEO, POPIA-aware forms, and portal alignment—hosted, updated & optimised monthly in South Africa.',
    keywords:
      'accounting firm website design, website for accountants South Africa, Website as a Service accountants, managed accounting website',
    canonical: '/services/website-as-a-service',
    relatedGuides: [
      'accounting-firm-website-design-guide',
      'seo-for-accounting-firms-south-africa',
      'abc-inc-chartered-accountants-website-case-study',
    ],
  },
  'workflow-integration': {
    title: 'CRM Integration for Accountants | Xero & HubSpot | ZMG',
    description:
      'Connect your accounting website to Xero, QuickBooks, HubSpot & Calendly—automate client onboarding and cut manual data entry for SA accounting & bookkeeping firms.',
    keywords:
      'CRM integration for accountants, workflow automation bookkeepers, Xero HubSpot integration, client portal for accountants',
    canonical: '/services/workflow-integration',
    relatedGuides: ['how-to-reduce-admin-accounting-firm', 'best-client-portal-small-accounting-firms'],
  },
  'compliance-trust': {
    title: 'POPIA Compliant Website for Accountants | Zar Media Group',
    description:
      'Compliant websites for financial firms: POPIA, FSCA, FAIS & South African web accessibility architecture for accountants, tax practitioners & advisors in South Africa.',
    keywords:
      'POPIA compliant accounting website, compliant website financial services, accounting website compliance South Africa, FSCA website requirements',
    canonical: '/services/compliance-trust',
    relatedGuides: ['popia-compliance-accounting-websites', 'fsca-website-requirements'],
  },
  resources: {
    title: 'Guides for Accountants: Portals, Websites & SEO | ZMG',
    description:
      'Free guides and case studies for SA accounting firms—client portals, firm website design, admin reduction, POPIA compliance, and SEO for accountants.',
    keywords:
      'resources for accountants, accounting firm digital strategy, client portal guide, accounting firm SEO South Africa',
    canonical: '/resources',
    relatedGuides: [],
  },
  contact: {
    title: 'Free Website Audit for Accounting Firms | Contact ZMG',
    description:
      'Book a free website audit or strategy call for your accounting or bookkeeping firm. Zar Media Group serves practices across South Africa.',
    keywords:
      'free website audit accountants, contact Zar Media Group, accounting firm website consultation Cape Town',
    canonical: '/contact',
    relatedGuides: ['accounting-firm-website-design-guide'],
  },
}

/** All commercial service pages for hub / ItemList schema */
export const SERVICE_OFFERINGS = [
  {
    id: 'client-portal',
    name: 'Client Portal & CRM for Accountants',
    path: '/services/client-portal',
    summary:
      'Branded portal on your domain—document vault, compliance calendar, CRM-connected intake, and firm admin console. Product tour with demo screenshots.',
  },
  {
    id: 'website-as-a-service',
    name: 'Website as a Service for Accountants',
    path: '/services/website-as-a-service',
    summary:
      'Managed accounting firm websites—design, hosting, SEO, compliance, and CRO on a monthly subscription, aligned with your client portal.',
  },
  {
    id: 'workflow-integration',
    name: 'CRM & Workflow Integration',
    path: '/services/workflow-integration',
    summary:
      'Connect your firm website to Xero, QuickBooks, HubSpot, and Calendly to automate onboarding and reduce admin for accounting teams.',
  },
  {
    id: 'compliance-trust',
    name: 'Compliance & Trust for Financial Websites',
    path: '/services/compliance-trust',
    summary:
      'POPIA, FSCA, FAIS, and South African web accessibility standards for compliant digital presence in regulated financial and accounting practices.',
  },
]

export function getPageSeo(pageId) {
  return PAGE_SEO[pageId] ?? null
}
