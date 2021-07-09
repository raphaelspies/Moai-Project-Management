import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '../features/viewSlice';
import loginReducer from '../features/loginSlice';
import messageReducer from '../features/messageSlice';

export default configureStore({
  reducer: {
    view: viewReducer,
    login: loginReducer,
    message: messageReducer,
  },
})