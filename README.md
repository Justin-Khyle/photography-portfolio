# 📸 Photography Portfolio + Client Booking App

A full-stack web application for photographers to showcase their work and manage client bookings — built with React, Node.js/Express, PostgreSQL, and Tailwind CSS.

---

## ✨ Features

- **Portfolio Gallery** — filterable photo gallery by category (weddings, portraits, events, etc.)
- **Client Booking System** — booking request form with date/time selection and session type
- **Stripe Payments** — clients pay a deposit to confirm their session
- **Auth** — clients can log in to view/manage their bookings
- **Admin Dashboard** — photographer can view all bookings, confirm, reschedule, or cancel

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Tailwind CSS, React Router |
| Backend | Node.js, Express |
| Database | PostgreSQL + Prisma ORM |
| Auth | JWT |
| Payments | Stripe |
| Deployment | Vercel (frontend) + Railway (backend + DB) |

---

## 🗓 8-Week Build Plan

### Week 1 — Project Setup + Static Portfolio UI
- [ ] Initialize React app with Vite
- [ ] Set up Tailwind CSS
- [ ] Build Navbar, Hero, Gallery, Footer components
- [ ] Add static placeholder photos

### Week 2 — Styling + Responsive Layout
- [ ] Polish UI with Tailwind (mobile-first)
- [ ] Add gallery filtering by category
- [ ] Build About and Contact pages
- [ ] Add smooth transitions/animations

### Week 3 — Backend Setup
- [ ] Initialize Express server
- [ ] Connect PostgreSQL with Prisma
- [ ] Define DB schema: User, Booking, GalleryItem
- [ ] Test with Prisma Studio

### Week 4 — Booking Form + API
- [ ] Build booking form (React)
- [ ] Create POST /api/bookings endpoint
- [ ] Store booking data in DB
- [ ] Add form validation

### Week 5 — Authentication
- [ ] Implement JWT auth
- [ ] Protect booking history route
- [ ] Client can view their own bookings

### Week 6 — Stripe Payments
- [ ] Set up Stripe account + API keys
- [ ] Build checkout flow for session deposit
- [ ] Handle Stripe webhooks to confirm payment

### Week 7 — Admin Dashboard
- [ ] Admin-only route (protected)
- [ ] View all bookings, filter by status
- [ ] Confirm / cancel / reschedule actions

### Week 8 — Polish + Deploy
- [ ] Bug fixes and UI polish
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend + DB to Railway
- [ ] Write final README with screenshots

---

## 🚀 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Environment Variables

**backend/.env**
```
DATABASE_URL=postgresql://user:password@localhost:5432/photography
JWT_SECRET=your_secret_here
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## 🧑‍💻 Author
Justin — CS Student @ SF State