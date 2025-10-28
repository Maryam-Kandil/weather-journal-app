# Weather Journal App

## Overview

The **Weather Journal App** is an asynchronous web application that uses the **OpenWeatherMap API** and user input to dynamically update the user interface with real-time weather data, date, and user feelings.

This project demonstrates how to combine external APIs, asynchronous JavaScript, and a local Express server to create a fully functional and interactive experience.

---

## Project Mechanism

1. **User Input**  
   The user enters a ZIP code and a short note describing their feelings.

2. **Fetching Weather Data**  
   The app retrieves temperature data from the **OpenWeatherMap API** based on the entered ZIP code.

3. **Posting Data to Local Server**  
   The app sends the temperature, date, and feelings to a **local Express server** using a POST request.

4. **Updating the User Interface**  
   The client fetches the stored data from the local server using a GET request and updates the interface dynamically with the latest information.

---

## Features

- Fetches live weather data from an external API  
- Captures and displays user input (feelings) alongside the weather information  
- Demonstrates asynchronous operations using `fetch`, `async/await`, and Promises  
- Organized, modular, and well-documented code  
- Simple and clean interface using HTML, CSS, and JavaScript  

---

## Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and page layout |
| **CSS3** | Styling and layout design |
| **JavaScript (ES6+)** | Client-side logic and interactivity |
| **Node.js + Express** | Server-side routing and data handling |
| **OpenWeatherMap API** | Fetching real-time weather data |

---

## Installation & Usage

### 1. Clone this repository
```bash
git clone https://github.com/YOUR-USERNAME/weather-journal-app.git
cd weather-journal-app
2. Install dependencies
bash
Copy code
npm install
3. Start the server
bash
Copy code
node server.js
4. Open the app in your browser
Go to: http://localhost:3300

5. Try it out
Enter a ZIP code and your feelings

Click the Generate button

See the temperature, date, and your mood appear instantly

## Project Structure
pgsql
Copy code
weather-journal-app/
│
├── website/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
## Key Learning Outcomes
Using asynchronous JavaScript (async / await)

Handling GET and POST requests with the Fetch API

Managing routes in an Express server

Connecting frontend and backend

Integrating third-party APIs into web projects

## Future Improvements
Add city names, humidity, and weather icons

Improve mobile responsiveness

Store past entries locally or in a database

Host the app using Render or GitHub Pages

## License
This project is licensed under the MIT License — you are free to use, modify, and distribute this software as long as proper credit is given.


Maryam Kandil
