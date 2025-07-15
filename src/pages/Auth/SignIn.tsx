import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import { loginThunk } from '../../store/auth/authThunks';
import type { RootState, AppDispatch } from '../../store/store';

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignIn = (values: { email: string; password: string }) => {
    dispatch(loginThunk(values));
  };

  return <SignInForm onSubmit={handleSignIn} loading={loading} error={error || undefined} />;
};

export default SignIn; 