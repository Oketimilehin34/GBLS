export interface Speaker {
  id: string;
  name: string;
  title: string;
  organisation: string;
  country: string;
  category: 'Keynote' | 'Institutional Investor' | 'Policy & Economics' | 'Technology & AI';
  image: string;
  bio: string;
  sessionTitle: string;
  featured: boolean;
}

export const speakersData: Speaker[] = [
  {
    id: "spk-1",
    name: "Dame Elena Vance-Moreau",
    title: "Managing Director & Global Head of Capital Markets",
    organisation: "Euro-Atlantic Investment Bank",
    country: "United Kingdom / France",
    category: "Keynote",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Dame Elena brings over 25 years of macroeconomic leadership, having advised G7 finance ministries and led sovereign wealth restructuring initiatives across Europe and North America.",
    sessionTitle: "Opening Plenary: Macroeconomic Resilience in a Fragmenting Global Order",
    featured: true
  },
  {
    id: "spk-2",
    name: "Dr. Kenji Takahashi",
    title: "Chief Innovation Officer & Chair of Global AI Governance",
    organisation: "Nippon Frontier Systems Institute",
    country: "Japan",
    category: "Technology & AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "A pioneer in trustworthy enterprise artificial intelligence, Dr. Takahashi co-chairs the multilateral standards committee on ethical frontier computing for sovereign institutions.",
    sessionTitle: "Frontier Intelligence: Industrial AI and the Next Productivity Curve",
    featured: true
  },
  {
    id: "spk-3",
    name: "H.E. Amina Al-Mansoor",
    title: "Minister of State for International Trade & Investment",
    organisation: "Ministry of Economy & Sovereign Development",
    country: "United Arab Emirates",
    category: "Policy & Economics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Her Excellency has championed $80B+ in bilateral clean energy transition corridors and multi-jurisdictional trade modernization agreements connecting the Gulf, Africa, and Asia.",
    sessionTitle: "Strategic Trade Corridors: Redefining South-South and Global North Capital Flows",
    featured: true
  },
  {
    id: "spk-4",
    name: "Marcus Sterling",
    title: "Managing Partner & Chief Investment Officer",
    organisation: "Sterling Cross-Border Private Equity Partners",
    country: "United States",
    category: "Institutional Investor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Managing over $42B in private market equity, Marcus is an authority on cross-border buyouts, green infrastructure financing, and emerging market venture scale.",
    sessionTitle: "Global Private Markets: Allocating Sovereign and Institutional Capital for 2030",
    featured: true
  },
  {
    id: "spk-5",
    name: "Dr. Sophia Lindqvist",
    title: "Director General for Sustainable Economic Transitions",
    organisation: "Nordic Green Development Bank",
    country: "Sweden",
    category: "Policy & Economics",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    bio: "Recognized as a leading global architect of green taxonomy and carbon border economics, Dr. Lindqvist works across EU and multilateral institutions to scale ESG-aligned sovereign bonds.",
    sessionTitle: "Decarbonisation at Scale: The Economics of Net-Zero Industrial Transformation",
    featured: true
  },
  {
    id: "spk-6",
    name: "David O'Connor",
    title: "Global Chief Technology Officer",
    organisation: "Synapse Enterprise Global",
    country: "Ireland",
    category: "Technology & AI",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "David spearheads enterprise digital architecture and cyber-resilience frameworks for global financial institutions processing trillions in cross-border settlements daily.",
    sessionTitle: "Cyber-Sovereignty and Quantum-Proof Infrastructure for Multinational Corporations",
    featured: true
  },
  {
    id: "spk-7",
    name: "Dr. Carlos Mendez-Silva",
    title: "President & Chief Executive",
    organisation: "Pan-American Infrastructure Consortium",
    country: "Brazil",
    category: "Institutional Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Carlos oversees regional logistics megaprojects, port modernizations, and multinational energy grids uniting public-private consortiums across Latin America.",
    sessionTitle: "Infrastructure Megaprojects: Financing Multimodal Connectivity Across Developing Markets",
    featured: false
  },
  {
    id: "spk-8",
    name: "Dr. Li Wei",
    title: "Executive Vice Chair of Sustainable Finance",
    organisation: "Asian Development & Capital Alliance",
    country: "Singapore",
    category: "Keynote",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Li has advised premier central banks on currency digitalization, cross-border tokenized liquidity, and bilateral currency settlement hubs throughout ASEAN and the Asia-Pacific.",
    sessionTitle: "Closing Keynote: Next-Generation Central Banking and the Architecture of Global Liquidity",
    featured: false
  }
];

