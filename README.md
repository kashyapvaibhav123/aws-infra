# 🚀 AWS Automated Cloud Deployment Project

## 📌 Project Overview

This project demonstrates an end-to-end automated cloud deployment using:

- Infrastructure as Code (Terraform)
- Docker containerization
- CI/CD using GitHub Actions
- Secure secret management
- SSH key authentication
- Logging on EC2 instance

The application is deployed on AWS EC2 and automatically updates on every push to GitHub.

---

## 🏗 Architecture Diagram

```
                👨‍💻 Developer
                        │
                        ▼
              📂 GitHub Repository
                        │
                        ▼
          ⚙ GitHub Actions (CI/CD)
                        │
        ┌───────────────┼───────────────┐
        ▼                               ▼
 🐳 Build Docker Image          📦 Push Image to Docker Hub
                                                │
                                                ▼
                                      ☁ AWS EC2 Instance
                                                │
                                     ⬇ Pull Latest Image
                                                │
                                   🔁 Restart Docker Container
                                                │
                                                ▼
                                    🌍 Public IP Access
```

---

## 🔍 Architecture Explanation

The deployment architecture follows a fully automated CI/CD workflow:

1. Developer pushes code to GitHub.
2. GitHub Actions pipeline is triggered automatically.
3. Docker image is built and pushed to Docker Hub.
4. GitHub Actions securely connects to EC2 via SSH.
5. EC2 pulls the latest Docker image.
6. Existing container is stopped and replaced.
7. Updated application becomes accessible via Public IP.

This ensures zero manual deployment steps.

---

## 🧰 Tech Stack

| Category | Tools Used |
|----------|------------|
| Cloud Provider | AWS EC2 |
| Infrastructure as Code | Terraform |
| Containerization | Docker |
| CI/CD | GitHub Actions |
| Backend | Node.js (Express) |
| Operating System | Ubuntu Linux |

---

## ☁ Infrastructure Deployment (Terraform)

### Prerequisites

- AWS Account
- Terraform Installed
- AWS CLI Configured
- SSH Key Pair Created

### Steps

```bash
aws configure
terraform init
terraform plan
terraform apply
```

After apply completes, copy EC2 Public IPv4 Address from AWS Console.

---

## 🐳 Application Deployment (Docker)

```bash
docker build -t myapp ./app
docker login
docker tag myapp <docker-username>/myapp:latest
docker push <docker-username>/myapp:latest
```

---

## 🔄 CI/CD Pipeline

Deployment is automatically triggered on:

```bash
git add .
git commit -m "update"
git push
```

The workflow:
- Builds Docker image
- Pushes to Docker Hub
- SSH into EC2
- Pulls latest image
- Restarts container

---

## 🔐 Security Implementation

- No hardcoded secrets
- Docker Access Token used
- SSH key authentication
- Minimal open ports (80 public, 22 restricted)
- Environment variables used
- .gitignore configured

---

## 📊 Logging

Application logs stored on EC2:

```bash
docker exec -it myapp cat /var/log/myapp.log
```

---

## 🌍 Public Access

Application URL:

http://<EC2_PUBLIC_IP>

Health Check:

http://<EC2_PUBLIC_IP>/health

---

## 💰 Estimated AWS Cost Per Day

| Service | Estimated Cost |
|----------|----------------|
| EC2 t3.micro | ~$0.30/day |
| Data Transfer | Minimal |
| Total | ~$0.30 – $0.50/day |

---

## 🎥 Demonstration Video

A complete working demo explaining infrastructure, CI/CD, security, and logging has been recorded and submitted as required.
