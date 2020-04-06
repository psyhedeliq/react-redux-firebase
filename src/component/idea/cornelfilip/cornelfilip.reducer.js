import {
  INIT_SUBJECT_LIST,
  ADD_SUBJECT_LIST,
  REMOVE_SUBJECT_LIST,
} from './cornelfilip.const';

export const initialSubjectData = [];

export const subjectReducer = (state = initialSubjectData, action) => {
  switch (action.type) {
    case ADD_SUBJECT_LIST:
      return [...state, action.subject];

    case INIT_SUBJECT_LIST:
      // console.log('##############################');
      // console.log(state, action);
      return action.data;

    case REMOVE_SUBJECT_LIST:
      return state.filter((subject) => subject.id !== action.id);

    default:
      return state;
  }
};
