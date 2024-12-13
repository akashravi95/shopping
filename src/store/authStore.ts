import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email, password) => {
    // Simulate API call
    const user: User = {
      id: 1,
      email,
      name: 'John Doe',
      role: email.includes('admin') ? 'admin' : 'user',
    };
    set({ user });
  },
  signup: async (email, password, name) => {
    // Simulate API call
    const user: User = {
      id: 1,
      email,
      name,
      role: 'user',
    };
    set({ user });
  },
  logout: () => set({ user: null }),
}));