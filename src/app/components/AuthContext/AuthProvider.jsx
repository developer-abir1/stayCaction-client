import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../../../firebaseConfig';
console.log(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState({});

  const data = {
    bookingInfo,
    setBookingInfo,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
