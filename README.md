# React Project 5 — Service Agency Website

A responsive digital product & engineering service agency website built with **React**, **Vite**, **JavaScript**, and modular **CSS**.

## Features

- Sticky agency header with responsive mobile menu (`Header.jsx`)
- Hero banner showcasing studio value proposition and delivery metrics (`Hero.jsx`)
- Reusable service cards driven by props (`ServiceCard.jsx`)
- Services grid rendered with `map()` plus an About Our Studio section (`ServicesList.jsx`)
- Interactive contact form with client-side validation and confirmation feedback (`Contact.jsx`)
- Responsive agency footer (`Footer.jsx`)

## Project Structure

```text
react-project-5-services/
├── src/
│   ├── components/
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.css
│   │   ├── ServiceCard.jsx
│   │   ├── ServicesList.css
│   │   └── ServicesList.jsx
│   ├── data/
│   │   └── agencyData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```
