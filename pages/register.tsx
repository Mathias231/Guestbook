import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeat] = useState('');

  return (
    <div className="flex justify-center">
      <form className="bg-slate-100 p-2 mt-2 rounded-md 2xl:w-96">
        <label className="block">
          <span className="block mt-1 font-medium text-center">
            Registrer bruker
          </span>
          <input
            type="text"
            placeholder="Brukernavn"
            className="mt-4 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <span>
            <span className="block mt-4 font-medium text-center">Passord</span>
          </span>
          <input
            type="number"
            placeholder="Passord"
            className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <input
            type="password"
            placeholder="Gjenta passord"
            className="mt-2 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <button className="bg-cyan-300 block w-full border rounded-md mt-4 p-2">
            Opprett bruker
          </button>
        </label>
      </form>
    </div>
  );
}

export default Register;
