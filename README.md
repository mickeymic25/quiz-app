## QuizQuest - Trivia Quiz App

QuizQuest is a Next.js trivia quiz application where users can answer multiple-choice questions fetched from an external trivia API.  

Live site: https://quizquest-app-micaela.vercel.app/  

## 🛠 Tech Stack

- JavaScript (ES6+)
- React
- Next.js
- Tailwind CSS
- Open Trivia Database API : https://opentdb.com/


## 📌 About the Project

QuizQuest is a web-based quiz game that fetches trivia questions from a public API and displays them to the user.  
Users can select answers and track their progress during the quiz.

This project focuses on:
- Working with APIs in Next.js
- React hooks and state management
- Component-based architecture
- Responsive UI design

## ✨ Features

- Fetches real-time trivia questions from an API
- Multiple-choice questions
- Score tracking
- Responsive design (mobile & desktop)
- Clean and simple user interface

## 📂 Project Structure
```
├── public/
│ └── assets/
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── api/
│ │ │ └── useTriviaApi.js
│ │ └── index.jsx
│ ├── styles/
│ └── utils/
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## 🛠️ Installation & Setup

Clone the repository:

```
bash

git clone https://github.com/mickeymic25/quiz-app.git
```

Navigate to the project folder:
```
bash
cd quiz-app
```

Install dependencies:
```
bash

npm install
```

Start the development server:
```
bash
npm run dev
```

The app will run at:
```
http://localhost:3000
```

## 📦 Build for Production

Create a production build:
```
bash

npm run build
```

Start the production server:
```
bash
npm start
```

## 🌐 Deployment

This project is deployed using Vercel.

Vercel automatically detects Next.js and applies the correct build settings. No extra configuration is required.
