import React from 'react';
import { Router } from '@reach/router';
import { Footer } from './component/footer/footer.component';
import { Home } from './component/home/home.component';
import { CornelFilip } from './component/idea/cornelfilip';
import { TopMenu } from './component/top-menu';
import './react-firestore-crud.css';

const ReactReduxFirestore = () => {
  return (
    <>
      <TopMenu />
      <Router>
        <Home path='/' />
        <CornelFilip path='/cornelfilip' />
      </Router>
      <Footer />
    </>
  );
};

export { ReactReduxFirestore };
