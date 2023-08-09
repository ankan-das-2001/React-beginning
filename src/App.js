import React, { useState } from 'react';
import './style.css';
import SignIn from './components/signUp';

export default function App() {
  const [count, setCount] = useState(0);

  return <SignIn />;
}
