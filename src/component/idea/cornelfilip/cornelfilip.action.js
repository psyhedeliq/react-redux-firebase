import {
  INIT_SUBJECT_LIST,
  REMOVE_SUBJECT_LIST,
  ADD_SUBJECT_LIST,
} from './cornelfilip.const';

export const initSubjectListAction = (data) => ({
  type: INIT_SUBJECT_LIST,
  data,
});

export const removeSubjectFromListAction = (id) => ({
  type: REMOVE_SUBJECT_LIST,
  id,
});

export const addSubjectToListAction = (subject) => ({
  type: ADD_SUBJECT_LIST,
  subject,
});
