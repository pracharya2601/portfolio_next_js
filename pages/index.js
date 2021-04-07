import {useContext} from 'react';
import BaseLayout from 'layout/baselayout';

import themecontext from "context/theme/themecontext";

export default function Home(props) {
  const {theme} = useContext(themecontext);
  console.log(theme);
  return (
    <BaseLayout>
      <img src={theme === 'light' ? '/images/background-image-light.png' : '/images/background-image-dark.png'}/>
    </BaseLayout>
  )
}


