# MedSync
A modern, responsive healthcare platform built with React and Tailwind CSS.

## Features

- 🏥 Role-based authentication (Doctors, Patients, Pharmacies, Diagnostic Centers)
- 💊 Online doctor consultation booking
- 🔬 Lab test booking and sample collection
- 💊 Online pharmacy with doorstep delivery
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router v6
- React Hook Form + Zod
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medsync.git
   cd medsync-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
/src
  /components
    /common        # Shared components (Navbar, Footer, etc.)
    /dashboard     # Dashboard-specific components
    /auth         # Authentication components
  /pages          # Page components
  /routes         # Route configurations
  /hooks          # Custom React hooks
  /utils          # Utility functions
  /context        # React context providers
  /assets         # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
