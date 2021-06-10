import emoji from 'react-easy-emoji';
import Disney from './assets/images/Disney.jpg';
import WhatsApp from './assets/images/WhatsApp.jpg';
import learningportfolio from './assets/images/Learningportfolio.png';



export const greetings = {
    "name": "MD ABDUL FAIYAZ",
    "title": "Hi all,I'm MD Abdul Faiyaz",
    "description": "A Self-taught developer with a solid work ethic and discipline of iron. My passion to deliver compelling interactive experience is tempered only by the need to meet deadlines, stay on budget, and keep my clients smiling.",
}

export const openSource = {
  githubUserName: '1hanzla100',
}; 

export const socialLinks = {
    "facebook": "https://www.facebook.com/silent.killer.987",
    "instagram": "https://www.instagram.com/roasterroder/",
    "twitter": "https://twitter.com/N00131TA",
    "github": "https://github.com/mdabdulfaiyaz",
    
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for web applications'
      ), 
      emoji('⚡ Deploying of Web Apps using Netlify')
    ], 
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
  {
    schoolName: 'Cognizant College of Commerce and Science',
    subHeader: 'Bachelor of Commerce (Computers)',
    duration: ' 2014 - 2017',
    desc:
      'Took courses on Software Engineering, and OS.',
    descBullets: [ 
    'Participated in Website Development.',
    'Participated in many online gaming events.',],
  },
  {
    schoolName: 'Gowtham Junior College',
    subHeader: 'Board of Intermediate Education',
    duration: ' 2012 - 2014',
    desc: 'I learned the value of education, build innovative thinking, and a creative approach towards life.',
    descBullets: [
      'Participated in Drawing Competetion.',
      'Participated in Computer Science Summer Program.',
    ],
  },
    {
      schoolName: 'Bharat Ratna High School',
      subHeader: 'Board of Secondary Education',
      duration: '2012',
      desc: [
       'I learned about the basic life ethics and manners.',
    ],
      descBullets: [
        'Participated in Art Competetion and achieved a top rank.',
        'Participated in various activities such as Debates, Volunteer Work and Sports.',
        'Was a member of  School IT support.'
      ],
    }, 
]


export const projects = [
  {
    name: "Disney+ Clone",
    desc: "Disney+ is the home for your favorite movies and TV shows from Disney, Pixar, Marvel, Star Wars, and National Geographic.",
    Image: Disney,
    descBullets: [
      'Built using Redux, React JS, Styled Components, and Firebase.',
      'Developed with the intention to learn and improve my skills in React.',
    ],
    link: {
      name: "Disney+",
      url: "https://deeysneyclone.netlify.app/"
    },
    code:{
      name: 'Code',
      url: 'https://github.com/mdabdulfaiyaz/Disneyclone'
    },
  },
  {
    name: "Whatsapp Clone",
    desc: "A real time chat application.",
    Image: WhatsApp,
    descBullets: [
      'Built using  ReactJS, Styled Components, MongoDB, Express,  Node JS.',
      'Primary Focus is Back-End, Styled Components, MongoDB, Express,  Node JS.',
    ],
    link: {
      name: "Whatsapp",
      url: "https://whtsapclone.netlify.app/"
    },
    code:{
      name: 'Code',
      url: 'https://github.com/mdabdulfaiyaz/Whatsapp-clone'
    },
  }, 
  {
    name: "Portfolio",
    desc: "“My name is MD Abdul Faiyaz, and my portfolio is a representation of all that I've learned and accomplished as a self-taught programmer.",
    Image: learningportfolio,
    descBullets: [
      'Built using React and MATERIAL-UI',
      'Developed for Personal use and provide links to the other projects.',
    ],
    link: {
      name: "portfolio",
      url: "https://portf0lio.netlify.app/"
    },
    code:{
      name: 'Code',
      url: 'https://github.com/mdabdulfaiyaz/portfolio'
    },
  }
]