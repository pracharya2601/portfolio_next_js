import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';
import { AboutLayout, HeroLayout, SkillLayout, ContactLayout } from 'layout/home';
import Meta from 'components/meta';

export default function Home(props) {
  return (
    <BaseLayout>
      <Meta 
        title="Prakash Acharya | Home"
        description="Prakash Acharya Software Engineer base in San Francisco. Frontend Engineer who specialize in javascript, typescript, nodejs and other framework"
        previewImageURL="/images/hero-image-dark.jpg"
        currentURL="https://acharyaprakash.com"
      />
      <Pagelayout nopadding>
        <HeroLayout/>
        <AboutLayout />
        <SkillLayout />
        <ContactLayout />
      </Pagelayout>
    </BaseLayout>
  )
}
