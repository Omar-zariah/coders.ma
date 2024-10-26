import React from 'react';
import './index.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import SignUp from './SignUp';
import Login from './Login';
import Logout from './Logout';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      {!user ? (
        <>
          <SignUp />
          <Login />
        </>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-5">Welcome, {user.email}!</h2>
          <Logout />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
