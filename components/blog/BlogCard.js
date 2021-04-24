import Image from 'next/image';
import { Media } from 'reactstrap';
import {BlogBox,Heading, IconContainer} from './blog.styles';
import {Share} from '@styled-icons/icomoon/Share';
const BlogCard = ({slug, title, imgUrl, altText, subtitle, createdAt}) => {
  return (
    <BlogBox onClick={() => alert(slug)}>
      <Image src={imgUrl} height={175} width={280}/>
      <Media body id="mediabody">
      <Heading heading>
          {title}
      </Heading>
      <div>
        <strong>Published at : </strong>{new Date(createdAt).toDateString()}
      </div>
      <div id="subtitle">
          {subtitle}
      </div>
      </Media>
      <IconContainer id="iconcontainer" onClick={(e) => e.stopPropagation()}>
        <Share size="35" style={style} onClick={() => alert("need to hook the different url")}/>
        <Share size="35" style={style} onClick={() => alert("need to hook the different url")}/>
        <Share size="35" style={style} onClick={() => alert("need to hook the different url")}/>
        <Share size="35" style={style} onClick={() => alert("need to hook the different url")}/>
      </IconContainer>
    </BlogBox>
  )
}

export default BlogCard;

const style = {background: 'teal', padding: '5px', borderRadius: '100%'}