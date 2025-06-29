# 📰 News Aggregator  
A modern ReactJS-based web application that aggregates news from multiple sources.

## 🚀 Getting Started

### 📦 Requirements  
- **Node.js v22+**  
- API keys for the following services:
  - [NewsAPI](https://newsapi.org/)
  - [The Guardian](https://open-platform.theguardian.com/)
  - [New York Times](https://developer.nytimes.com/)

### 🔐 Environment Variables  
Create a `.env` file in the project root (this file is already `.gitignored`) and define the following variables:

```env
VITE_NEWS_API_KEY=your_newsapi_key
VITE_GUARDIAN_API_KEY=your_guardianapi_key
VITE_NYTIMES_API_KEY=your_nytimesapi_key
```

### 🛠 Installation
Install project dependencies:

```
npm install
```

### Running the app

```
npm run dev
```

### Build the Docker image:

```
docker build -t news-app:v1 .
```

### Start the Docker container:
```
docker run -p 4173:4173 news-app:v1
```

## ✨ Features  
### 🔍 Article search and filtering  

https://github.com/user-attachments/assets/da121813-2f4e-4303-acfd-551555ba3986

### 🧠 Personalized news feed  

https://github.com/user-attachments/assets/6ab2f06a-5ec6-4f27-885f-86441b988250

### 📱 Mobile-responsive design  

<div align="center">
<img width="464" alt="Screenshot 2025-06-29 at 4 16 25 PM" src="https://github.com/user-attachments/assets/552eb58b-97ed-47b4-9973-613f6497b722" />
</div>




