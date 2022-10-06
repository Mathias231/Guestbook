import type { NextPage } from 'next';
import CreatePost from '../components/createPost';

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-2">
      <div className="bg-cyan-100 col-span-2">SHOW POSTS!</div>
      <div className="bg-cyan-100">
        <CreatePost />
      </div>
    </div>
  );
};

export default Home;
