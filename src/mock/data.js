import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zak Stone | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zak Stone',
  subtitle: 'I build things for the web.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-picture.png',
  paragraphOne: "I’m a London-based web developer. I came into coding after working as an informatics pharmacist, which sparked my passion for using tech to make a difference. It also gave me solid experience of querying databases and implementing tech within healthcare.",
  paragraphTwo: "Enrolling on a coding bootcamp at Le Wagon expanded my skill set from databases to user interface, giving me experience building web applications from scratch written in maintainable and easy to understand code.",
  paragraphThree: "My toolbox includes Ruby on Rails, JavaScript, PostgreSQL and HTML/CSS. When I’m not coding or learning a tech new skill, you’ll find me producing music.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'open-rehearsal.png',
    title: 'Open Rehearsal',
    info: 'Open Rehearsal helps musicians organise or join music rehearsals. It makes the experience easy and intuitive, without the commitment of formal rehearsals.',
    info2: '',
    url: 'http://www.openrehearsal.co.uk/',
    repo: 'https://github.com/zrlstone/open-rehearsal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'garden-escape.png',
    title: 'Garden Escape',
    info: 'A marketplace app that allows users to book gardens for any event or host their own garden.',
    info2: '',
    url: 'http://garden-escape.herokuapp.com/',
    repo: 'https://github.com/AsiaCiesla/garden-escape', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'remixology.png',
    title: 'Remixology',
    info: 'A cocktail recipe app with a twist. Users can manipulate the ingredients and amounts of famous cocktail recipes.',
    info2: '',
    url: 'http://remixologyapp.herokuapp.com/',
    repo: 'https://github.com/zrlstone/rails-mister-cocktail', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'zrlstone@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zak-stone',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zrlstone',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/zakrlstone/',
    },
    {
      id: nanoid(),
      name: 'soundcloud',
      url: 'https://soundcloud.com/zakstone',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
