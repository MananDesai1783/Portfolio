export const projects = [
  {
    name: "Expedia Hotel Booking Analysis",
    description: "Analyzed hotel booking data using Python and SQL to understand user behavior and improve recommendation systems.",
    subDescription: `
• Performed data preprocessing, handling missing values, and feature engineering on large-scale Expedia hotel booking datasets using Python (Pandas, NumPy).  
• Developed SQL queries to extract and aggregate user behavior data for exploratory data analysis.  
• Built a logistic regression model using Scikit-learn to predict booking probability based on user behavior.  
• Achieved 96% accuracy on test data by tuning hyperparameters and validating the model with cross-validation.  
• Visualized key trends and booking patterns using Seaborn and Matplotlib to aid business decision-making.
    `.trim(),
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 3, name: "SQL", path: "/assets/logos/sql.svg" },
      { id: 4, name: "Logistic Regression", path: "/assets/logos/regression.svg" },
    ],
    imageUrl: "/assets/images/expedia.png",
    href: "https://github.com/your-expedia-project",
    logo: "/assets/logos/expedia.svg",
  },
  {
    name: "Sentiment Analysis using LSTM",
    description: "Developed an LSTM-based sentiment analysis model using TensorFlow to classify IMDB movie reviews.",
    subDescription: `
• Preprocessed text data by removing stop words, stemming, and tokenization.  
• Built and trained LSTM models using TensorFlow and Keras to classify movie reviews as positive or negative.  
• Utilized word embeddings (Word2Vec/GloVe) for better semantic understanding.  
• Achieved over 90% test accuracy by tuning model parameters and implementing dropout layers.  
• Evaluated model performance using confusion matrix, precision, recall, and F1-score.
    `.trim(),
    tags: [
      { id: 1, name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
      { id: 2, name: "LSTM", path: "/assets/logos/lstm.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "NLP", path: "/assets/logos/nlp.svg" },
    ],
    imageUrl: "/assets/images/sentiment.png",
    href: "https://github.com/your-sentiment-lstm",
    logo: "/assets/logos/tensorflow.svg",
  },
  {
    name: "Stock Price Forecasting using ARIMA",
    description: "Used the ARIMA time-series model to forecast stock prices based on historical market data.",
    subDescription: `
• Collected and cleaned historical stock price data using Pandas and Yahoo Finance API.  
• Applied ADF test to check stationarity and differencing for non-stationary series.  
• Built ARIMA and SARIMA models using statsmodels to forecast future stock trends.  
• Tuned model parameters (p,d,q) using AIC/BIC criteria for optimal performance.  
• Visualized model predictions vs. actual trends using Matplotlib and Seaborn.
    `.trim(),
    tags: [
      { id: 1, name: "ARIMA", path: "/assets/logos/arima.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Time Series", path: "/assets/logos/time.svg" },
    ],
    imageUrl: "/assets/images/stock.png",
    href: "https://github.com/your-stock-arima",
    logo: "/assets/logos/python.svg",
  },
  {
    name: "C++ Game Engine",
    description: "Designed a custom 2D game engine using C++ and SDL2 with real-time rendering and collision detection.",
    subDescription: `
• Designed a basic 2D game engine architecture using object-oriented principles in C++.  
• Integrated SDL2 for graphics rendering, event handling, and real-time input processing.  
• Implemented core features such as scene management, physics engine, and sprite animation.  
• Utilized multithreading for asset loading and optimized game loop for consistent FPS.  
• Created a demo game to showcase engine capabilities including basic AI and collision detection.
    `.trim(),
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cpp.svg" },
      { id: 2, name: "OpenGL", path: "/assets/logos/opengl.svg" },
      { id: 3, name: "SDL2", path: "/assets/logos/sdl2.svg" },
      { id: 4, name: "Multithreading", path: "/assets/logos/thread.svg" },
    ],
    imageUrl: "/assets/images/game.png",
    href: "https://github.com/your-cpp-engine",
    logo: "/assets/logos/cpp.svg",
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

