export interface FAQItem {
  id: string;
  category: 'Registration & Access' | 'Programme & Logistics' | 'Sponsorship & Media' | 'Travel & Accommodation';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "Registration & Access",
    question: "Who can attend the Global Business Leadership Summit?",
    answer: "The Summit is designed specifically for senior executive leadership, C-suite executives, institutional investors, board chairs, managing directors, senior government ministers, central bankers, and leading academic economists. Attendance is subject to delegate credential review to maintain high-level dialogue and peer-to-peer engagement."
  },
  {
    id: "faq-2",
    category: "Registration & Access",
    question: "How do I register, and what is the vetting process?",
    answer: "You can submit your application via the official online registration portal on this website. Upon submitting your credentials and professional profile, the Summit Delegate Committee reviews applications within 24 to 48 business hours. Approved delegates receive a secure portal link to finalize their pass and book private bilateral session slots."
  },
  {
    id: "faq-3",
    category: "Registration & Access",
    question: "Are there different ticket categories and corporate delegation packages?",
    answer: "Yes. We offer four distinct tiers: Standard Delegate (full plenary & exhibition access), Business Executive (includes VIP networking sessions & executive luncheons), VIP Delegate (inclusive of private bilateral rooms, diplomatic gala dinner, and priority seating), and Corporate Group Pass (designed for delegations of 5 or more senior leaders with dedicated meeting room allocations)."
  },
  {
    id: "faq-4",
    category: "Travel & Accommodation",
    question: "Will accommodation and visa support be provided?",
    answer: "The Summit Secretariat has reserved exclusive room blocks at preferred rates with leading luxury hotels adjacent to the Grand Imperial Congress Centre in Geneva. Once your registration is confirmed, you will receive an official diplomatic letter of invitation to support your Schengen visa application, as well as a direct booking link for partner accommodations."
  },
  {
    id: "faq-5",
    category: "Sponsorship & Media",
    question: "Can our organisation become a strategic sponsor or corporate partner?",
    answer: "A strictly limited number of strategic partnerships, platinum category sponsorships, and bilateral lounge host partnerships are curated annually. Interested organisations can contact our corporate partnership desk at partnerships@iibea-summit.org to request the confidential 2027 Partnership Prospectus."
  },
  {
    id: "faq-6",
    category: "Programme & Logistics",
    question: "Will attendees receive official accreditation certificates and executive briefs?",
    answer: "Yes. All accredited delegates receive a verifiable digital credential issued by the International Institute for Business & Economic Affairs (IIBEA), alongside exclusive access to post-summit executive briefing documents, policy resolution drafts, and keynote presentation transcripts."
  },
  {
    id: "faq-7",
    category: "Programme & Logistics",
    question: "How can I contact the organisers for special bilateral meeting requests?",
    answer: "Our Delegate Concierge Team is available 24/7 to facilitate bilateral state and corporate meetings. You may reach out directly via email at summit-inquiries@iibea-summit.org or through the secure Summit mobile application released to confirmed delegates 30 days prior to the opening ceremony."
  }
];

