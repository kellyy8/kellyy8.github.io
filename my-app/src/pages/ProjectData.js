import PocketStudio from '../logos/pocket_studio.png';
import BruinPause from '../logos/bruin_pause.png';
import BrewinHappiness from '../logos/brewin_happiness2.png';
import BruinMarketplace from '../logos/bruin_marketplace.png';
import Sigmax from '../logos/sigmax.png';
import AugmentedReality from '../logos/augmented_reality.png';
import WebBanner from '../logos/web_banner.png';
import Chatbot from '../logos/chatbot.png';
import TheHill from '../logos/the_hill.png';
import OnTheDot from '../logos/on_the_dot.png';
import SuperPeachSisters from '../logos/super_peach_sisters.png';

/* Expore an array of data about each project. */
const items = [
    {   id: 1,
        category: 'Software Development',
        subcategory: 'Mobile Development',
        image: PocketStudio,
        title: 'Pocket Studio',
        role: 'Co-Lead Frontend Mobile Developer',
        tools: 'Swift, Figma, Git',
        description: 'A Swift iOS mobile app that uses infinite zoom art and storytelling to promote mental wellness and creativity.',
        // links: [{Figma: 'Figma'}, {GitHub: 'GitHub'}, {Demo: 'Demo'}],
        links: [['Figma', 'https://www.figma.com/file/6D9uJZFatgM5yHqAYgQ7OL/Pocket-Studio?type=design&node-id=148-23&mode=design&t=EMyyr5Brgo3Yavb9-0'], 
                ['GitHub', 'https://github.com/kellyy8/Pocket-Studio'],
                ['Demo', 'https://docs.google.com/presentation/d/1KGYhBn93eg5blTtsxOIVH9WtdJooLkxAKk_ey-bHgsk/edit?usp=sharing']],
    },
    {   id: 2,
        category: 'Software Development',
        subcategory: 'Mobile Development',
        image: Sigmax,
        title: 'SIGMAX',
        tools: 'JavaScript, Python, React, Flask',
        description: 'React Native mobile app for interacting with a Baymax-inspired robot that delivers first-aid items. Developed with a team of 14 members consisting of software and hardware developers and designers.',
        links: [['GitHub', 'GitHub link'], ['Demo', 'Demo link']],
    },
    {   id: 3,
        category: 'Software Development',
        subcategory: 'Web Development',
        image: BruinMarketplace,
        title: 'Bruin Marketplace',
        tools: 'JavaScript, React, Firebase'
    },
    {   id: 4,
        category: 'Software Development',
        subcategory: 'n/a',
        image: SuperPeachSisters,
        title: 'Super Peach Sisters',
        tools: 'C++'
    },
    {   id: 5,
        category: 'UI/UX Design',
        subcategory: 'UI Design, Mobile Dev',
        image: OnTheDot,
        title: 'RTX x GWC: On The Dot',
        tools: 'Figma'
    },
    {   id: 6,
        category: 'UI/UX Design',
        subcategory: 'UI/UX Design, Mobile Dev',
        image: BruinPause,
        title: 'UCLA Bruin Pause',
        tools: 'Figma'
    },
    {   id: 7,
        category: 'UI/UX Design',
        subcategory: 'UI Design, Mobile Dev',
        image: TheHill,
        title: 'The Hill',
        tools: 'Figma'
    },
    {   id: 8,
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: Chatbot,
        title: 'DH 150: Chatbot',
        tools: 'AIML'
    },
    {   id: 9,
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: AugmentedReality,
        title: 'DH 150: AR Exhibit',
        tools: 'Bezel'
    },
    {   id: 10,
        category: 'UI/UX Design',
        subcategory: 'Prototyping',
        image: WebBanner,
        title: 'DH 150: Web Banner',
        tools: 'Google Web Designer'
    },
    {   id: 11,
        category: 'Data Analytics',
        subcategory: 'n/a',
        image: BrewinHappiness,
        title: "Brewin' Happiness",
        tools: 'WordPress, Figma, Tableau, OpenRefine'
    }
];

export default items;