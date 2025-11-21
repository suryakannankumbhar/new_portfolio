import { useState } from 'react'
import styles from './MainContent.module.css'
import TimelineItem from './TimelineItem'
import { FaLinkedin, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa'

const items = [
  {
    date: "Present * Experience",
    title: "SAP Basis Consultant - Tata Consultancy Services",
    description: "Working as an SAP Basis Consultant for the client Ipsen Pharma. Responsible for system administration, monitoring, and ensuring the stability and performance of SAP environments.",
    tech: ["SAP", "System Administration", "Monitoring", "Troubleshooting"]
  },
  {
    date: "Project",
    title: "Personal Portfolio",
    description: "My first responsive portfolio website, built as a personal side project. This site was created from scratch to showcase my projects and skills, focusing on clean design and mobile-first principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/gif/portfolio.gif",
    links: {
      live: "https://suryakannankumbhar.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/portfolio"
    }
  },
  {
    date: "Project",
    title: "Foody Buddy",
    description: "A cross-platform mobile app for personalized food recommendations and dietary tracking. It analyzes user profiles to help them make informed dietary choices. The app leverages Google Firestore for real-time data synchronization of user profiles and dietary logs, while React Native ensures a native look and feel on both iOS and Android.",
    tech: ["React Native", "JavaScript", "Google Firestore", "Expo", "NoSQL"],
    image: "/images/gif/foody-buddy.gif",
    links: {
      live: "https://drive.google.com/drive/folders/1ScZdL-JTpt6nf8QXrRRrYL3WrpQ_f1iM",
      repo: "https://github.com/suryakannankumbhar/FoodyBuddy"
    }
  },
  {
    date: "Project",
    title: "Born Elite",
    description: "A web app for a fitness startup, providing tailored fitness and nutritional advice. It features calculators for macros, BMI, BMR, and TDEE. The app uses EmailJS to securely send the calculated results directly to the user's email.",
    tech: ["React", "JavaScript", "EmailJS", "CSS", "HTML"],
    image: "/images/gif/born-elite.gif",
    links: {
      live: "https://born-elite.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/born-elite"
    }
  },
  {
    date: "Project",
    title: "CSE Conference",
    description: "A web app for my college's CSE department conference. It provides event details and allows users to submit conference papers. Google Firestore is used as the backend to store submissions, which are accessible via a secure admin panel.",
    tech: ["React", "Google Firestore", "JavaScript", "CSS", "Firebase"],
    image: "/images/gif/cse-conference.gif",
    links: {
      live: "https://cse-conference.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/cse-conference"
    }
  },
  {
    date: "Project",
    title: "Expense Tracker",
    description: "A web app to effortlessly manage finances. It features Speechly integration for voice-based transaction input (e.g., 'Add income of $50'). All transactions are securely stored in the browser's localstorage for persistence.",
    tech: ["ReactJS", "JavaScript", "Speechly", "Material UI", "LocalStorage"],
    image: "/images/gif/expense-tracker.gif",
    links: {
      live: "https://track-my-money-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/expense-tracker"
    }
  },
  {
    date: "Project",
    title: "YourTodos",
    description: "A todo app that goes beyond simple tasks by categorizing them into food, sports, and mental health. It features Google Authentication for user sign-in and uses Firebase for real-time data storage and synchronization.",
    tech: ["React", "Firebase", "Google Authentication", "CSS"],
    image: "/images/gif/your-todos.gif",
    links: {
      live: "https://your-todos-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/your-todos"
    }
  },
  {
    date: "Project",
    title: "FlyHi",
    description: "A simple and fun Flappy Bird-style game built from scratch. The game is created entirely with Vanilla JS, with all physics and rendering handled on an HTML Canvas.",
    tech: ["Canvas", "Vanilla JS", "HTML5", "CSS3"],
    image: "/images/gif/fly-hi.gif",
    links: {
      live: "https://fly-hi.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/fly-hi"
    }
  },
  {
    date: "Project",
    title: "Picasso's Playground",
    description: "A simple drawing application made with Vanilla JS on an HTML Canvas. It allows for free-form drawing with basic brush controls. This app is currently designed for laptops and desktops.",
    tech: ["Vanilla JS", "Canvas", "HTML5", "CSS3"],
    image: "/images/gif/picasso.gif",
    links: {
      live: "https://picassos-playground.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/picasso-lite"
    }
  },
  {
    date: "Project",
    title: "BlackNotes",
    description: "A clean, minimalist note-taking web app built with React. All notes are stored locally in the web browser's LocalStorage, making it fast and accessible offline.",
    tech: ["ReactJS", "LocalStorage", "JavaScript", "CSS"],
    image: "/images/gif/black-notes.gif",
    links: {
      live: "https://black-notes-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/notes-v1"
    }
  },
  {
    date: "Project",
    title: "CheckWeather",
    description: "An API-based web app for finding current weather data from anywhere in the world. It uses the OpenWeather API to fetch and display information like temperature, humidity, and wind speed.",
    tech: ["Vanilla JS", "OpenWeather API", "HTML5", "CSS3"],
    image: "/images/gif/weather.gif",
    links: {
      live: "https://check-weather-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/weather-app-v1"
    }
  },
  {
    date: "Project",
    title: "Check-List",
    description: "A straightforward and simple todo list application for daily task management. Tasks are managed using Vanilla JS and saved persistently in the browser's Local Storage.",
    tech: ["Vanilla JS", "Local Storage", "HTML5", "CSS3"],
    image: "/images/gif/checklist.gif",
    links: {
      live: "https://check-list-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/todo-list-v1"
    }
  },
  {
    date: "Project",
    title: "FindingFlix",
    description: "A web app that uses the IMDb API to find information about movies and shows. Users can search for titles and get details. Built entirely with Vanilla JS.",
    tech: ["Vanilla JS", "IMDb API", "HTML5", "CSS3"],
    image: "/images/gif/finding-flix.gif",
    links: {
      live: "https://imdb-api-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/imdb-api-v1"
    }
  },
  {
    date: "Project",
    title: "CrazyTree",
    description: "A simple web app that visualizes a fractal tree. The beautiful, complex branching structure is generated using the principle of recursion in Vanilla JS and drawn on an HTML Canvas.",
    tech: ["Vanilla JS", "Recursion", "Canvas", "HTML5"],
    image: "/images/gif/tree.gif",
    links: {
      live: "https://fractal-tree-v1.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/fractal-tree-v1"
    }
  },
  {
    date: "Project",
    title: "KingPong",
    description: "A simple Ping Pong game built as a desktop application. The game logic, controls, and graphics are all handled using the PyGame module in Python.",
    tech: ["Python", "PyGame"],
    image: "/images/gif/king-pong.gif",
    links: {
      live: "https://github.com/suryakannankumbhar/King-Pong/raw/main/kingpong.exe",
      repo: "https://github.com/suryakannankumbhar/King-Pong"
    }
  },
  {
    date: "Project",
    title: "TicTacToe",
    description: "A classic Tic Tac Toe game built as a desktop application. This project was created to practice game logic and state management using the PyGame module in Python.",
    tech: ["Python", "PyGame"],
    image: "/images/gif/tictactoe.gif",
    links: {
      live: "https://github.com/suryakannankumbhar/TicTacToe/raw/main/tictactoe.exe",
      repo: "https://github.com/suryakannankumbhar/TicTacToe"
    }
  },
  {
    date: "Project",
    title: "FeedingPython",
    description: "A simple Snake Feeding game, a classic arcade-style game. This desktop application was built to explore collision detection and game loops using the PyGame module in Python.",
    tech: ["Python", "PyGame"],
    image: "/images/gif/snakes.gif",
    links: {
      live: "https://github.com/suryakannankumbar/FeedingPython/raw/main/game.exe",
      repo: "https://github.com/suryakannankumbhar/FeedingPython"
    }
  },
  {
    date: "Project",
    title: "ForBinge",
    description: "Feeling bored and want to watch something? This simple React app gives you recommendations on what you can binge-watch this weekend based on different genres.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/gif/for-binge.gif",
    links: {
      live: "https://for-binge.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/for-binge"
    }
  },
  {
    date: "Project",
    title: "Emotikon",
    description: "Struggle with emojis? This simple React app helps you understand what those weird and confusing emojis actually mean by letting you search a database.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/gif/emoti-kon.gif",
    links: {
      live: "https://emoti-kon.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/emoti-kon"
    }
  },
  {
    date: "Project",
    title: "MessageMorse",
    description: "A fun app for paranoid users, built with Vanilla JS. You can both Encode your plain text into Morse code and Decode Morse code back into plain text.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/images/gif/message-morse.gif",
    links: {
      live: "https://message-morse.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/morse-code"
    }
  },
  {
    date: "Project",
    title: "TalkLikeMinion",
    description: "A small, fun translator app that lets you speak 'banana' language. This app translates your text into the language of the Minions using an external API.",
    tech: ["JavaScript", "HTML", "CSS", "API"],
    image: "/images/gif/talk-like-minion.gif",
    links: {
      live: "https://talk-like-minion.netlify.app/",
      repo: "https://github.com/suryakannankumbhar/minion-translator"
    }
  }
];

export default function MainContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    navigator.clipboard.writeText("suryakannankumbhar@gmail.com");
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main id="main-content" className={styles.mainContent}>
      
      <section id="experience" className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience & Projects</h2>
        
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} style={{ height: '100%' }}></div>
          
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              image={item.image}
              tech={item.tech}
              links={item.links}
            />
          ))}
        </div>
      </section>

      
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        
        <div className={styles.contactContainer}>
          
          
          <a 
            href="mailto:suryakannankumbhar@gmail.com"
            className={styles.emailWrapper} 
            title="Click to Send Email"
          >
            <div className={styles.iconBox}>
              <FaEnvelope />
            </div>

            <span className={styles.emailText}>
              E-Mail
            </span>

            
            <button 
              onClick={handleCopy} 
              className={styles.copyButton} 
              title="Copy Email Address"
            >
              {copied ? <FaCheck color="#4ade80" /> : <FaCopy />}
            </button>

          </a>

          
          <a 
            href="https://www.linkedin.com/in/suryakannankumbhar" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

        <p className={styles.quote}>
          "Afraid of the light. It attracts bugs."
        </p>
      </section>
    </main>
  )
}