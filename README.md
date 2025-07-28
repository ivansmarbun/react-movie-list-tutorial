
# React Movie List Tutorial

This project is a movie list web application built with React and Vite. It allows users to browse popular movies and search for movies using The Movie Database (TMDB) API.

## About
This project is based on the YouTube tutorial by Tech With Tim:
[React Movie List App - Full Tutorial](https://www.youtube.com/watch?v=G6D9cBaLViA&t=488s&ab_channel=TechWithTim)

The code has been adapted for learning purposes and includes Docker support for easy deployment.

## Features
- Browse popular movies
- Search for movies
- Add movies to favorites
- Responsive design

## Getting Started

### Prerequisites
- Node.js and npm (for local development)
- Docker and Docker Compose (for containerized setup)

### Local Development
1. Clone the repository
2. Copy `.env.example` to `.env` and add your TMDB API key
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Setup
1. Copy `.env.example` to `.env` and add your TMDB API key
2. Build and run with Docker Compose:
   ```bash
   docker compose up --build
   ```
3. Visit [http://localhost:8080](http://localhost:8080)

## Environment Variables
- `VITE_TMDB_API_KEY`: Your TMDB API key (required)

## License
This project is for educational purposes.

---
Inspired by Tech With Tim's YouTube tutorial.
