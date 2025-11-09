import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Johnny Chen's Judgy Cat | ITIS3135</h1>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/introduction">Introduction</Link>
        <span> | </span>
        <Link to="/contract">Contract</Link>
      </nav>
    </header>
  );
}