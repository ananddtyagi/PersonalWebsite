import { Award, LeadershipActivity, Project, WorkExperience, EducationItem, SkillsAndExpertise, PersonalContact } from "./schemas";

export const awardsData: Award[] = [
  {
    title: "2022 Webby Award: Best Social Gaming Experience",
    organization: "The Webby Awards",
    description: "For VERS (Virtual Escape Room)",
    yearOrDate: "2022",
  },
  {
    title: "Best Education Hack & Humanitarian Award",
    organization: "hackBCA",
    description: "Won for the Chrome extension Biling-URL",
    yearOrDate: "Apr 2016",
  },
  {
    title: "FTC World Championships, 13th place",
    organization: "FIRST Technology Challenge",
    description: "Nominated for the Control Award for best sensors/software usage",
    yearOrDate: "2015",
  },
  {
    title: "Piano Performances at Carnegie Hall & Lincoln Center",
    description: "Gold Prize Award in the Talented Young Musicians Competition (International Music and Arts Society)",
    yearOrDate: "May 2016 (Lincoln Center), multiple dates (Carnegie Hall)",
  },
];



export const leadershipActivitiesData: LeadershipActivity[] = [
  {
    organization: "Tech@NYU",
    role: "E-Board Member",
    startDate: "Sep 2018",
    endDate: "May 2019",
    details: ["Made decisions on group events and activities."],
  },
  {
    organization: "Freshman Circuit (NYU)",
    role: "Leader",
    startDate: "Sep 2018",
    endDate: "May 2019",
    details: [
      "Co-led program introducing first-year students to NYC's tech industry.",
      "Introduced individual mentoring and group projects.",
    ],
  },
  {
    organization: "Freshman Circuit (NYU)",
    role: "Participant",
    startDate: "Sep 2017",
    endDate: "May 2018",
    details: [
      "Selected as 1 of 17 out of 150 applicants.",
      "Learned about NYC technology industry via company tours and seminars.",
    ],
  },
  {
    organization: "FIRST Technology Challenge (Millburn High School)",
    role: "Captain",
    startDate: "May 2016",
    endDate: "Mar 2017",
    details: ["Led Build Team; competed at various levels."],
  },
  {
    organization: "FIRST Technology Challenge (Millburn High School)",
    role: "Mechanism Lead",
    startDate: "Sep 2015",
    endDate: "Feb 2016",
    details: ["Led building of collection mechanism; reached state-level championship."],
  },
  {
    organization: "FIRST Technology Challenge (Millburn High School)",
    role: "Build Member",
    startDate: "Sep 2014",
    endDate: "Apr 2015",
    details: [
      "Reached World Championships, placed 13th out of ~1000 teams.",
      "Nominated for the Control Award (sensors/software) at Worlds.",
    ],
  },
  {
    organization: "Botball (Millburn High School)",
    role: "Build Member",
    startDate: "Mar 2014",
    endDate: "May 2014",
    details: ["Team placed 2nd in State Championship."],
  },
  {
    organization: "Botball (Millburn High School)",
    role: "Build & Code Member",
    startDate: "Mar 2015",
    endDate: "May 2015",
    details: ["Team placed 3rd in State Championship."],
  },
  {
    organization: "hackMHS I & II (Millburn High School)",
    role: "Founder, Organizer, Mentor",
    startDate: "Oct 2015",
    endDate: "May 2016",
    details: [
      "Founded and organized the first and second hackathons at Millburn High School.",
      "5th Major League Hacking High School Hackathon in the world.",
      "Taught Intro to Java workshop, managed sponsors and mentors.",
    ],
  },
  {
    organization: "Millburn Hacks",
    role: "Founder",
    startDate: "May 2016",
    endDate: "Present",
    details: [
      "Organization unifying computer science activities: CS Club, hackMHS, Millburn Splash, Millburn.io, etc.",
    ],
  },
  {
    organization: "hackBCA (Hackensack, NJ)",
    role: "Participant",
    startDate: "Apr 2016",
    details: [
      "Created 'Biling-URL' Chrome extension for language learning.",
      "Won Best Education Hack & Humanitarian Award.",
    ],
  },
  {
    organization: "Bamboo (Financial Literacy)",
    role: "Founder",
    startDate: "Jul 2016",
    endDate: "Aug 2016",
    details: [
      "Created an iOS app to teach children basic financial literacy (ready for App Store submission).",
    ],
  },
  {
    organization: "Elementary After School Programs",
    location: "Glenwood & Hartshorn (Millburn)",
    role: "Teacher, Organizer",
    details: [
      "Taught paid after-school robotics courses (LEGO NXT Mindstorms).",
      "Guided elementary students in building their own projects.",
    ],
  },
  {
    organization: "Book Club (Millburn, NJ)",
    role: "Founder",
    startDate: "Mar 2015",
    endDate: "Present",
    details: ["Read & discuss books biweekly (e.g., Lolita, The Woman in the Dunes)."],
  },
  {
    organization: "Magic Club (Millburn, NJ)",
    role: "Founder",
    startDate: "Dec 2013",
    endDate: "Dec 2014",
    details: ["Taught card and coin magic throughout the year."],
  },
  {
    organization: "People to People Student Ambassadors (China)",
    role: "Student Ambassador",
    startDate: "Jun 2014",
    details: [
      "Traveled across seven cities in China for three weeks, representing the USA.",
    ],
  },
  {
    organization: "Peer Leadership Program (Millburn, NJ)",
    role: "Peer Leader",
    startDate: "Sep 2013",
    endDate: "May 2016",
    details: [
      "Promoted academic excellence and anti-drug/alcohol messaging among peers.",
    ],
  },
  {
    organization: "The Outreach Movement (Millburn, NJ)",
    role: "Teacher",
    startDate: "May 2016",
    endDate: "Present",
    details: [
      "Used video chat to teach individuals in a Newark shelter (e.g., GED prep).",
    ],
  },
];


export const projectsData: Project[] = [
  {
    title: "Using Statistical Weighting and Popularity Ranking for Extractive Summarization",
    timeframe: "May 2020",
    role: "Co-Author",
    description: [
      "Submitted to COLING 2020.",
      "Developed a new method for extractive summarization.",
      "Ranked second highest extractive-only summarization system on the Cornell NEWSROOM leaderboard.",
    ],
  },
  {
    title: "Showcase (NYU)",
    timeframe: "Jul 2020 – Jan 2021",
    role: "Project Manager & Full-stack Developer",
    url: "https://showcasenyu.herokuapp.com",
    description: [
      "Website to showcase independent projects and research papers by NYU students.",
      "Built initial version in TypeScript/React.",
      "Managed a team of three developers.",
    ],
    techStack: ["React", "TypeScript"],
  },
  {
    title: "VERS (Virtual Escape Room)",
    timeframe: "Jul 2020 – Dec 2020",
    role: "Software Developer",
    url: "https://versproject.herokuapp.com",
    description: [
      "2022 Webby Award Winner: Best Social Gaming Experience.",
      "Created two puzzles in JavaScript and React for a remote escape room experience.",
    ],
    techStack: ["React", "JavaScript"],
  },
  {
    title: "Idiom Translation (NYU)",
    timeframe: "Nov 2018 – Present",
    description: [
      "Independent project under Professor Dennis Shasha.",
      "Python application that translates non-English phrases to English and suggests related English idioms.",
    ],
    techStack: ["Python"],
  },
  {
    title: "Heart2Heart (NYU Healthcare Makerthon)",
    timeframe: "Oct 2017 (72-hour Hackathon)",
    description: [
      "Finalist Winner.",
      "MATLAB software processes raw 12-lead ECG data, plots it, and identifies cardiac issues.",
      "Displays identified disease on a 3D heart model based on patient data.",
    ],
    techStack: ["MATLAB"],
  },
  {
    title: "Atomic Tango (NYU)",
    timeframe: "Aug – Dec 2017",
    description: [
      "Independent project under Professor Dennis Shasha.",
      "Java application for generating unique Tango choreography.",
    ],
    techStack: ["Java"],
  },
];



export const workExperienceData: WorkExperience[] = [
  {
    company: "Omnivista (AI Startup)",
    location: "Seattle, WA",
    startDate: "July 2024",
    endDate: "Present",
    role: "Founder, CEO",
    responsibilities: [
      "Building financial advisory agents for financial firms.",
      "Platform ingests product data, past performance, and customer-facing info.",
      "Provides an API for customer queries, lead qualification, and onboarding data extraction.",
    ],
  },
  {
    company: "Flexport",
    location: "Bellevue, WA",
    startDate: "July 2021",
    endDate: "October 2023",
    role: "Software Engineer II",
    responsibilities: [
      "Project lead for the HTS ML Recommendation (model inference API, ML deployment pipeline, UI).",
      "Led Restricted Countries Scanning project (~290k daily scans); oversaw discovery, architecture, management.",
      "Implemented code architecture rules with ArchUnit; documented company-wide code quality improvements.",
      "Built Denied Party Screening (60k entities daily) ensuring compliance in shipments.",
      "Developed a user-friendly Customs Trade Partnership Against Terrorism form UI.",
    ],
  },
  {
    company: "Klarity (AI startup for contract review)",
    location: "San Francisco, CA",
    startDate: "January 2021",
    endDate: "April 2021",
    role: "Software Engineer Intern",
    responsibilities: [
      "Extracted table data from PDF documents using Python and AWS Textract.",
      "Created a script with OpenCV to detect handwritten signatures; synthetic dataset generation.",
    ],
  },
  {
    company: "Incedo (Analytics & Technology Services)",
    location: "San Francisco, CA",
    startDate: "June 2020",
    endDate: "August 2020",
    role: "Data Scientist Intern",
    responsibilities: [
      "Built models (linear regression, random forest, XGBoost) for credit risk default prediction.",
      "Data cleaning, organizing, and preliminary insights.",
    ],
  },
  {
    company: "Gulaq (Robo-advisory Fintech)",
    location: "Millburn, NJ",
    startDate: "May 2019",
    endDate: "August 2019",
    role: "Web Development Intern, Algorithm Research Intern",
    responsibilities: [
      "Created a React/JavaScript survey for user financial details → investment recommendations.",
      "Developed a new algorithm for lump-sum investments across multiple funds (still in use).",
    ],
  },
];




export const educationData: EducationItem[] = [
  {
    institution: "New York University",
    location: "New York, NY, USA",
    degreeOrProgram: "Bachelor of Arts in Computer Science and Data Science",
    fieldOfStudy: "Computer Science, Data Science",
    startDate: "2017",
    endDate: "2021",
    graduationDate: "May 2021",
    gpa: "3.3",
    coursework: [
      "Introduction to Algorithms",
      "Honors Calculus III",
      "Computer Systems Organization",
      "Discrete Mathematics",
      "Data Structures",
      "Linear Algebra",
      "Introduction to Linguistics",
      "Elementary Korean II",
    ],
  },
  {
    institution: "Millburn High School",
    location: "Millburn, NJ, USA",
    startDate: "2013",
    endDate: "2017",
    gpa: "4.1",
    coursework: [
      "AP Calculus BC",
      "AP Computer Science",
      "AP Physics C (Mechanics & E&M)",
      "AP Macroeconomics & Microeconomics",
      "AP Psychology",
      "AP Language and Composition",
      "AP Spanish Language and Composition",
      "Advanced Robotics (3 years)",
      "Honors Computer Science 2",
    ],
  },
  {
    institution: "American Embassy School",
    location: "New Delhi, India",
    startDate: "2007",
    endDate: "2012",
    details: ["LEGO Robotics (2 years)"],
  },
  {
    institution: "New York Genome Center",
    location: "New York, NY",
    details: [
      "Research Assistant Internship (Mar 2018 - May 2018)",
      "Project: Predictions on gene reactions to immunotherapy treatments",
    ],
  },
  {
    institution: "National Security Language Initiative for Youth (NSLI-Y)",
    location: "Incheon, South Korea",
    details: [
      "Finalist and Participant (June 2017 - August 2017)",
      "6-week full-immersion Korean language program",
    ],
  },
  {
    institution: "Center for Talented Youth (CTY)",
    location: "Lancaster, PA",
    details: [
      "Completed Number Theory Course (June 2015)",
      "Presented research on Continued Fractions",
    ],
  },
];


export const skillsAndExpertiseData: SkillsAndExpertise = {
  programmingLanguages: [
    "Python",
    "Kotlin",
    "Java",
    "JavaScript",
    "TypeScript",
    "Ruby",
  ],
  dataScienceAndML: [
    "AWS Textract",
    "OpenCV",
    "XGBoost",
    "Random Forest",
    "Linear Regression",
  ],
  toolsAndFrameworks: ["React", "ArchUnit", "AWS"],
  spokenLanguages: ["English", "Hindi", "Korean (Intermediate)"],
  interests: [
    "Piano (Carnegie Hall, Lincoln Center performances)",
    "Magic (11 years)",
    "Guitar (electric and acoustic)",
    "Percussion",
    "Travel (25 countries)",
  ],
};


export const personalContactData: PersonalContact = {
  name: "Anand Tyagi",
  phone: "(862) 246-1834",
  email: "anand.deep.tyagi@gmail.com",
  github: "ananddtyagi",
  linkedin: "ananddtyagi",
};
