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
          <img alt="town" src="https://mine-sweeper-s3.s3.amazonaws.com/rules.jpg" />
        </div>
        <div className="cell medium-6 large-8 subsection">
          <h1 className="subsection-title">How to Play</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="cell medium-6 large-4 subsection-img-div">
          <img alt="town" src="https://mine-sweeper-s3.s3.amazonaws.com/puzzle.jpg" />
        </div>
        <div className="cell medium-6 large-8 subsection">
          <h1 className="subsection-title">Background</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>

        <div className="cell medium-12 large-12">
          <h1 className="subsection-title" style={{ paddingBottom: "25px", textAlign: "center" }}>The Developers</h1>
          <div className="developers-section-container">
              <Card
                className="dev-card"
                hoverable
                bordered={false}
                cover={<img alt="example" src="https://avatars.githubusercontent.com/u/62975710?s=460&u=386ccd63dc2b0ad6fc3c17fc69798844f98098d4&v=4" />}
                actions={[
                  <a href="https://github.com/tomlow" target="_blank">
                    <GithubOutlined key="github" />
                  </a>,
                  <a href="https://www.linkedin.com/in/tlow/" target="_blank">
                    <LinkedinOutlined key="linkedin" />
                  </a>
                ]}
                >
                <Meta 
                  title="Tom Low" 
                  description="English Major, Teacher, and Theater Maker turned Software Engineer. I live for the point where art and craftsmanship collide. One more phrase." />
              </Card>
              <Card
                className="dev-card"
                hoverable
                bordered={false}
                cover={<img alt="example" src="https://avatars.githubusercontent.com/u/62575735?s=460&v=4" />}
                actions={[
                  <a href="https://github.com/maeghanpro" target="_blank">
                    <GithubOutlined key="github" />
                  </a>,
                  <a href="https://www.linkedin.com/in/maeghan-provencher/" target="_blank">
                    <LinkedinOutlined key="linkedin" />
                  </a>
                ]}
                >
                <Meta 
                  title="Maeghan Provencher" 
                  description="Software Engineer and former 7th grade math teacher always seeking new challenges. Winter hiker, avid knitter, and reality competition show fan." />
              </Card>
              <Card
                className="dev-card"
                hoverable
                bordered={false}
                cover={<img alt="example" src="https://avatars.githubusercontent.com/u/60296310?s=460&u=fcae51be82a9c8f425ac59f99d2bdfc173068e62&v=4" />}
                actions={[
                  <a href="https://github.com/sam-austin" target="_blank">
                    <GithubOutlined key="github" />
                  </a>,
                  <a href="https://www.linkedin.com/in/samson-park/" target="_blank">
                    <LinkedinOutlined key="linkedin" />
                  </a>
                ]}
                >
                <Meta title="Samson Park" 
                  description="Former Scrum Master who fell in love with coding. Prior career in biomedical research & health care. Huge fan of basketball, food, and oh yeah, alpacas." />
              </Card>
          </div>
        </div>
      </div>
    </Content>
  )
}

export default FeatureDescriptions
