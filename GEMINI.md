# Project Overview
This is a personal portfolio web application built with modern web technologies, featuring 3D elements and animations.
- **Framework**: Next.js 15 (App Router)
- **UI & Animations**: React 19, Framer Motion (`motion`), Three.js (`@react-three/fiber`, `@react-three/drei`)
- **Styling**: Sass (`.css`)
- **Database / ORM**: MySQL 8.0 with Prisma
- **Infrastructure**: Dockerized, using `docker-compose` and Traefik for routing.
- **Task Runner**: Task (`Taskfile.yml`)

# Building and Running
The project is primarily managed via Docker and the `task` CLI.

- **Initial Setup & Start**: `task install` (Sets up `.env` and starts containers)
- **Start Detached**: `task up`
- **Stop Containers**: `task down`
- **Watch mode**: `task watch`
- **Database Push**: `task db-push` (Updates the local Prisma database schema)
- **Clean / Destroy**: `task clean` or `task destroy`

Standard Next.js commands are also available via `npm run dev`, `npm run build`, and `npm run start`.

# Development Conventions
- **Directory Structure**: Next.js App Router (`src/app/`). UI components are in `src/ui/`.
- **Database**: Schema definitions are in `prisma/schema.prisma`.
- **Assets**: 3D models (`.glb`) and images/icons (`.svg`, `.webp`) are located in the `public/` directory.
- **Code Quality**: TypeScript and ESLint are enforced.
