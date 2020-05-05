import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
   <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}}
        to="/">Donate COVID</Link>} scroll>
            <Navigation>
                <Link to="/Donation">Donation Link</Link>
                <Link to="/Covid">What is COVID-19 ?</Link>
                <Link to="/Symptoms">Symptoms</Link>
                <Link to="/Spreads">How it spreads ?</Link>
                <Link to="/Pnt">Prevention & Treatment</Link>
                <Link to="/formapp">Share a Donation Link </Link>
              
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}}
        to="/">Donate COVID</Link>} scroll>
            <Navigation>
                <Link to="/Donation">Donation Link</Link>
                <Link to="/Covid">What is COVID-19 ?</Link>
                <Link to="/Symptoms">Symptoms</Link>
                <Link to="/Spreads">How it spreads ?</Link>
                <Link to="/Pnt">Prevention & Treatment</Link>
                <Link to="/formapp">Share a Donation Link </Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
                <footer style={{ textAlign: "center", backgroundColor: "black", padding: "2rem", color: "white" }}>Made with ❤️ by <a href="https://www.linkedin.com/in/karan-wagh-130263181/"
                    target="_blank" style={{ color: "#FE6A6B" }}><i className="fas fa-code-branch"></i>Karan</a>, <a href="https://www.linkedin.com/in/muhib-shaikh-b9b63914b/" target="_blank" style={{ color: "#FE6A6B" }}>Muhib</a> and <a href="https://www.linkedin.com/in/malhar37" target="_blank" style={{ color: "#FE6A6B" }}>Malhar</a>.</footer>
    </Layout>
</div>
    
     );
  }
}

export default App;
