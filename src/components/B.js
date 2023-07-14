import { memo } from 'react';

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

const List = memo(({ posts }) => {
  return (
    <ul>
      {posts?.length &&
        posts.map(post => <ListItem key={post.id} post={post} />)}
    </ul>
  );
});

const B = ({ message, posts }) => {
  return (
    <div>
      <h1>B Components</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
};

export default B;
