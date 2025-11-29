import { Experience, Project, Skill, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
    email: 'ben.egg.gov@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ben-amado/',
    github: 'https://github.com/ababen1',
    location: 'Central District, Israel', // Update with actual location
};

export const experiences: Experience[] = [
    {
        title: 'Software Developer',
        company: 'Galsoft Software Engineering',
        location: 'Remote',
        startDate: '2022',
        endDate: '2024',
        description: [
            "Developed and maintained scalable server-side logic using Node.js, TypeScript, Express and MongoDB.",
            "Designed and implemented a RESTful API backend to support user management, authentication and real-time multiplayer features.",
            "Led the development of an educational game using Python, with a focus on interactivity and user engagement.",
            "Managed updates and maintenance for the company’s WordPress website: https://www.ad6.co.il."
        ],
        technologies: ['Python', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express'],
    },
    {
        title: 'Full Stack Developer',
        company: 'Enter Digital Studio',
        location: 'Tel Aviv',
        startDate: '2021',
        endDate: '2022',
        description: [
            "Developed a custom calculator application for electricians, in close collaboration with a UX designer to ensure a seamless user experience.",
            "Built an automated web scraper in Python to collect job listings and send personalized weekly emails.",
            "Delivered full-stack web solutions using React | Node.js | Express | MongoDB | TypeScript | JavaScript | Python."
        ],
        technologies: ['Python', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Javascript'],
    },
    {
        title: 'Full Stack Developer',
        company: 'IDF (Basmach / Mamram)',
        location: 'Ramat Gan',
        startDate: '2021',
        endDate: '2022',
        description: [
            "Completed a military-accredited Mamram Programming Course.",
            "Specializing in web and software development.",
            "Participated in cross-functional development projects, working in a team while under pressure"
        ],
        technologies: ['AngularJS', 'Java', 'C#', 'SQL', 'JavaScript', 'HTML', 'CSS', 'jQuery'],
    },
];

export const projects: Project[] = [
    {
        title: 'BES Calculator',
        description: 'A calculator app for an electrician, made working with a UI/UX designer.',
        technologies: ['React', 'Javascript', 'NodeJS', 'Express', "SASS"],
        githubUrl: 'https://github.com/ababen1/BES-Calc',
    },
    {
        title: 'Python bot for job searching',
        description: 'A bot that looks for job postings on facebook and sends email to users according to their desired job description.',
        technologies: ['Python', 'BeautifulSoup', 'Selenium'],
        githubUrl: 'https://github.com/ababen1/PythonBot',
    },
    {
        title: 'Wordimo',
        description: 'A word game where you use tetris blocks to create words and score points.',
        technologies: ['Godot', 'GDScript', 'Linux', 'Android'],
        githubUrl: 'https://github.com/ababen1/Wordimo',
        liveUrl: 'https://ababen1.itch.io/wordimo',
    },

];

export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },

    // Backend
    { name: 'Python', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Java', category: 'Backend' },

    // Database
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },

    // Tools
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },

    // Other
    { name: 'Linux', category: 'Other' },
    { name: 'Android', category: 'Other' },
];

export const aboutMe = {
    name: 'Ben Amado',
    title: 'Full Stack Developer',
    bio: `I'm a passionate full-stack developer with expertise in building modern web applications. 
        I love solving complex problems and creating seamless user experiences through clean code 
        and innovative solutions.`,
};

