export const myProjects = [
  {
    id: 1,
    title: "Expedia Hotel Booking Analysis",
    description:
      "Analyzed hotel booking behaviors using historical Expedia data to uncover trends and customer segmentation strategies.",
    subDescription: [
      "Conducted data cleaning, transformation, and exploration using Pandas and NumPy.",
      "Built visual dashboards with Power BI/Tableau to illustrate booking trends and pricing insights.",
      "Performed segmentation to identify customer clusters using K-Means and PCA.",
      "Extracted and analyzed booking patterns with SQL queries.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mananpdesai/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "CVS Health",
    job: "Data Analyst",
    date: "May 2024 - Present",
    contents: [
      "Engineered an Alerts and Monitoring system using Python and AWS Lambda, boosting system runtime efficiency by 25%",
      "Consolidated data from 10+ databases using SQL, Oracle, and AWS Redshift; automated ETL to cut retrieval time by 60%",
      "Spearheaded development of HIPAA-compliant emergency response tool; liaised with stakeholders across 5+ teams using Waterfall methodology",
      "Deployed 4 interactive Power BI dashboards; enabled real-time KPI tracking and improved care delivery by 20%",
      "Skills: Python, SQL, Oracle, AWS Lambda, AWS Redshift, ETL, Power BI, HIPAA Compliance, Waterfall",
    ],
  },
  {
    title: "Independent Research Project",
    job: "Research Analyst",
    date: "May 2024 - Present",
    contents: [
      "Conducted a large-scale strategic transformation study across 271 CEO transitions; identified 24% of variance in post-succession strategic changes attributable to TMT replacements",
      "Constructed Python-based data pipelines to clean, preprocess, and structure datasets for analytical modeling",
      "Executed hypothesis testing and multivariate regression to extract causal insights from organizational data",
      "Collaborated with CTO to derive and deliver strategic recommendations to executive teams",
      "Skills: Python, Data Analysis, Regression Modeling, Hypothesis Testing, Data Cleaning, Data Visualization",
    ],
  },
  {
    title: "Rutgers Business School ",
    job: "Adjunct Professor",
    date: "Jan 2024 - Dec 2024",
    contents: [
      "Delivered lectures for two courses totaling 94 students; taught Excel, MS Access, and Tableau, achieving a 100% pass rate",
      "Developed over 10 BI-focused assignments using marketing analytics and data warehousing tools",
      "Skills: Advanced Excel, MS Access, Tableau, Data Governance, Data Warehousing, Business Intelligence",
    ],
  },
  {
    title: "Genpact",
    job: "Senior Data Analyst",
    date: "Mar 2021 - Aug 2023",
    contents: [
      "Automated 6 ETL pipelines using Python (Pandas, NumPy, Scikit-learn) and Azure Data Factory; reduced turnaround from 2 days to 12 hrs",
      "Built 3 Tableau dashboards for the Early Talent Team; reduced analysis time by 35%",
      "Created EDA-based predictive model; improved revenue by 15%, customer retention by 20%",
      "Led Agile/Scrum delivery across 5 business units using JIRA",
      "Tuned SQL Server; reduced report generation time by 45% across 10+ finance processes",
      "Skills: SQL Server, Python, Azure Data Factory, Tableau, EDA, Agile, Scrum, JIRA",
    ],
  },
  {
    title: "IBM",
    job: "Data Science Intern",
    date: "Jul 2022 - Sept 2022",
    contents: [
      "Queried 1.2M+ records with SQL; designed dashboards in Google Data Studio for KPI tracking",
      "Enhanced chat UX via Figma designs; reduced user interaction time by 20%, increased satisfaction scores by 35%",
      "Skills: SQL, Google Data Studio, Power BI, Figma, KPI Tracking, UX Design, Data Visualization",
    ],
  },
];

export const reviews = [
  {
    name: "Arjun Patel",
    username: "@mike_w",
    body: "Working with Manan is like having a secret weapon — always sharp and reliable!",
    img: "https://robohash.org/arjunpatel",
  },
  {
    name: "Sara Johnson",
    username: "@sara_j",
    body: "Manan’s ideas spark creativity in the whole team — pure inspiration!",
    img: "https://robohash.org/sarajohnson",
  },
  {
    name: "Ravi Kumar",
    username: "@ravik",
    body: "He’s the guy who turns complex problems into simple wins.",
    img: "https://robohash.org/ravikumar",
  },
  {
    name: "Emily Davis",
    username: "@em_davis",
    body: "Manan’s energy is contagious — makes working together a joy.",
    img: "https://robohash.org/emilydavis",
  },
  {
    name: "Priya Singh",
    username: "@priya_s",
    body: "A powerhouse of passion and precision in every project.",
    img: "https://robohash.org/priyasingh",
  },
  {
    name: "Michael Brown",
    username: "@mikeb",
    body: "Fresh ideas? Check. Great attitude? Double check. Manan’s got it all!",
    img: "https://robohash.org/michaelbrown",
  },
  {
    name: "Sneha Sharma",
    username: "@snehash",
    body: "Sharp, driven, and always pushing the team forward.",
    img: "https://robohash.org/snehasharma",
  },
  {
    name: "David Wilson",
    username: "@dave_w",
    body: "When Manan’s on the team, success feels inevitable.",
    img: "https://robohash.org/davidwilson",
  },
];

