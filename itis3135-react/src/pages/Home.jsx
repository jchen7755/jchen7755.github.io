import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to my ITIS3135 Homepage</h2>
        <p>You've made it to the start of my ITIS-3135 page!</p>
      </main>
      <Footer />
    </>
  );
}