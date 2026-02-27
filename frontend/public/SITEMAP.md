# VRINAA Occasions Website - Sitemap

## Project Overview
VRINAA Occasions is an event management website that allows users to explore events, view galleries, and contact the organizers. The project consists of a React frontend and a FastAPI backend.

---

## Frontend Pages (React Router)

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with hero section and featured content |
| `/about` | About | Information about VRINAA Occasions |
| `/events` | Events | Browse and view upcoming events |
| `/gallery` | Gallery | Photo gallery of past events |
| `/contact` | Contact | Contact form and information |
| `/terms` | Terms | Terms and conditions page |

### Navigation Structure
The Header component provides navigation links to all main pages:
- Home
- About
- Events
- Gallery
- Contact

---

## Backend API Endpoints (FastAPI)

### Base URL
`http://localhost:8000` (development)

### API Routes

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/api/` | Root endpoint | - | `{ "message": "Hello World" }` |
| POST | `/api/status` | Create a new status check | `{ "client_name": "string" }` | `StatusCheck` object |
| GET | `/api/status` | Get all status checks | - | Array of `StatusCheck` objects |

### API Response Models

**StatusCheck**
```json
{
  "id": "uuid-string",
  "client_name": "string",
  "timestamp": "ISO datetime string"
}
```

---

## Project File Structure

```
vrinaa-occasions-website/
├── backend/
│   ├── server.py           # FastAPI main application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main app with routing
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Terms.jsx
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ui/        # Shadcn UI components
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── mockData.js
│   ├── public/
│   │   ├── index.html
│   │   └── logo.PNG
│   └── package.json
├── VRINAA_DOCUMENTATION.txt
├── README.md
└── RUN.txt
```

---

## Technology Stack

### Frontend
- React 18
- React Router DOM (v6)
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons

### Backend
- Python 3.x
- FastAPI
- Motor (async MongoDB driver)
- Pydantic
- Uvicorn

### Database
- MongoDB (hosted on MongoDB Atlas)

---

## Sitemap Visualization

```
                    ┌─────────────┐
                    │   Home      │
                    │    (/)      │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
    │  About  │       │ Events  │       │ Gallery │
    │ /about  │       │/events  │       │/gallery │
    └─────────┘       └─────────┘       └─────────┘
                           │                 │
                    ┌──────▼──────┐    ┌──────▼──────┐
                    │  Contact    │    │   Terms     │
                    │ /contact    │    │  /terms    │
                    └─────────────┘    └─────────────┘

┌─────────────────────────────────────────────────────────┐
│                    Backend API                          │
│                                                         │
│   GET  /api/          → Root message                    │
│   POST /api/status    → Create status check            │
│   GET /api/status     → Get all status checks          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

