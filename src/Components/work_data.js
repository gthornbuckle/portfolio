import { skillIconsInline } from './icon_data';
import { skillIconsColour } from './icon_data';

export const workData = [
    {
        title: "This Website",
        technologies: [
            {
                name: "React",
                icon: skillIconsInline.react
            },
            {
                name: "TailwindCSS",
                icon: skillIconsInline.tailwind
            }
        ],
        description: "This website was created using React & styled using TailwindCSS. It serves as a showcase of my current work and skills as well as information about myself.",
        url: "hornbuckle.dev",
        github: "https://github.com/gthornbuckle/portfolio",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/portfolio_site.png?alt=media&token=fb784494-6cc9-479f-980e-4a3a57fba5cd",
    },
    {
        title: "Playlist Comparison",
        technologies: [
            {
                name: "React",
                icon: skillIconsInline.react
            },
            {
                name: "TailwindCSS",
                icon: skillIconsInline.tailwind
            },
            {
                name: "Firebase",
                icon: skillIconsInline.firebase
            }
        ],
        description: "A web app created using React & styled using TailwindCSS. Uses the Spotify API to fetch and display playlists in a timeline and provides playlist editing options including; adding additional tracks, re-ordering tracks and deleting tracks. This app also uses the framer-motion library for animations and Firebase to store credentials for API usage.",
        url: "https://playlist-comparison-v2.vercel.app/",
        github: "https://github.com/gthornbuckle/playlist-comparison-react",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/playlist_comparison.png?alt=media&token=2105ee36-db7e-4570-a785-a025bfaf1326",
    },
    {
        title: "Blackjack",
        technologies: [
            {
                name: "React",
                icon: skillIconsInline.react
            },
            {
                name: "CSS",
                icon: skillIconsInline.css3
            }
        ],
        description: "Created using React & styled using basic CSS. A simple web app which allows users to play a game of Blackjack. I created to test my knowledge of React as well as a learning experience for the animation library framer-motion.",
        url: "no_url_yet",
        github: "https://github.com/gthornbuckle/Blackjack",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/blackjack.png?alt=media&token=babaedf7-2482-4923-b226-0e250d6c22ab",
    },
    {
        title: "Find My Band",
        technologies: [
            {
                name: "HTML",
                icon: skillIconsInline.html5
            },
            {
                name: "CSS",
                icon: skillIconsInline.css3
            },
            {
                name: "Javascript",
                icon: skillIconsInline.javascript
            },
            {
                name: "Bootstrap",
                icon: skillIconsInline.bootstrap
            }
        ],
        description: "Created using HTML, Javascript ES6 & styled using Bootstrap. Created as part of my bootcamp group work, this website allows users to enter their location along with a band or artist and recieve upcoming event information within their area.",
        url: "https://jayclay922.github.io/Find-My-Band/index.html",
        github: "https://github.com/gthornbuckle/Find-My-Band",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/find_my_band.png?alt=media&token=abebea37-8a8e-4322-93bc-056896cdcdba",
    },
    {
        title: "Journey Junkies",
        technologies: [
            {
                name: "React",
                icon: skillIconsInline.html5
            },
            {
                name: "Bootstrap",
                icon: skillIconsInline.bootstrap
            }
        ],
        description: "Created using React & styled using Bootstrap, this website was also created as part of my bootcamp group work. Designed to plan city breaks, a user can input a city and then recieve information on hotels, restaurants and attractions within that city. These can be saved into seperate 'Journeys' to view later. (The APIs used for this project have since been deprecated meaning some aspects of the site may function incorrectly).",
        url: "https://gthornbuckle-journeyjunkies.netlify.app/search",
        github: "https://github.com/gthornbuckle/Journey-Junkies",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/journey_junkies.png?alt=media&token=93e63589-7a1e-4e78-819e-8b9f1b1001f7",
    },
    {
        title: "Weather Dashboard",
        technologies: [
            {
                name: "HTML",
                icon: skillIconsInline.html5
            },
            {
                name: "CSS",
                icon: skillIconsInline.css3
            },
            {
                name: "Javascript",
                icon: skillIconsInline.javascript
            }
        ],
        description: "Created using HTML, Javascript ES6 & styled using CSS. A simple weather app that prompts the user for a location and returns the week's weather forecast.",
        url: "https://gthornbuckle.github.io/Weather-Dashboard/",
        github: "https://github.com/gthornbuckle/Weather-Dashboard",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/weather_dashboard.png?alt=media&token=3f993964-189d-4bef-95c3-069c277a92ba",
    }
]

export const mySkills = [
    {
      name: "HTML5",
      icon: skillIconsColour.HTML5
    },
    {
      name: "CSS3",
      icon: skillIconsColour.CSS3
    },
    {
      name: "Javascript",
      icon: skillIconsColour.Javascript
    },
    {
      name: "React",
      icon: skillIconsColour.React
    },
    {
      name: "TailwindCSS",
      icon: skillIconsColour.TailwindCSS
    },
    {
      name: "Bootstrap",
      icon: skillIconsColour.Bootstrap
    },
    {
      name:  "Firebase",
      icon: skillIconsColour.Firebase
    },
    {
      name:  "Github",
      icon: skillIconsColour.Github
    },
    {
      name:  "nodeJS",
      icon: skillIconsColour.nodeJS
    },
    {
      name:  "NPM",
      icon: skillIconsColour.NPM
    },
    {
      name:  "Postman",
      icon: skillIconsColour.Postman
    },
    {
      name:  "Illustrator",
      icon: skillIconsColour.Illustrator
    }
  ]