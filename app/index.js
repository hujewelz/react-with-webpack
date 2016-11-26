import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './newslist.js'


render(<NewsList />, $('#content')[0]);