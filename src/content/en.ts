/* ==========================================================================
 * English content — mirrors the Korean dictionary in `ko.ts`.
 * If you add a field to ko.ts, add the same field here.
 * ========================================================================== */

import type { Dict } from "./ko";

export const en: Dict = {
  /* --------------------------------------------------------------- meta */
  meta: {
    home: {
      title: "INTO JUNIOR | English Academy for Elementary & Middle School",
      description:
        "Read it, say it, prove it. INTO JUNIOR is an English academy for elementary and middle school students, tying reading, speaking and school results into one path. Enquiries: +82-42-822-0509",
    },
    about: {
      title: "About & Greeting | INTO JUNIOR",
      description:
        "English that doesn't stop at the textbook. Meet the philosophy and the founder behind INTO JUNIOR.",
    },
    programs: {
      title: "Programs | INTO JUNIOR",
      description:
        "Elementary reading & writing, speaking, middle school prep, school exam intensive, grammar & vocabulary clinic, and speech projects.",
    },
    campuses: {
      title: "Campuses | INTO JUNIOR",
      description:
        "Address, phone and opening hours for INTO JUNIOR Daejeon Doan.",
    },
    contact: {
      title: "Contact | INTO JUNIOR",
      description:
        "Leave us a message and we'll get back to you quickly. Call +82-42-822-0509 or +82-10-3454-9482.",
    },
    faq: {
      title: "FAQ | INTO JUNIOR",
      description:
        "Answers to the questions parents ask us most — classes, placement, and consultations.",
    },
    privacy: {
      title: "Privacy Policy | INTO JUNIOR",
      description:
        "How INTO JUNIOR collects and uses personal information.",
    },
  },

  /* ---------------------------------------------------------------- nav */
  nav: [
    { slug: "", label: "Home" },
    { slug: "about", label: "About" },
    { slug: "programs", label: "Programs" },
    { slug: "campuses", label: "Campuses" },
    { slug: "faq", label: "FAQ" },
    { slug: "contact", label: "Contact" },
  ],

  /* ------------------------------------------------------------- common */
  common: {
    langLabel: "한국어",
    langSwitchAria: "Switch language",
    book: "Book a level test",
    bookLong: "Book a free level test",
    callMain: "Call the academy",
    callNow: "Call us",
    contact: "Contact",
    viewMore: "Learn more",
    viewPrograms: "View all programs",
    viewCampuses: "View all campuses",
    directions: "Get directions",
    hqBadge: "Head office",
    comingSoon: "Opening soon",
    campusCountSuffix: " campuses",
    menu: "Menu",
    close: "Close",
    openNow: "Open now",
    closedNow: "Closed",
    regularHoliday: "Closed",
    skipToContent: "Skip to content",
    scrollDown: "Scroll down",
    photoPlaceholder: "Photo coming soon",
    videoPlaceholder: "Video coming soon",
    contentPending: "Content coming soon.",
    backHome: "Back to home",
  },

  /* ---------------------------------------------------------------- home */
  home: {
    hero: {
      eyebrow: "Elementary & middle school English · Fluency + Coaching",
      titleLead: "Read it, say it,",
      titleAccent: "prove it in class",
      titleTail: "and beyond",
      description:
        "Output follows input. INTO JUNIOR builds fluency through brain-science input training and real-time AI pronunciation coaching — and grows the habit of studying independently alongside it.",
      badges: ["Brain-science learning", "AI pronunciation", "Reading input", "Learning coaching"],
      primaryCta: "Book a free level test",
      secondaryCta: "See our programs",
      photoCaption: "Inside INTO JUNIOR",
    },

    quickFacts: [
      { label: "Students", value: "Elementary · Middle", sub: "Level K – Level 3+" },
      { label: "Lessons", value: "90 minutes", sub: "Class + reading input" },
      { label: "Assessment", value: "3-stage test", sub: "Listening & reading, separately" },
      { label: "Where", value: "Doan, Daejeon", sub: "Just behind Heungdo Elementary" },
    ],

    pillars: {
      eyebrow: "WHY INTO JUNIOR",
      title: "Output follows\nenough input",
      description:
        "Listening accounts for more than 90% of spoken fluency. We start by building input, then carry it through to English that comes out without thinking.",
      items: [
        {
          no: "01",
          key: "brain",
          icon: "sparkle",
          en: "BRAIN SCIENCE",
          title: "Brain-science learning",
          description:
            "Build enough input through focused listening and reading, and speaking and writing follow naturally. We follow how language is actually acquired.",
        },
        {
          no: "02",
          key: "fluency",
          icon: "mic",
          en: "FLUENCY",
          title: "AI fluency training",
          description:
            "AI compares a student's reading against native pronunciation in real time. Green for right, red for what to fix — repeated until it becomes automatic.",
        },
        {
          no: "03",
          key: "reading",
          icon: "book",
          en: "READING INPUT",
          title: "Focused reading input",
          description:
            "Coaches hand-pick books at each student's level. Fifteen minutes in class plus listening at home builds a daily input routine, checked with quizzes.",
        },
        {
          no: "04",
          key: "coaching",
          icon: "target",
          en: "COACHING",
          title: "Learning coaching",
          description:
            "We don't only look at English. Metacognition training and a planner build the ability to plan and check your own work — habits that carry across school.",
        },
      ],
    },

    /** Core programmes with intro videos */
    core: {
      eyebrow: "CORE PROGRAMS",
      title: "The two pillars\nof INTO JUNIOR",
      description:
        "Fast ForWord builds a brain that hears English; ClearFluency completes the fluency to read and speak it. Both are proven solutions from Carnegie Learning.",
      videoTabs: ["Intro video 1", "Intro video 2"],
      channelCta: "Visit our YouTube channel",
      items: [
        {
          no: "01",
          badge: "Brain-science English",
          title: "Fast ForWord",
          subtitle: "Fast ForWord · Carnegie Learning",
          videoLabel: "intro video",
          description:
            "It starts with the ability to tell English sounds apart. Phonemic training lifts memory, attention, processing speed and sequencing at the same time — the stamina all study rests on.",
          points: [
            "Selected by the US National Library of Education",
            "Phonemic awareness · phonics · fluency · vocabulary · comprehension",
            "Memory, attention, processing speed and sequencing together",
            "Game-based learning that adapts difficulty in real time",
          ],
        },
        {
          no: "02",
          badge: "Oral reading library",
          title: "ClearFluency",
          subtitle: "ClearFluency · Carnegie Learning",
          videoLabel: "intro video",
          description:
            "Patented speech recognition listens as a child reads aloud and corrects them on the spot — not a recording reviewed later, but a 1:1 reading tutor that helps the moment they stumble.",
          points: [
            "Built on the US National Reading Panel's recommended methods",
            "Green for words read well, red for words to practise",
            "WCPM fluency score makes progress visible",
            "95% agreement with specialist teachers in validation research",
          ],
        },
      ],
    },

    programsPreview: {
      eyebrow: "PROGRAMS",
      title: "A step-by-step curriculum\nbuilt around level and goal",
      description:
        "Two students in the same grade rarely start from the same place. We begin from what the level test actually shows.",
    },

    process: {
      eyebrow: "LEVEL TEST",
      title: "A 40-minute test and a 10-minute talk\ntell you exactly where your child is",
      description:
        "We assess listening and reading separately and report the result as an individual ATOS (AR) level. Book through Naver and the test is free.",
      steps: [
        { no: "01", title: "Book", description: "Reserve online through Naver or call +82-42-822-0509. Booking via Naver makes the test free." },
        { no: "02", title: "Stage 1 · Paper & interview", description: "Elementary students start with alphabet and phonics discrimination plus a 1:1 speaking interview." },
        { no: "03", title: "Stage 2 · Online assessment", description: "Carnegie Learning's R.P.I. assesses listening and reading, with a paper test for reading and writing." },
        { no: "04", title: "Results talk (10 min)", description: "We go through the ATOS (AR) level and the results by skill, and explain what to build first." },
        { no: "05", title: "Placement & first lesson", description: "We agree on the right class — Into J, A or W — and coaching and reading input begin together." },
      ],
    },

    levels: {
      eyebrow: "CLASSES",
      title: "The level test decides\nwhich class fits",
      description:
        "Elementary splits into Into J, Into A and Into W; middle school into Into A and Into W. Learning coaching runs in every class.",
      note: "※ Which classes are open, and how many seats remain, varies through the year — please call to confirm.",
      items: [
        {
          group: "Elementary",
          step: "INTO J",
          name: "Phonics start",
          target: "Elementary 1–3 · starting from phonics",
          schedule: "Mon · Tue · Thu · Fri 2:00–3:30 PM",
          goals: ["Phonics and activity lessons", "Coaching on easy readers", "Fast ForWord"],
        },
        {
          group: "Elementary",
          step: "INTO A",
          name: "Reading extension",
          target: "Elementary 3–5 · phonics finished, reading established",
          schedule: "Mon · Tue · Thu · Fri 2:40–4:20 PM",
          goals: ["BRIX Reading lessons", "SDL review and homework checks", "ClearFluency + vocabulary tests"],
        },
        {
          group: "Elementary",
          step: "INTO W",
          name: "Advanced comprehension",
          target: "Elementary 5–6 · deeper comprehension, preparing for middle school",
          schedule: "Mon · Tue · Thu · Fri 3:30–5:00 PM",
          goals: ["BRIX Reading lessons", "SDL review and homework checks", "ClearFluency + vocabulary tests"],
        },
        {
          group: "Middle",
          step: "INTO A",
          name: "Precision",
          target: "Middle 1–3 · reads well but needs accuracy",
          schedule: "Mon · Fri 6:30–8:10 PM",
          goals: ["ClearFluency", "Comprehension (Mon) · Grammar (Fri)", "Learning coaching"],
        },
        {
          group: "Middle",
          step: "INTO W",
          name: "Advanced reading & grammar",
          target: "Middle 1–3 · advanced comprehension and grammar",
          schedule: "Tue · Thu 6:30–8:10 PM",
          goals: ["Comprehension (Tue) · Grammar (Thu)", "ClearFluency", "Learning coaching"],
        },
      ],
    },

    video: {
      eyebrow: "VIDEO",
      title: "Curious about our classes?\nSee them for yourself",
      description:
        "A look inside INTO JUNIOR — how our lessons run and how our students present.",
    },

    gallery: {
      eyebrow: "GALLERY",
      title: "The space they come to every day",
      description:
        "",
      captions: [
        "Reading library",
        "Classroom",
        "AI learning lab",
        "Small-group classroom",
        "Individual study booths",
        "In class",
      ],
    },

    campuses: {
      eyebrow: "CAMPUS",
      title: "Come and see us\nin Doan, Daejeon",
      description:
        "Call ahead for a visit and you won't have to wait.",
    },

    cta: {
      eyebrow: "START HERE",
      title: "Fifty minutes is enough\nto find the right starting point",
      description:
        "Forty minutes of testing and ten minutes of feedback tell you where your child stands. Book through Naver and it's free.",
    },
  },

  /* --------------------------------------------------------------- about */
  about: {
    hero: {
      eyebrow: "ABOUT US",
      title: "English that doesn't stop at learning",
      description:
        "We stay with our students until they can say not \"I studied English\" but \"I can use it.\"",
    },

    /** Brand motto */
    motto: {
      line: "The power to think · The joy of learning · A growing future",
      statement:
        "We find what a child is capable of, grow it, and prepare them for what comes next.",
    },

    greeting: {
      eyebrow: "GREETING",
      title: "A word from the founder",
      signature: "Founder, INTO JUNIOR",
      name: "Park Jeong-kyung",
      credential: "20+ years in English education · certified Grade-1 teacher",
      photoCaption: "Park Jeong-kyung, Founder",
      paragraphs: [] as string[],
    },

    philosophy: {
      eyebrow: "PHILOSOPHY",
      title: "",
      description: "",
      items: [] as { icon: string; title: string; description: string }[],
    },

    fitFor: {
      eyebrow: "GOOD FIT",
      title: "",
      items: [] as string[],
      footnote: "",
    },

    teachers: {
      eyebrow: "TEACHERS",
      title: "The people beside your child",
      description:
        "",
      note: "※ Full teacher profiles are being prepared.",
    },

    facility: {
      eyebrow: "SPACE",
      title: "A space made for focus",
      description: "",
    },
  },

  /* ------------------------------------------------------------ programs */
  programs: {
    hero: {
      eyebrow: "PROGRAMS",
      title: "Start with the course\nyour child needs now",
      description:
        "From elementary to middle school, our courses cover reading, speaking, school exams and real experience, combined to fit what the level test shows.",
    },
    scheduleNote: {
      title: "Year-round curriculum",
      description:
        "The focus of the regular lesson rotates through the year, while school-exam intensives run alongside. Actual placement is individualised.",
      note: "※ Placement is individualised to each student's level.",
      columns: ["Period", "Regular lesson", "Intensive"],
      rows: [
        { period: "Jan–Mar · Aug–Sep", regular: "ClearFluency", special: "School exams" },
        { period: "Apr · Oct", regular: "Grammar & comprehension", special: "School exams" },
        { period: "May · Nov", regular: "Fast ForWord", special: "School exams" },
        { period: "Jun–Jul · Dec", regular: "English writing", special: "School exams" },
      ],
      timesTitle: "Class times",
      classTimes: [
        { course: "Elementary", classes: "Into J · A · W", days: "Mon · Tue · Thu · Fri", time: "2:00 – 5:00 PM" },
        { course: "Middle", classes: "Into A · W", days: "Mon·Fri / Tue·Thu", time: "6:30 – 8:10 PM" },
      ],
      hoursTitle: "Academy hours",
    },
    items: [
      {
        no: "01",
        icon: "sparkle",
        tag: "Cognition · Listening",
        title: "Fast ForWord",
        subtitle: "Brain-science English",
        summary:
          "Carnegie Learning's brain-science English programme. It starts from phonemic awareness and trains memory, attention, processing speed and sequencing together.",
        points: [
          "Phonemic awareness, phonics, fluency, vocabulary, comprehension",
          "Memory · attention · processing speed · sequencing",
          "Difficulty adapts in real time to accuracy",
          "Automatic analysis reports on every session",
        ],
      },
      {
        no: "02",
        icon: "mic",
        tag: "Fluency",
        title: "ClearFluency",
        subtitle: "AI oral reading library",
        summary:
          "Patented speech recognition listens to a student reading aloud and corrects them in the moment — not a recording reviewed later.",
        points: [
          "Word Wall → Preview → Read & Record → Quiz",
          "Green for words read well, red for words to practise",
          "WCPM fluency score to track growth",
          "95% agreement with specialist teachers in validation research",
        ],
      },
      {
        no: "03",
        icon: "grammar",
        tag: "Reading · Grammar",
        title: "BRIX Reading",
        subtitle: "Reading & Grammar",
        summary:
          "Students are placed on a BRIX band by their level test, studying reading, comprehension and grammar as one connected course.",
        points: [
          "BRIX 70–100 / 100–200 / 200+ by level",
          "Grammar taught inside reading, not separately",
          "Cumulative weekly vocabulary",
          "Move up a band as the level rises",
        ],
      },
      {
        no: "04",
        icon: "book",
        tag: "All levels",
        title: "Focused reading input",
        subtitle: "Reading Input",
        summary:
          "Runs at every level. Coaches choose books at each student's level and build a daily listening routine that maximises input.",
        points: [
          "Books chosen by the coach for each level",
          "15 minutes in class plus listening at home",
          "Comprehension quizzes with individual feedback",
          "Level-up certification at set milestones",
        ],
      },
      {
        no: "05",
        icon: "target",
        tag: "All levels",
        title: "Learning coaching",
        subtitle: "Learning Coaching",
        summary:
          "This isn't an academy you attend only for an English score. We grow the ability to study independently and manage your own time.",
        points: [
          "Metacognition — telling what you know from what you don't",
          "A planner for daily and weekly goals",
          "School subjects reviewed alongside our own",
          "Confidence built from small wins, repeated",
        ],
      },
      {
        no: "06",
        icon: "globe",
        tag: "Vacation · Abroad",
        title: "Camps & study abroad",
        subtitle: "Camps & Study Abroad",
        summary:
          "Twenty years of study-abroad programmes. Using English for real is what turns ability into confidence.",
        points: [
          "Texas schooling camp, USA (4 weeks)",
          "INTI University camp, Malaysia (3 weeks)",
          "International school camp, Philippines (4 weeks)",
          "Chiang Mai month-stay · Korean summer & winter school",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ campuses */
  campuses: {
    hero: {
      eyebrow: "CAMPUS",
      title: "Our campuses",
      description:
        "3F #302, Heungdo Bldg, 691 Dongseo-daero, Yuseong-gu, Daejeon. Call ahead and your visit starts without a wait.",
    },
    labels: {
      address: "Address",
      phone: "Phone",
      hours: "Opening hours",
      transport: "Getting here",
      parking: "Parking",
      copy: "Copy address",
      copied: "Copied",
      mapNaver: "Naver Map",
      mapKakao: "Kakao Map",
      mapGoogle: "Google Maps",
      mainLine: "Main line",
      mobileLine: "Mobile",
      viewOnMap: "View on map",
      callCampus: "Call this campus",
      preparing: "Details coming soon",
      askHq: "Please contact our head office for the address and phone number.",
    },
    transport: [
      {
        icon: "bus",
        title: "By bus",
        description:
          "Get off at a stop near the campus and walk a short distance. Call us for exact routes.",
      },
      {
        icon: "car",
        title: "By car",
        description:
          "Search the campus address in your navigation app, or use the map buttons below.",
      },
      {
        icon: "building",
        title: "In the building",
        description:
          "Floors and unit numbers differ by campus — check the campus details below.",
      },
    ],
    parkingNote:
      "Parking differs from campus to campus. Please call the campus before your visit and we'll let you know.",
    expanding: {
      title: "Campus enquiries",
      description: "Please get in touch if you have any questions.",
    },
  },


  /* ------------------------------------------------------------- contact */
  contact: {
    hero: {
      eyebrow: "CONTACT",
      title: "Reach us however\nsuits you best",
      description:
        "Classes, placement, fees, booking a level test — any question is welcome. During opening hours a phone call is quickest.",
    },
    channels: {
      title: "How to reach us",
      description: "The director will answer personally.",
      callTitle: "Call & book",
      callDesc:
        "Level tests and visits are booked by phone too. Call any time during opening hours.",
      emailTitle: "By email",
      emailDesc:
        "If a call is difficult, write to us and we'll reply as soon as we've read it.",
      kakaoTitle: "KakaoTalk channel",
      kakaoDesc: "Send us a message whenever it suits you.",
      visitTitle: "Visit us",
      visitDesc:
        "Call ahead to book and your consultation starts without a wait.",
      snsTitle: "Follow us",
      snsDesc: "The quickest place to see our classes and announcements.",
    },
    /** How a consultation works */
    steps: {
      title: "How a consultation works",
      items: [
        {
          no: "01",
          title: "Give us a call",
          description: "Ring +82-42-822-0509 and we'll tell you which times are free.",
        },
        {
          no: "02",
          title: "Level test",
          description: "Visit the academy for a reading, grammar, vocabulary and speaking assessment.",
        },
        {
          no: "03",
          title: "Results meeting",
          description: "We explain where your child stands now and where we'd take them next.",
        },
        {
          no: "04",
          title: "Class placement",
          description: "Together we pick the class that fits, and lessons begin.",
        },
      ],
      note: "※ The length and cost of the level test depend on grade and course, and are confirmed when you book.",
    },
  },

  /* ----------------------------------------------------------------- faq */
  faq: {
    hero: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description:
        "The questions parents ask us most. If yours isn't here, just give us a call.",
    },
    categories: [
      { key: "admission", label: "Consultation & enrolment" },
      { key: "class", label: "Classes & placement" },
      { key: "manage", label: "Learning management" },
      { key: "etc", label: "General" },
    ],
    items: [
      {
        category: "admission",
        q: "How do I book a level test?",
        a: "Book online through Naver or call +82-42-822-0509 — whichever is easier. Booking through Naver makes the test free.",
      },
      {
        category: "admission",
        q: "How much does the level test cost, and how long does it take?",
        a: "Forty minutes of testing plus ten minutes of feedback — about 50 minutes. It costs ₩10,000, or nothing if you book through Naver. A paper test, Carnegie Learning's online R.P.I. and a 1:1 speaking interview, finishing with an individual ATOS (AR) level.",
      },
      {
        category: "admission",
        q: "Can a complete beginner join?",
        a: "Yes. Into J is for elementary 1–3 students beginning from phonics. The level test confirms the right starting point.",
      },
      {
        category: "admission",
        q: "Which grades do you teach?",
        a: "Elementary 1 through middle school 3. Elementary splits into Into J, Into A and Into W; middle school into Into A and Into W.",
      },
      {
        category: "class",
        q: "How many students are in a class?",
        a: "Small-group lessons with close individual guidance. Please call for class sizes.",
      },
      {
        category: "class",
        q: "How many times a week are lessons?",
        a: "Elementary Into J, A and W run four times a week (Mon, Tue, Thu, Fri). Middle Into A runs Mon and Fri, Into W runs Tue and Thu. Open classes and remaining seats vary — please call to check.",
      },
      {
        category: "class",
        q: "Is it conversation-focused or exam-focused?",
        a: "Both. The regular lesson rotates through ClearFluency, grammar & comprehension, Fast ForWord and writing across the year, with school-exam intensives running alongside.",
      },
      {
        category: "manage",
        q: "How are homework and vocabulary managed?",
        a: "Lessons include SDL time for review and homework checks, and ClearFluency lessons come with a vocabulary test.",
      },
      {
        category: "manage",
        q: "How do parent consultations work?",
        a: "",
      },
      {
        category: "manage",
        q: "Are make-up lessons available for absences?",
        a: "",
      },
      {
        category: "etc",
        q: "What are your opening hours?",
        a: "Monday, Tuesday, Thursday and Friday 1:00–8:30 PM, Saturday 2:00–4:00 PM, closed Wednesday and Sunday. Hours can differ by campus, so please check the Campuses page.",
      },
      {
        category: "etc",
        q: "How much are tuition and materials?",
        a: "Please call +82-42-822-0509 and we'll go through it with you.",
      },
      {
        category: "etc",
        q: "Is there a shuttle bus?",
        a: "",
      },
      {
        category: "etc",
        q: "Is parking available?",
        a: "",
      },
    ],
    stillCurious: {
      title: "Didn't find your answer?",
      description:
        "Call and we'll talk it through. If a call is difficult, email us and we'll reply quickly.",
    },
  },

  /* -------------------------------------------------------------- footer */
  footer: {
    tagline: "English you can read, speak, score with — and actually use",
    quickTitle: "Quick links",
    contactTitle: "Get in touch",
    hoursTitle: "Opening hours",
    ceoLabel: "Director",
    addressLabel: "Address",
    privacy: "Privacy policy",
    copyright: "INTO JUNIOR. All rights reserved.",
    holidayNote: "Closed every Wednesday and Sunday",
  },

  /* ------------------------------------------------------------- privacy */
  privacy: {
    title: "Privacy Policy",
    updated: "Effective: 1 January 2026",
    intro:
      "INTO JUNIOR (\"the Academy\") takes your privacy seriously. This page explains how personal information is handled on this website.",
    sections: [
      {
        title: "1. This website does not collect personal information",
        body: "There is no sign-up, enquiry form or booking form on this website.\nSimply visiting it therefore collects and stores no personal information — no name, phone number or email address.",
      },
      {
        title: "2. Access logs and cookies",
        body: "We use no visitor analytics, advertising or tracking scripts.\nThe server hosting this site may keep ordinary access logs, which are not used to identify individuals.",
      },
      {
        title: "3. Third-party services",
        body: "Maps and video are provided through the services below. When you use them, each provider's own privacy policy also applies.\n· Map: Google Maps\n· Video: YouTube (loaded only when you press play)\n· Map shortcuts: Naver Map · Kakao Map",
      },
      {
        title: "4. Enquiries made by phone or email",
        body: "If you contact us by phone or email, the Academy uses what you tell us solely to respond to your enquiry and arrange a consultation.\nOnce that purpose is fulfilled it is destroyed without delay, except where retention is required by applicable law.",
      },
      {
        title: "5. Contact",
        body: "· Officer: Park Jeong-kyung (Director)\n· Phone: +82-42-822-0509\n· Email: angelpark3401@gmail.com",
      },
      {
        title: "6. Changes to this policy",
        body: "This policy applies from its effective date. Any changes will be announced on this website.",
      },
    ],
  },


  /* ----------------------------------------------------------- not found */
  notFound: {
    title: "Page not found",
    description:
      "The address may have changed or the page may have been removed. Head back home and try again.",
  },
};
