import React from 'react';
import { useState } from 'react';

const useToken = (data) => {
  const [token, setToken] = useState('');
  const handelToken = (data) => {
    fetch('http://localhost:5000/jwt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          localStorage.setItem('accessToken', result.token);
          setToken(result.token);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return [token, handelToken];
};

export default useToken;
