# Cloud Shop Pipeline

| Layer | Folder | Tech |
|-------|--------|------|
| **CI / Automation** | `.github/workflows/` | GitHub Actions |
| **Backend** | `backend/` | FastAPI + PostgreSQL |
| **Frontend** | `frontend/` | React + Vite |
| **Infrastructure** | `infra/terraform/` | AWS EKS + RDS |

## Quick start

```bash
# 1. Spin up infra (Terraform)
cd infra/terraform
terraform init && terraform apply

# 2. Build & run services locally
cd ..
docker compose up --build
