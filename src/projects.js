const BASE_DEPLOYMENT_URL = 'https://RNaveen99.github.io'
const BASE_REPO_URL = 'https://github.com/RNaveen99'
export default [
  {
    name: 'Portal',
    id: 'portal',
    description: 'A web portal for online quizes.',
    chips: [
      { name: 'Node.js', icon: 'mdi-nodejs' },
      {
        name: 'MongoDB',
        img: 'MongoDB_Leaf_FullColor_RGB.svg',
      },
      { name: 'Redis' },
    ],
    deployment: ``,
    repo_url: `${BASE_REPO_URL}/portal`,
  },
  {
    name: 'Voting',
    id: 'voting1',
    description: 'A dynamic web application for contesting departmental elections.',
    chips: [
      { name: 'Node.js', icon: 'mdi-nodejs' },
      { name: 'MongoDB', img: 'MongoDB_Leaf_FullColor_RGB.svg' },
      { name: 'Redis' },
    ],
    deployment: ``,
    repo_url: `${BASE_REPO_URL}/voting`,
  },
  {
    name: 'Voting 2',
    id: 'voting2',
    description: 'A dynamic web application for contesting departmental elections',
    chips: [
      { name: 'Vue.js', icon: 'mdi-vuejs' },
      { name: 'Vuetify', icon: 'mdi-vuetify' },
    ],
    deployment: `${BASE_DEPLOYMENT_URL}/voting-app-2`,
    repo_url: `${BASE_REPO_URL}/voting-app-2`,
  },
  {
    name: 'Tutor',
    id: 'tutor',
    description: 'A tutorial website',
    chips: [
      { name: 'PHP', icon: 'mdi-language-php' },
      { name: 'SQL', icon: 'mdi-database' },
      { name: 'Parsedown' },
    ],
    deployment: `${BASE_DEPLOYMENT_URL}/tutor`,
    repo_url: `${BASE_REPO_URL}/tutor`,
  },
  {
    name: 'Human Body Guide',
    id: 'humanBodyGuide',
    description: 'Alexa APL',
    icon: 'mdi-amazon-alexa',
    chips: [
      { name: 'Node.js', icon: 'mdi-nodejs' },
      { name: 'Alexa Presentation Language', icon: 'mdi-amazon-alexa' },
    ],
    deployment: ``,
    repo_url: `${BASE_REPO_URL}/human-body-guide-alexa-apl`,
  },
  {
    name: 'SQL Parser',
    id: 'sqlParser',
    description: 'A simple parser for sql made using lex yacc',
    chips: [{ name: 'Lex' }, { name: 'Yacc' }],
    deployment: '',
    repo_url: `${BASE_REPO_URL}/sql-parser`,
  },
]
