# 📰 News Aggregator  
A modern ReactJS-based web application that aggregates news from multiple sources.

## ✨ Features  
- 🔍 Article search and filtering  
- 🧠 Personalized news feed  
- 📱 Mobile-responsive design  

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

## User Interface Overview

<img width="1792" alt="Screenshot 2025-06-29 at 3 38 49 PM" src="https://github.com/user-attachments/assets/db577687-fcab-4858-b930-65e6ddf3efe3" />


<img width="1780" alt="Screenshot 2025-06-29 at 3 38 24 PM" src="https://github.com/user-attachments/assets/aeea553d-bb70-4d6c-84ce-34ed46f3c478" />








