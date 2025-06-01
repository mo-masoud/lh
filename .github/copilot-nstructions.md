# 🧠 GitHub Copilot Instructions — Best Practices for Next.js Projects (src Directory Structure)

Use this file to guide GitHub Copilot (or any AI assistant) to follow best practices when working in a **Next.js project using the /src directory**.

---

## 📌 Project Overview

This project is a modern **Next.js (App Router)** application using:

- **TailwindCSS** for styling
- **ShadCN UI** for components
- **Prisma + PostgreSQL/Neon** as the database
- **TypeScript** across the codebase
- **App Router under `/src/app`**
- **Modular file structure using `src/` directory**

Modules:

- Password Manager
- Savings Tracker
- Dashboard

---

## 📁 File & Folder Structure

```
/src
  /app                    → App Router pages & routes
  /app/api                → API handlers
  /components/ui          → ShadCN UI components
  /components/shared      → Reusable custom components
  /components/layouts     → Layout wrappers
  /lib                    → Helpers, utils, config, Prisma, auth
  /styles                 → Global styles and Tailwind config
  /middleware.ts          → Route protection
```

---

## ⚛️ Component Best Practices

- Use **Server Components by default**
- Use `"use client"` only when necessary (hooks, interactivity)
- Organize components in `components/ui`, `components/shared`
- Use `cn()` utility for conditional classNames
- Prefer functional, typed, and reusable components

---

## 🧱 Layouts and Pages

- Define routes in `/src/app`
- Use `layout.tsx` for shared layout structure
- Nest layouts (e.g., `/src/app/dashboard/layout.tsx`)
- Use `loading.tsx`, `error.tsx`, `not-found.tsx` as needed

---

## 🔒 Authentication

- Use `middleware.ts` for route protection
- Prefer using server-side cookies or JWT
- Avoid `localStorage` for sensitive data

---

## 📡 API Routes

- Use `src/app/api/.../route.ts`
- Export REST methods: `GET`, `POST`, etc.
- Validate input (use `zod`)
- Return typed and meaningful responses

---

## 🎨 Styling with TailwindCSS

- Utility-first styling only
- Use `cn()` for merging conditional classes
- Organize Tailwind config in `/tailwind.config.ts`
- Avoid writing raw CSS unless necessary

---

## 🧪 TypeScript & Validation

- Strict typing across the app
- No `any` types
- Use `zod` for schema validation
- Define shared types in `/lib/types.ts`

---

## 🚀 Performance

- Use `next/image` for image optimization
- Use `next/link` for internal routing
- Dynamic import heavy components only when needed

---

## 🌍 SEO & Metadata

Use metadata exports in `layout.tsx` or `page.tsx`:

```ts
export const metadata = {
  title: "Dashboard",
  description: "User control panel",
};
```

---

## 🧼 Clean Code Guidelines

- Organize code by **feature**, not by type
- Avoid complex logic in components — isolate it in `/lib`
- Use clear, descriptive file and component names
- Reuse components as much as possible

---

## 💡 General Tips

- ✅ Use `pnpm` instead of `npm` or `yarn` for speed and reliability.
- ❌ Don’t run `pnpm dev` if the server is already running — avoid port conflict.
- 💡 Use `pnpm dlx shadcn@latest add [component]` to install missing ShadCN components.
- 🛠 If a component is not available in ShadCN, create it in `components`.
- 📦 Avoid mixing server/client logic in the same file.
- ☕ Use `toast()` only in client components.
