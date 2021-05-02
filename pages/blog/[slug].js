import React from 'react';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';
import Meta from 'components/meta';

import BlogDetail from 'components/blog/BlogDetail';

import {createClient} from 'contentful';
import { Hr, H2, Header, Text } from 'components/common';
import { BlogDetailContainer } from 'components/blog/blog.styles';


const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY_BLOG,
});

const BlogSlug = ({blog}) => {
  const {title, slug, content:{content}, snippet, thumbnail, tags, subtitle} = blog.fields;
  return (
    <BaseLayout>
          <Meta 
        title={`${title} | ${subtitle}`}
        description={snippet}
        previewImageURL={`https:${thumbnail.fields.file.url}`}
        currentURL={`https://acharyaprakash.com/portfolio/${slug}`}
      />
      <Pagelayout>
        <BlogDetailContainer>
          <Header>
              <H2>{title}</H2>
              <Text 
                fontStyle="italic"
                underline={"true"}
              >
                <strong id="strong">Published At : </strong>
                {new Date(blog.sys.createdAt).toDateString()}
              </Text>
          </Header>
          <Hr />
          {content.map(({data, content, nodeType}, index) => (
            <BlogDetail 
              key={index}
              data={data}
              content={content}
              nodeType={nodeType}
            />
          ))}
        </BlogDetailContainer>
      </Pagelayout>
    </BaseLayout>
  )
}

export async function getStaticPaths(){
  const res = await client.getEntries({
    content_type: "personalblog",
  })
  const paths = res.items.map((item) => {
    return {
      params:{slug: item.fields.slug}
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({params}){
  const {items} = await client.getEntries({
    content_type: "personalblog",
    "fields.slug": params.slug,
  })
  return {
    props: {
      blog: items[0],
    }
  }
}


export default BlogSlug;