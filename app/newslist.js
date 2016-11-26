import React from 'react';
import NewsHeader from './newsheader.js';
import NewsItem from './newsitem.js';
import './newslist.css'

export default class NewsList extends React.Component {

  render() {
    
    let content = this.props.items.map(
              (item, index) => <NewsItem key={item.id} item={item} rank={index+1} />
            );

    return (
      <div className="newsList">
        <NewsHeader />
        <div className="newsList-newsItem">
          { content } 
        </div>
      </div>
      );
  }

}