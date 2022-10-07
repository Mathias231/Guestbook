import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeat] = useState('');

  // Checks if password and repeatPass is matching
  const notify = (pass: string | number, rep: string | number) => {
    if (pass === rep) {
      toast.success('Logger inn', {
        position: "top-center",
        hideProgressBar: true,
    })
      return true;
    } else {
      toast.error('Passord stemmer ikke', { position: "top-center" })
      return false;
    }
  }

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    

  }

  return (
    <div className="flex justify-center">
      <form className="bg-slate-100 p-2 mt-2 rounded-md 2xl:w-96" onSubmit={handleSubmit}>
        <label className="block">
          <span className="block mt-1 font-medium text-center">
            Registrer bruker
          </span>
          <input
            type="text"
            placeholder="Brukernavn"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-4 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <span>
            <span className="block mt-4 font-medium text-center">Passord</span>
          </span>
          <input
            type="password"
            placeholder="Passord"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label>
          <input
            type="password"
            placeholder="Gjenta passord"
            onChange={(e) => setRepeat(e.target.value)}
            required
            className="mt-2 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
          <button className="bg-cyan-300 block w-full border rounded-md mt-4 p-2" type='submit'>
            Opprett bruker
          </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
