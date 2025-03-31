import PocketStudio from '../src/assets/logos_projects/pocket_studio.png';
import BruinPause from '../src/assets/logos_projects/bruin_pause.png';
import BrewinHappiness from '../src/assets/logos_projects/brewin_happiness.png';
import BruinMarketplace from '../src/assets/logos_projects/bruin_marketplace.png';
import Sigmax from '../src/assets/logos_projects/sigmax.png';
import AugmentedReality from '../src/assets/logos_projects/ar.png';
import WebBanner from '../src/assets/logos_projects/web_banner.png';
import Chatbot from '../src/assets/logos_projects/chatbot.png';
import TheHill from '../src/assets/logos_projects/the_hill.png';
import OnTheDot from '../src/assets/logos_projects/on_the_dot.png';
import SuperPeachSisters from '../src/assets/logos_projects/super_peach_sisters.png';
import VitalMotion from '../src/assets/logos_projects/vital_motion.png';

export type ProjectDetails = {
    category: string;
    subcategory?: string;
    image: any;
    title: string;
    role: string;
    tools: string;
    description: string;
    links: Array<Array<string>>; // links: [{Figma: 'Figma'}, {GitHub: 'GitHub'}, {Demo: 'Demo'}],
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
        title: 'RTX x GWC: On The Dot',
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
        title: 'DH 150: Chatbot',
        role: 'Product Design Prototyper',
        tools: 'AIML',
        description: "A chatbot prototype that discusses a bunny's diet. This project explores the elements of user experience in the field of artificial intelligence and machine learning. The design was refined through usability testing and by writing and testing conversational scripts.",
        links: [['Documentation', 'https://energetic-mantis-130.notion.site/Conversation-Design-w-Chatbots-6a73249cb04647d7b5659c758b3406ca?pvs=4']],
    },
    {   
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: AugmentedReality,
        title: 'DH 150: AR Exhibit',
        role: 'Product Design Prototyper',
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
        title: 'DH 150: Web Banner',
        role: 'Product Design Prototyper',
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
        tools: 'WordPress, Figma, Tableau, OpenRefine',
        description: "With data visualization and analysis, 'Brewin' Happiness' explores how politics, technology, and wealth impact individual wellbeing. We used data from the World Happiness Report 2020 that was collected from 1,000 residents in each of the 153 selected countries.",
        links: [['Website', 'https://brewinhappiness.humspace.ucla.edu/']],
    }
];