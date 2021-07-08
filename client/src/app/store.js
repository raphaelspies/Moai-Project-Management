import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '../features/viewSlice';
import loginReducer from '../features/loginSlice';

export default configureStore({
  reducer: {
    view: viewReducer,
    login: loginReducer,
  },
})