import React from 'react';

function CreatePost() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Clicked');
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-slate-100 p-2 mt-2 rounded-md 2xl:w-96"
        onSubmit={handleSubmit}
      >
        <label className="block">
          <span className="block mt-1 font-medium text-center">Title</span>
          <input
            type="text"
            placeholder="Title"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-md focus:outline-cyan-500"
          ></input>
        </label>
        <label className="block mt-5">
          <span className="block mt-1 font-medium text-center">Content</span>
          <textarea
            className="w-full border rounded-md shadow-md h-24 focus:outline-cyan-500"
            placeholder="Nice day"
            required
          ></textarea>
        </label>
        <button className="bg-cyan-300 block w-full border rounded-md p-2">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
