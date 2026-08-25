/* ==========================================================================
 * English content — mirrors the Korean dictionary in `ko.ts`.
 * If you add a field to ko.ts, add the same field here.
 * ========================================================================== */

import type { Dict } from "./ko";

export const en: Dict = {
  /* --------------------------------------------------------------- meta */
  meta: {
    home: {
      title: "INTO JUNIOR Daejeon Doan | English Academy for Elementary & Middle School",
      description:
        "Read it, say it, prove it. INTO JUNIOR Daejeon Doan is an English academy in Yuseong-gu, Daejeon for elementary and middle school students. Book a level test: +82-42-822-0509",
    },
    about: {
      title: "About & Greeting | INTO JUNIOR Daejeon Doan",
      description:
        "English that doesn't stop at the textbook. Meet the philosophy and the director behind INTO JUNIOR Daejeon Doan.",
    },
    programs: {
      title: "Programs | INTO JUNIOR Daejeon Doan",
      description:
        "Elementary reading & writing, speaking, middle school prep, school exam intensive, grammar & vocabulary clinic, and speech projects.",
    },
    location: {
      title: "Location | INTO JUNIOR Daejeon Doan",
      description:
        "3F #302, Heungdo Bldg, 691 Dongseo-daero, Yuseong-gu, Daejeon. Find directions and opening hours.",
    },
    contact: {
      title: "Contact | INTO JUNIOR Daejeon Doan",
      description:
        "Leave us a message and we'll get back to you quickly. Call +82-42-822-0509 or +82-10-3454-9482.",
    },
    faq: {
      title: "FAQ | INTO JUNIOR Daejeon Doan",
      description:
        "Answers to the questions parents ask us most — classes, placement, and consultations.",
    },
    privacy: {
      title: "Privacy Policy | INTO JUNIOR Daejeon Doan",
      description:
        "How INTO JUNIOR Daejeon Doan collects and uses personal information.",
    },
  },

  /* ---------------------------------------------------------------- nav */
  nav: [
    { slug: "", label: "Home" },
    { slug: "about", label: "About" },
    { slug: "programs", label: "Programs" },
    { slug: "location", label: "Location" },
    { slug: "faq", label: "FAQ" },
    { slug: "contact", label: "Contact" },
  ],

  /* ------------------------------------------------------------- common */
  common: {
    langLabel: "한국어",
    langSwitchAria: "Switch language",
    book: "Call us",
    bookLong: "Call to book a consultation",
    callMain: "Call the academy",
    callNow: "Call us",
    contact: "Contact",
    viewMore: "Learn more",
    viewPrograms: "View all programs",
    directions: "Get directions",
    menu: "Menu",
    close: "Close",
    openNow: "Open now",
    closedNow: "Closed",
    regularHoliday: "Closed",
    skipToContent: "Skip to content",
    scrollDown: "Scroll down",
    photoPlaceholder: "Photo coming soon",
    videoPlaceholder: "Video coming soon",
    backHome: "Back to home",
  },

  /* ---------------------------------------------------------------- home */
  home: {
    hero: {
      eyebrow: "Doan, Yuseong-gu, Daejeon · Elementary & Middle School English",
      titleLead: "Read it, say it,",
      titleAccent: "prove it in class",
      titleTail: "and beyond",
      description:
        "Learning shouldn't end at the worksheet. At INTO JUNIOR Daejeon Doan we connect reading, speaking and school exam preparation into one path — and give every student a stage to actually use it.",
      badges: ["Small classes", "1:1 diagnosis", "School exam support", "Speech & projects"],
      primaryCta: "Call to book",
      secondaryCta: "See our programs",
      photoCaption: "Inside INTO JUNIOR Daejeon Doan",
    },

    quickFacts: [
      { label: "Students", value: "Elementary · Middle", sub: "Placed by level, not just grade" },
      { label: "Weekdays", value: "1:00 – 8:30 PM", sub: "Mon · Tue · Thu · Fri" },
      { label: "Saturday", value: "2:00 – 4:00 PM", sub: "Closed Wed & Sun" },
      { label: "Where", value: "Doan, Wonsinheung-dong", sub: "Heungdo Bldg, 3F #302" },
    ],

    pillars: {
      eyebrow: "WHY INTO JUNIOR",
      title: "English becomes yours\nwhen four skills grow together",
      description:
        "Reading alone doesn't last. Neither does speaking alone, or a score alone. INTO JUNIOR ties all four into a single curriculum.",
      items: [
        {
          no: "01",
          key: "reading",
          icon: "book",
          en: "READING",
          title: "Read with precision",
          description:
            "Close reading builds structure; wide reading builds volume. Stories and non-fiction together grow both vocabulary and background knowledge.",
        },
        {
          no: "02",
          key: "speaking",
          icon: "mic",
          en: "SPEAKING",
          title: "Speak with confidence",
          description:
            "Every lesson produces spoken output. Topic presentations, pair work and one-minute speeches turn passive English into active English.",
        },
        {
          no: "03",
          key: "school",
          icon: "chart",
          en: "SCHOOL",
          title: "Prove it at school",
          description:
            "We prepare for each school's exam scope and question style — from multiple choice to written answers — with focused review during exam season.",
        },
        {
          no: "04",
          key: "experience",
          icon: "star",
          en: "EXPERIENCE",
          title: "Use it for real",
          description:
            "Speeches and projects put students on a real stage. Standing up once changes how a child feels about English for good.",
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
      eyebrow: "HOW IT WORKS",
      title: "Five steps from enrolment\nto real progress",
      description:
        "We tell parents what they want to know before they have to ask: where the child is now, where we're heading, and what changed this week.",
      steps: [
        {
          no: "01",
          title: "Level test",
          description:
            "Reading, grammar, vocabulary and speaking are assessed together to pinpoint the current level.",
        },
        {
          no: "02",
          title: "Diagnosis meeting",
          description:
            "We walk parents through the results and agree on a direction that fits the child's goals and personality.",
        },
        {
          no: "03",
          title: "Class placement",
          description:
            "Students join a small class matched to level, grade and learning style, with extra support where needed.",
        },
        {
          no: "04",
          title: "Weekly management",
          description:
            "Vocabulary, homework and review are checked every week, so nothing is left behind before moving on.",
        },
        {
          no: "05",
          title: "Reports & consultations",
          description:
            "Progress and next steps are shared regularly, with extra consultations available any time.",
        },
      ],
    },

    levels: {
      eyebrow: "LEVEL SYSTEM",
      title: "Know where you stand,\nand what comes next",
      description:
        "We tell every student exactly which stage they're on — and precisely what it takes to reach the next one.",
      note: "※ Detailed criteria and course materials are explained during your consultation.",
      items: [
        {
          step: "STAGE 1",
          name: "Building the base",
          target: "For students starting English or rebuilding fundamentals",
          goals: ["Phonics & sight words", "Reading short sentences", "Introducing yourself in English"],
        },
        {
          step: "STAGE 2",
          name: "Reading on your own",
          target: "For students ready to handle chapter books independently",
          goals: ["Chapter books & non-fiction", "Core grammar concepts", "Speaking 3–5 sentences on a topic"],
        },
        {
          step: "STAGE 3",
          name: "Expressing your ideas",
          target: "For students who summarise what they read and add their own view",
          goals: ["Paragraph summary & writing", "Systematic middle-school grammar", "One-minute speech & opinions"],
        },
        {
          step: "STAGE 4",
          name: "Proving it in practice",
          target: "For students showing results at school and in real situations",
          goals: ["School exams & written answers", "Long passages & advanced vocabulary", "Presentation, debate, projects"],
        },
      ],
    },

    video: {
      eyebrow: "VIDEO",
      title: "Curious about our classes?\nSee them for yourself",
      description:
        "A look inside INTO JUNIOR Daejeon Doan — how our lessons run and how our students present.",
    },

    gallery: {
      eyebrow: "GALLERY",
      title: "The space they come to every day",
      description:
        "Bright, calm and built for focus. You're welcome to look around when you visit for a consultation.",
      captions: [
        "Classroom",
        "Reading zone & library",
        "Speaking class",
        "Study & clinic area",
        "Consultation room",
        "Speech showcase",
      ],
    },

    locationPreview: {
      eyebrow: "LOCATION",
      title: "Find us in Doan New Town",
      description:
        "691 Dongseo-daero, Yuseong-gu — 3rd floor of the Heungdo Building. Book ahead and you won't have to wait.",
    },

    cta: {
      eyebrow: "START HERE",
      title: "Thirty minutes is enough\nto find the right starting point",
      description:
        "Level tests and consultations are by appointment. Give us a ring and we'll find a time that works for you.",
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

    greeting: {
      eyebrow: "GREETING",
      title: "A word from the director",
      signature: "Director, INTO JUNIOR Daejeon Doan",
      name: "Park Jeong-kyung",
      photoCaption: "Director Park Jeong-kyung",
      paragraphs: [
        "Hello, and welcome. I'm Park Jeong-kyung, director of INTO JUNIOR Daejeon Doan.",
        "Many children study English for years. They memorise words, solve problems, sit exams. And yet the moment you ask, \"Can you say that in English?\" the room goes quiet. The hours are long; the usable English is short.",
        "Closing that gap is what an academy is for. Explaining what you read in your own words. Actually using the expressions you learned. And seeing that ability show up in your school results too. That is why we never separate reading from speaking, or real skill from exam scores.",
        "Above all, I won't forget that every child moves at their own pace. For the fast learner, room to go further. For the one who needs time, someone beside them so they don't give up.",
        "If you're wondering where your child's English really stands, please don't hesitate to get in touch. We'll assess it accurately — and tell you honestly.",
      ],
    },

    philosophy: {
      eyebrow: "PHILOSOPHY",
      title: "Four things we hold to",
      description:
        "It isn't grand promises that change a child — it's the principles kept in every single lesson.",
      items: [
        {
          icon: "target",
          title: "We start from an accurate diagnosis",
          description:
            "We start from ability, not from grade. The curriculum is set only after a level test shows where a student actually is.",
        },
        {
          icon: "speech",
          title: "We build lessons that make students talk",
          description:
            "Not a lesson spent listening and copying, but one where the student speaks. Every session gives them a chance to express something.",
        },
        {
          icon: "shield",
          title: "We take school results seriously",
          description:
            "We're neither a conversation-only academy nor a worksheet factory. Skill has to show up on the school report too — so we manage exams alongside it.",
        },
        {
          icon: "handshake",
          title: "We work alongside parents",
          description:
            "We share how a child is doing, exactly as it is — the good news and the work still to do, both in good time.",
        },
      ],
    },

    fitFor: {
      eyebrow: "GOOD FIT",
      title: "Does any of this sound familiar?",
      items: [
        "Years of English lessons, but still can't speak",
        "Attends an academy, yet school scores won't move",
        "Reads the book but can't explain what it said",
        "Needs grammar sorted out before middle school",
        "Lacks confidence and shrinks away from English",
        "We simply want to know our child's real level",
      ],
      footnote:
        "If even one of these rings true, start with a level test and find the cause first.",
    },

    teachers: {
      eyebrow: "TEACHERS",
      title: "The people beside your child",
      description:
        "The quality of a lesson comes down to the person teaching it. Meet the teachers of INTO JUNIOR Daejeon Doan.",
      note: "※ Full teacher profiles are being prepared.",
    },

    facility: {
      eyebrow: "SPACE",
      title: "A space made for focus",
      description:
        "Bright lighting, a clear layout, a library of English readers and a dedicated clinic area — a place where students stay comfortable for hours.",
    },
  },

  /* ------------------------------------------------------------ programs */
  programs: {
    hero: {
      eyebrow: "PROGRAMS",
      title: "Start with the course\nyour child needs now",
      description:
        "From elementary to middle school, our courses cover reading, speaking, school exams and real experience. We combine them based on what the level test shows.",
    },
    scheduleNote: {
      title: "Class days & times",
      description:
        "Days and times vary by course, grade and class placement. Call or book a consultation to hear which classes are currently open and where seats remain.",
      hoursTitle: "Academy hours",
    },
    items: [
      {
        no: "01",
        icon: "book",
        tag: "Elementary",
        title: "Elementary Reading & Writing",
        subtitle: "Reading & Writing",
        summary:
          "Close reading of stories and non-fiction builds real reading power — then students learn to put what they read into their own sentences.",
        points: [
          "Close reading and wide reading combined",
          "Chapter books and non-fiction",
          "From sentences to full paragraphs",
          "Cumulative weekly vocabulary",
        ],
      },
      {
        no: "02",
        icon: "mic",
        tag: "Elementary",
        title: "Elementary Speaking & Conversation",
        subtitle: "Speaking & Conversation",
        summary:
          "Every lesson ends with something spoken. Topic presentations and pair work make speaking a habit, not an event.",
        points: [
          "Key expressions by topic",
          "One-minute speech training",
          "Pair work and group discussion",
          "Individual pronunciation coaching",
        ],
      },
      {
        no: "03",
        icon: "bridge",
        tag: "Pre-middle",
        title: "Middle School Prep",
        subtitle: "Middle School Prep",
        summary:
          "The most important bridge in a student's English. We build a grammar framework and get them used to longer passages.",
        points: [
          "Core middle-school grammar",
          "Reading longer passages",
          "Introduction to written answers",
          "Independent study habits",
        ],
      },
      {
        no: "04",
        icon: "chart",
        tag: "Middle",
        title: "School Exam Intensive",
        subtitle: "School Exam Intensive",
        summary:
          "Focused preparation matched to each school's exam scope and question style — ability that shows up as a score.",
        points: [
          "Past papers analysed by school",
          "Textbook and supplementary material review",
          "Written answers and performance tasks",
          "Intensive support during exam season",
        ],
      },
      {
        no: "05",
        icon: "grammar",
        tag: "All grades",
        title: "Grammar & Vocabulary Clinic",
        subtitle: "Grammar & Vocabulary Clinic",
        summary:
          "Confusing grammar rebuilt from the concept up; vocabulary locked in through repetition. We fill the gaps, precisely.",
        points: [
          "Step-by-step grammar curriculum",
          "Weekly vocabulary tests and retakes",
          "Error-correction clinic",
          "Targeted work on weak areas",
        ],
      },
      {
        no: "06",
        icon: "star",
        tag: "Experience",
        title: "Speech & Project",
        subtitle: "Speech & Project",
        summary:
          "Time to actually use the English they've learned. Showcases and projects put students on a real stage.",
        points: [
          "Speech showcases",
          "Team projects",
          "Vacation intensives and camps",
          "A portfolio of their progress",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ location */
  location: {
    hero: {
      eyebrow: "LOCATION",
      title: "How to find us",
      description:
        "3F #302, Heungdo Building, 691 Dongseo-daero, Yuseong-gu, Daejeon. Book your visit ahead and we'll be ready for you.",
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
    },
    transport: [
      {
        icon: "bus",
        title: "By bus",
        description:
          "Get off at a stop toward Wonsinheung-dong in Doan New Town and walk a short distance. Call us for exact routes.",
      },
      {
        icon: "car",
        title: "By car",
        description:
          "Search for \"691 Dongseo-daero, Yuseong-gu, Daejeon\" or \"Heungdo Building\" in your navigation app.",
      },
      {
        icon: "building",
        title: "In the building",
        description:
          "We're on the 3rd floor, unit 302. Take the lift to the 3rd floor and you'll see us right away.",
      },
    ],
    parkingNote:
      "Please call ahead before your visit and we'll let you know about parking.",
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
        a: "Just call +82-42-822-0509 or +82-10-3454-9482. We'll check what's free and confirm a time with you on the call.",
      },
      {
        category: "admission",
        q: "What does the level test cover, and how long does it take?",
        a: "We assess reading, grammar, vocabulary and speaking together to establish the current level. The length and cost depend on grade and course, and are confirmed when you book.",
      },
      {
        category: "admission",
        q: "Can a complete beginner join?",
        a: "Yes. We run courses that start from phonics and the very basics. The level test will find the right starting point, so please don't hesitate to ask.",
      },
      {
        category: "admission",
        q: "Which grades do you teach?",
        a: "We teach elementary and middle school students. Classes are grouped by grade and level, and we'll explain placement during your consultation.",
      },
      {
        category: "class",
        q: "How many students are in a class?",
        a: "We keep classes small so teachers can follow each student individually. Class sizes vary by course and are confirmed at consultation.",
      },
      {
        category: "class",
        q: "How many times a week are lessons?",
        a: "It depends on the course and grade. Call us or book a consultation to hear which classes are currently running and where seats remain.",
      },
      {
        category: "class",
        q: "Is it conversation-focused or exam-focused?",
        a: "Both. We build usable English through reading and speaking while managing school exam preparation so the results follow — with focused, school-by-school support during exam season.",
      },
      {
        category: "manage",
        q: "How are homework and vocabulary managed?",
        a: "We run weekly vocabulary tests and homework checks, with retakes or clinic sessions when a student falls short. Nothing gets left behind before we move on.",
      },
      {
        category: "manage",
        q: "How do parent consultations work?",
        a: "Regular consultations cover how your child is doing and what comes next. Beyond that, you're welcome to contact us any time you'd like to talk.",
      },
      {
        category: "manage",
        q: "Are make-up lessons available for absences?",
        a: "We'll advise on make-up options and catching up depending on the class. Let us know in advance and we'll do our best to keep your child on track.",
      },
      {
        category: "etc",
        q: "Are you open on Wednesdays and Sundays?",
        a: "We're closed every Wednesday and Sunday. Monday, Tuesday, Thursday and Friday we're open 1:00–8:30 PM, and Saturday 2:00–4:00 PM.",
      },
      {
        category: "etc",
        q: "How much are tuition and materials?",
        a: "It varies by course, grade and number of lessons. Please call +82-42-822-0509 or book a consultation so we can give you accurate figures.",
      },
      {
        category: "etc",
        q: "Is there a shuttle bus?",
        a: "Please call us and we'll let you know about shuttle availability and routes.",
      },
      {
        category: "etc",
        q: "Is parking available?",
        a: "Give us a call before your visit and we'll advise you on parking.",
      },
    ],
    stillCurious: {
      title: "Didn't find your answer?",
      description:
        "Call and the director will answer personally. If a call is difficult, email us and we'll reply quickly.",
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
    copyright: "INTO JUNIOR Daejeon Doan. All rights reserved.",
    holidayNote: "Closed every Wednesday and Sunday",
  },

  /* ------------------------------------------------------------- privacy */
  privacy: {
    title: "Privacy Policy",
    updated: "Effective: 1 January 2026",
    intro:
      "INTO JUNIOR Daejeon Doan (\"the Academy\") takes your privacy seriously. This page explains how personal information is handled on this website.",
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
