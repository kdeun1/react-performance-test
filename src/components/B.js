import { memo, useCallback } from 'react';

const Message = memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = memo(({ posts, testFn }) => {
  console.log('List component is rendering!');
  return (
    <ul>
      {posts?.length &&
        posts.map(post => <ListItem key={post.id} post={post} />)}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log('B component is rendering!');
  const testFn = useCallback(() => {}, []);
  return (
    <div>
      <h1>B Components</h1>
      <Message message={message} />
      <List posts={posts} testFn={testFn} />
    </div>
  );
};

export default B;
