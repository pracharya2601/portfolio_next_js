import React from 'react';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';
import Meta from 'components/meta';

const Cv = () => {
  return (
    <BaseLayout>
      <Meta 
        title="CV | Prakash Acharya"
        description="Prakash Acharya Software Engineer base in San Francisco. Frontend Engineer who specialize in javascript, typescript, nodejs and other framework"
        previewImageURL="/images/cv.jpg"
        currentURL="https://acharyaprakash.com/cv"
      />
      <Pagelayout>
        CV
      </Pagelayout>
    </BaseLayout>
  )
}

export default Cv;