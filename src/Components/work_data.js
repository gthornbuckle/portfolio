import { skillIconsInline } from './icon_data';
import { skillIconsColour } from './icon_data';
import thissite_img from './images/project_images/portfolio_site.png';
import playlistcomparison_img from './images/project_images/playlist_comparison.png';
import blackjack_img from './images/project_images/blackjack.png';
import fmb_img from './images/project_images/find_my_band.png';
import jj_img from './images/project_images/journey_junkies.png';
import weather_img from './images/project_images/weather_dashboard.png';


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
        image: thissite_img,
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
        image: playlistcomparison_img,
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
        image: blackjack_img,
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
        image: fmb_img,
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
        image: jj_img,
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
        image: weather_img,
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