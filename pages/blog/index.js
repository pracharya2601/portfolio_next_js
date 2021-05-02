import {useState} from 'react';
import { useRouter } from 'next/router';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';

import {createClient} from 'contentful';

const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY_BLOG,
});

import { Container, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import {ColStyled,SkillsContainer, ContentHeader, H2, RowStyled, StyledTabs, Text} from 'layout/home/home.styles';
import BlogCard from 'components/blog/BlogCard';
import Meta from 'components/meta';


const Blog = ({blogs, tags}) => {
  const [activeTab, setActiveTab] = useState('all');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const renderBlog = (blogs) => (
    blogs.map(({fields: {slug, title, subtitle, tags, thumbnail:{fields: {file: {url}}, description, sys: {createdAt}}}}) => (
        <BlogCard
        key={slug}
        slug={slug}
        title={title}
        subtitle={subtitle}
        imgUrl={`https:${url}`}
        createdAt={createdAt}
        altText={description}
      />
    )))

  return (
    <BaseLayout>
        <Meta 
        title="Blog | Prakash Acharya"
        description="Prakash Acharya Software Engineer base in San Francisco. Frontend Engineer who specialize in javascript, typescript, nodejs and other framework"
        previewImageURL="/images/blog.jpg"
        currentURL="https://acharyaprakash.com/blog"
      />
      <Pagelayout>
        <Container id="blog">
          <RowStyled>
            <ColStyled sm="12">
              <ContentHeader>
                <div />
                <H2 size="3rem">Blog</H2>
                <Text>Checkout my blog</Text>
              </ContentHeader>
            </ColStyled>
            <ColStyled sm="12">
            <Nav tabs>
              <NavItem>
                <StyledTabs
                    activetab={activeTab === 'all' ? 'true' : ''}
                    onClick={() => toggle('all')}
                  >
                    All
                  </StyledTabs>
                </NavItem>
                {tags.map((item) => (
                  <NavItem 
                    key={item}
                    onClick={() => toggle(item)}
                  >
                    <StyledTabs
                      activetab={activeTab === item ? 'true' : ''}
                    >
                      {item}
                    </StyledTabs>
                </NavItem>
                ))}
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId={'all'}>
                  <SkillsContainer>
                    {renderBlog(blogs)}
                  </SkillsContainer>
                </TabPane>
                {tags.map((item) => (
                  <TabPane tabId={item} key={item}>
                    <SkillsContainer>
                      {renderBlog(blogs.filter((p) => p.fields.tags.includes(item)))}
                    </SkillsContainer>
                  </TabPane>
                ))}

              </TabContent>
            </ColStyled>
          </RowStyled>
        </Container> 
      </Pagelayout>
    </BaseLayout>
  )
}

export async function getStaticProps(){
  const {items} = await client.getEntries({content_type: "personalblog"});
  const tagArr = items.map(item => item.fields.tags).join().split(',');
  return {
    props: {
      blogs: items,
      tags: tagArr.filter((c, index) => tagArr.indexOf(c) === index),
    }
  }
}

export default Blog;