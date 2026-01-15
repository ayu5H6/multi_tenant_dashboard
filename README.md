# Multi-Tenant Sales Dashboard (Frontend)

## Overview
This project demonstrates a scalable frontend architecture for a multi-tenant SaaS
application. Focus is on:

- Tenant data isolation
- Role-based access control (RBAC)
- Modular feature-based structure
- Frontend optimization awareness

No backend is used. Data and authentication are mocked.

---

## Tech Stack
- React
- React Router
- Context API
- Lazy loading (React.lazy)

---

## Architecture

src/
- app/        : Global logic (routing, auth, RBAC)
- modules/    : Feature-based modules (leads, calls)
- components/ : Reusable UI components
- data/       : Mock tenant data

This structure scales well as new modules or tenants are added.

---

## Multi-Tenancy

Each user belongs to one tenant:
- orgA
- orgB

Tenant switch updates visible data instantly.
Data is isolated using tenant keys in mockData.

---

## Role Based Access Control

Roles:
- Admin → Full access
- Agent → View only

RBAC implemented using a reusable `Can` wrapper.

Example:
<Can action="EDIT">
  <button>Edit</button>
</Can>

No role checks are hardcoded in UI components.

---

## Features Implemented

Leads Module:
- List leads
- Filter by status
- Admin-only edit control

Calls Module:
- List call logs
- Tenant-specific data

UI:
- Tenant indicator
- Role indicator
- Loading state
- Empty state

---

## Optimization

Implemented:
- Route-based lazy loading
- Memoized filters using useMemo

Design Decisions:
- Context API instead of Redux (small app)
- Feature-based code splitting
- Derived state instead of stored state

---

## How to Run

npm install  
npm run dev

---

## Notes

This is an architectural demo.
UI polish and backend integration are intentionally skipped.

Focus:
- Scalability
- Clean separation
- SaaS patterns


