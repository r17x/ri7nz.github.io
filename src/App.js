import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Switch, Route } from 'react-router'; 

import Articles from './Pages/article'; 
import IG       from './Pages/instagram'; 
import Header   from './Component/header'; 
import CardLoading  from './Component/cardloading'; 
import Footer   from './Component/footer'; 
import Loading  from 'nprogress'; 
import Homes    from './Pages/home'; 

const Article = props => {
    return (
        <div className="h-full">
        <Header/>
        <Articles/>
        <Footer/>
        </div>
    );
}

const WWWID = props => {
    return (
        <div className="h-full">
        <Header/>
        <Articles uri="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid"/>
        <Footer/>
        </div>
    );
}

const Instagram = props => {
    return (
        <div className="h-full">
        <Header/>
        <IG/>
        <Footer/>
        </div>
    );
}

const Home = props => {
    return (
     <div className="h-full">
        <Header/>
        <Homes/>
        <Footer/>
    </div>     
    );
}

const Projects = props => {
    return (
     <div className="h-full">
        <Header/>
        <CardLoading/>
        <Footer/>
    </div>     
    );
}

class App extends Component {
    componentWillMount(){
        Loading.start(); 
    }
    componentDidMount(){
        Loading.done();  
    }
    render(){
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/articles" exact component={Article} />
                        <Route path="/instagram" exact component={Instagram} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/wwwid" exact component={WWWID} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App; 
