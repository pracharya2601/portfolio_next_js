import { Header, Content,  H2, Text } from "components/common";


const contentType = {
  "hr": 'hr',
  "paragraph": "paragraph",
  "unordered-list": "unordered-list",
  "ordered-list": "ordered-list",
  "embedded-asset-block": "embedded-asset-block",
  "blockquote": "blockquote",
}

const BlogDetail = ({data, content, nodeType}) => {
  
  const renderContent = (nodeType, index) => {
      if(contentType[nodeType] === nodeType) {
        return <div key={index}>{nodeType}</div>
      } else {
        return <div key={index}>{nodeType}</div>
      }    
  }
  const renderItem = content.map(({data, nodeType, marks, value}, index) => (
      <div key={index}>
        {value}
      </div>
  ))}



  switch(nodeType) {
    case "hr":
      return <div>{content.length}</div>
    case "paragraph":
      return renderItem
    case "unordered-list":
      return <div>{content.length}</div>
    case "ordered-list":
      return <div>{content.length}</div>
    case "embedded-asset-block":
      return <div>{content.length}</div>
    case "blockquote":
      return <div>{content.length}</div>
    default: 
      return <div>error loding content</div>
  }

}

export default BlogDetail;


