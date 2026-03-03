# CareerLens - Career Assessment Web Application

## Overview
A full-stack web application that helps users identify potential career paths through a multi-dimensional psychological and interest-based assessment.

## Architecture
- **Frontend**: React 19 + Tailwind CSS, served on port 5000
- **Backend**: Node.js + Express 5, served on port 3001
- **Data**: Questions stored in `server/data/questions.json` (no database required for core flow)

## Project Structure
```
├── client/          # React frontend (Create React App)
│   ├── src/
│   │   ├── components/   # Navbar, Footer
│   │   ├── pages/        # Home, Assessment, Result
│   │   └── services/     # api.js (Axios client)
│   └── package.json
├── server/          # Express backend
│   ├── controllers/ # assessmentController.js
│   ├── data/        # questions.json
│   ├── routes/      # assessmentRoutes.js
│   └── server.js
└── replit.md
```

## Key Configuration
- Frontend runs on `0.0.0.0:5000` with `DANGEROUSLY_DISABLE_HOST_CHECK=true` for Replit proxy
- Backend runs on port `3001` (default, configurable via PORT env var)
- API base URL in client: `http://localhost:3001/api`
- API routes: `GET /api/assessment/questions`

## Workflows
- **Start application**: `cd client && npm start` (port 5000, webview)
- **Backend API**: `cd server && node server.js` (port 3001, console)

## Features
- Landing page with feature overview
- 10-question career assessment
- Career recommendation based on Analytical/Creative/Practical scoring
- Results page with career suggestions
