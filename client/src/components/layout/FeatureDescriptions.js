import React from "react"
import { Layout, Card } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Content } = Layout;
const { Meta } = Card


const FeatureDescriptions = props => {

  return (
    <Content style={{ backgroundColor: "white" }}>
      <div className="landing-subsection grid-x grid-margin-x">

        <div className="cell medium-6 large-4 subsection-img-div">
          <img alt="town" src="https://around-the-block.s3.amazonaws.com/house-windows.png" />
        </div>
        <div className="cell medium-6 large-8 subsection">
          <h1 className="subsection-title">How to Play</h1>
          <p>Welcome aboard, Cadet. We've got a lot of bombs to sweep.

          Your Goal: Uncover all the tiles on the board that don't have bombs.

          1. Click anywhere on the board to start the game.

          2. The number on a tile indicates how many mines are adjacent to that tile (diagonals included!)

          3. Use your skills of reasoning and elimination to uncover tiles—but don't hit a bomb, or it's game over!
          </p>
        </div>

        <div className="cell medium-6 large-4 subsection-img-div">
          <img alt="town" src="https://around-the-block.s3.amazonaws.com/house-windows.png" />
        </div>
        <div className="cell medium-6 large-8 subsection">
          <h1 className="subsection-title">Background</h1>
          <p>
            We three junior developers have put our caffeine- and curiosity-fueled brains together in this take on the classic desktop game Minesweeper. The project was conceived as an entry in Mintbean's Desktop Games Hackathon, and was built with React and Node. At this point we've spent more time playing it than we have building it, and we hope it hooks you too!
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
              description="English Major, Teacher, and Theater Maker turned Software Engineer. I live for the point where art and logic collide, and I'm thrilled to start this new career." />
          </Card>
        </div>

      </div>
    </Content>
  )
}

export default FeatureDescriptions