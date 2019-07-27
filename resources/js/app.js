import React, { Component } from 'react';
require('./bootstrap');
import ReactDOM from 'react-dom';
import Example from './components/Example';
 

const App = () => {
     return (
        <Example />
     );
 }


if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}