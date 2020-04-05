import { INIT_SUBJECT_LIST } from './cornelfilip.const';

export const initialSubjectData = [];

export const subjectReducer = (state = initialSubjectData, action) => {
  switch (action.type) {
    case INIT_SUBJECT_LIST:
      // console.log('##############################');
      // console.log(state, action);
      return action.data;

    default:
      return state;
  }
};
