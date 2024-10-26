// src/Logout.js
import React from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  );
}

export default Logout;
