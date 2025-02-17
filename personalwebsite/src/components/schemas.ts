export interface PersonalContact {
    name: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
}

export interface SkillsAndExpertise {
    programmingLanguages: string[];
    dataScienceAndML: string[];
    toolsAndFrameworks: string[];
    spokenLanguages: string[];
    interests: string[];
}


export interface EducationItem {
    institution: string;
    location?: string;
    degreeOrProgram?: string;
    fieldOfStudy?: string;
    startDate?: string;        // e.g. "2017"
    endDate?: string;          // e.g. "2021"
    graduationDate?: string;   // e.g. "May 2021"
    gpa?: string;
    coursework?: string[];
    details?: string[];        // Any extra descriptive lines
}


export interface WorkExperience {
    company: string;
    location?: string;
    startDate: string; // "Jul 2021" or "2021-07" etc.
    endDate: string;   // "Oct 2023" or "Present"
    role: string;
    responsibilities: string[];
}

export interface Project {
    title: string;
    timeframe?: string;
    role?: string;
    url?: string;
    description: string[]; // multiple bullet points or lines
    techStack?: string[];
}

export interface LeadershipActivity {
    organization: string;
    location?: string;
    role: string;
    startDate?: string;
    endDate?: string;
    details: string[];  // bullet points or descriptions
}


export interface Award {
    title: string;
    yearOrDate?: string;
    organization?: string;
    description?: string;
}



