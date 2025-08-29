// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AezanPathan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BlazeTorrent (BitTorrent Client with Blazor and c#)',
          description:
            'The BitTorrent Client i created with Blazor and c#',
          imageUrl:
            'https://raw.githubusercontent.com/JoshuaThadi/Wall-E-Desk/refs/heads/main/Pixel-Art/hsh1.gif',
          link: 'https://github.com/AezanPathan/BlazeTorrent',
        },
        {
          title: 'codecrafters-bittorrent-csharp',
          description:
            'This is a code for C# solutions to the "Build Your Own BitTorrent" Challenge.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/AezanPathan/codecrafters-bittorrent-csharp',
        },
      ],
    },
  },
  seo: {
    title: 'Aezan Pathan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'aezan-pathan-069402228',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'aezanp',
    dev: 'aezanpathan',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://aezan.tech',
    phone: '',
    email: 'aezanp@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'c#',
    'Dotnet',
    'Blazor',
    'Dotnet Core MVC ',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'SQLServer',
    'Git',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'PI Matrix',
      position: 'Software Developer',
      from: 'June 2025',
      to: 'Present',
      companyLink: 'https://pimatrix.in',
    },
    {
      company: 'NopAdvance',
      position: 'Software Developer',
      from: 'January 2024',
      to: 'March 2025',
      companyLink: 'https://nopadvance.com',
    },
  ],
certifications: [
  {
    name: "Postman API Fundamentals Student Expert",
    body: "Issued by Postman",
    year: "2025",
    link: "https://badgr.com/public/assertions/4WUQlL7pSgKx7_cpYXcU3A?identity__email=aezanp%40gmail.com",
  },
  {
    name: "Learn To make a 3d platformer game with Unity",
    body: "Issued by Udemy",
    year: "2023",
    link: "https://www.udemy.com/certificate/UC-6df70078-5c13-40e8-92ff-b416a122e63f/",
  },
  {
    name: "Foundational C# with Microsoft",
    body: "Issued by freeCodeCamp & Microsoft",
    year: "2023",
    link: "https://www.freecodecamp.org/certification/fcc006ab249-86a2-4a6b-8f5d-e0a9dc5daaa7/foundational-c-sharp-with-microsoft",
  },
],
  educations: [
    {
      institution: 'IGNOU',
      degree: 'MCA',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'Veer Narmad South Gujrat University',
      degree: 'BCA',
      from: '2019',
      to: '2024',
    },
  ],
publications: [
  {
    title: "Building BlazeTorrent: A BitTorrent Client with Blazor & C#",
    conferenceName: "",
    journalName: "Personal Blog",
    authors: "Aezan Pathan",
    link: "https://github.com/AezanPathan/BlazeTorrent",
    description:
      "An in-depth write-up on creating BlazeTorrent, a BitTorrent client using Blazor and C#. Covers implementation details, challenges faced, and performance improvements.",
  },
  {
    title: "CodeCrafters BitTorrent Challenge in C#",
    conferenceName: "",
    journalName: "GitHub Repository",
    authors: "Aezan Pathan",
    link: "https://github.com/AezanPathan/codecrafters-bittorrent-csharp",
    description:
      "A technical walkthrough of solving the CodeCrafters 'Build Your Own BitTorrent' challenge in C#, highlighting problem-solving strategies and insights into protocol design.",
  },
],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'aezanpathan', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/aezanpathan"
      target="_blank"
      rel="noreferrer"
    >❤️</a>`,

  enablePWA: true,
};

export default CONFIG;
