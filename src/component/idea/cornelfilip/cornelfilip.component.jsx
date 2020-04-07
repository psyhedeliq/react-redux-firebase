import React, { useEffect, useReducer, useState } from 'react';
import { db } from './firestore';
import { subjectReducer, initialSubjectData } from './cornelfilip.reducer';
import {
  initSubjectListAction,
  removeSubjectFromListAction,
  addSubjectToListAction,
  updateSubjectInListAction,
} from './cornelfilip.action';
import { SubjectList } from './subject-list/';
import { AddSubject } from './add-subject/';

const emptySubject = {
  title: '',
  description: '',
  id: null,
};

const CornelFilip = () => {
  const [subjectToEdit, setSubjectToEdit] = useState(emptySubject);
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
            const subject = {
              id: change.doc.id,
              ...change.doc.data(),
            };
            // added
            if (
              change.type === 'added' &&
              change.doc.metadata.hasPendingWrites
            ) {
              updateSubjectData(addSubjectToListAction(subject));
            } else if (change.type === 'modified') {
              updateSubjectData(updateSubjectInListAction(subject));
            } else if (change.type === 'removed') {
              updateSubjectData(removeSubjectFromListAction(change.doc.id));
              // console.log(
              //   `Update Redux by removing this id:  ${change.doc.id}`
              // );
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
  const updateData = ({ name, value, save }) => {
    if (save) {
      // save to the database
      if (subjectToEdit.id) {
        // edit
        // console.log(subjectToEdit);
        subjectCollection.doc(subjectToEdit.id).set(subjectToEdit);
      } else {
        // add
        subjectCollection.add({
          ...subjectToEdit,
          createdAt: +new Date(),
        });
      }
    } else {
      // update the state
      setSubjectToEdit({
        ...subjectToEdit,
        [name]: value,
      });
    }
    // console.log('data received from the form', id, title, description);
    // console.log('data received from the form', data);
  };

  const deleteSubject = (id) => {
    // remove the subject from the database
    // console.log('Delete this id: ', id);
    subjectCollection.doc(id).delete();
  };

  const editSubject = (id) => {
    // set subject to be edited
    setSubjectToEdit(subjectData.filter((subject) => subject.id === id)[0]);
  };

  return (
    <div>
      <h1>Subjects to learn and discover</h1>
      <div>
        <AddSubject updateData={updateData} subject={subjectToEdit} />
        <SubjectList
          subjectData={subjectData}
          onDelete={deleteSubject}
          onEdit={editSubject}
        />
      </div>
    </div>
  );
};

export { CornelFilip };
