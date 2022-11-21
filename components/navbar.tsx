import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="bg-cyan-400 flex justify-between p-4">
      <Link href="/" as={`/Home`}>Home</Link>
      <Link href="/login" as={`/login/`}>Login</Link>
    </div>
  );
}

export default Navbar;
