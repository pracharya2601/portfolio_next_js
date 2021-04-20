import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';
import { AboutLayout, HeroLayout, SkillLayout } from 'layout/home';



export default function Home(props) {
  return (
    <BaseLayout>
      <Pagelayout nopadding>
        <HeroLayout />
        <AboutLayout />
        <SkillLayout />
      </Pagelayout>
    </BaseLayout>
  )
}
