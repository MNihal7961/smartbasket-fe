/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppDispatch } from '../../redux/store';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import { loginUser } from '../../api/auth';

export const loginThunk = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginStart());
    const user = await loginUser(email, password);
    dispatch(loginSuccess(user));
    localStorage.setItem('token', user.token || '');
  } catch (error: any) {
    dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
  }
};
