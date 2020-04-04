import React, { useEffect, useReducer } from 'react';
import { db } from './firestore';

const initialSubjectData = [];

const subjectReducer = (state = initialSubjectData, action) => {
  switch (action.type) {
    case 'INIT_SUBJECT_LIST':
      console.log('##############################');
      console.log(state, action);
      return action.data;
    default:
      return state;
  }
};

const CornelFilip = () => {
  const [subjectData, updateSubjectData /* dispatch */] = useReducer(
    subjectReducer,
    initialSubjectData
  );

  const subjectCollection = db.collection('subject');

  useEffect(() => {
    (async () => {
      // connect to the firestore
      try {
        const subjectList = await subjectCollection.get();
        const data = subjectList.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        updateSubjectData({
          type: 'INIT_SUBJECT_LIST',
          data
        });
      } catch (error) {
        console.log('Getting a list from firestore FAILED!', error);
      }
    })();
  }, []);

  const addSubject = () => {
    subjectCollection.add({
      title: 'Firestore database with React, Redux and ES6+',
      description:
        'Having some fun, connecting and interacting with a database',
      createdAt: +new Date()
    });
  };

  return (
    <div>
      <h1>Subjects to learn and discover</h1>
      <div>
        {/* we destructure id and title from subject */}
        {subjectData.map(({ id, title }, key) => {
          // console.log(subject);
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};

export { CornelFilip };
