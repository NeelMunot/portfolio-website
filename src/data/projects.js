const projects = [
  {
    title: "RAG based Chatbot",
    shortDescription: "React.js, Python, REST APIs based intelligent chatbot using RAG architecture",
    description: `Developed a Retrieval-Augmented Generation (RAG) chatbot leveraging LlamaIndex and Google Gemini for highly accurate and context-aware automated responses. Built a vector store using scraped data, employing efficient text vectorization and document indexing techniques for optimal performance. Built a modular architecture enabling seamless addition of domain-specific data to knowledgebase.`,
    technologies: ["React.js", "Python", "REST APIs", "LlamaIndex", "Google Gemini"],
    githubLink: "https://github.com/yourusername/rag-chatbot"
  },
  {
    title: "Vidyarthi Sahayyak Samiti",
    shortDescription: "Flutter & Firebase based NGO management application",
    description: `Led a team to develop and deploy an Android app for an NGO within three months, enhancing hostel management and student services. Spearheaded digital transformation by implementing an ERP system to replace pen-and-paper records. Managed app security, including architecture design, authentication, and privacy policy formulation.`,
    technologies: ["Flutter", "Firebase", "Cloud Firestore"],
    playStoreLink: "https://play.google.com/store/apps/details?id=your.app.id",
    downloads: "500+ downloads in first month"
  },
  {
    title: "Mini Projects",
    shortDescription: "Collection of various technical implementations on Google Cloud Platform",
    subProjects: [
      {
        category: "Python",
        projects: [
          {
            name: "Tic-Tac-Toe Game",
            link: "https://github.com/yourusername/tictactoe"
          },
          {
            name: "Full Battery Alert",
            link: "https://github.com/yourusername/battery-alert"
          }
        ]
      },
      {
        category: "Google Cloud Platform",
        projects: [
          {
            name: "Cloud Security Fundamentals",
            link: "https://www.cloudskillsboost.google/public_profiles/your-profile"
          },
          {
            name: "Secure Google Cloud Network",
            link: "https://www.cloudskillsboost.google/public_profiles/your-profile"
          },
          {
            name: "App Dev Environment Setup",
            link: "https://www.cloudskillsboost.google/public_profiles/your-profile"
          },
          {
            name: "Load Balancing on Compute Engine",
            link: "https://www.cloudskillsboost.google/public_profiles/your-profile"
          },
          {
            name: "Google Cloud Network Development",
            link: "https://www.cloudskillsboost.google/public_profiles/your-profile"
          }
        ]
      }
    ]
  },
  {
    title: "College Website Chatbot",
    shortDescription: "Menu-driven chatbot implementation",
    description: "Developed and integrated a menu-driven chatbot using HTML, CSS, and JavaScript, optimizing the user interface and enhancing overall website user experience within project timelines.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yourusername/college-chatbot"
  }
];

export default projects;
