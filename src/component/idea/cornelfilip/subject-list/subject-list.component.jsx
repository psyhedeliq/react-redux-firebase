import React from 'react';

const SubjectList = ({ subjectData }) => {
  // we destructure id and title from subject
  return subjectData.map(({ id, title }, key) => {
    // console.log(subject);
    return <div key={id}>{title}</div>;
  });
};

export { SubjectList };
