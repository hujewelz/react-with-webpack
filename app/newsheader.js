import React from 'react';
import ImageLogo from '../logo.gif'
import './newsheader.css';

export default class NewsHeader extends React.Component {

  getLogo() {
    return (
      <div className="newsHeader-logo">
        <a href=""><img src={ImageLogo} /></a>
      </div>
      );
  }
  
  getTitle() {
    return (
     <div className="newsHeader-title">
       <a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
     </div>
     );
  }

  getNav() {
    var navLinks = [
      {
        name: 'new',
        url: 'newest'
      },
      {
        name: 'comments',
        url: 'newcomments'
      },
      {
        name: 'show',
        url: 'show'
      },
      {
        name: 'ask',
        url: 'ask'
      },
      {
        name: 'jobs',
        url: 'jobs'
      },
      {
        name: 'submit',
        url: 'submit'
      }
    ];

    var navContent = navLinks.map(
      navLink => <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/" + navLink.url} >
                 {navLink.name}
               </a>
    );

    return (
      <div className="newsHeader-nav">
        {navContent}
      </div>
    );

  }

  render() {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
      </div>
      );
  }

}