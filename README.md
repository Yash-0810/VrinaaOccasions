# Vrinaa Occasions

A modern event decoration services website built with React and FastAPI.

![Vrinaa Occasions](logo.PNG)

## 🌟 Features

- **Event Decoration Services** - Showcase of event decoration offerings
- **Photo Gallery** - Visual representation of past events
- **Contact Form** - Integrated with EmailJS for instant notifications
- **Responsive Design** - Works on all devices
- **Multiple Pages** - Home, About, Events, Gallery, Contact, Terms

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- shadcn/ui (Radix UI)
- Lucide React (Icons)
- EmailJS (Email service)

### Backend
- Python
- FastAPI
- MongoDB (Motor async driver)
- Uvicorn

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Python v3.10+
- MongoDB (local or Atlas)

### Installation

#### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run on http://localhost:3000

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python server.py
```

The backend will run on http://localhost:8000

## 📁 Project Structure

```
vrinaa-occasions-website/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities
│   │   └── mockData.js   # Static data
│   └── package.json
│
├── backend/              # FastAPI backend
│   ├── server.py         # Main application
│   ├── requirements.txt  # Python dependencies
│   └── .env             # Environment variables
│
├── VRINAA_DOCUMENTATION.txt
├── VRINAA_DOCUMENTATION.pdf
└── RUN.txt
```

## 📝 Environment Variables

### Backend (.env)

```env
MONGO_URL=your_mongodb_connection_string
DB_NAME=vrinaa_occasions
CORS_ORIGINS=http://localhost:3000
```

### Frontend (.env.local)

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/ | Root endpoint |
| POST | /api/status | Create status check |
| GET | /api/status | Get all status checks |

## 📄 Available Scripts

### Frontend

```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

### Backend

```bash
python server.py                              # Run server
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
```

## 🌍 Deployment

### Vercel (Frontend)

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Add environment variables
5. Deploy

## 📬 Contact

For questions or inquiries, use the contact form on the website.

## 📄 License

This project is for demonstration purposes.

