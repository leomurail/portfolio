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

# Back-Office Architecture & Design
The administration interface is designed to be highly functional, clean, and modern, following the latest web standards.

- **UI Framework**: [Shadcn UI](https://ui.shadcn.com/) (built on top of Radix UI and Tailwind CSS). This provides accessible, unstyled components that we customize for a consistent look.
- **Iconography**: [Lucide React](https://lucide.dev/) for a crisp and modern set of icons.
- **Form Management**: [React Hook Form](https://react-hook-form.com/) combined with [Zod](https://zod.dev/) for robust client-side and server-side validation.
- **State & Data**: Next.js Server Actions for seamless data mutations and Prisma for type-safe database access.

## Design Principles
- **Minimalism**: Focus on data and actions without unnecessary visual noise.
- **Consistency**: Unified spacing, typography, and component behavior across all administrative pages.
- **Accessibility**: Leveraging Radix UI primitives to ensure the dashboard is usable by everyone.
- **Responsiveness**: Fully adaptive sidebar and data tables for management on the go.

# Development Conventions
- **Directory Structure**: Next.js App Router (`src/app/`). UI components are in `src/ui/`.
- **Database**: Schema definitions are in `prisma/schema.prisma`.
- **Assets**: 3D models (`.glb`) and images/icons (`.svg`, `.webp`) are located in the `public/` directory.
- **Code Quality**: TypeScript and ESLint are enforced.
