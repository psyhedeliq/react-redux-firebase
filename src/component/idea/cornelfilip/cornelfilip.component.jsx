import React, { useEffect, useReducer } from 'react';
import { db } from './firestore';
import { subjectReducer, initialSubjectData } from './cornelfilip.reducer';
import { initSubjectListAction } from './cornelfilip.action';
import { SubjectList } from './subject-list/';
import { AddSubject } from './add-subject/';
import { ADD_SUBJECT_LIST } from './cornelfilip.const';

const CornelFilip = () => {
  const [subjectData, updateSubjectData /* dispatch */] = useReducer(
    subjectReducer,
    initialSubjectData
  );

  const subjectCollection = db.collection('subject');

  useEffect(() => {
    let unsubscribe;
    (async () => {
      // connect to the firestore
      try {
        const subjectList = await subjectCollection.get();
        const data = subjectList.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        updateSubjectData(initSubjectListAction(data));

        // onSnapshot => we listen for document changes in the database
        unsubscribe = subjectCollection.onSnapshot((changeList) => {
          changeList.docChanges().forEach((change) => {
            // added
            if (
              change.type === 'added' &&
              change.doc.metadata.hasPendingWrites
            ) {
              const subject = {
                id: change.doc.id,
                ...change.doc.data(),
              };

              updateSubjectData({
                type: ADD_SUBJECT_LIST,
                subject,
              });
            } else if (change.type === 'modified') {
            } else if (change.type === 'removed') {
            }
          });
        });
      } catch (error) {
        console.log('Getting a list from firestore FAILED!', error);
      }
    })();
    return unsubscribe;
  }, []);

  // const addSubject = () => {
  //   subjectCollection.add({
  //     title: 'Firestore database with React, Redux and ES6+',
  //     description:
  //       'Having some fun, connecting and interacting with a database',
  //     createdAt: +new Date(),
  //   });
  // };

  // we destructure data
  const updateData = ({ id, title, description }) => {
    if (id) {
      // edit
    } else {
      // add
      subjectCollection.add({
        title,
        description,
        createdAt: +new Date(),
      });
    }
    console.log('data received from the form', id, title, description);
    // console.log('data received from the form', data);
  };

  return (
    <div>
      <h1>Subjects to learn and discover</h1>
      <div>
        <AddSubject updateData={updateData} />
        <SubjectList subjectData={subjectData} />
      </div>
    </div>
  );
};

export { CornelFilip };
