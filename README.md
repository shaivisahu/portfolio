@@ -113,25 +113,86 @@ principles: [SOLID, Clean Code, API-first]
- ⚙️ **Core Capabilities:** Recommendation-ready API design, quiz/workflow modules, and MySQL-backed persistence.
- 📈 **Roadmap:** Add adaptive learning recommendations, instructor analytics, and deployment automation.

---

## 🗺️ Growth Tracker

- [x] Build an animated, coder-vibe GitHub profile.
- [x] Show live GitHub activity and progress widgets.
- [ ] Pin top 6 repositories focused on Java full-stack work (including the Personalized Learning Platform).
- [ ] Add architecture diagrams + setup guides to key repos.
- [ ] Publish technical posts on Java/Spring patterns.

---

## 📬 Connect

<p align="center">
  <a href="mailto:shaivisahu.dev@gmail.com"><img src="https://img.shields.io/badge/Email-Let's%20Connect-0ea5e9?style=for-the-badge&logo=gmail&logoColor=white&labelColor=111827" alt="Email"/></a>
  <a href="https://www.linkedin.com/in/shaivi-sahu"><img src="https://img.shields.io/badge/LinkedIn-Professional%20Network-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=111827" alt="LinkedIn"/></a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:7c3aed,35:2563eb,70:0d9488,100:0b1020" alt="footer"/>
</p>

---

## 🌐 Detailed Portfolio + Project Archive (Kubernetes-ready)

This repository now includes a deployable portfolio website (`portfolio/`) that is aligned with your real GitHub work.

### 📌 Highlighted work from your Git history

| Project | Area | Stack | Links |
|---|---|---|---|
| `fitness-microservices` | Backend architecture | Java, Microservices | [Repo](https://github.com/shaivisahu/fitness-microservices) |
| `Face-Recognition-System` | AI/ML + CV | Python, OpenCV | [Repo](https://github.com/shaivisahu/Face-Recognition-System) |
| `supply_chain_risk_app` | Applied analytics | Python | [Repo](https://github.com/shaivisahu/supply_chain_risk_app) |
| `Stock-Price-Prediction-Model-` | ML forecasting | Python, scikit-learn, pandas | [Repo](https://github.com/shaivisahu/Stock-Price-Prediction-Model-) |
| `ATM-simulation-System` | OOP simulation | Java | [Repo](https://github.com/shaivisahu/ATM-simulation-System), [Live](https://shaivisahu.github.io/ATM-simulation-System/) |
| `Racing-Game` | Frontend/game logic | JavaScript | [Repo](https://github.com/shaivisahu/Racing-Game), [Live](https://shaivisahu.github.io/Racing-Game/) |
| `personal-portfolio.github.io` | Web presence | HTML, CSS | [Repo](https://github.com/shaivisahu/personal-portfolio.github.io), [Live](https://shaivisahu.github.io/personal-portfolio.github.io/) |
| `DSA-Bootcamp-Java` | DSA practice | Java | [Repo](https://github.com/shaivisahu/DSA-Bootcamp-Java) |

### What I improved in this repo
- Added a detailed one-page portfolio under `portfolio/` with:
  - Career snapshot
  - Multi-project grid using your actual repository work
  - Internship experience section
  - Certificates & achievements section
  - Direct links to repository/live demos
  - Better structure for future recruiter-facing updates
- Kept it deployable via Docker + Kubernetes manifests in `k8s/`.

### Run locally
```bash
python3 -m http.server 8080 --directory portfolio
```
Open `http://localhost:8080`.

### Containerize
```bash
docker build -t ghcr.io/shaivisahu/portfolio:latest .
```

### Deploy on Kubernetes
```bash
# 1) Build and push your image
docker build -t ghcr.io/shaivisahu/portfolio:latest .
docker push ghcr.io/shaivisahu/portfolio:latest

# 2) Deploy resources
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/ingress.yaml

# 3) Verify rollout
kubectl rollout status deployment/portfolio
kubectl get pods,svc,ingress
```

### Next upgrades I recommend
- Add one screenshot/GIF per project card.
- Add a Spring Boot contact service + email workflow.
- Add CI/CD (`build -> push -> deploy`) using GitHub Actions.
- Add real domain + TLS (cert-manager + Let's Encrypt).