import {Html5} from '@styled-icons/boxicons-logos/Html5';
import {Css3} from '@styled-icons/boxicons-logos/Css3';
import {Javascript} from '@styled-icons/boxicons-logos/Javascript';
import {Jquery} from '@styled-icons/boxicons-logos/Jquery';
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs';
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo';
import {Redux} from '@styled-icons/boxicons-logos/Redux';
import {Sass} from '@styled-icons/fa-brands/Sass';
import {StyledComponents} from '@styled-icons/simple-icons/StyledComponents';
import {Bootstrap} from '@styled-icons/boxicons-logos/Bootstrap';
import {Mysql} from '@styled-icons/simple-icons/Mysql';
import {Mongodb} from '@styled-icons/simple-icons/Mongodb';
import {Firebase} from '@styled-icons/boxicons-logos/Firebase';
import {Git} from '@styled-icons/boxicons-logos/Git';
import {Npm} from '@styled-icons/evaicons-solid/Npm';
import {Trello} from '@styled-icons/boxicons-logos/Trello';
import {Typescript} from '@styled-icons/simple-icons/Typescript';


const skills = [
  {
    id: 'html',
    logo: <Html5 size="80" color="teal"/>,
    tech: ['all', 'frontend'],
    name: 'HTML'
  },
  {
    id: 'css',
    logo: <Css3 size="80" color="teal"/>,
    tech: ['all', 'frontend'],
    name: 'CSS'
  },
  {
    id: 'sass',
    logo: <Sass size="80" color="teal"/>,
    tech: ['all', 'frontend'],
    name: 'SASS'
  },
  {
    id: 'js',
    logo: <Javascript size="80" color="teal"/>,
    tech: ['all', 'frontend', 'backend'],
    name: 'JS'
  },
  {
    id: 'jquery',
    logo: <Jquery size="80" color="teal"/>,
    tech: ['all', 'frontend'],
    name: 'jQuery'
  },
  {
    id: 'typescript',
    logo: <Typescript size="80" color="teal"/>,
    tech: ['all', 'frontend', 'backend'],
    name: 'TypeScript',
  },
  {
    id: 'react',
    logo: <ReactLogo size="80" color="teal"/>,
    tech: ['all', 'frontend', 'framework'],
    name: 'React'
  },
  {
    id: 'styledcomponent',
    logo: <StyledComponents size="80" color="teal"/>,
    tech: ['all', 'frontend', 'framework'],
    name: 'Styled Component'
  },
  {
    id: 'redux',
    logo: <Redux size="80" color="teal"/>,
    tech: ['all', 'frontend', 'framework'],
    name: 'Redux'
  },
  {
    id: 'nodejs',
    logo: <Nodejs size="80" color="teal"/>,
    tech: ['all', 'backend', 'frontend'],
    name: 'NodeJS'
  },
  {
    id: 'bootstrap',
    logo: <Bootstrap size="80" color="teal"/>,
    tech: ['all', 'frontend', 'framework'],
    name: 'Bootstrap'
  },
  {
    id: 'mysql',
    logo: <Mysql size="80" color="teal"/>,
    tech: ['all', 'database'],
    name: 'MySQL'
  },
  {
    id: 'mongodb',
    logo: <Mongodb size="80" color="teal"/>,
    tech: ['all', 'database'],
    name: 'MongoDB'
  },
  {
    id: 'firebase',
    logo: <Firebase size="80" color="teal"/>,
    tech: ['all', 'database'],
    name: 'Firebase'
  },
  {
    id: 'git',
    logo: <Git size="80" color="teal"/>,
    tech: ['other'],
    name: 'Git'
  },
  {
    id: 'npm',
    logo: <Npm size="80" color="teal"/>,
    tech: ['other'],
    name: 'npm'
  },
  {
    id: 'trello',
    logo: <Trello size="80" color="teal"/>,
    tech: ['other',],
    name: 'Trello'
  }
]

export default skills;