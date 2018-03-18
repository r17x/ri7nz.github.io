import React from 'react';

const toText   = (content, limit=0, except=' ...') => {
    content     = content.split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
    content     = content.filter((v) => {
        return v.length > 100; 
    });

    content   = content[0].replace(/<[^>]+>/g, '');
    return content.substring(0,limit) + except;
}

const Card     = (props) => {
    return (
            <div className="card"  alt={props.title} onClick={props.onClick}>
            <div className="card-img" 
            style={{backgroundImage: '' }}
            data-src={props.thumbnail }
            >
            </div>
            <div className="card-body">
            <h1 className="card-title text-black"> { props.title } </h1>
            <div className="card-caption">
            { toText( props.content, 200 ) }
            </div>
            </div> 
            </div>        
           );
}

const CardList = props => {
    return (
            <div className="cards">
            {props.items.map( (item,index) => <Card {...item} key={index}  /> )}
            </div> 
           );
}

export default CardList;
