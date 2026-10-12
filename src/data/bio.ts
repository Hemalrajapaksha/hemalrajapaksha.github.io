// Edit this file to update everything shown on the site.

export const bio = {
  name: "Hemal Rajapaksha",
  title: "System Analyst · DevSecOps at CPF Board",
  location: "Singapore",
  // Leave empty to hide the "Email me" button.
  email: "hemalsrajapaksha@gmail.com",
  // Put a photo at public/avatar.jpg and set this to "/avatar.jpg". Leave empty to show initials.
  avatar: "",
  summary:
    "Software engineer with over nine years of experience building enterprise Java applications, CI/CD pipelines and AWS cloud services. Now a System Analyst on the DevSecOps team at CPF Board in Singapore, after five years at Infor in Colombo.",

  socials: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/hemalrajapaksha" }],

  about: [
    "I'm a self-motivated software professional from Sri Lanka who enjoys a challenge and working with new technologies. I'm a quick learner with an analytical mind, and I value good communication, organization and leadership.",
    "I spent five years at Infor building enterprise applications with Java, Spring Boot, Angular and AWS, growing from Software Engineer to Principal Software Engineer and leading small teams along the way. Today I work in DevSecOps at the Central Provident Fund (CPF) Board in Singapore, building Jenkins pipelines and keeping deployments smooth for application teams.",
  ],

  experience: [
    {
      role: "System Analyst — DevOps Engineer",
      company: "CPF Board",
      period: "Sep 2022 — Present",
      location: "Singapore",
      description: "DevOps engineer on the BSP DevSecOps team (8 people), supporting application teams with smooth, reliable deployments.",
      highlights: [
        "Build and maintain Jenkins pipelines.",
        "Troubleshoot issues across RTC, IBM UrbanCode Deploy and Jenkins.",
        "Handle release management.",
        "Build proofs of concept that automate manual day-to-day tasks.",
        "Support the migration from RTC to Azure Repos.",
      ],
      tech: ["Java", "Groovy", "Jenkins Pipeline", "IBM UCD", "RTC", "JIRA", "Confluence", "Power BI", "UiPath"],
    },
    {
      role: "Principal Software Engineer",
      company: "Infor",
      period: "Apr 2022 — Aug 2022",
      location: "Colombo, Sri Lanka",
      description: "",
      highlights: [],
      tech: [],
    },
    {
      role: "Senior Software Engineer",
      company: "Infor",
      period: "Nov 2020 — Apr 2022",
      location: "Colombo, Sri Lanka",
      description: "",
      highlights: [
        "Team lead and developer for a new role-based Access Control List module: designed it with the lead architect and integrated it across existing modules.",
        "Led the Persona Authentication module, an annotation-based check that grants persona-level access to every API request.",
        "Supported the DevOps team on CI/CD and AWS infrastructure.",
      ],
      tech: [
        "Java 8",
        "Spring Boot",
        "Spring AOP",
        "Angular",
        "Hibernate",
        "PostgreSQL",
        "Liquibase",
        "AWS",
        "GitLab",
        "Jenkins",
        "Sonar",
      ],
    },
    {
      role: "Software Engineer",
      company: "Infor",
      period: "Jun 2017 — Nov 2020",
      location: "Colombo, Sri Lanka",
      description: "",
      highlights: [
        "Built Infor Testing as a Service, a platform Infor's internal product teams use to test their products, as part of a 20-person team.",
        "Developed Infor Test Case Manager, a test case management tool.",
        "Did ER modelling and Swagger API documentation, reviewed merge requests and mentored new joiners.",
      ],
      tech: [
        "Java 8",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Angular 6",
        "AWS Lambda",
        "SQS",
        "S3",
        "SNS",
        "PostgreSQL",
        "Hibernate",
        "Selenium",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "GT Nexus",
      period: "Mar 2016 — Oct 2016",
      location: "Colombo, Sri Lanka",
      description: "",
      highlights: [
        "ShipRight: an IoT and hybrid mobile app that tracks temperature, humidity and acceleration in pharmaceutical shipping containers.",
        "Student Enrollment System: a web app for student enrollment and attendance using RFID.",
      ],
      tech: ["Java", "JSP/Servlet", "ReactJS", "MySQL", "Python", "Raspberry Pi", "Arduino", "Ionic"],
    },
  ],

  education: [
    {
      degree: "BSc (Hons) in Information Technology",
      school: "University of Moratuwa",
      period: "2013 — 2017",
    },
    {
      degree: "G.C.E. Advanced Level — Physical Science Stream",
      school: "St. Anne's College, Kurunegala",
      period: "2008 — 2011",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Java", "TypeScript", "JavaScript", "Groovy", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "Spring Data JPA", "Spring Security", "Hibernate", "Angular", "Node.js", "JUnit", "Mockito"],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Jenkins",
        "GitLab CI/CD",
        "IBM UrbanCode Deploy",
        "AWS (Lambda, EC2, S3, SQS, SNS, CloudWatch, CloudFormation)",
        "Sonar",
        "Sumo Logic",
      ],
    },
    {
      category: "Data & Tools",
      items: ["PostgreSQL", "MySQL", "Liquibase", "Git", "Maven", "npm", "JIRA", "Confluence", "Linux"],
    },
    {
      category: "Practices",
      items: ["Agile / Scrum", "Design Patterns", "SOLID", "TDD", "REST APIs", "UML"],
    },
  ],

  languages: [
    { name: "Sinhala", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],
};

export type Bio = typeof bio;
