import React from "react";
import { Link } from "react-router-dom";

import { Layout } from 'antd';
const { Header, Content } = Layout;
import FeatureDescriptions from './FeatureDescriptions'

const LandingPage = props => {

  return (
    <Layout>
      <div className="grid-x grid-margin-x landing-grid" style={{ justifyContent: "center"}}>
        <div className="cell small-11 medium-10 large-10">
        <Content style={{ paddingTop: '64px', backgroundColor: 'white'}}>
          <div className="grid-x grid-margin-x landing-grid">
            <div className="cell small-0 medium-1 large-1" />
            <div className="cell small-12 medium-11 large-11">
              <div className="landing-page-top">
                <div className="landing-text">
                  <h1 className="landing-title">
                    Avoid the Mines!
                  </h1>
                  <p className="landing-subheader">
                    Click click boom boom
                    <br></br>
                    1. Click
                    <br></br>
                    2. Analyze
                    <br></br>
                    3. Survive
                  </p>
                  <div className="get-started-button">
                    <Link to="/game" className="rounded-button-extra button large">
                      Play Now!
                    </Link>
                  </div>  
                </div>
              </div>  
            </div>
          </div>
          </Content>
          <FeatureDescriptions />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage
