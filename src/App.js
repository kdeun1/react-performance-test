import { useEffect, useState } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';

const App = () => {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />

      <div style={{ display: 'flex' }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
};

export default App;
