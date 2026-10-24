/**
 * MR. HELPER - SEO MAPPING & SERVICE DIRECTORY
 * Includes all 10 official in-app services with localized data for Hyderabad, Warangal, and Hanamkonda
 */

const MR_HELPER_DATA = {
  appName: "Mr. Helper",
  fullAppName: "Mr. Helper: Local Home Services App",
  companyName: "Vashik Technologies",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper&pcampaignid=web_share",
  packageName: "com.digital_engineering_enterprises_platform.mrhelper",
  phone: "",
  email: "vashiktechnology@gmail.com",
  
  cities: [
    {
      id: "hyderabad",
      name: "Hyderabad",
      slug: "hyderabad",
      state: "Telangana",
      postalCodes: ["500001", "500032", "500072", "500081"],
      localities: ["Hitec City", "Gachibowli", "Kukatpally", "Madhapur", "Ameerpet", "Banjara Hills", "Jubilee Hills", "Secunderabad", "Kondapur", "Dilsukhnagar", "Miyapur", "Manikonda"],
      activePros: "2,400+",
      averageRating: "4.9",
      ratingCount: "18,450"
    },
    {
      id: "warangal",
      name: "Warangal",
      slug: "warangal",
      state: "Telangana",
      postalCodes: ["506001", "506002", "506007"],
      localities: ["Subedari", "Nakkalagutta", "Pochamma Maidan", "Mattewada", "Kashibugga", "Ramnagar", "Hunter Road", "Deshaipet", "Shambunipet", "Mandi Bazar"],
      activePros: "650+",
      averageRating: "4.8",
      ratingCount: "5,820"
    },
    {
      id: "hanamkonda",
      name: "Hanamkonda",
      slug: "hanamkonda",
      state: "Telangana",
      postalCodes: ["506001", "506004", "506009"],
      localities: ["Balasamudram", "Waddepally", "Kishanpura", "KU Road", "Adarsh Nagar", "Kakatiya Colony", "Subedari", "Bheemaram", "Kumarpally", "Nayeemnagar"],
      activePros: "580+",
      averageRating: "4.9",
      ratingCount: "4,910"
    },
    {
      id: "kazipet",
      name: "Kazipet",
      slug: "kazipet",
      state: "Telangana",
      postalCodes: ["506003"],
      localities: ["Railway Colony", "Diesel Colony", "Bapu Nagar", "Siddhartha Nagar", "Fathima Nagar", "Somidi"],
      activePros: "320+",
      averageRating: "4.8",
      ratingCount: "2,300"
    }
  ],

  // ALL 10 IN-APP SERVICES FROM THE OFFICIAL MR. HELPER APP SCREENSHOTS
  services: [
    {
      id: "plumber",
      name: "Plumbing Services",
      shortName: "Plumbing",
      tag: "PLUMBING SERVICE",
      slug: "plumber",
      icon: "🔧",
      image: "assets/images/services/service-plumbing.png",
      startingPrice: "₹199",
      eta: "15-20 Mins",
      description: "Expert tap leak repairs, bathroom sanitary fittings, washbasin, pipeline fixes, water tank cleaning, and overhead tank repairs.",
      subservices: ["Tap & Shower Repair", "Pipeline Leakage Fixing", "Toilet & Sanitary Fitting", "Water Tank Cleaning", "Drain Blockage Clearance", "Geyser Water Line Connection"],
      popularKeywords: ["plumber in hyd", "plumber warangal", "plumber in hanamakonda", "emergency plumber", "tap repair near me"]
    },
    {
      id: "electrician",
      name: "Electrical Services",
      shortName: "Electrical",
      tag: "ELECTRICAL SERVICE",
      slug: "electrician",
      icon: "⚡",
      image: "assets/images/services/service-electrical.png",
      startingPrice: "₹149",
      eta: "15-25 Mins",
      description: "Certified electricians for fan installations, switchboard repairs, short circuit troubleshooting, MCB replacement, and inverter battery setups.",
      subservices: ["Ceiling Fan & Light Installation", "Switchboard & Socket Repair", "Short Circuit Inspection", "MCB & Fuse Box Fixing", "Inverter & Battery Wiring", "Full House Re-wiring"],
      popularKeywords: ["electrician in hyd", "electrician warangal", "electrician in hanamakonda", "urgent electrician nearby"]
    },
    {
      id: "ac-repair",
      name: "AC Repair & Servicing",
      shortName: "AC Repair",
      tag: "AC REPAIR",
      slug: "ac-repair",
      icon: "❄️",
      image: "assets/images/services/service-ac-repair.png",
      startingPrice: "₹399",
      eta: "Same-Day",
      description: "Comprehensive AC servicing, deep power jet cleaning, gas leak detection & recharge, cooling efficiency fix, and split/window AC installation.",
      subservices: ["Power Jet Deep Cleaning", "Gas Leak Check & Refill", "Split/Window AC Installation", "Cooling Issue Troubleshooting", "PCB Board Repair", "Compressor Servicing"],
      popularKeywords: ["ac service in hyd", "ac repair warangal", "ac technician hanamakonda", "split ac gas refill"]
    },
    {
      id: "home-cleaning",
      name: "Clean Home & Sanitization",
      shortName: "Cleaning",
      tag: "CLEAN HOME",
      slug: "home-cleaning",
      icon: "🧹",
      image: "assets/images/services/service-cleaning.png",
      startingPrice: "₹499",
      eta: "Same-Day / Scheduled",
      description: "Professional house sanitization, kitchen chimney degreasing, bathroom deep scrubbing, sofa & carpet shampooing, and post-renovation cleanup.",
      subservices: ["Full House Deep Clean", "Bathroom Intensive Scrub", "Kitchen & Chimney Degreasing", "Sofa & Mattress Shampoo", "Floor Buffing & Polishing", "Balcony & Window Cleaning"],
      popularKeywords: ["home cleaning hyd", "deep cleaning warangal", "house cleaner hanamakonda", "sofa dry cleaning"]
    },
    {
      id: "carpenter",
      name: "Woodwork & Carpentry",
      shortName: "Carpentry",
      tag: "WOODWORK SERVICE",
      slug: "carpenter",
      icon: "🪚",
      image: "assets/images/services/service-carpentry.png",
      startingPrice: "₹249",
      eta: "30-45 Mins",
      description: "Skilled carpenters for furniture repairs, custom cupboards, door lock & handle fitting, modular kitchen alignments, and wooden bed assembly.",
      subservices: ["Door Lock & Latch Fitting", "Furniture Repair & Polish", "Bed & Wardrobe Assembly", "Modular Kitchen Woodwork", "Curtain Rod Installation", "Custom Wooden Shelves"],
      popularKeywords: ["carpenter in hyd", "carpenter warangal", "door repair hanamakonda", "furniture assembly near me"]
    },
    {
      id: "beauty-service",
      name: "Beauty & Salon at Home",
      shortName: "Beauty services",
      tag: "BEAUTY SERVICE",
      slug: "beauty-service",
      icon: "💄",
      image: "assets/images/services/service-beauty.png",
      startingPrice: "₹299",
      eta: "At Your Doorstep",
      description: "Hygienic salon services at home by certified beauticians. Facials, waxing, threading, manicure, pedicure, hair styling, and bridal packages.",
      subservices: ["Facial & Cleanup", "Waxing & Threading", "Manicure & Pedicure", "Hair Cut & Blow Dry", "Bridal & Party Makeup", "Bleach & De-Tan"],
      popularKeywords: ["beauty services at home hyderabad", "salon at home warangal", "beautician hanamakonda", "facial at home"]
    },
    {
      id: "labour",
      name: "Labour Assistance",
      shortName: "labour",
      tag: "LABOUR SERVICE",
      slug: "labour",
      icon: "👷",
      image: "assets/images/services/service-labour.png",
      startingPrice: "₹299",
      eta: "Available Now",
      description: "Strong, reliable physical labour helpers for household shifting, furniture shifting, construction material carrying, and garden clearance.",
      subservices: ["House Shifting Helpers", "Heavy Luggage Loading/Unloading", "Construction Material Handling", "Garden & Debris Clearance", "Event Setup Assistance", "Hourly General Labour"],
      popularKeywords: ["labour for shifting hyderabad", "labour warangal", "loading labour hanamakonda", "helper for moving"]
    },
    {
      id: "painting",
      name: "Painting & Waterproofing",
      shortName: "Painting",
      tag: "PAINTING SERVICE",
      slug: "painting",
      icon: "🎨",
      image: "assets/images/services/service-painting.png",
      startingPrice: "₹899",
      eta: "Free Quotation",
      description: "Interior & exterior wall painting, damp proofing, waterproof damping treatment, texture designs, and rental home repainting with premium paints.",
      subservices: ["Interior Wall Emulsion", "Exterior Weatherproof Paint", "Damp Proofing & Waterproofing", "Texture & Accent Wall", "Wood & Metal Enamel", "Rental House Repainting"],
      popularKeywords: ["painters in hyd", "house painting warangal", "waterproofing hanamakonda", "wall painter nearby"]
    },
    {
      id: "transportation",
      name: "Transportation & Movers",
      shortName: "Transportation",
      tag: "PACKERS AND MOVERS",
      slug: "transportation",
      icon: "🚚",
      image: "assets/images/services/service-transportation.png",
      startingPrice: "₹699",
      eta: "Instant / Book Ahead",
      description: "Local mini truck booking, Tata Ace, luggage pickup, and complete house shifting with careful packaging and prompt transport.",
      subservices: ["Local Room Shifting", "Mini Truck & Tata Ace Booking", "Furniture Packaging & Moving", "Office Relocation", "Commercial Goods Transport", "Inter-City Shifting"],
      popularKeywords: ["packers and movers hyd", "house shifting warangal", "transportation hanamakonda", "tempo booking"]
    },
    {
      id: "tuition",
      name: "Tuition Teacher (Hourly)",
      shortName: "Tution(Hourly)",
      tag: "TUITION TEACHER",
      slug: "tuition",
      icon: "📚",
      image: "assets/images/services/service-tuition.png",
      startingPrice: "₹199 / hr",
      eta: "Verified Tutors",
      description: "Qualified home tutors for school students (Classes 1-10 & Intermediate). Mathematics, Science, English, Telugu, and competitive exam preparation.",
      subservices: ["Class 1 to 5 All Subjects", "Class 6 to 10 Maths & Science", "Intermediate Physics/Chemistry", "Spoken English & Communication", "Exam Revision Crash Course", "Home Homework Helper"],
      popularKeywords: ["home tutor in hyd", "tuition teacher warangal", "home tuition hanamakonda", "maths tutor nearby"]
    }
  ],

  founders: [
    {
      id: "karthik-kumar",
      name: "Karthik Kumar",
      role: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/karthik-kumar-b820ab2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: "assets/images/founder-1.jpg",
      bio: "Leading company vision, core expansion across Telangana, and empowering thousands of grassroots technicians.",
      focus: "Company Strategy, Expansion in Hyderabad, Warangal & Hanamkonda"
    },
    {
      id: "vamshi-krishna",
      name: "Vamshi Krishna",
      role: "Co-Founder & CFO",
      linkedin: "https://www.linkedin.com/in/vamshi-krishna-7484612b8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: "assets/images/founder-2.jpg",
      bio: "Steering financial strategy, capital allocation, revenue models, and sustainable regional unit economics.",
      focus: "Financial Planning & Analysis, Capital Allocation & Commercial Governance"
    },
    {
      id: "sai-harshith-chirra",
      name: "Sai Harshith Chirra",
      role: "Co-Founder & COO",
      linkedin: "https://www.linkedin.com/in/sai-harshith-chirra-4960a92a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: "assets/images/founder-3.jpg",
      bio: "Directing operations, reliable dispatch SLAs within 24 hours, pro background checks, and technician quality control.",
      focus: "Ground Field Operations, Within 24 Hours Dispatch SLA & Quality Assurance"
    },
    {
      id: "akhil-boda",
      name: "Akhil Boda",
      role: "UI & UX Designer",
      linkedin: "https://www.linkedin.com/in/akhil-boda?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: "assets/images/founder-4.jpg",
      bio: "Crafting intuitive mobile user flows, effortless one-tap service bookings, and clean visual brand architecture.",
      focus: "Mobile App UI/UX, Design Systems & Frictionless User Journeys"
    },
    {
      id: "t-naga-shiva-harshitha",
      name: "T. Naga Shiva Harshitha",
      role: "Technology & Innovation",
      linkedin: "https://www.linkedin.com/in/thivari-naga-shiva-harshitha-1bab612a2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: "assets/images/founder-5.jpg",
      bio: "Driving tech architecture, hyper-local GPS algorithms, cloud scalability, and modern platform innovations.",
      focus: "Platform Architecture, Real-Time Geolocation Matching & Tech Innovation"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MR_HELPER_DATA;
}
