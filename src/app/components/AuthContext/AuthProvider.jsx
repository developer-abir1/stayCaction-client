import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../../../firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const createAnAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateAnAccount = (user) => {
    setLoading(true);
    return updateProfile(auth.currentUser, user);
  };
  const handleVerification = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  const singInAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    return signOut(auth);
  };
  const googleAccount = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      setUser(users);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const data = {
    bookingInfo,
    setBookingInfo,
    createAnAccount,
    singInAccount,
    updateAnAccount,
    loading,
    user,
    googleAccount,
    handleVerification,
    handleLogOut,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
