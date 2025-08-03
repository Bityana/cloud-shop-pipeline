# Cloud-Shop Pipeline

Cloud-Shop is a demo e‑commerce storefront built to showcase **AWS DevOps**, **secure CI/CD**, and **full‑stack** chops in one repo.

## Quick diagram
```
React (Vite) --> ALB ---> ECS (FastAPI) --> RDS
                      \-> CloudWatch -> OpenSearch
```
<details><summary>Show more</summary>

### Features
* Terraform‑provisioned VPC, ALB, ECS Fargate, RDS PostgreSQL, OpenSearch
* GitHub Actions pipeline: test → Snyk scan → SBOM → build/push → deploy
* Stripe test checkout
* End‑to‑end logs searchable in Kibana dashboard

### Local dev
```bash
docker compose -f docker-compose.dev.yml up --build
```
Then hit <http://localhost:3000>.

### One‑click deploy
```bash
cd infra/terraform
terraform init
terraform apply
```

### Security add‑ons
* Snyk test in workflow
* Syft SBOM upload as build artifact
* CIS‑hardened Fargate base image

</details>
