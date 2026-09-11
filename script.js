const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const internshipData = [
  {
    role: 'AI Product Development Intern',
    company: 'Samatrix Consulting Private Limited',
    duration: '2025',
    summary:
      'Contributed to practical product-development workflows involving statistical analysis, data preparation, and machine learning concepts.',
    highlights: [
      'Applied machine learning concepts to practical business problems',
      'Worked with data cleaning, analysis, and insight generation',
      'Strengthened practical understanding of AI/ML product workflows',
    ],
  },
];

const certificateData = [
  {
    title: 'Microsoft Azure Fundamentals – Describe Cloud Concepts',
    issuer: 'Microsoft / Azure',
    year: '2025',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
  },
  {
    title: 'Introduction to Cloud Infrastructure – Azure Architecture & Services',
    issuer: 'Microsoft Azure',
    year: '2025',
    link: 'https://learn.microsoft.com/en-us/azure/architecture/',
  },
  {
    title: 'J.P. Morgan Software Engineering Virtual Experience',
    issuer: 'J.P. Morgan',
    year: '2025',
    link: 'https://www.theforage.com/simulations/jpmorgan/software-engineering-v1i3',
  },
  {
    title: 'Accenture Software Engineering Job Simulation',
    issuer: 'Accenture',
    year: '2025',
    link: 'https://www.theforage.com/simulations/accenture/software-engineering-p3ju',
  },
  {
    title: 'ISRO Hackathon Participation',
    issuer: 'ISRO',
    year: '2025',
    link: 'https://www.isro.gov.in/',
  },
];

const projectData = [
  {
    name: 'Fitness Tracker – Microservices Architecture',
    area: 'Backend architecture',
    stack: 'Java • Spring Boot • Microservices • MongoDB • PostgreSQL • Maven',
    description:
      'Built a scalable fitness tracking platform using microservices architecture, with backend services designed for maintainability and future AI-powered recommendations.',
    primaryLink: 'https://github.com/shaivisahu/fitness-microservices',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Personalized Learning Platform',
    area: 'Full-stack learning platform',
    stack: 'Java • Spring Boot • REST APIs • MySQL • Recommendation Workflows',
    description:
      'Learning-focused platform designed around recommendation-ready APIs, quiz/workflow modules, and persistent user data.',
    primaryLink: 'https://github.com/shaivisahu',
    primaryLabel: 'GitHub ↗',
  },
  {
    name: 'Authentication Server',
    area: 'Backend security',
    stack: 'Java • Spring Boot • Spring Security • JWT • MySQL • REST APIs',
    description:
      'Developed a secure authentication backend using JWT, Spring Security, and REST APIs as a foundation for full-stack applications.',
    primaryLink: 'https://github.com/shaivisahu',
    primaryLabel: 'GitHub ↗',
  },
  {
    name: 'ChatApp',
    area: 'Full-stack realtime app',
    stack: 'React • Spring Boot • JWT • MySQL • REST APIs • WebSockets',
    description:
      'Built a real-time chat application combining a React frontend with Spring Boot services, JWT authentication, and WebSocket-based messaging.',
    primaryLink: 'https://github.com/shaivisahu',
    primaryLabel: 'GitHub ↗',
  },
  {
    name: 'Stock Price Prediction Model',
    area: 'ML forecasting',
    stack: 'Python • LSTM • scikit-learn • pandas',
    description:
      'Built an ML forecasting project using Python-based data processing and LSTM modeling to explore stock-price prediction.',
    primaryLink: 'https://github.com/shaivisahu/Stock-Price-Prediction-Model-',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Face Recognition System',
    area: 'AI/ML + computer vision',
    stack: 'Python • OpenCV • Machine Learning',
    description:
      'Computer-vision project exploring face detection and recognition with Python and OpenCV-based tooling.',
    primaryLink: 'https://github.com/shaivisahu/Face-Recognition-System',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Supply Chain Risk App',
    area: 'Applied analytics',
    stack: 'Python • Analytics • Data Insights',
    description:
      'Applied analytics project focused on identifying and presenting supply-chain risk signals through a practical application workflow.',
    primaryLink: 'https://github.com/shaivisahu/supply_chain_risk_app',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'ATM Simulation System',
    area: 'OOP + database application',
    stack: 'Java • MySQL • JDBC • OOP',
    description:
      'Built a Java ATM simulator covering authentication, transactions, balance management, and database-backed workflows.',
    primaryLink: 'https://github.com/shaivisahu/ATM-simulation-System',
    primaryLabel: 'Repository ↗',
    secondaryLink: 'https://shaivisahu.github.io/ATM-simulation-System/',
    secondaryLabel: 'Live Demo ↗',
  },
  {
    name: 'Racing Game',
    area: 'Frontend + game logic',
    stack: 'JavaScript • HTML • CSS • DOM Events',
    description:
      'Browser-based racing game showcasing JavaScript interaction, DOM events, and gameplay logic.',
    primaryLink: 'https://github.com/shaivisahu/Racing-Game',
    primaryLabel: 'Repository ↗',
    secondaryLink: 'https://shaivisahu.github.io/Racing-Game/',
    secondaryLabel: 'Live Demo ↗',
  },
  {
    name: 'DSA Bootcamp – Java',
    area: 'DSA + interview preparation',
    stack: 'Java • Data Structures • Algorithms • Problem Solving',
    description:
      'Ongoing Java-based practice across data structures, algorithms, and interview-oriented problem solving.',
    primaryLink: 'https://github.com/shaivisahu/DSA-Bootcamp-Java',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Personal Portfolio Website',
    area: 'Web presence',
    stack: 'HTML • CSS • JavaScript • GitHub Pages',
    description:
      'Personal website for presenting projects, technical skills, experience, achievements, and recruiter-facing highlights.',
    primaryLink: 'https://shaivisahu.github.io/personal-portfolio.github.io/',
    primaryLabel: 'Live Demo ↗',
  },
];

const grid = document.getElementById('project-grid');
const search = document.getElementById('project-search');
const projectCount = document.getElementById('project-count');
const languageCount = document.getElementById('language-count');
const searchState = document.getElementById('search-state');
const internshipList = document.getElementById('internship-list');
const certificateList = document.getElementById('certificate-list');

function renderProjects(items, query = '') {
    grid.innerHTML = items
        .map(
            (project) => `
      <article class="project-card">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <small>${project.area}</small>
        <span>${project.stack}</span>
        <div class="project-links">
          <a href="${project.primaryLink}" target="_blank" rel="noreferrer">${project.primaryLabel}</a>
          ${project.secondaryLink ? `<a href="${project.secondaryLink}" target="_blank" rel="noreferrer">${project.secondaryLabel}</a>` : ''}
        </div>
      </article>
    `,
        )
        .join('');

    const languages = new Set(
        items.flatMap((item) => item.stack.split('•').map((token) => token.trim()).filter(Boolean)),
    );

    projectCount.textContent = `${items.length} project${items.length === 1 ? '' : 's'}`;
    languageCount.textContent = `${languages.size} keywords`;

    if (query && items.length === 0) {
        searchState.textContent = `No projects matched "${query}". Try "java", "python", "spring", or "frontend".`;
    } else if (query) {
        searchState.textContent = `Showing ${items.length} result${items.length === 1 ? '' : 's'} for "${query}".`;
    } else {
        searchState.textContent = 'Showing all projects.';
    }
}

function renderInternships(items) {
    internshipList.innerHTML = items
        .map(
            (item) => `
      <article class="timeline-item">
        <h3>${item.role}</h3>
        <p class="meta">${item.company} • ${item.duration}</p>
        <p>${item.summary}</p>
        <ul>
          ${item.highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
      </article>
    `,
    )
    .join('');
}

function renderCertificates(items) {
  certificateList.innerHTML = items
    .map(
      (item) => `
      <article class="cert-card">
        <h3>${item.title}</h3>
        <p>${item.issuer} • ${item.year}</p>
        <a href="${item.link}" target="_blank" rel="noreferrer">View Credential / Reference ↗</a>
      </article>
    `,
    )
    .join('');
}

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  const filtered = projectData.filter((project) => {
    const blob = `${project.name} ${project.area} ${project.stack} ${project.description}`.toLowerCase();
    return blob.includes(query);
  });
  renderProjects(filtered, query);
});

renderProjects(projectData);
renderInternships(internshipData);
renderCertificates(certificateData);

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: 65 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: Math.random() * 2 + 0.5,
  }));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();