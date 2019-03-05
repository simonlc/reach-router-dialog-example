import React from 'react';
import Nav from './nav';

export default function Page({ number }) {
  return (
    <>
      <Nav />
      <h2>Page {number}</h2>
    </>
  );
}
