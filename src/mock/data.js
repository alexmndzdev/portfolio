import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alex Portfolio', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, i\'m',
  name: 'Alejandro Méndez',
  subtitle: 'And learning is my passion',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I currently live in Colima, México, and I have almost three years of professional
  experience developing Web applications both Backend and Frontend (I prefer
  Backend).`,
  paragraphTwo: `I love coding and I'm always searching for new ways to improve my work and
  environment if it is possible.`,
  paragraphThree: `I’m always caring about the scalability of my code and I love
  to give and receive feedback.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Okboy',
    info: `I was part of the Backend team, we were developing an API using TDD
    to be consumed by a pair of mobile apps and later an admin part too. Cause the
    needs we decided to be 2 tech leads, one in charge of the apps and another for
    the admin site; I was helping with the admin part and its respective team,
    developing and leading`,
    info2: '',
    txtBtn: 'See landing page',
    url: 'https://www.okboy.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Chib',
    info: `Developed many endpoints of the API, I've been helping with deployments
    (using Jenkins, Docker and AWS), writing documentation, writing unit tests and I
    worked with iso8583 and Python`,
    info2: '',
    txtBtn: 'See landing page',
    url: 'https://tuchib.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Cerebro Smart Media',
    info: `Development of the majority of the tracking script used
    by the service, I was working with ElasticSearch with Kibana, Python, Vue and
    Highcharts too.`,
    info2: '',
    txtBtn: 'See landing page',
    url: 'https://cerebrosm.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/alex_mndz',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '​https://www.linkedin.com/in/alejandro-méndez-cobián-6a103413a',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alexmndzdev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
