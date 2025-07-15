import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { signupThunk } from '../../store/auth/authThunks';
import type { RootState, AppDispatch } from '../../store/store';

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignUp = (values: { name: string; email: string; password: string }) => {
    dispatch(signupThunk(values));
  };

  return <SignUpForm onSubmit={handleSignUp} loading={loading} error={error || undefined} />;
};

export default SignUp; 