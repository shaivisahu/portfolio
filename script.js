const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const internshipData = [
  {
    role: 'AI Product Development Internship',
    company: 'Samatrix Consulting Private Limited',
    duration: 'Jun 2025 – Jul 2025',
    summary: 'Worked on AI-based product development and model integration while contributing to backend logic and API design.',
    highlights: ['Worked on AI-based product development and model integration','Contributed to backend logic and API design','Collaborated in a team to build scalable solutions'],
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
  { name:'UPI without Internet', area:'Offline payments', stack:'Java • Spring Boot • Spring Web • REST APIs • Thymeleaf • Spring Data JPA • H2 • Maven • Jackson • Bean Validation • Embedded Tomcat', description:'Developed an offline UPI payment prototype enabling transaction processing through a Bluetooth Mesh-based architecture without internet connectivity.', primaryLink:'https://github.com/shaivisahu/UPI-without-Internet', primaryLabel:'Repository ↗' },
  { name:'Authentication Server', area:'Backend security', stack:'Java • Spring Boot • Spring Security • JWT Authentication • MySQL • RESTful APIs', description:'Designed and implemented a secure authentication server using Spring Boot and Spring Security with JWT-based authentication and RESTful APIs.', primaryLink:'https://github.com/shaivisahu/Authentication-Server', primaryLabel:'Repository ↗' },
  { name:'Fitness Tracker (Microservices Architecture)', area:'Backend architecture', stack:'Java • Spring Boot • Microservices • MongoDB • PostgreSQL • Maven', description:'Built a scalable fitness tracking platform with AI-powered suggestions using microservices architecture.', primaryLink:'https://github.com/shaivisahu/fitness-microservices', primaryLabel:'Repository ↗' },
  { name:'Stock Price Prediction Model', area:'Machine learning', stack:'Python • Machine Learning • LSTM', description:'Developed an LSTM-based stock price prediction model achieving improved trend forecasting accuracy using historical market data.', primaryLink:'https://github.com/shaivisahu/Stock-Price-Prediction-Model-', primaryLabel:'Repository ↗' },
  { name:'Personalized Learning Platform', area:'Full-stack learning platform', stack:'Java • Spring Boot • REST APIs • MySQL • Recommendation Workflows', description:'Learning platform work focused on recommendation-ready APIs, quiz/workflow modules, and persistent application data.', primaryLink:'https://github.com/shaivisahu/personlized-learning-platformm', primaryLabel:'Repository ↗' },
  { name:'Chat App', area:'Full-stack realtime app', stack:'React • Spring Boot • JWT • MySQL • REST APIs • WebSockets', description:'Real-time chat application work combining a React frontend with Spring Boot backend services, authentication, and WebSockets.', primaryLink:'https://github.com/shaivisahu/Chat-App', primaryLabel:'Repository ↗' },
];

const grid=document.getElementById('project-grid'); const search=document.getElementById('project-search'); const projectCount=document.getElementById('project-count'); const languageCount=document.getElementById('language-count'); const searchState=document.getElementById('search-state'); const internshipList=document.getElementById('internship-list'); const certificateList=document.getElementById('certificate-list');
function renderProjects(items,query=''){grid.innerHTML=items.map(project=>`<article class="project-card"><h3>${project.name}</h3><p>${project.description}</p><small>${project.area}</small><span>${project.stack}</span><div class="project-links"><a href="${project.primaryLink}" target="_blank" rel="noreferrer">${project.primaryLabel}</a></div></article>`).join('');const languages=new Set(items.flatMap(item=>item.stack.split('•').map(token=>token.trim()).filter(Boolean)));projectCount.textContent=`${items.length} project${items.length===1?'':'s'}`;languageCount.textContent=`${languages.size} keywords`;if(query&&items.length===0)searchState.textContent=`No projects matched "${query}". Try "java", "spring", "python", or "AI".`;else if(query)searchState.textContent=`Showing ${items.length} result${items.length===1?'':'s'} for "${query}".`;else searchState.textContent='Showing projects highlighted in your latest resume.';}
function renderInternships(items){internshipList.innerHTML=items.map(item=>`<article class="timeline-item"><h3>${item.role}</h3><p class="meta">${item.company} • ${item.duration}</p><p>${item.summary}</p><ul>${item.highlights.map(h=>`<li>${h}</li>`).join('')}</ul></article>`).join('');}
function renderCertificates(items){certificateList.innerHTML=items.map(item=>`<article class="cert-card"><h3>${item.title}</h3><p>${item.issuer} • ${item.year}</p><a href="${item.link}" target="_blank" rel="noreferrer">View Certificate ↗</a></article>`).join('');}
search.addEventListener('input',()=>{const query=search.value.trim().toLowerCase();const filtered=projectData.filter(project=>`${project.name} ${project.area} ${project.stack} ${project.description}`.toLowerCase().includes(query));renderProjects(filtered,query);});
renderProjects(projectData);renderInternships(internshipData);renderCertificates(certificateData);

const canvas=document.getElementById('particle-canvas');const ctx=canvas.getContext('2d');let particles=[];
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;particles=Array.from({length:65},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,size:Math.random()*2+.5}));}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle='rgba(56, 189, 248, 0.55)';ctx.fill();});requestAnimationFrame(draw);}
window.addEventListener('resize',resize);resize();draw();

// Lightweight portfolio/resume chatbot. It runs entirely in the browser and needs no API key.
const chatWindow=document.getElementById('chat-window');const chatForm=document.getElementById('chat-form');const chatInput=document.getElementById('chat-input');
const chatbotAnswers=[
 {keys:['project','projects','built','work on','portfolio'],answer:`Shaivi's portfolio highlights 6 projects: <strong>UPI without Internet</strong>, <strong>Authentication Server</strong>, <strong>Fitness Tracker (Microservices Architecture)</strong>, <strong>Stock Price Prediction Model</strong>, <strong>Personalized Learning Platform</strong>, and <strong>Chat App</strong>. They cover Java/Spring Boot, REST APIs, security, microservices, databases, React/WebSockets, and machine learning.`},
 {keys:['upi','offline payment','bluetooth mesh'],answer:`<strong>UPI without Internet</strong> is a Java/Spring Boot prototype for offline UPI transaction processing using a Bluetooth Mesh-based architecture. Its stack includes Spring Web, REST APIs, Thymeleaf, Spring Data JPA, H2, Maven, Jackson, Bean Validation, and Embedded Tomcat.`},
 {keys:['authentication','jwt','security server'],answer:`<strong>Authentication Server</strong> is a secure backend built with Java, Spring Boot, Spring Security, JWT Authentication, MySQL, and RESTful APIs.`},
 {keys:['fitness','microservice','microservices'],answer:`<strong>Fitness Tracker</strong> is a scalable fitness tracking platform using Java, Spring Boot, microservices, MongoDB, PostgreSQL, and Maven, with AI-powered suggestions.`},
 {keys:['stock','lstm','prediction','machine learning','ml'],answer:`<strong>Stock Price Prediction Model</strong> uses Python, machine learning, and LSTM to forecast trends from historical market data.`},
 {keys:['learning platform','personalized learning','recommendation'],answer:`<strong>Personalized Learning Platform</strong> uses Java, Spring Boot, REST APIs, MySQL, and recommendation workflows, with quiz/workflow modules and persistent application data.`},
 {keys:['chat app','websocket','real time','realtime'],answer:`<strong>Chat App</strong> combines React and Spring Boot with JWT, MySQL, REST APIs, and WebSockets for real-time communication.`},
 {keys:['internship','experience','samatrix'],answer:`Shaivi completed an <strong>AI Product Development Internship</strong> at <strong>Samatrix Consulting Private Limited</strong> from <strong>June 2025 to July 2025</strong>. The work included AI-based product development, model integration, backend logic, API design, and collaboration on scalable solutions.`},
 {keys:['certificate','certification','certifications','achievement'],answer:`The portfolio lists 7 credentials: <strong>Building with the Claude API</strong>, <strong>AI Fluency: Framework & Foundations</strong>, <strong>Software Engineer Certificate (HackerRank)</strong>, <strong>Microsoft Azure Fundamentals – Describe Cloud Concepts</strong>, <strong>ISRO Hackathon Participation</strong>, <strong>Introduction to Cloud Infrastructure – Azure Architecture & Services</strong>, and <strong>Accenture Software Engineering Job Simulation</strong>.`},
 {keys:['skill','skills','technology','tech stack','technologies'],answer:`Key skills shown on the portfolio include <strong>Java, Python, JavaScript, Spring Boot, Spring Security, React, REST APIs, WebSockets, Microservices, Kafka, LLD, Git/GitHub, Docker, Kubernetes, AWS, MySQL, PostgreSQL, MongoDB, JDBC, DSA, DBMS, Machine Learning, and OpenCV</strong>.`},
 {keys:['java'],answer:`Java is one of Shaivi's main technologies. It appears across the UPI, Authentication Server, Fitness Tracker, Personalized Learning Platform, and Chat App projects, alongside Spring Boot and backend/API development.`},
 {keys:['spring boot','spring'],answer:`Spring Boot is a core backend technology in the portfolio, used for the UPI, Authentication Server, Fitness Tracker, Personalized Learning Platform, and Chat App projects.`},
 {keys:['contact','email','linkedin','github'],answer:`You can connect through the portfolio's <strong>GitHub</strong>, <strong>LinkedIn</strong>, or <strong>Email</strong> buttons at the top of the page.`}
];
function addChatMessage(text,sender='bot'){const bubble=document.createElement('div');bubble.className=`chat-message ${sender}`;bubble.innerHTML=text;chatWindow.appendChild(bubble);chatWindow.scrollTop=chatWindow.scrollHeight;}
function answerQuestion(question){const normalized=question.toLowerCase().trim();if(!normalized)return;addChatMessage(question,'user');const match=chatbotAnswers.find(item=>item.keys.some(key=>normalized.includes(key)));if(match)addChatMessage(match.answer);else addChatMessage(`I can answer questions about Shaivi's <strong>projects, internship, certifications, skills, technologies, and portfolio</strong>. Try asking: “What projects has she built?” or “Tell me about her internship.”`);}
addChatMessage(`Hi! 👋 I'm Shaivi's portfolio assistant. Ask me anything about the <strong>resume, projects, skills, internship, or certifications</strong>.`);
chatForm.addEventListener('submit',event=>{event.preventDefault();answerQuestion(chatInput.value);chatInput.value='';chatInput.focus();});
document.querySelectorAll('.chat-suggestions button').forEach(button=>button.addEventListener('click',()=>answerQuestion(button.dataset.question)));