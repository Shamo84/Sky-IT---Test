import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchComments, fetchPosts, fetchUsers } from './Server';
import { Container } from './container/Container.styled';
import { Button } from './stories/Button';

function App() {
  const [users, setUsers] = useState<any>([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
    fetchPosts().then((posts) => setPosts(posts));
    fetchComments().then((comments) => setComments(comments));
  }, []);

  return (
    <Container>
      ciao
      <Button label="ciao" />
    </Container>
  );
}

export default App;
