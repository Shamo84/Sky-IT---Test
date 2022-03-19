import React, { useEffect } from 'react';
import './App.css';
import { fetchComments, fetchPosts, fetchUsers } from './Server';
import { Container } from './container/Container.styled';
import { Button } from './stories/Button';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators, State } from './state';
import { bindActionCreators } from 'redux';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state.users);
  const { updateUsers } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    fetchUsers()
      .then(result => updateUsers(result))
      .then(() => {
        console.log(users);
      });
    /*
    fetchPosts().then(posts => setPosts(posts));
    fetchComments().then(comments => setComments(comments)); */
  }, []);

  return (
    <Container>
      {users[0] &&
        users.map((user: any) => {
          return <div>{user.name}</div>;
        })}
      <Button label='ciao' />
    </Container>
  );
}

export default App;
