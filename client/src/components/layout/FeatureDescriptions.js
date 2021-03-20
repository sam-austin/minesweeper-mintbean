import React from "react"
import { Layout, Card } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Content } = Layout;
const { Meta } = Card


const FeatureDescriptions = props => {
  
  return(
    <Content style={{ backgroundColor: "white" }}>
      <div className="landing-subsection grid-x grid-margin-x">
      
        <div className="cell medium-6 large-4 subsection-img-div">
          <img alt="town" src="https://around-the-block.s3.amazonaws.com/house-windows.png" />
        </div>
        <div className="cell medium-6 large-8 subsection">
          <h1 className="subsection-title">How to Play</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="cell medium-6 large-4 subsection-img-div">
          <img alt="town" src="https://around-the-block.s3.amazonaws.com/house-windows.png" />
        </div>
        <div className="cell medium-6 large-8 subsection">
          <h1 className="subsection-title">Background</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>

        <div>
        <h1 className="subsection-title">The Developers</h1>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://avatars.githubusercontent.com/u/62975710?s=460&u=386ccd63dc2b0ad6fc3c17fc69798844f98098d4&v=4" />}
          actions={[
            <GithubOutlined key="github" />,
            <LinkedinOutlined key="linkedin" />,
          ]}
          >
          <Meta title="Tom Low" 
            description="English Major, Teacher, and Theater Maker turned Software Engineer. I live for the point where art and craftsmanship collide." />
        </Card>
        </div>
      
      </div>
    </Content>
  )
}

export default FeatureDescriptions