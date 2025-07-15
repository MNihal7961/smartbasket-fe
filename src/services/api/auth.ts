import api from './client';
import type { SignInPayload, SignUpPayload } from '../../types/dto';

export async function signIn(payload: SignInPayload) {
  const response = await api.post('/auth/login', payload);
  return {
    user: response.data.user,
    token: response.data.access_token,
  };
}

export async function signUp(payload: SignUpPayload) {
  const response = await api.post('/auth/register', payload);
  return {
    user: response.data.user,
    token: response.data.access_token,
  };
} 