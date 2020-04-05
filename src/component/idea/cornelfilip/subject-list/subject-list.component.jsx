import React from 'react';

const SubjectList = ({ subjectData }) => {
  return (
    <div>
      <h2>List of subjects</h2>
      <div>
        {subjectData.map(({ id, title }, key) => {
          // we destructure id and title from subject
          // console.log(subject);
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};

export { SubjectList };
