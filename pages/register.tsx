import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPass, setRepeat] = useState<string>('');

  /**
   * If the password and repeat password is not the same, send a message to the user
   * @param {string | number} pass - string | number - The password that the user has entered
   * @param {string | number} rep - string | number - This is the password that the user has entered in
   * the password field
   * @returns A boolean value
   */
  const notify = (pass: string | number, rep: string | number) => {
    if (pass !== rep) {
      // Sends back message to user about password not matching
      toast.error('Passordet er ikke lik', { position: 'top-center' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If true, send data to back-end (server scripts)
    if (notify(password, repeatPass)) {
      fetch('http://localhost:3002/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not OK');
          }

          console.log(res);

          if (res.status === 201) {
            toast.success('Bruker opprettet', {
              position: 'top-center',
              hideProgressBar: true,
            });
          }

          if (res.status === 226) {
            toast.warn('Bruker eksisterer allrede', {
              position: 'top-center',
              hideProgressBar: true,
            });
          }
        })
        .catch((err) => {
          console.error('Error:', err);
        });
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-slate-100 p-2 mt-2 rounded-md 2xl:w-96"
        onSubmit={handleSubmit}
      >
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
        <button
          className="bg-cyan-300 block w-full border rounded-md mt-4 p-2"
          type="submit"
        >
          Opprett bruker
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
