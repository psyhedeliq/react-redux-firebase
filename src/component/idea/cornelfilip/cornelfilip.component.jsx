import React, { useEffect, useReducer } from 'react';
import { db } from './firestore';
import { subjectReducer, initialSubjectData } from './cornelfilip.reducer';
import { initSubjectListAction } from './cornelfilip.action';
import { SubjectList } from './subject-list/subject-list.component';

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
        const data = subjectList.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        updateSubjectData(initSubjectListAction(data));
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
      createdAt: +new Date(),
    });
  };

  return (
    <div>
      <h1>Subjects to learn and discover</h1>
      <div>
        <SubjectList subjectData={subjectData} />
      </div>
    </div>
  );
};

export { CornelFilip };
