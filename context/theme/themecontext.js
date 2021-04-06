import {createContext} from 'react';
import theme from './theme';

const themecontext = createContext(theme.light);

export default themecontext;