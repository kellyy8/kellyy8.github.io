// Images for projects
import PocketStudio from "../src/assets/logos_projects/pocket_studio.png"
import BruinPause from "../src/assets/logos_projects/bruin_pause.png"
import BrewinHappiness from "../src/assets/logos_projects/brewin_happiness.png"
import BruinMarketplace from "../src/assets/logos_projects/bruin_marketplace.png"
import Sigmax from "../src/assets/logos_projects/sigmax.png"
import AugmentedReality from "../src/assets/logos_projects/ar.png"
import WebBanner from "../src/assets/logos_projects/web_banner.png"
import Chatbot from "../src/assets/logos_projects/chatbot.png"
import TheHill from "../src/assets/logos_projects/the_hill.png"
import OnTheDot from "../src/assets/logos_projects/on_the_dot.png"
import SuperPeachSisters from "../src/assets/logos_projects/super_peach_sisters.png"
import VitalMotion from "../src/assets/logos_projects/vital_motion.png"

// Images for graphic design
import quote1 from "../src/assets/gd/1.jpg"
import quote2 from "../src/assets/gd/2.jpg"
import quote3 from "../src/assets/gd/3.jpg"
import quote4 from "../src/assets/gd/4.jpg"
import quote5 from "../src/assets/gd/5.jpg"
import quote6 from "../src/assets/gd/6.jpg"
import quote7 from "../src/assets/gd/7.jpg"
import quote8 from "../src/assets/gd/8.jpg"
import quote9 from "../src/assets/gd/9.jpg"
import quote10 from "../src/assets/gd/10.jpg"
import quote11 from "../src/assets/gd/11.jpg"
import quote12 from "../src/assets/gd/12.jpg"
import quote13 from "../src/assets/gd/13.jpg"
import aca from "../src/assets/gd/play_a_card_game.jpg"
import week4_ig from "../src/assets/gd/week4_ig.png"
import week5_ig from "../src/assets/gd/week5_ig.png"
import week10_ig from "../src/assets/gd/week10_ig.png"

// Images for extracurriculars
import acaallday from "../src/assets/logos_ec/acaallday.png"
import acabruins from "../src/assets/logos_ec/acabruins.png"
import bc from "../src/assets/logos_ec/bc.png"
import be from "../src/assets/logos_ec/bruin_entrepreneurs.png"
import cp from "../src/assets/logos_ec/codepath.png"
import dfg from "../src/assets/logos_ec/dfg.png"
import fc from "../src/assets/logos_ec/fc.png"
import treehacks from "../src/assets/logos_ec/treehacks.png"
import lahacks from "../src/assets/logos_ec/lahacks.png"
import swe from "../src/assets/logos_ec/swe.png"
import tt from "../src/assets/logos_ec/tt.png"
import upe from "../src/assets/logos_ec/upe.png"

export type ProjectDetails = {
    category: string
    subcategory?: string
    image: any
    title: string
    role: string
    tools: string
    description: string
    links: Array<Array<string>> // links: [{Figma: 'Figma'}, {GitHub: 'GitHub'}, {Demo: 'Demo'}],
}

/* Expore an array of data about each project. */
export const projectData : Array<ProjectDetails> = [
    {   
        category: 'Software Development',
        subcategory: 'Web Development',
        image: VitalMotion,
        title: 'Vital Motion',
        role: 'Frontend Web Developer & UI/UX Designer',
        tools: 'Expo, JavaScript, Figma, Git',
        description: "An Expo web application that combines fitness tracking and pain tracking together to help users exercise more effectively and mindfully, \
                    especially for users who are in physical therapy. We designed a simple algorithm to recommend workouts based on a user's fitness and pain history.",
        // links: [{Figma: 'Figma'}, {GitHub: 'GitHub'}, {Demo: 'Demo'}],
        links: [['Demo', 'https://www.youtube.com/watch?v=fLkR6i_Ymqc'],
                ['Figma', 'https://www.figma.com/design/KblFIOtRugXy0QlM6d6Hnv/CS-130---VitalMotion'], 
                ['GitHub', 'https://github.com/morganmason0606/CS_130']],
    },
    {
        category: 'Software Development',
        subcategory: 'Mobile Development',
        image: PocketStudio,
        title: 'Pocket Studio',
        role: 'Co-Lead Full-Stack Mobile Developer',
        tools: 'Swift, Figma, Git',
        description: "A Swift iOS mobile application that uses infinite zoom art and storytelling to promote mental wellness and creativity. Mental wellness features include a mood tracker and a digital journal with prompts inspired by the main character's growth and self-discovery.",
        links: [['Demo', 'https://docs.google.com/presentation/d/1KGYhBn93eg5blTtsxOIVH9WtdJooLkxAKk_ey-bHgsk/edit?usp=sharing'],
                ['Figma', 'https://www.figma.com/file/6D9uJZFatgM5yHqAYgQ7OL/Pocket-Studio?type=design&node-id=148-23&mode=design&t=EMyyr5Brgo3Yavb9-0'], 
                ['GitHub', 'https://github.com/kellyy8/Pocket-Studio']],
    },
    {   
        category: 'Software Development',
        subcategory: 'Mobile Development',
        image: Sigmax,
        title: 'SIGMAX',
        role: 'Front-End Mobile Developer',
        tools: 'JavaScript, Python, React, Flask',
        description: 'A React Native mobile application for interacting with a Baymax-inspired robot that delivers first-aid items. Developed with a team of 14 members consisting of software and hardware developers and designers.',
        links: [['Demo', 'https://docs.google.com/presentation/d/1q2qUzp7k27q2UW4LVR-Uy1ESQOV1--8W/edit?usp=sharing&ouid=117463529021312945793&rtpof=true&sd=true'],
                ['GitHub', 'https://github.com/kellyy8/SIGMAX']],
    },
    {   
        category: 'Software Development',
        subcategory: 'Web Development',
        image: BruinMarketplace,
        title: 'Bruin Marketplace',
        role: 'Front-End Web Developer, UI Designer',
        tools: 'JavaScript, React, Firebase',
        description: 'A React web application for UCLA students to exchange furniture and supplies to promote sustainability. Students can create their own profiles, add, modify, and display their own product listings, and view and search through a database of listings.',
        links: [['Demo', 'https://youtu.be/zffglyA_28A'],
                ['GitHub', 'https://github.com/kellyy8/UCLA-Bruin-Marketplace']],
    },
    {   
        category: 'Software Development',
        subcategory: 'n/a',
        image: SuperPeachSisters,
        title: 'Super Peach Sisters',
        role: 'Developer',
        tools: 'C++',
        description: 'A Super Mario inspired video game with 15 interactive features developed and tested using an object-oriented design.',
        links: [['Demo', 'https://youtu.be/4QEcL4eS-AI?feature=shared'],
                ['GitHub', 'https://github.com/kellyy8/Super-Peach-Sisters-Game']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'UI Design, Mobile Dev',
        image: OnTheDot,
        title: 'RTX x GWC: OTD',
        role: 'Front-End Web Developer, UI Designer',
        tools: 'Figma',
        description: "1 of 100 fellows selected to develop a “Give Back” project in teams of 4 using Agile and Scrum principles. 'On The Dot' is a web application prototype that accelerates event attendance tracking for college clubs, and supports first-year and transfer students with finding their communities and getting involved on campus.",
        links: [['Demo', 'https://www.canva.com/design/DAF1hyUqQxM/OMoDDwj14XFM3L_pQwmdOg/view?utm_content=DAF1hyUqQxM&utm_campaign=designshare&utm_medium=link&utm_source=editor'],
                ['Figma', 'https://www.figma.com/proto/U5g3joVn7zTBP19iPEaacE/OTD-Web-App?type=design&node-id=217-2092&t=IPKKQNDcxsAEf3gu-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=217%3A2092&show-proto-sidebar=1&mode=design']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'UI/UX Design, Mobile Dev',
        image: BruinPause,
        title: 'UCLA Bruin Pause',
        role: 'UI/UX Designer',
        tools: 'Figma',
        description: 'An optimal, scalable mobile application prototype for commuter students to locate basic needs on campus. We conducted fieldwork, stakeholder interviews, and usability tests with 20+ users to create a centralized database and design an effective user interface.',
        links: [['Documentation', 'https://docs.google.com/presentation/d/1tlFr7B3SSZKbuZ7lVXHeVJI5oN8bIspsBwVn5Zg1_aQ/edit?usp=sharing'],
                ['Figma', 'https://www.figma.com/proto/PwWICMFE7G8G07dhT41THc/Blues-Clues%3A-BruinPause---Commuter-App?type=design&node-id=510-3963&t=Tw8Ul0D3nEhH6ng2-1&scaling=scale-down&page-id=510%3A2870&starting-point-node-id=510%3A3963&show-proto-sidebar=1&mode=design']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'UI Design, Mobile Dev',
        image: TheHill,
        title: 'The Hill',
        role: 'UI Designer',
        tools: 'Figma',
        description: "For UCLA Bruin Entrepreneurs' 2-day Designathon. 'The Hill' is a scalable mobile application prototype that uses gamification to incentivize 32,000+ students to explore UCLA Learning Center's educational resources and technical workshops.",
        links: [['Demo', 'https://www.canva.com/design/DAFrvpd3pJM/pcVDIJaAA0Gt-YAO4wy6zQ/edit'],
                ['Figma', 'https://www.figma.com/file/CqTHnaL4fwiLmLrAXPc5C2/designathon---Brewin-Bruins?type=design&node-id=0-1&mode=design&t=Po3Cwi8t8xTpO1rR-0']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: Chatbot,
        title: 'Chatbot',
        role: 'Product Designer, Prototyper',
        tools: 'AIML',
        description: "A chatbot prototype that discusses a bunny's diet. This project explores the elements of user experience in the field of artificial intelligence and machine learning. The design was refined through usability testing and by writing and testing conversational scripts.",
        links: [['Documentation', 'https://energetic-mantis-130.notion.site/Conversation-Design-w-Chatbots-6a73249cb04647d7b5659c758b3406ca?pvs=4']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: AugmentedReality,
        title: 'AR Exhibit',
        role: 'Product Designer, Prototyper',
        tools: 'Bezel',
        description: 'A 3D prototype that uses augmented reality to offer museum visitors an immersive experience. Museum visitors can learn about what dogs love to do in natural environments with information overlay.',
        links: [['Demo', 'https://drive.google.com/file/d/1keXehyVljxNsTF4VtOSipUqi_XIT50ts/view?usp=sharing'],
                ['Documentation', 'https://energetic-mantis-130.notion.site/Visual-Annotation-w-3D-Models-493c1d01b47347cc97c510e572d2cfcf?pvs=4'],
                ['Prototype', 'https://www.bezel.it/play/5f38909a-3775-4b5a-86e7-bfa7cf908b3f']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: WebBanner,
        title: 'Web Banner',
        role: 'Product Designer, Prototyper',
        tools: 'Google Web Designer',
        description: 'A web banner for National Geographic Kids aiming to improve audience exposure and subscriptions. This web banner shares about why certain dog breeds are more suited for swimming. The target audiences are kids, who will learn, and parents, who will pay for the subscriptions.',
        links: [['Demo', 'https://drive.google.com/file/d/1RLVkPTLFHzdo7ARwkYd9bB3MzATJ151E/view?usp=sharing'],
                ['Documentation', 'https://energetic-mantis-130.notion.site/National-Geographic-Ad-w-Web-Banners-c78624a775754944af40df94ee60badb?pvs=4']],
    },
    {   
        category: 'Data Analysis',
        subcategory: 'n/a',
        image: BrewinHappiness,
        title: "Brewin' Happiness",
        role: 'Web Designer, Data Analyst',
        tools: 'Figma, Tableau, OpenRefine', // WordPress
        description: "With data visualization and analysis, 'Brewin' Happiness' explores how politics, technology, and wealth impact individual wellbeing. We used data from the World Happiness Report 2020 that was collected from 1,000 residents in each of the 153 selected countries.",
        links: [['Website', 'https://brewinhappiness.humspace.ucla.edu/']],
    }
]

export type HobbyDetails = {
    category: string
    title: string
    image?: any        /** For graphic design */
    link?: string      /** For dance and videography */
}

export const hobbyData : Array<HobbyDetails> = [
    {
        category: 'Graphic Design',
        title: 'Quote #1',
        image: quote13,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #2',
        image: quote1,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #3',
        image: quote2,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #4',
        image: quote3,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #5',
        image: quote4,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #6',
        image: quote5,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #7',
        image: quote6,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #8',
        image: quote7,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #9',
        image: quote8,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #10',
        image: quote9,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #11',
        image: quote10,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #12',
        image: quote11,
    },
    {
        category: 'Graphic Design',
        title: 'Quote #13',
        image: quote12,
    },
    {
        category: 'Graphic Design',
        title: 'ACA Social Night',
        image: aca,
    },
    {
        category: 'Graphic Design',
        title: 'Bruin Creators: Workshop 4',
        image: week4_ig,
    },
    {
        category: 'Graphic Design',
        title: 'Bruin Creators: Workshop 5',
        image: week5_ig,
    },
    {
        category: 'Graphic Design',
        title: 'Bruin Creators: Guest Speaker',
        image: week10_ig,
    },
    {
        category: 'Dance',
        title: "LSHIP Set [WIDE VIEW] || Supernova: Foundations Choreography Spring 2024 Exhibition",
        link: "https://www.youtube.com/embed/X_e_upKWDrA?si=Up4_QUgQNE5bRvo_",
    },
    {
        category: 'Dance',
        title: "LSHIP Set [FRONT VIEW] || Supernova: Foundations Choreography Spring 2024 Exhibition",
        link: "https://www.youtube.com/embed/Wt6Mk7rmTzA?si=4IwZ8wqcydEdNZ3H",
    },
    // {
    //     category: 'Dance',
    //     title: "ACA [WIDE VIEW] || Resurgence 2023 [@VIBRVNCY 4k]",
    //     link: "https://www.youtube.com/embed/la12pLEXvKw?si=ZI6eJ-FQOLiBRHf4",
    // },
    // {
    //     category: 'Dance',
    //     title: "ACA [FRONT VIEW] || Resurgence 2023 [@VIBRVNCY 4k]",
    //     link: "https://www.youtube.com/embed/FfaZ7bYxWmY?si=1t_nS0PJ_JPTeBm0",
    // },
    {
        category: 'Dance',
        title: "ACA [WIDE VIEW] || Prelude NorCal 2023",
        link: "https://www.youtube.com/embed/OQeutCd8Ssw?si=h7wickFPAQspGRz5",
    },
    {
        category: 'Dance',
        title: "ACA [FRONT VIEW] || Prelude NorCal 2023",
        link: "https://www.youtube.com/embed/1f-jkEIxosk?si=Ur91y2hpQ5Ifu06j",
    },
    {
        category: 'Dance',
        title: "LSHIP Set || Zenith: Foundations Choreography Spring 2023 Exhibition",
        link: "https://www.youtube.com/embed/X_e_upKWDrA?si=8hrlYZ8hjtiEYTqu",
    },
    {
        category: 'Dance',
        title: "UCLA Spring Sing 2022 Talent: ACA",
        link: "https://www.youtube.com/embed/oc_rrmS9W6k?si=Y8eGDL5BT7WMhw0B",
    },
    {
        category: 'Dance',
        title: "ACA || Daybreak: Foundations Choreography Fall 2021 Exhibition",
        link: "https://www.youtube.com/embed/PCtdMjVWS50?si=A8gZkORnREZLIabK",
    },
    {
        category: 'Dance',
        title: "MSG || Metamorphosis: Foundations Choreography Fall 2020 Virtual Exhibition",
        link: "https://www.youtube.com/embed/UnO_A7fpkbM?si=hNAlPKq9K5o2DIiL",
    },
    {
        category: 'Videography',
        title: "a Year in my Life || 7000+ pictures",
        link: "https://www.youtube.com/embed/KW4k2BwoXqg?si=BM5mgk6wq3vNgZA4",
    },
    {
        category: 'Videography',
        title: "UCLA Acceptance Video Challenge",
        link: "https://www.youtube.com/embed/NPaA-m0WH94?si=VfY4STPQm69eNFeg",
    },
    {
        category: 'Videography',
        title: "ATE [Front View] || Eclipse: Foundations Choreography Fall 2023 Exhibition",
        link: "https://www.youtube.com/embed/prJa8QQw2Pw?si=CZM0ZOPO7yAsbqlK",
    },
    {
        category: 'Videography',
        title: "Zinc Lim || Foundations Choreography Fall 2023 Workshop",
        link: "https://www.youtube.com/embed/6CMe_H4QKXs?si=CBHeUf29lkdfxr1R",
    },
    {
        category: 'Videography',
        title: "SACA [FRONT VIEW] || Zenith: Foundations Choreography Spring 2023 Exhibition",
        link: "https://www.youtube.com/embed/sa4ywlliijI?si=8O2IXkl_1D-F8-M6",
    },
    {
        category: 'Videography',
        title: "Plan D [FRONT VIEW] || Zenith: Foundations Choreography Spring 2023 Exhibition",
        link: "https://www.youtube.com/embed/Q8cOncOzK40?si=qa7Pc71gtBPAsOrH",
    },
]

export type ExtracurricularDetails = {
    image: any
    title: string
    role: string
    link: string
}

export const professionalExtracurricularData : Array<ExtracurricularDetails> = [
    {
        image: dfg,
        title: 'Develop for Good',
        role: 'Engineering Manager',
        link: 'https://www.developforgood.org/',
    },
    {
        image: tt,
        title: 'Theta Tau - Professional Engineering Fraternity',
        role: 'Webmaster',
        link: 'https://www.thetataubruins.org/',
    },
    {
        image: swe,
        title: 'Society of Women Engineers',
        role: 'Mentor',
        link: 'https://ucla.swe.org/',
    },
    {
        image: upe,
        title: 'UCLA Upsilon Pi Epsilon Honor Society',
        role: 'Tutor',
        link: 'https://upe.seas.ucla.edu/',
    },
    {
        image: acabruins,
        title: 'Association of Chinese Americans',
        role: 'Finance Intern',
        link: 'https://acabruins.org/',
    },
    {
        image: treehacks,
        title: 'Stanford TreeHacks',
        role: 'Hackathon Competitor',
        link: 'https://treehacks.com/',
    },
    {
        image: lahacks,
        title: 'UCLA LA Hacks',
        role: 'Hackathon Competitor',
        link: 'https://www.instagram.com/lahacks/',
    },
    {
        image: be,
        title: 'Bruin Entrepreneurs',
        role: 'Designathon Competitor',
        link: 'https://designathon2023.bruinentrepreneurs.org/',
    },
    {
        image: cp,
        title: 'CodePath',
        role: 'Student',
        link: 'https://www.codepath.org/',
    },
]

export const creativeExtracurricularData : Array<ExtracurricularDetails> = [
    {
        image: acaallday,
        title: 'ACA All Day Collegiate Competitive Dance Team',
        role: 'Dancer',
        link: 'https://www.instagram.com/acaallday/',
    },
    {
        image: fc,
        title: 'Foundations Choreography',
        role: 'Videographer',
        link: 'https://www.instagram.com/foundationschoreo/',
    },
    {
        image: bc,
        title: 'Bruin Creators',
        role: 'Marketing Director & Graphic Designer',
        link: 'https://bruincreators.wixsite.com/home',
    },
]