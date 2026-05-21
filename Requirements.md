# Assignment Requirements

## Assignment Category

**Category:** `category-A8-Mango`

## Project Title

**Online Book Borrowing Platform**

## Explanation Video

Add your explanation video link here.

## Project Theme

A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security and performance using BetterAuth, Next.js, and MongoDB.

## Key Requirements

- **GitHub Commits:** Include at least 10 meaningful commits with descriptive messages.
- **README.md:** Include a README file with the project name, purpose, live URL, key features, and any npm packages used.
- **Responsiveness:** Ensure the website is fully responsive on mobile, tablet, and desktop.
- **Environment Variables:** Secure configuration keys using environment variables.
- **Unique Design:** Create a unique design that matches the given concept.
- **Hosting:** Deploy the application using a platform such as Vercel or Render. Ensure the app does not throw errors when reloading any route.

## Main Requirements

### 1. Layout Structure

#### Header (Navbar) - [done]

- **Left:** Website logo linking to the Home page. - [done]
- **Center:** Navigation links for Home, All Books, and My Profile. - [done]
- **Right:** Conditional rendering:
  - If logged out, show `Login`. - [done]
  - If logged in, show the user's name and a `Logout` button. - [done]

#### Footer

- A custom-designed footer featuring social media links and a **Contact Us** section. -

### 2. JSON Data Generation - [done]

Use the following structure for the book data: - [done]

```json
{
  "id": "",
  "title": "",
  "author": "",
  "description": "",
  "category": "",
  "available_quantity": 0,
  "image_url": ""
}
```

Suggested prompt for ChatGPT or Gemini: [done]

> Generate a JSON array of 12 book objects. Each object must include: id, title, author, description, category (choose from Story, Tech, Science), available_quantity (integer), and image_url.

### 3. Home Page [done]

- **Banner:** A large "Find Your Next Read" heading with a `Browse Now` button linking to the All Books page. - [done]
- **Marquee:** A scrolling line of text such as `New Arrivals: [Book Name] | Special Discount on Memberships...` - [done]
- **Featured Books:** Show the top 4 books fetched from the server or local JSON data. Each card must include a `View Details` button.
- Add **two additional sections** based on your own ideas. - [done]

### 4. Authentication - [done]

#### User Login - done

Create a login page with: - [done]

- A title
- A form containing:
  - `Email`
  - `Password`
  - `Login` button

Behavior:

- On successful login, navigate the user to the Home page. - done
- On failure, show an error using a toast or an inline form message. - done

Additional options:

- A link to the Register page. - [done]
- A Google social login button. - [done]
- After successful Google login, navigate the user to the Home page. - [done]

#### User Registration - [done]

Create a registration page with:

- A title
- A form containing:
  - `Name`
  - `Email`
  - `Photo URL`
  - `Password`
  - `Register` button

Behavior: [done]

- On successful registration, navigate the user to the Login page. - done
- On failure, show an error using a toast or an inline form message. - done

Additional options: - [done]

- A link to the Login page. - [done]
- A Google social login button. - [done]
- After successful Google login, navigate the user to the Home page. -[done]

> Do not implement email verification or a forgot-password feature for this assignment. You may add them later if needed. - ok

### 5. All Books Page - [done]

- A large search input at the top to search books by title. - [done]
- Book cards displaying: - [done]
  - Book image
  - Book title
  - A `Details` button linking to the specific book details page

### 6. Single Book Details Page (Private Route) - [done]

- **Access:** Only logged-in users can view this page. [done]
- **Layout:** Large book cover on the left, text and details on the right. [done]
- **Info to show:** [done]
  - Title
  - Author
  - Description
  - Available quantity, such as `5 copies left`
- **Action Button:**
  - `Borrow This Book`
  - If the user is logged out, redirect to the Login page. [done]
  - Show a confirmation toast after the borrow action.

### 7. My Profile (Private Route) - [done]

- **Access:** Only logged-in users can view this page. - [done]
- Show all user information. - [done]

### 8. Update Information Feature - [done]

From the My Profile route:

- Add an `Update` button.
- When clicked, navigate the user to another route.
- Show a form with two input fields:
  - `Image`
  - `Name`
- Add an `Update Information` button.

Follow this documentation:

[BetterAuth user update docs](https://better-auth.com/docs/concepts/users-accounts#update-user)

## Additional Challenges

### 1. Category Sidebar - [done]

Add a functional left sidebar on the All Books page to filter books by category, such as:

- Story
- Tech
- Science

### 2. Use One Extra npm Package [done]

Implement at least one of the following packages:

- Animate.css
- React Spring
- Swiper.js - [used for the Home page banner]

## Tech Stack - [done]

- Next.js
- Tailwind CSS
- DaisyUI or HeroUI
- BetterAuth

## What to Submit - [done]

- **GitHub Repository Link:** - https://github.com/axiomshuvo/readora
- **Live Site Link:** - https://readora-opal.vercel.app/
