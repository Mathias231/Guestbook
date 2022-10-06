import React, { useState } from 'react';
import Link from 'next/link';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-slate-100 p-2 mt-2 rounded-md 2xl:w-96"
        onSubmit={handleSubmit}
      >
        <label className="block">
          <span className="block mt-1 font-medium text-center">
            Login to Guestbook
          </span>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mt-4 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <button className="bg-cyan-300 block w-full border rounded-md mt-4 p-2">
            Login
          </button>
        </label>
        <div className="mt-4 text-center">
          <Link href="/register">Dont have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
