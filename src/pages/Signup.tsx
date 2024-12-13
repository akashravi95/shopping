import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { AuthForm } from '../components/AuthForm';

export const Signup = () => {
  const signup = useAuthStore((state) => state.signup);
  const navigate = useNavigate();

  const handleSignup = async (data: { email: string; password: string; name?: string }) => {
    try {
      if (!data.name) return;
      await signup(data.email, data.password, data.name);
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Create an Account</h2>
        <AuthForm type="signup" onSubmit={handleSignup} />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};