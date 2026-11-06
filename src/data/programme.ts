export interface Session {
  id: string;
  time: string;
  title: string;
  type: 'Keynote' | 'Plenary' | 'Panel' | 'Roundtable' | 'Networking' | 'Ceremony';
  hall: string;
  speakers: string[];
  description: string;
  tags: string[];
}

export interface DaySchedule {
  dayNumber: number;
  dayTitle: string;
  date: string;
  theme: string;
  sessions: Session[];
}

export const programmeData: DaySchedule[] = [
  {
    dayNumber: 1,
    dayTitle: "Day 1",
    date: "Monday, October 18, 2027",
    theme: "Global Economic Governance & Frontier Resilience",
    sessions: [
      {
        id: "d1-s1",
        time: "08:00 – 09:30",
        title: "Executive Accreditation & Welcome Networking Breakfast",
        type: "Networking",
        hall: "Lakeside Atrium & VIP Delegate Lounge",
        speakers: ["Summit Secretariat & Diplomatic Protocol"],
        description: "Registration check-in, distribution of encrypted digital summit credentials, private networking breakfast for early arrivals and VIP heads of delegation.",
        tags: ["Registration", "VIP Networking"]
      },
      {
        id: "d1-s2",
        time: "09:30 – 10:15",
        title: "Official Opening Ceremony & Ministerial Address",
        type: "Ceremony",
        hall: "Grand Plenary Hall (Auditorium Magna)",
        speakers: ["Dame Elena Vance-Moreau", "H.E. Amina Al-Mansoor", "Host Nation Dignitaries"],
        description: "Official inaugural address convening international delegations, overview of summit resolutions, and setting the multilateral agenda for 2027–2030.",
        tags: ["Ceremony", "Inauguration"]
      },
      {
        id: "d1-s3",
        time: "10:30 – 11:45",
        title: "Opening Keynote: Macroeconomic Resilience in a Fragmenting Global Order",
        type: "Keynote",
        hall: "Grand Plenary Hall",
        speakers: ["Dame Elena Vance-Moreau"],
        description: "A comprehensive diagnostic of international trade corridors, central banking policies, and navigating systemic currency volatility amidst geoeconomic shifts.",
        tags: ["Macroeconomics", "Keynote"]
      },
      {
        id: "d1-s4",
        time: "12:00 – 13:30",
        title: "Global Investment Panel: Allocating Sovereign and Institutional Capital",
        type: "Panel",
        hall: "Palais Executive Amphitheatre",
        speakers: ["Marcus Sterling", "Dr. Sophia Lindqvist", "Dr. Carlos Mendez-Silva"],
        description: "Sovereign wealth funds and top institutional managers unpack risk premia, private equity reallocation, and unlocking capital in rapid-growth emerging markets.",
        tags: ["Institutional Capital", "Private Equity"]
      },
      {
        id: "d1-s5",
        time: "13:30 – 15:00",
        title: "Delegates Luncheon & Facilitated B2B Bilateral Exchanges",
        type: "Networking",
        hall: "Ambassadorial Dining Salon & Exhibition Hall",
        speakers: ["Facilitated by IIBEA Trade Commissioners"],
        description: "Structured bilateral matchmaking meetings between trade delegations, sovereign wealth directors, and corporate enterprise partners.",
        tags: ["B2B Matchmaking", "Executive Lunch"]
      },
      {
        id: "d1-s6",
        time: "15:00 – 16:30",
        title: "Strategic Trade Corridors: Redefining South-South & Transatlantic Flows",
        type: "Panel",
        hall: "Grand Plenary Hall",
        speakers: ["H.E. Amina Al-Mansoor", "Dr. Carlos Mendez-Silva"],
        description: "High-level ministerial dialogue exploring customs interoperability, critical raw material supply chains, and green bilateral commercial treaties.",
        tags: ["Global Trade", "Supply Chains"]
      },
      {
        id: "d1-s7",
        time: "17:00 – 19:30",
        title: "Diplomatic Gala Reception & Leadership Awards Preview",
        type: "Networking",
        hall: "The Grand Rotunda & Waterfront Terrace",
        speakers: ["Distinguished Global Guests & Summit Partners"],
        description: "An evening of high-level diplomatic networking, chamber music, and private toast hosted by the International Institute for Business & Economic Affairs.",
        tags: ["Gala", "VIP Access"]
      }
    ]
  },
  {
    dayNumber: 2,
    dayTitle: "Day 2",
    date: "Tuesday, October 19, 2027",
    theme: "Frontier Intelligence, Industrial AI & Enterprise Transformation",
    sessions: [
      {
        id: "d2-s1",
        time: "08:30 – 09:30",
        title: "C-Suite Breakfast Briefing: Cyber Governance & Corporate Sovereignty",
        type: "Roundtable",
        hall: "Boardroom Alpha (Chatham House Rule)",
        speakers: ["David O'Connor", "Special Invited Enterprise Risk Chairs"],
        description: "A closed-door, off-the-record briefing for Fortune 500 board directors on quantum cryptography readiness, sovereign cloud isolation, and board cybersecurity liabilities.",
        tags: ["Private Roundtable", "Cybersecurity"]
      },
      {
        id: "d2-s2",
        time: "09:45 – 11:00",
        title: "Innovation and Technology Forum: Industrial AI and the Next Productivity Curve",
        type: "Keynote",
        hall: "Grand Plenary Hall",
        speakers: ["Dr. Kenji Takahashi", "David O'Connor"],
        description: "Keynote presentation detailing sovereign AI model deployment, autonomous agent ecosystems in global manufacturing, and closing the enterprise productivity gap.",
        tags: ["Artificial Intelligence", "Enterprise Tech"]
      },
      {
        id: "d2-s3",
        time: "11:15 – 12:45",
        title: "Decarbonisation at Scale: The Economics of Net-Zero Industrial Transformation",
        type: "Panel",
        hall: "Palais Executive Amphitheatre",
        speakers: ["Dr. Sophia Lindqvist", "Marcus Sterling"],
        description: "Evaluating real-world capital deployment across green hydrogen, grid-scale storage, carbon border adjustment mechanisms, and transitional finance mechanisms.",
        tags: ["ESG", "Clean Energy"]
      },
      {
        id: "d2-s4",
        time: "12:45 – 14:15",
        title: "Networking Luncheon & Innovation Showcase",
        type: "Networking",
        hall: "Exhibition Pavilions 1 & 2",
        speakers: ["Pioneering Enterprise Tech Demonstrators"],
        description: "Interactive showcase featuring live demonstrations of enterprise quantum encryption, autonomous logistics, and digital asset settlements.",
        tags: ["Tech Showcase", "Networking"]
      },
      {
        id: "d2-s5",
        time: "14:15 – 15:45",
        title: "Strategic Partnership Sessions: Cross-Border M&A and Joint Venture Consortia",
        type: "Roundtable",
        hall: "Salons des Nations B & C",
        speakers: ["International Legal Counsel & Investment Bankers"],
        description: "Practical deal-structuring workshops addressing regulatory antitrust clearance, multi-jurisdictional IP licensing, and tax-efficient JV architectures.",
        tags: ["M&A", "Cross-Border Deals"]
      },
      {
        id: "d2-s6",
        time: "16:00 – 17:30",
        title: "Central Bank Digital Assets & Future of International Liquidity",
        type: "Panel",
        hall: "Grand Plenary Hall",
        speakers: ["Dr. Li Wei", "Dame Elena Vance-Moreau"],
        description: "Examines tokenized sovereign debt, multi-CBDC cross-border liquidity platforms, and reducing friction in multi-trillion settlement corridors.",
        tags: ["Fintech", "Central Banking"]
      }
    ]
  },
  {
    dayNumber: 3,
    dayTitle: "Day 3",
    date: "Wednesday, October 20, 2027",
    theme: "Sustainable Capital, Multilateral Accords & 2030 Vision",
    sessions: [
      {
        id: "d3-s1",
        time: "09:00 – 10:15",
        title: "Infrastructure Megaprojects: Financing Multimodal Connectivity Across Developing Markets",
        type: "Panel",
        hall: "Palais Executive Amphitheatre",
        speakers: ["Dr. Carlos Mendez-Silva", "H.E. Amina Al-Mansoor"],
        description: "Unlocking blended finance, multilateral guarantees, and public-private consortia for deepwater ports, high-speed rail, and digital telecommunications corridors.",
        tags: ["Infrastructure", "Emerging Markets"]
      },
      {
        id: "d3-s2",
        time: "10:30 – 11:45",
        title: "The Next Generation of Global Leadership: Talent, Ethics, and Governance",
        type: "Panel",
        hall: "Salons des Nations A",
        speakers: ["Executive Search Chairs & Multilateral Directors"],
        description: "Cultivating adaptive, ethical, and internationally fluent leadership capable of steering organisations through polycrisis environments.",
        tags: ["Leadership", "Governance"]
      },
      {
        id: "d3-s3",
        time: "12:00 – 13:15",
        title: "Closing Keynote Address: Next-Generation Central Banking and the Architecture of Global Liquidity",
        type: "Keynote",
        hall: "Grand Plenary Hall",
        speakers: ["Dr. Li Wei"],
        description: "The conclusive analytical synthesis outlining the next decade of fiscal cooperation, monetary security, and systemic stability across global markets.",
        tags: ["Keynote", "Global Architecture"]
      },
      {
        id: "d3-s4",
        time: "13:30 – 14:30",
        title: "Official Closing Plenary, Communiqué Presentation & Summit Adjournment",
        type: "Ceremony",
        hall: "Grand Plenary Hall",
        speakers: ["Summit Secretariat & Co-Chairs"],
        description: "Adoption of the Geneva Global Business Accord 2027, announcement of host city for the 15th Annual Summit, and formal adjournment.",
        tags: ["Plenary", "Closing Communiqué"]
      },
      {
        id: "d3-s5",
        time: "14:30 – 16:30",
        title: "Farewell Executive Reception & Private Bilateral Wrap-Up",
        type: "Networking",
        hall: "Lake Geneva Panoramic Salon",
        speakers: ["All Summit Delegates & Guests"],
        description: "Concluding networking reception, final bilateral contract signing ceremonies, and departure transfers for international delegations.",
        tags: ["Farewell Reception", "Networking"]
      }
    ]
  }
];

