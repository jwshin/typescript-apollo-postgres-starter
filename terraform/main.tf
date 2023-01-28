terraform {
  required_providers {
    postgresql = {
      source  = "cyrilgdn/postgresql"
      version = "~> 1.18.0"
    }
  }
}

provider "postgresql" {
  host     = "localhost"
  username = "jwshin"
  password = ""
  sslmode  = "disable"
}

resource "postgresql_role" "api" {
  name            = "api"
  password        = "api"
  login           = true
  create_database = true
}

resource "postgresql_database" "api" {
  name  = "api"
  owner = "api"

  depends_on = [
    postgresql_role.api
  ]
}
