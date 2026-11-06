export interface ConferenceConfig {
  name: string;
  shortName: string;
  edition: string;
  theme: string;
  headline: string;
  supportingText: string;
  startDate: string; // ISO date for countdown
  endDate: string;
  displayDates: string;
  venueName: string;
  venueAddress: string;
  city: string;
  country: string;
  organizer: {
    name: string;
    description: string;
    foundedYear: string;
    headquarters: string;
    email: string;
    telephone: string;
    mediaEmail: string;
    sponsorshipEmail: string;
    address: string;
  };
  statistics: {
    delegates: { count: number; suffix: string; label: string; description: string };
    countries: { count: number; suffix: string; label: string; description: string };
    speakers: { count: number; suffix: string; label: string; description: string };
    sessions: { count: number; suffix: string; label: string; description: string };
    bilateralMeetings: { count: number; suffix: string; label: string; description: string };
    capitalRepresented: { count: number; prefix: string; suffix: string; label: string; description: string };
  };
  socialLinks: {
    linkedin: string;
    twitter: string;
    youtube: string;
    facebook: string;
  };
}

export const conferenceData: ConferenceConfig = {
  name: "Global Business Leadership Summit",
  shortName: "GBLS 2027",
  edition: "14th Annual Global Leadership Summit",
  theme: "GLOBAL BUSINESS LEADERSHIP SUMMIT",
  headline: "Connecting Global Leaders. Shaping the Future of Business.",
  supportingText:
    "An exclusive international gathering of business leaders, investors, innovators, policymakers, and entrepreneurs driving the next generation of global economic growth.",
  
  // Dynamic countdown target (Editable placeholder: set to a future date)
  startDate: "2027-10-18T09:00:00Z",
  endDate: "2027-10-20T18:00:00Z",
  displayDates: "October 18 – 20, 2027",
  
  venueName: "Grand Imperial Congress & Exhibition Palace",
  venueAddress: "14 Quai du Général-Guisan, Lakefront District",
  city: "Geneva",
  country: "Switzerland",
  
  organizer: {
    name: "International Institute for Business & Economic Affairs (IIBEA)",
    description:
      "A premier non-partisan international organisation fostering executive leadership, cross-border commercial partnerships, and sustainable economic policy frameworks across world markets.",
    foundedYear: "2008",
    headquarters: "Geneva, Switzerland",
    email: "summit-inquiries@iibea-summit.org",
    telephone: "+41 22 819 9400",
    mediaEmail: "press-accreditation@iibea-summit.org",
    sponsorshipEmail: "partnerships@iibea-summit.org",
    address: "World Trade Square, Rue de Varembé 9, 1211 Geneva 20, Switzerland",
  },
  
  statistics: {
    delegates: {
      count: 2400,
      suffix: "+",
      label: "Executive Delegates",
      description: "C-suite executives, institutional investors, and government representatives."
    },
    countries: {
      count: 85,
      suffix: "+",
      label: "Countries Represented",
      description: "Diverse global viewpoints across OECD, ASEAN, EMEA, and the Americas."
    },
    speakers: {
      count: 120,
      suffix: "+",
      label: "Keynote & Expert Speakers",
      description: "Cabinet ministers, Fortune 500 CEOs, central bankers, and founders."
    },
    sessions: {
      count: 48,
      suffix: "",
      label: "High-Level Sessions",
      description: "Strategic plenaries, private roundtables, and sector-specific forums."
    },
    bilateralMeetings: {
      count: 650,
      suffix: "+",
      label: "Scheduled B2B Meetings",
      description: "Facilitated bilateral investment and cross-border partnership dialogues."
    },
    capitalRepresented: {
      count: 450,
      prefix: "$",
      suffix: "B+",
      label: "AUM Represented",
      description: "Institutional assets and investment funds managed by attending firms."
    }
  },
  
  socialLinks: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com"
  }
};

