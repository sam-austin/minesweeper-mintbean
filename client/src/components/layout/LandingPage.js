import React from "react";
import { Link } from "react-router-dom";

import { Layout } from 'antd';
const { Header, Content } = Layout;
import FeatureDescriptions from './FeatureDescriptions'

const LandingPage = props => {

  return (
    <Layout>
      <div className="grid-x grid-margin-x landing-grid">
      <div className="cell medium-1 large-1" />
      <div className="cell small-12 medium-10 large-10">
        <Content style={{ paddingTop: '64px', backgroundColor: 'white'}}>
          <div className="cell medium-2 large-2" />
            <div className="landing-page-top ">
              <div className="landing-text">
                <div>

                </div>
                <h1 className="landing-title">
                  Avoid the Mines at All Cost!
                </h1>
                <p className="landing-subheader">
                  Click click boom boom
                  <br></br>
                  1. Click
                  <br></br>
                  2. Analyze
                  <br></br>
                  3. Place the flags
                </p>
                <div className="get-started-button">
                  <Link to="/game" className="rounded-button-extra button large">
                    Play Now!
                  </Link>
                </div>  
              </div>
            </div>  
          </Content>
          <FeatureDescriptions />
        </div>
        <div className="cell medium-1 large-1" />
      </div>
    </Layout>
  );
};

export default LandingPage
