This is a [Next.js](https://nextjs.org) project.

## 🚀 Getting Started

This project is dockerized. To start developing:

1.  **Install dependencies and start containers:**
    ```bash
    task install
    ```
    This will copy the `.env.local.template` to `.env` and start the app and database containers.

2.  **Push Prisma schema to the database:**
    ```bash
    task db-push
    ```

3.  **Access the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Available Tasks

We use [Task](https://taskfile.dev) as a task runner. Here are the available commands:

-   `task install`: Setup the environment (copy `.env`) and start containers.
-   `task up`: Start containers in detached mode.
-   `task down`: Stop and remove containers.
-   `task db-push`: Push Prisma schema to the local database.
-   `task watch`: Watch for changes and hot-reload in Docker.
-   `task clean`: Remove containers, volumes, and node_modules.
-   `task destroy`: Full cleanup (including `.env`).

## 🐳 Docker Configuration

-   **Development:** Uses `docker compose watch` for a fast dev loop.
-   **Database:** A local MySQL 8.0 container is used for data persistence.
-   **Ports:**
    -   App: `3000`
    -   MySQL: `3306`
