import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './newslist.js'

const listItems = [
  {
    "by" : "bane",
    "descendants" : 49,
    "id" : 11600137,
    "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
    "score" : 56,
    "time" : 1461985332,
    "title" : "Yahoo's Marissa Mayer could get $155M in severance pay",
    "type" : "story",
    "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
  },
  {
    "by" : "bane",
    "descendants" : 49,
    "id" : 11600138,
    "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
    "score" : 56,
    "time" : 1461985332,
    "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
    "type" : "story",
    "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
  },
  {
    "by" : "bane",
    "descendants" : 49,
    "id" : 11600139,
    "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
    "score" : 56,
    "time" : 1461985332,
    "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
    "type" : "story",
    "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
  },
  {
    "by" : "bane",
    "descendants" : 49,
    "id" : 11600140,
    "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
    "score" : 56,
    "time" : 1461985332,
    "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
    "type" : "story",
    "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
  }
];

render(<NewsList items={listItems} />, $('#content')[0]);