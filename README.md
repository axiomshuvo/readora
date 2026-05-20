# Readora 📚

> A personal product focused on modern book discovery, secure borrowing flows, and a clean digital library experience.

| Project    | Details                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------- |
| Name       | **Readora**                                                                              |
| Type       | Personal Project                                                                         |
| Author     | [Pradipta Sarker](https://github.com/axiomshuvo)                                         |
| GitHub     | [@axiomshuvo](https://github.com/axiomshuvo)                                             |
| Repository | [axiomshuvo/readora](https://github.com/axiomshuvo/readora)                              |
| Books API  | [https://api-server-scoy.onrender.com/books](https://api-server-scoy.onrender.com/books) |
| Live Site  | [Live Site](https://readora-opal.vercel.app/)                                            |

---

## Overview

Readora is a modern web application for readers who want a smoother way to explore and borrow books online. The product is designed around clarity, responsiveness, and a structured browsing experience, combining clean visuals with secure account-based access.

Instead of presenting the app like a student assignment, Readora is positioned as a standalone personal project with clear product goals, focused user flows, and a polished UI direction.

## Product Goals

- Make book discovery simple and visually engaging
- Support category-based exploration and faster search
- Protect user-specific actions behind authentication
- Keep the experience responsive across mobile, tablet, and desktop
- Provide a clean foundation for a scalable digital library product

## Core Experience

- Landing page with a modern, content-first presentation
- All Books page for browsing the full collection
- Category-based filtering for structured discovery
- Search flow for finding books by title
- Login and registration system powered by Better Auth
- Protected pages for book details and user profile
- Profile update flow for personal information
- Toast-based feedback for user actions and status updates

## Project Structure

- **Home** for brand presentation and featured content
- **All Books** for browsing and filtering the collection
- **Login** for returning users
- **Register** for new account creation
- **Profile** for user information and updates

## Tech Stack

- **Framework:** Next.js 16
- **Frontend:** React 19
- **Styling:** Tailwind CSS 4
- **UI Library:** HeroUI
- **Authentication:** Better Auth
- **Database:** MongoDB
- **Notifications:** React Hot Toast

## Main Packages

- `next`
- `react`
- `react-dom`
- `mongodb`
- `better-auth`
- `@better-auth/mongo-adapter`
- `@heroui/react`
- `@heroui/styles`
- `tailwindcss`
- `@tailwindcss/postcss`
- `react-hot-toast`
- `react-icons`

## Local Development

# Readora 📚

Readora is a modern online book borrowing platform built as a personal project. It focuses on a clean reading-first experience where users can explore books, browse collections, and move through authentication flows in a simple and responsive interface.

## Links

- **Repository:** [axiomshuvo/readora](https://github.com/axiomshuvo/readora)
- **Books API:** https://api-server-scoy.onrender.com/books
- **Live Site:** [Live Site](https://readora-opal.vercel.app/)

## Features

- Modern landing page with a card-based visual layout
- All Books page for browsing the collection
- Login and registration pages for user access
- Better Auth integration for secure authentication
- Responsive UI built for mobile, tablet, and desktop
- Toast notifications for user feedback

## Current Pages

- **Home**
- **All Books**
- **Login**
- **Register**

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- HeroUI
- Better Auth
- MongoDB
- React Hot Toast

## Packages Used

- `better-auth`
- `@better-auth/mongo-adapter`
- `@heroui/react`
- `@heroui/styles`
- `mongodb`
- `react-hot-toast`
- `react-icons`

## Getting Started

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file in the project root and add the values needed for:

- your MongoDB connection
- Better Auth configuration
- Google login credentials if social login is enabled

Keep all secret values private and out of version control.

## Author

Built by [Pradipta Sarker](https://github.com/axiomshuvo) ✨
