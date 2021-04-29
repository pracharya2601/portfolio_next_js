import Image from 'next/image';
import { Header, Content,  Hr, Text } from "components/common";
import {Paragraph, Span, OutsideLink, ListContainer, ListItem, BlockQuote} from './blog.styles';
import Heading from './Heading';

import SnippetsHolder from 'components/codesnippet/SnippetsHolder';

const marksObj = (marks) => {
  let result = {};
  if(!marks) return result;
  if(marks.length === 0) return result;
  for(var i= 0; i < marks.length; i++) {
    result[marks[i].type] = marks[i].type;
  }
  return result;
}
const headingType = {
  "heading-1": 'h1',
  "heading-2": 'h2',
  "heading-3": 'h3',
  "heading-4": 'h4',
  "heading-5": 'h5',
  "heading-6": 'h6',
}


const BlogDetail = ({data, content, nodeType, marks, value, elem, textIntend}) => {
  
  if(nodeType == "hr") {
    return <Hr />
  }
  if(headingType[nodeType]) {
    return(
      <Heading type={headingType[nodeType]}>
        {content.map(({data, nodeType, marks, value, content}, index) => (
          <BlogDetail 
            key={index}
            data={data}
            nodeType={nodeType}
            marks={marksObj(marks)}
            value={value}
            content={content}
          />
        ))}
      </Heading>
    )
  }
  if(nodeType === "paragraph") {

    const intend = textIntend || "true";
    return (
      <Paragraph textIntend={intend}>
        {content.map(({data, nodeType, marks, value, content}, index) => (
            <BlogDetail 
              key={index}
              data={data}
              nodeType={nodeType}
              marks={marksObj(marks)}
              value={value}
              content={content}
            />
        ))}
      </Paragraph>
    )
  }
  if(nodeType === 'unordered-list') {
    return (
        <ul>
          {content.map(({data, content, nodeType}, index) => (
            <BlogDetail
              key={index}
              data={data}
              content={content}
              nodeType={nodeType}
            />
          ))}
        </ul>
    )
  }
  if(nodeType === 'ordered-list') {
    return (
        <ol>
          {content.map(({data, content, nodeType}, index) => (
            <BlogDetail
              key={index}
              data={data}
              content={content}
              nodeType={nodeType}
              textIntend="false"
            />
          ))}
        </ol>
    )
  }
  if(nodeType === "list-item") {
    return (
      <ListItem>
        <div>
          {content.map(({data, content, nodeType}, index) => (
            <BlogDetail
              key={index}
              data={data}
              content={content}
              nodeType={nodeType}
              textIntend="false"
            />
          ))}
        </div>
      </ListItem>
    )
  }
  if(nodeType === "embedded-asset-block") {
    const img = data.target.fields;
    const descArr = img.description.split("###");
    const clickHandle = () => {document.location.href = descArr[1]}
    return (
      <div style={{margin: '50px 0 20px 0'}} onClick={clickHandle}>
        <Image
          src={`https:${img.file.url}`}
          alt={img.title}
          layout="responsive"
          width={700}
          height={descArr[3] || 400}
        />
        {img.description && (
          <p style={{fontSize: '0.7rem', textAlign: 'center', padding: '10px', marginBottom: '20px'}}>
            {descArr[0]}{' '} 
            <span onClick={clickHandle} style={{color:"teal", cursor: 'pointer', textDecoration: 'underline'}}>{' '}{descArr[2]}</span>
          </p>
          )}
      </div>
    )
  }
  if(nodeType === "hyperlink") {
    return (
      <OutsideLink 
        onClick={() => {document.location.href = data.uri}}
      >
        {content.map(({data, nodeType, marks, value, content}, index) => (
          <BlogDetail
            key={index}
            data={data}
            nodeType={nodeType}
            marks={marksObj(marks)}
            value={value}
            content={content}
          />
        ))}
      </OutsideLink>
    )
  }
  if(nodeType === 'text') {
    return (
      <Span 
        key={value}
        fontWeight={marks["bold"]}
        textDecoration={marks["underline"]}
        fontStyle={marks['italic']}
        isHyperLink={nodeType === 'hyperlink' ? true : false}
        elem={elem}
      >
        {value}
      </Span>
    )
  }
  if(nodeType === 'blockquote') {
    return (
      <BlockQuote>
        <div>
        {content.map(({data, nodeType, marks, value, content}, index) => (
          <BlogDetail
            key={index}
            data={data}
            nodeType={nodeType}
            marks={marksObj(marks)}
            value={value}
            content={content}
            textIntend="false"
          />
        ))}
        </div>
      </BlockQuote>
    )
  }
  if(nodeType === "embedded-entry-inline") {
    console.log(data, content, nodeType)
    return (
      <div>Hello world</div>
    )
  }
  return <div style={{color: 'red'}}>Error Loading Content on this section</div>
}

export default BlogDetail;
