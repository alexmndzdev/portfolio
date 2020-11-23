import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alex Portfolio', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Alejandro Méndez',
  subtitle: 'And learning is my passion',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I currently live in Colima, México, and I have almost three years of professional
  experience developing Web applications both Backend and Frontend (I prefer Backend).`,
  paragraphTwo: `I love coding and I'm always searching for new ways to improve my work and
  environment if it is possible.`,
  paragraphThree: `I’m always caring about the scalability of my code and I love
  to give and receive feedback.`,
  resume: 'https://drive.google.com/uc?download=export&id=1_3sx3BjfnqDJOzTllliknOhb8w1uHXh5',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'okboy.jpg',
    title: 'Okboy',
    info: `I was part of the Backend team, we were developing an API using TDD
    to be consumed by a pair of mobile apps and later an admin part too. Cause the
    needs we decided to be 2 tech leads, one in charge of the apps and another for
    the admin site; I was helping with the admin part and its respective team,
    developing and leading`,
    info2: '',
    txtBtn: '',
    url: 'https://www.okboy.app/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'chib.png',
    title: 'Chib',
    info: `Developed many endpoints of the API, I was helping with deployments
    (using Jenkins, Docker and AWS), writing documentation, writing unit tests and I
    worked with iso8583 and Python`,
    info2: '',
    txtBtn: '',
    url: 'https://tuchib.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'numina.png',
    title: 'Numina',
    info: `I was developing a short period of time in this project, around four
    weeks, working with Angular and Node.js I was the tech lead for a week in turn to
    give the leadership to the team owned by numina`,
    info2: '',
    txtBtn: '',
    url: 'https://www.numina.mx/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'cerebro.jpeg',
    title: 'Cerebro Smart Media',
    info: `Development of the majority of the tracking script used
    by the service, I was working with ElasticSearch with Kibana, Python, Vue and
    Highcharts too.`,
    info2: '',
    txtBtn: '',
    url: 'https://cerebrosm.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'arca.png',
    title: 'ARCA',
    info: `I proposed and implemented a solution to significantly reduce the calls to
    the services and therefore the cost of execution, working with Amazon Lambda
    and changing the validation flow.`,
    info2: 'I was working with Frontend too, with Jquery.',
    txtBtn: 'See live',
    url: 'https://www.segurosarca.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'ec.jpg',
    title: 'Envioclick & Envioclickpro',
    info: `Since it was my first professional project I was
    working with little features, fixing bugs, little features, etc. Using Vue in Envioclickpro and PHP
    in both projects.`,
    info2:
      'I really learned a lot in this project since I was working with 2 senior’s developers with really great feedback.',
    txtBtn: 'See live',
    url: 'https://www.envioclick.com/mx',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alejandro.mendez.developer@gmail.com',
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
      url: 'https://codepen.io/alexmndzdev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alejandro-méndez-cobián-6a103413a',
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
