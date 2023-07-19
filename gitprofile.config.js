// gitprofile.config.js

const config = {
  github: {
    username: 'utso1707097', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        'Expensor',
        'Interactive-English-Dictionary',
        'Interemdiate-Python',
        'Elegant_Calculator',
        'git_demo',
        'MERN-practice',
        '920-text-editor-v2',
        'myCodeSpace',
        'cineverse',
        'react_playground',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'md-samaul-haque-malik-193521191/',
    mastodon: '',
    facebook: 'utso.97',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    leetcode: 'Utso097',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+8801733178283',
    email: 'utso097.csekuet@gmail.com',
  },
  resume: {
    fileUrl: 'https://malik.tiiny.site/', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Netlify',
    'Django',
    'CSS',
    'MaterialUI',
    'Tailwind',
    'C++',
    'Java',
  ],
  certifications: [
    {
      name: 'Learning How to Learn: Powerful mental tools to help you master tough subjects',
      body: 'Coursera',
      year: 'July 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/4U7MLAMA2NJS',
    },
    {
      name: 'Crash Course on Python',
      body: 'Google',
      year: 'August 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/SSHSH6T83NV3',
    },
    {
      name: 'Mathamatical Thinking in Computer Science',
      body: 'Coursera',
      year: 'May 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/LYTRSEWZFKT7',
    },
    {
      name: 'Introduction to Structured Query Language',
      body: 'Coursera',
      year: 'July 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/T82U389QW3MM',
    },
  ],
  education: [
    {
      institution: 'V.J. Govt. High School',
      degree: 'Ssc - Science',
      from: '2014',
      to: '2015',
    },
    {
      institution: 'Chuadanga Govt. College',
      degree: 'Hsc - Science',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'Khulna University of Engineering & Technology',
      degree: 'Bsc in Computer Science and Engineering',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Carzone',
      description:
        'Technologies:HTML, CSS, JavaScript, Django, Postgresql. An online based car selling point.Filter can be applied to query desired cars by means of model,price etc.If anyonewants to buy then he can communicate with our shop through email.',
      imageUrl:
        'https://content.homenetiol.com/2000292/2106695/0x0/stock_images/5/2023MBCBJ_640/2023MBCBJ0001_640_01.jpg',
      link: 'https://django-carzone.onrender.com/',
    },
    {
      title: 'Uflix',
      description:
        'Technologies: React, Redux, SCSS, netlify. A front-end project which is user-friendly platform like IMDb for searching and exploring movies and TV shows. Detailed information, trending content, and trailers enhance the viewing experience for enthusiasts.',
      imageUrl:
        'https://w7.pngwing.com/pngs/723/883/png-transparent-netflix-app-logo-tech-companies-thumbnail.png',
      link: 'https://rainbow-salamander-4f4a0f.netlify.app/',
    },
    {
      title: 'Hello Doctor',
      description:
        'Technologies: Java, Android studio, Firebase. An android application used for online communication between doctors and patients.One can register here as a doctoror patient.Patient can request appointment.If doctor accept it one can take appointment by paymenting.',
      imageUrl:
        'https://i.pinimg.com/originals/7e/cf/3e/7ecf3eda8fe56b98ae2f1dfaa5edf57a.png',
      link: 'https://github.com/utso1707097/HelloDoctor',
    },
    {
      title: 'Watch Fusion',
      description:
        'Technologies: react, redux, material-ui, netlify. A front-end video streaming project using React, Redux, MaterialUI, and RapidAPI, resembling YouTube’s functionality. Enables seamless video playback and offers a modern UI for an immersive viewing experience.',
      imageUrl:
        'https://www.shutterstock.com/shutterstock/photos/2003251790/display_1500/stock-vector-simple-and-colorful-logo-template-2003251790.jpg',
      link: 'https://resonant-churros-7d641d.netlify.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
