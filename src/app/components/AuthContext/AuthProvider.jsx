import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../../../firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const createAnAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const data = {
    bookingInfo,
    setBookingInfo,
    createAnAccount,
    singInAccount,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
