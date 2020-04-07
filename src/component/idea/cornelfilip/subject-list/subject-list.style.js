import styled from 'styled-components';

export const StyledSubjectItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
`;

export const StyledSubjectEdit = styled.button`
  grid-column: 2/3;
  grid-row: 1/3;
`;

export const StyledSubjectDelete = styled.button`
  grid-column: 3/4;
  grid-row: 1/3;
`;
