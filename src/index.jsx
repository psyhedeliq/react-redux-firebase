import React from 'react';
import { render } from 'react-dom';
import { ReactReduxFirestore } from './react-redux-firebase.component';

const here = document.querySelector('#renderHere');

render(<ReactReduxFirestore />, here);
