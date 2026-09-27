# 🌤️ Weather App

A responsive weather application built with **React.js**, **Vite**, and **Tailwind CSS** that provides real-time weather information for cities around the world using the **OpenWeather API**.

## 🔗 Links

* **Live Demo:** https://weather-app-qifu.vercel.app/
* **GitHub Repository:** https://github.com/nahinsha/weather-app

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* 🌤️ Display current weather conditions
* 💧 Show humidity information
* 💨 Show wind speed
* ⚡ Loading state while fetching weather data
* ❌ Error handling for unsuccessful requests
* 📱 Responsive design for different screen sizes
* 🔐 API key managed through environment variables

## 🛠️ Tech Stack

* **React.js** — UI development
* **JavaScript (ES6+)** — Application logic
* **Vite** — Development and build tooling
* **Tailwind CSS** — Styling and responsive UI
* **TanStack Query** — Server-state and API data management
* **OpenWeather API** — Weather data
* **Git & GitHub** — Version control
* **Vercel** — Deployment

## 📁 Project Structure

```text
weather-app/
├── public/
│   └── ...
├── src/
│   ├── API/
│   │   └── weatherApi.js
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── Searchbar.jsx
│   │   └── WeatherCard.jsx
│   ├── hooks/
│   │   └── useWeather.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/nahinsha/weather-app.git
```

Navigate to the project directory:

```bash
cd weather-app
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your OpenWeather API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> **Important:** Never commit your `.env` file or expose your API key in the GitHub repository.

### Run the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🔄 How It Works

The application follows a simple weather-data flow:

```text
User enters a city
        ↓
SearchBar component
        ↓
Weather API request
        ↓
TanStack Query manages the request
        ↓
OpenWeather API
        ↓
Weather data returned
        ↓
WeatherCard displays the result
```

The API logic is separated from the UI components, while a custom `useWeather` hook handles weather data fetching through TanStack Query.

## 🔐 Security

The OpenWeather API key is stored in an environment variable rather than being committed to the repository.

The following files/directories are intentionally excluded from Git:

```text
.env
node_modules/
dist/
```

## 🚀 Deployment

The application is deployed on **Vercel** and is connected to the GitHub repository.

**Live Application:**
https://weather-app-qifu.vercel.app/

## 📚 What I Practiced

This project helped me practice:

* React functional components
* React state management with `useState`
* Custom React hooks
* API integration
* Asynchronous data fetching
* TanStack Query
* Loading and error states
* Environment variables with Vite
* Tailwind CSS
* Vite production builds
* Git and GitHub workflow
* Deployment with Vercel

## 👨‍💻 Author

**Md. Shahariar Nahin**

* GitHub: https://github.com/nahinsha
* LinkedIn: https://www.linkedin.com/in/md-shahariar-nahin-a5b147301/
* Portfolio: https://shahariar-nahin-portfolio.vercel.app/

---

⭐ If you find this project useful, feel free to explore the repository and check out the live application.
