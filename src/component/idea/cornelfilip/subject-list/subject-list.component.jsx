import React from 'react';
import { StyledSubjectItem, StyledSubjectDelete } from './subject-list.style';

const SubjectList = ({ subjectData, onClick }) => {
  return (
    <div>
      <h2>List of subjects</h2>
      <div>
        {subjectData.map(({ id, title, description }, key) => {
          // we destructure id and title from subject
          // console.log(subject);
          return (
            <StyledSubjectItem key={id}>
              <h3>{title}</h3>
              <div>{description}</div>
              <StyledSubjectDelete onClick={() => onClick(id)}>
                &times;
              </StyledSubjectDelete>
            </StyledSubjectItem>
          );
        })}
      </div>
    </div>
  );
};

export { SubjectList };
