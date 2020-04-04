import React, { useEffect } from 'react';
import { db } from './firestore';

const CornelFilip = () => {
  useEffect(() => {
    (async () => {
      // connect to the firestore
      db.collection('subject').add({
        title: 'Firestore database with React, Redux and ES6+',
        description:
          'Having some fun, connecting and interacting with a database',
        createdAt: +new Date()
      });
    })();
  }, []);

  return (
    <div>
      <h1>Cornel Filip</h1>
    </div>
  );
};

export { CornelFilip };
