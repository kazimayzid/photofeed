# 📸 PhotoFeed

A modern, responsive, and feature-rich photo gallery application built with **Next.js (App Router)**. This project demonstrates advanced Next.js routing patterns, including **Parallel Routes** and **Intercepting Routes**, allowing users to open photo details seamlessly in a modal overlay while maintaining full SSR and deep-linking support for direct page visits.

---

## 🚀 Key Features

- 🖼️ **Interactive Photo Feed**: Explore a grid of curated photos with view counts, share stats, like counts, and author details.
- 🔀 **Parallel & Intercepting Routes**: Smooth modal overlays when navigating through the feed without triggering full-page reloads.
- 🔗 **Deep Linking & Direct Navigation**: Refreshing or sharing a photo link opens a dedicated full-page view, while clicking within the app triggers the modal interface.
- 🎨 **Responsive Modal Design**: Custom portal-based modal UI built with Tailwind CSS, backdrop blur, native HTML `<dialog>`, and viewport overflow safeguards.
- ⚡ **Performance & Image Optimization**: Powered by Next.js `Image` component for responsive lazy loading and automatic format optimization.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/) (Portals, Hooks)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Assets**: Next.js Image Optimization (`next/image`)

---

## 📁 Project Structure

```text
photofeed/
├── app/
│   ├── @modal/               # Parallel route slot for modal overlays
│   │   └── (.)photos/        # Intercepting route for dynamic photo pages
│   │       └── [id]/
│   │           └── page.js
│   ├── photos/               # Standard fallback route for direct page loads
│   │   └── [id]/
│   │       └── page.js
│   ├── layout.js             # Root layout rendering children and @modal slot
│   ├── page.js               # Main homepage photo feed
│   └── globals.css           # Global Tailwind CSS styles
├── components/
│   └── Modal.jsx             # Custom reusable modal using React Portal & <dialog>
├── public/                   # Static images, icons, and SVG assets
├── package.json
└── README.md
