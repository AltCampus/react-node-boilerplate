import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import './scss/index.scss'
import Wrapper from './Wrapper';



ReactDOM.render(
  <Wrapper>
    <App /> 
  </Wrapper>
  ,
  document.getElementById('root')
);


  