# Mini Lead Distribution System

## Tech Stack
- Next.js
- PostgreSQL
- Prisma

---

## Features

### 1. Lead Creation
- Customers submit service requests
- Duplicate phone + service blocked at DB level

### 2. Provider Allocation
- Exactly 3 providers per lead
- Mandatory provider rules:
  - Service 1 → Provider 1
  - Service 2 → Provider 5
  - Service 3 → Provider 1 & 4
- Remaining slots filled using fair round-robin system
- Monthly quota = 10 per provider

### 3. Fair Distribution
- Persistent rotation system using database
- No randomness
- Survives server restart

### 4. Concurrency Safety
- Prisma transactions ensure consistency
- Stress-tested with parallel requests

### 5. Webhook System
- Idempotent reset-quota webhook
- Prevents duplicate execution

### 6. Dashboard
- Real-time provider stats
- Auto refresh every few seconds

---

## Setup Instructions

```bash
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev