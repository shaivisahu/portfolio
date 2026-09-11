const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const internshipData = [
  {
    role: 'AI Product Development Internship',
    company: 'Samatrix Consulting Private Limited',
    duration: 'Jun 2025 – Jul 2025',
    summary: 'Worked on AI-based product development and model integration while contributing to backend logic and API design.',
    highlights: [
      'Worked on AI-based product development and model integration',
      'Contributed to backend logic and API design',
      'Collaborated in a team to build scalable solutions',
    ],
  },
];

const certificateData = [
  { title: 'Building with the Claude API', issuer: 'Anthropic', year: '2025', link: 'https://drive.google.com/file/d/1voNAopobp8_jHtUMWBCjM5hoGSWdJma8/view?usp=drive_link' },
  { title: 'AI Fluency: Framework & Foundations', issuer: 'AI Fluency', year: '2025', link: 'https://verify.skilljar.com/c/wzw6ru6eru7y' },
  { title: 'Software Engineer Certificate', issuer: 'HackerRank', year: '2025', link: 'https://www.hackerrank.com/certificates/iframe/8c20611611af' },
  { title: 'Microsoft Azure Fundamentals – Describe Cloud Concepts', issuer: 'Microsoft Azure', year: '2025', link: 'https://learn.microsoft.com/api/achievements/share/en-us/shaivisahu-1300/9Y79Q7EU?sharingId=90F9A7CDD3551703' },
  { title: 'ISRO Hackathon Participation', issuer: 'ISRO', year: '2025', link: 'https://drive.google.com/file/d/1pm-iRJboEy5AsS56Kx7z-_P3bbCdCfB-/view?usp=drive_link' },
  { title: 'Introduction to Cloud Infrastructure – Azure Architecture & Services', issuer: 'Microsoft Azure', year: '2025', link: 'https://learn.microsoft.com/api/achievements/share/en-us/shaivisahu-1300/AK4FD8Y7?sharingId=90F9A7CDD3551703' },
  { title: 'Accenture Software Engineering Job Simulation', issuer: 'Accenture', year: '2025', link: 'https://shaivisahu.github.io/personal-portfolio.github.io/accenture.pdf' },
];

const projectData = [
  {
    name: 'UPI without Internet',
    area: 'Offline payments',
    stack: 'Java • Spring Boot • Spring Web • REST APIs • Thymeleaf • Spring Data JPA • H2 • Maven • Jackson • Bean Validation • Embedded Tomcat',
    description: 'Developed an offline UPI payment prototype enabling transaction processing through a Bluetooth Mesh-based architecture without internet connectivity.',
    primaryLink: 'https://github.com/shaivisahu/UPI-without-Internet',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Authentication Server',
    area: 'Backend security',
    stack: 'Java • Spring Boot • Spring Security • JWT Authentication • MySQL • RESTful APIs',
    description: 'Designed and implemented a secure authentication server using Spring Boot and Spring Security with JWT-based authentication and RESTful APIs.',
    primaryLink: 'https://github.com/shaivisahu/Authentication-Server',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Fitness Tracker (Microservices Architecture)',
    area: 'Backend architecture',
    stack: 'Java • Spring Boot • Microservices • MongoDB • PostgreSQL • Maven',
    description: 'Built a scalable fitness tracking platform with AI-powered suggestions using microservices architecture.',
    primaryLink: 'https://github.com/shaivisahu/fitness-microservices',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Stock Price Prediction Model',
    area: 'Machine learning',
    stack: 'Python • Machine Learning • LSTM',
    description: 'Developed an LSTM-based stock price prediction model achieving improved trend forecasting accuracy using historical market data.',
    primaryLink: 'https://github.com/shaivisahu/Stock-Price-Prediction-Model-',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Personalized Learning Platform',
    area: 'Full-stack learning platform',
    stack: 'Java • Spring Boot • REST APIs • MySQL • Recommendation Workflows',
    description: 'Learning platform work focused on recommendation-ready APIs, quiz/workflow modules, and persistent application data.',
    primaryLink: 'https://github.com/shaivisahu/personlized-learning-platformm',
    primaryLabel: 'Repository ↗',
  },
  {
    name: 'Chat App',
    area: 'Full-stack realtime app',
    stack: 'React • Spring Boot • JWT • MySQL • REST APIs • WebSockets',
    description: 'Real-time chat application work combining a React frontend with Spring Boot backend services, authentication, and WebSockets.',
    primaryLink: 'https://github.com/shaivisahu/Chat-App',
    primaryLabel: 'Repository ↗',
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
  grid.innerHTML = items.map((project) => `
    <article class="project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <small>${project.area}</small>
      <span>${project.stack}</span>
      <div class="project-links">
        <a href="${project.primaryLink}" target="_blank" rel="noreferrer">${project.primaryLabel}</a>
      </div>
    </article>
  `).join('');

  const languages = new Set(items.flatMap((item) => item.stack.split('•').map((token) => token.trim()).filter(Boolean)));
  projectCount.textContent = `${items.length} project${items.length === 1 ? '' : 's'}`;
  languageCount.textContent = `${languages.size} keywords`;

  if (query && items.length === 0) {
    searchState.textContent = `No projects matched "${query}". Try "java", "spring", "python", or "AI".`;
  } else if (query) {
    searchState.textContent = `Showing ${items.length} result${items.length === 1 ? '' : 's'} for "${query}".`;
  } else {
    searchState.textContent = 'Showing projects highlighted in your latest resume.';
  }
}

function renderInternships(items) {
  internshipList.innerHTML = items.map((item) => `
    <article class="timeline-item">
      <h3>${item.role}</h3>
      <p class="meta">${item.company} • ${item.duration}</p>
      <p>${item.summary}</p>
      <ul>${item.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderCertificates(items) {
  certificateList.innerHTML = items.map((item) => `
    <article class="cert-card">
      <h3>${item.title}</h3>
      <p>${item.issuer} • ${item.year}</p>
      <a href="${item.link}" target="_blank" rel="noreferrer">View Certificate ↗</a>
    </article>
  `).join('');
}

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  const filtered = projectData.filter((project) => `${project.name} ${project.area} ${project.stack} ${project.description}`.toLowerCase().includes(query));
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