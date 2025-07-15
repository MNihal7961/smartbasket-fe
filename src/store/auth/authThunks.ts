/* eslint-disable @typescript-eslint/no-explicit-any */

import type { AppDispatch } from '../store';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import { signIn, signUp } from '../../services/api/auth';
import type { SignInPayload, SignUpPayload } from '../../types/dto';

export const loginThunk = (payload: SignInPayload) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginStart());
    const { user, token } = await signIn(payload);
    dispatch(loginSuccess(user));
    localStorage.setItem('token', token || '');
  } catch (error: any) {
    dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
  }
};

export const signupThunk = (payload: SignUpPayload) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginStart());
    const { user, token } = await signUp(payload);
    dispatch(loginSuccess(user));
    localStorage.setItem('token', token || '');
  } catch (error: any) {
    dispatch(loginFailure(error.response?.data?.message || 'Signup failed'));
  }
};
