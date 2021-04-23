import React from 'react';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';

import {createClient} from 'contentful';

const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})

const BlogSlug = ({project}) => {
  console.log(project);
  return (
    <BaseLayout>
      <Pagelayout>
        BlogSlug
      </Pagelayout>
    </BaseLayout>
  )
}

export async function getStaticPaths(){
  const res = await client.getEntries({
    content_type: "portfolio",
  })
  const paths = res.items.map((item) => {
    return {
      params:{id: item.fields.id}
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}){
  const {items} = await client.getEntries({
    content_type: "portfolio",
    "fields.id": params.id,
  })
  return {
    props: {project: items[0]}
  }
}


export default BlogSlug;