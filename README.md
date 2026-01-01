# DevOps Project Implementation

This project implements a comprehensive DevOps setup with Infrastructure as Code (IaC) and CI/CD pipelines across multi-cloud environments (AWS, Azure, GCP).

## Phase 1: Environment Setup & IaC

### Multi-Cloud Account Setup
1. **AWS Free Tier**: Sign up at [aws.amazon.com/free](https://aws.amazon.com/free). Create an IAM user with programmatic access and note the Access Key ID and Secret Access Key.
2. **Azure Free Tier**: Sign up at [azure.microsoft.com/free](https://azure.microsoft.com/free). Create a service principal for automation.
3. **GCP Free Tier**: Sign up at [cloud.google.com/free](https://cloud.google.com/free). Create a service account key.

### Terraform Modules
Terraform configurations are in the `terraform/` directory. Each cloud has its own module.

To run:
```bash
cd terraform/aws
terraform init
terraform plan
terraform apply
```

### Ansible Playbooks
Baseline configuration playbooks are in `ansible/`.

Run with:
```bash
ansible-playbook playbook.yml
```

### Academic Components
- Research paper: [docs/iac_comparison.md](docs/iac_comparison.md)
- Cost analysis: [docs/cost_analysis.md](docs/cost_analysis.md)

## Phase 2: CI/CD Pipeline

### GitHub Actions Workflow
The CI/CD pipeline is defined in `.github/workflows/ci-cd.yml`.

It includes:
- Code quality with SonarQube
- Docker build
- Security scanning with Trivy
- Automated testing

### Jenkins Alternative
Jenkins pipeline DSL is in `ci-cd/Jenkinsfile`.

### Artifact Management
Artifacts are stored in GitHub Packages or Docker Hub.

### Academic Components
- CI/CD tools comparison: [docs/cicd_comparison.md](docs/cicd_comparison.md)
- Performance metrics: [docs/pipeline_metrics.md](docs/pipeline_metrics.md)

## Running the Project

1. Set up cloud accounts.
2. Run Terraform for infrastructure.
3. Deploy with Ansible.
4. Push code to trigger CI/CD.

## Testing

Run tests with:
```bash
npx jest
```

This will run the automated tests in the `tests/` directory.

## Docker Usage
All tools are containerized for easy setup.

For example, to run Terraform:
```bash
docker run --rm -v $(pwd):/workspace -w /workspace/terraform/aws hashicorp/terraform init
```