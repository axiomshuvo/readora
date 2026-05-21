# 📚 Readora — Online Book Borrowing Platform

> Discover, browse, and borrow books online. A clean digital library experience built with Next.js, Better Auth, and HeroUI.

| | |
|---|---|
| **Live Site** | [readora-opal.vercel.app](https://readora-opal.vercel.app/) |
| **Repository** | [github.com/axiomshuvo/readora](https://github.com/axiomshuvo/readora) |
| **Author** | [Pradipta Sarker](https://github.com/axiomshuvo) |
| **Books API** | [api-server-scoy.onrender.com/books](https://api-server-scoy.onrender.com/books) |

---

## ✨ Key Features

- 🏠 **Landing Page** — Hero banner, marquee, featured books, how it works, testimonials, membership section
- 📖 **All Books** — Browse the full collection with live title search
- 🗂️ **Category Filter** — Sidebar filtering by Story, Tech, Science and more
- 🔐 **Authentication** — Email/password + Google OAuth via Better Auth
- 🔒 **Protected Routes** — Book details and profile require login
- 📦 **Borrow System** — Borrow books with per-user localStorage tracking
- 👤 **Profile Page** — View info, update name/image/password, see active borrows
- 📱 **Fully Responsive** — Mobile, tablet, and desktop ready
- 🔔 **Toast Notifications** — Feedback for all user actions

---

## 🗂️ Pages

| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| All Books | `/all-books` | Public |
| Categories | `/categories` | Public |
| About | `/about` | Public |
| Book Details | `/books/[id]` | 🔒 Private |
| My Profile | `/profile` | 🔒 Private |
| Login | `/login` | Public |
| Register | `/register` | Public |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Component Library | HeroUI v3 |
| Authentication | Better Auth 1.6 |
| Database | MongoDB 7 |
| Notifications | React Hot Toast |
| Icons | React Icons 5 |
| Marquee | React Fast Marquee |
| Carousel | Swiper.js 12 |

---

## 📦 npm Packages

```
next                       react                react-dom
better-auth                @better-auth/mongo-adapter
mongodb                    @heroui/react        @heroui/styles
tailwindcss                react-hot-toast      react-icons
react-fast-marquee         swiper
```

---

## 🚀 Local Development

```bash
# 1. Clone the repo
git clone https://github.com/axiomshuvo/readora.git
cd readora

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in MONGODB_URI, BETTER_AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

Built with ❤️ by [Pradipta Sarker](https://github.com/axiomshuvo)
