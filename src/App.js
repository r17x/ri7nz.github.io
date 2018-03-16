import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Switch, Route } from 'react-router'; 

import Articles from './Pages/article.js'; 
import IG       from './Pages/instagram.js'; 
import Header   from './Component/header.js'; 
import Footer   from './Component/footer.js'; 
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
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App; 
