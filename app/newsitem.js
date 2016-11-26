import React from 'react';
import URL from 'url';
import Moment from 'moment';
import './newsitem.css';
import ImageGrayArrow from '../grayarrow.gif';


export default class NewsItem extends React.Component {
  getDomain() {
    return URL.parse(this.props.item.url).hostname;
  }
 
  getTitle() {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        {
          this.props.item.url && <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
        }
      </div>
      );
  }

  getCommentLink() {
    let commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + 'comment';
    }

    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
    );
  }

  getSubText() {
    return (
      <div className="newsItem-subtext">
         {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
    );
  }

  getRank() { // 序号
    return (
      <div className="newsItem-rank">
       {this.props.rank}.
      </div>
     );
  }

  getVote() { // 投票
   return (
       <div className="newsItem-vote">
         <a href={'https://news.ycombinator.com/vote?for='+ this.props.item.id + '&dir=up&goto=news'}>
           <img src={ImageGrayArrow} width="10" />
         </a>
       </div>
    );
  }

  render() {
    return (
      <div className="newsItem">
        {this.getRank()}
        {this.getVote()}
        <div className="newsItem-itemText">
         {this.getTitle()}
         {this.getSubText()}
        </div>
      </div>
      );
  }

}