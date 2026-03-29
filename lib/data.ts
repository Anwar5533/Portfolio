import { IProject, IExperience } from '@/types';

export const GENERAL_INFO = {
    email: 'anwarkornipalli@gmail.com',

    emailSubject: "Let's collaborate on a Front-end project",
    emailBody: 'Hi Anwar, I am reaching out to you because...',
    oldPortfolio: '',
    upworkProfile: '',
    resume: '/resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Anwar5533' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/anwar-kornipalli-986951167/' },
];

export const MY_STACK = {
    frontend: [
        { name: 'HTML5', icon: '/logo/html5.svg' },
        { name: 'CSS3', icon: '/logo/css3-v2.svg' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'Redux ToolKit', icon: '/logo/redux.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Vite', icon: '/logo/vite.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express', icon: '/logo/express.png' },
    ],
    tools: [
        { name: 'Vitest', icon: '/logo/vitest.svg' },
        { name: 'Jest', icon: '/logo/jest.svg' },
        { name: 'Git', icon: '/logo/git-v2.svg' },
    ],
    'api & testing': [
        { name: 'Postman', icon: '/logo/postman.svg' },
        { name: 'SoapUI', icon: '/logo/soapui-v2.svg' },
    ],
    'security & monitoring': [
        { name: 'SonarQube', icon: '/logo/sonarqube-v2.svg' },
        { name: 'Snyk', icon: '/logo/snyk.svg' },
        { name: 'Splunk', icon: '/logo/splunk-v2.svg' },
    ]
};

export const PROJECTS: IProject[] = [
    {
        title: 'Swiggy Clone',
        slug: 'swiggy-clone',
        liveUrl: 'https://food-app-gamma-virid.vercel.app/',
        year: 2024,
        description: `A rapid food delivery app clone demonstrating advanced React state management system and complex UI interactions.<br/><br/>
        Key Features:<br/>
        <ul>
            <li>Dynamic restaurant browsing</li>
            <li>Real-time cart updates and state management</li>
            <li>Extremely fast load times via Vite packaging</li>
        </ul>
        `,
        role: `Frontend Developer <br/>
        - Implemented Redux for global state management.<br/>
        - Utilized Tailwind CSS for pixel-perfect responsive layouts.<br/>
        - Simulated heavy API calls safely using RTK Query/Axios.`,
        techStack: ['React.js', 'Redux ToolKit', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'JavaScript'],
        thumbnail: '/projects/swiggy.png',
        longThumbnail: '/projects/swiggy.png',
        images: ['/projects/swiggy.png'],
    },
    {
        title: 'Taskify',
        slug: 'taskify',
        liveUrl: 'https://taskify-app-opal.vercel.app/',
        year: 2023,
        description: `A responsive drag-and-drop task management tool focusing on accessibility, persistent storage, and rigorous React testing patterns.`,
        role: `UI Developer <br/>
        - Built end-to-end with React and TypeScript for strong typing.<br/>
        - Handled context-api based persistent local storage.<br/>
        - Tested rigorously using React Testing Library to achieve massive test coverage.`,
        techStack: ['React.js', 'TypeScript', 'Context API', 'CSS', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
        thumbnail: '/projects/taskify.png',
        longThumbnail: '/projects/taskify.png',
        images: ['/projects/taskify.png'],
    },
    {
        title: 'Food Ordering App',
        slug: 'food-app',
        liveUrl: 'https://food-app-gamma-virid.vercel.app/',
        year: 2024,
        description: `A fast and responsive food ordering application designed to browse diverse menus.<br/><br/>
        Users can effortlessly explore top dishes near them and place orders for their favorite food items, built entirely via React and Tailwind CSS.`,
        role: `Frontend Developer <br/>
        - Built dynamic, interactive user interfaces with React.<br/>
        - Crafted a pristine mobile-first design leveraging Tailwind CSS.<br/>
        - Architected state mapping to process and deploy food orders smoothly.`,
        techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
        thumbnail: '/projects/food-app.png',
        longThumbnail: '/projects/food-app.png',
        images: ['/projects/food-app.png'],
    },
    {
        title: 'Investment Calculator',
        slug: 'investment-calculator',
        liveUrl: 'https://investment-calculator-peach-chi.vercel.app/',
        year: 2024,
        description: `A dynamic financial tool built with React designed to compute and visualize complex investment projections.<br/><br/>
        Allows users to input initial capital, expected return rates, and duration to generate comprehensive yearly financial breakdowns and compound interest tracking.`,
        role: `Frontend Developer <br/>
        - Constructed the interactive UI components natively in React.<br/>
        - Handled complex JS math array and matrix algorithms for compounding values.<br/>
        - Styled the application interface using modern CSS.`,
        techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
        thumbnail: '/projects/investment.png',
        longThumbnail: '/projects/investment.png',
        images: ['/projects/investment.png'],
    }
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Web Developer',
        company: 'Travelers Insurance',
        duration: 'Oct 2024 - Present',
        slug: 'travelers-insurance',
        description: [
            'Optimized performance across 15 enterprise applications, improving load and render efficiency by 20% through strategic refactoring and render optimization.',
            'Reduced bundle size by 15% through code splitting, tree-shaking, and removal of unused legacy code.',
            'Decreased UI-related defects by 25% by improving component structure, adding validations, and strengthening integration consistency across applications.',
            'Enhanced reliability by improving error handling and fixing recurring production defects, resulting in smoother deployments and reduced rework.',
            'Developed new features end-to-end while improving responsiveness, accessibility, and cross-application UI consistency.',
            'Contributed to standardized reusable UI components, enabling faster development cycles across the application ecosystem.',
        ],
    },
    {
        title: 'UI Engineer',
        company: 'Medtronic',
        duration: 'Jun 2022 - Sep 2024',
        slug: 'medtronic',
        description: [
            'Engineered scalable, maintainable UI components using React.js reducing development time by 30% across multiple feature rollouts.',
            'Increased page performance by 25% through lazy loading and DOM optimization.',
            'Boosted test coverage from 40% to 90% using Vitest and React Testing Library.',
            'Collaborated with backend teams to integrate RESTful APIs, reducing frontend bugs by 35%.',
            'Streamlined styling with Tailwind CSS, cutting CSS maintenance time by 50%.',
            'Contributed to Agile sprints, participated in estimations, code reviews, and sprint demos.',
        ],
    }
];
