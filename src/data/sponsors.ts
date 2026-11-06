export interface SponsorTier {
  tierName: string;
  description: string;
  sponsors: {
    name: string;
    category: string;
    placeholderNote: string;
    iconType: 'bank' | 'globe' | 'shield' | 'network' | 'energy' | 'chip' | 'media' | 'council';
  }[];
}

export const sponsorTiers: SponsorTier[] = [
  {
    tierName: "Strategic Partners",
    description: "Multilateral organisations and global financial institutions co-convening the 2027 summit.",
    sponsors: [
      {
        name: "Global Horizon Capital",
        category: "Multilateral Financial Group",
        placeholderNote: "Corporate Partner Placeholder",
        iconType: "bank"
      },
      {
        name: "Trans-Eurasia Economic Council",
        category: "Bilateral Trade Alliance",
        placeholderNote: "Strategic Partner Placeholder",
        iconType: "globe"
      },
      {
        name: "Aegis Sovereign Trust",
        category: "Institutional Asset Management",
        placeholderNote: "Institutional Partner Placeholder",
        iconType: "shield"
      }
    ]
  },
  {
    tierName: "Platinum Sponsors",
    description: "Leading multinational enterprises advancing industrial innovation, energy transition, and infrastructure.",
    sponsors: [
      {
        name: "Vanguard Frontier Systems",
        category: "Enterprise Cloud & AI Solutions",
        placeholderNote: "Platinum Sponsor Placeholder",
        iconType: "chip"
      },
      {
        name: "Nexus Clean Infrastructure",
        category: "Renewable Energy & Grids",
        placeholderNote: "Platinum Sponsor Placeholder",
        iconType: "energy"
      },
      {
        name: "Helios Transcontinental Logistics",
        category: "Multimodal Freight & Port Terminals",
        placeholderNote: "Platinum Sponsor Placeholder",
        iconType: "network"
      },
      {
        name: "Meridian Capital Bancorp",
        category: "Cross-Border Corporate Banking",
        placeholderNote: "Platinum Sponsor Placeholder",
        iconType: "bank"
      }
    ]
  },
  {
    tierName: "Gold Sponsors",
    description: "Distinguished sector innovators facilitating technological and economic capability.",
    sponsors: [
      {
        name: "Astra Sovereign Analytics",
        category: "Predictive Macro Forecasting",
        placeholderNote: "Gold Sponsor Placeholder",
        iconType: "network"
      },
      {
        name: "Kestrel Digital Securities",
        category: "Tokenized Assets & Settlements",
        placeholderNote: "Gold Sponsor Placeholder",
        iconType: "shield"
      },
      {
        name: "Nordic Green Minerals",
        category: "Sustainable Resource Supply",
        placeholderNote: "Gold Sponsor Placeholder",
        iconType: "energy"
      },
      {
        name: "Syntropy Biotech Global",
        category: "Life Sciences & Resilient Health",
        placeholderNote: "Gold Sponsor Placeholder",
        iconType: "chip"
      }
    ]
  },
  {
    tierName: "Global Media & Knowledge Partners",
    description: "International financial press and global economic research institutions providing worldwide coverage.",
    sponsors: [
      {
        name: "International Financial Chronicle",
        category: "Global Business Journal",
        placeholderNote: "Media Partner Placeholder",
        iconType: "media"
      },
      {
        name: "World Trade & Markets Review",
        category: "Economic Affairs Broadcast",
        placeholderNote: "Media Partner Placeholder",
        iconType: "media"
      },
      {
        name: "Global Executive Policy Wire",
        category: "Diplomatic & C-Suite News",
        placeholderNote: "Media Partner Placeholder",
        iconType: "media"
      }
    ]
  },
  {
    tierName: "Supporting Organisations",
    description: "Non-profit trade bodies, bilateral chambers of commerce, and multilateral think tanks.",
    sponsors: [
      {
        name: "International Chamber of Global Trade",
        category: "Non-Governmental Commerce Council",
        placeholderNote: "Supporting Body Placeholder",
        iconType: "council"
      },
      {
        name: "Federation of European Enterprise",
        category: "Regional Industry Association",
        placeholderNote: "Supporting Body Placeholder",
        iconType: "council"
      },
      {
        name: "Asia-Pacific Commerce Confederation",
        category: "Trade Development Body",
        placeholderNote: "Supporting Body Placeholder",
        iconType: "council"
      },
      {
        name: "Global Sustainable Standards Board",
        category: "Multilateral Governance Forum",
        placeholderNote: "Supporting Body Placeholder",
        iconType: "council"
      }
    ]
  }
];

