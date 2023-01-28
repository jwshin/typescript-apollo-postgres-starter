# TypeScript Apollo Postgres Starter

This starter uses the following stack:

- TypeScript
- Express
- Apollo Server
- Postgresql
- Postgres.js
- Postgres Migrations
- Docker

Setup Postgresql with Terraform:
```shell
cd terraform
terraform init
terraform apply
```

Install the local package dependencies:

```shell
npm install
```

You can now run your server locally:

```shell
npm run dev
```

---
Run ES Lint checks
```shell
npm run eslint
```

Format using Prettier
```shell
npm run prettier
```

---
Docker image build

```shell
make build
```

You can now run your server locally, with Docker:

```shell
make run
```
