import { skillIcons } from './icon_data';

export const workDataPersonal = [
    {
        title: "Playlist Comparison",
        technologies: [
            {
                name: "ReactJS",
                icon: skillIcons.react
            },
            {
                name: "TailwindCSS",
                icon: skillIcons.tailwind
            },
            {
                name: "Firebase",
                icon: skillIcons.firebase
            }
        ],
        description: "A web app created using ReactJS & styled using TailwindCSS. Uses the Spotify API to fetch and display playlists in a timeline and provides playlist editing options including; adding additional tracks, re-ordering tracks and deleting tracks. This app also uses the framer-motion library for animations and Firebase to store credentials for API usage.",
        url: "https://playlist-comparison-v2.vercel.app/",
        github: "https://github.com/gthornbuckle/playlist-comparison-react",
        image:"https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/Playlist%20Comparison.png?alt=media&token=3afcee35-705b-49bb-92cb-d9f38315db6a",
    },
]