import React, { Component } from 'react';
import Loading  from 'nprogress'; 
import Lazy from '../Component/Lazy'; 
import CardList from '../Component/cards';
import CardLoading from '../Component/cardloading';

class App extends Component {
    constructor(props){
        super(props);
            this.state = {
                feed    : [],
                isLoaded: false,
                uri: this.props.uri 
            };
    }  

    fetchCache(){
        let url      = this.state.uri;
        let cacheKey = url;
        let cached   = sessionStorage.getItem(cacheKey);

        if (cached !== null){
            this.setState({
                feed: JSON.parse(cached),
                isLoaded: true,
                isCached: true,
                isFetched: false,
            }); 
            return; 
        }
        return fetch(url).then((res) => {
            if (res.status === 200) {
                res.clone().text().then(content => {
                    sessionStorage.setItem(cacheKey, content); 
                }) 
            }
            return res.json();

        }).then((json) => {
            this.setState({feed: json, isLoaded: true}); 
            console.log(this.state.feed); 
        });
    }
    componentWillMount(){
        Loading.start(); 
    }
    componentDidMount(){
        this.fetchCache(); 
    }

    componentDidUpdate(){
        Lazy();
    }

    render() {
        if(! this.state.isLoaded ){
            return (
                <CardLoading/>
            );
        }
        Loading.done(); 
        return (
                <div className="pages">
                <CardList items={this.state.feed.items} />
                </div>
        );
    }
}

App.defaultProps = {
    uri: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ri7nz',
}

export default App;
