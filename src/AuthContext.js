import createDataContext from './createDataContext';
import axios from 'axios'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { cookie: null }
);
