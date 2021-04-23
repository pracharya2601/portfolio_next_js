import React from 'react';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';

import {createClient} from 'contentful';

const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})

const Blog = ({portfolios, technology}) => {
  console.log(portfolios);
  console.log(technology);
  return (
    <BaseLayout>
      <Pagelayout>
        Blog
      </Pagelayout>
    </BaseLayout>
  )
}

export async function getStaticProps(){
  const {items} = await client.getEntries({content_type: "portfolio"})
  const techArr = items.map(item => item.fields.technologyUsed).join().split(',');
  return {
    props: {
      portfolios: items,
      technology: techArr.filter((c, index) => techArr.indexOf(c) === index),
    }
  }
}

export default Blog;