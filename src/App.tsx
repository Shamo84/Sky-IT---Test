import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchComments, fetchPosts, fetchUsers } from './Server';
import { Container, List } from './styled-components/Components.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsers } from './features/usersSlice';
import { updatePosts } from './features/postsSlice';
import { updateComments } from './features/commentsSlice';
import { RootState } from './app/store';

function App() {
  const [userdetails, setUserdetails] = useState('');
  const [postdetails, setPostdetails] = useState('');
  const [commentdetails, setCommentdetails] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.value);
  const posts = useSelector((state: RootState) => state.posts.value);
  const comments = useSelector((state: RootState) => state.comments.value);

  useEffect(() => {
    fetchUsers().then(result => dispatch(updateUsers(result)));
    fetchPosts().then(result => dispatch(updatePosts(result)));

    fetchComments().then(result => dispatch(updateComments(result)));
  }, []);

  return (
    <Container>
      <List>
        <h3>Users</h3>
        <ul>
          {users.map((user: any) => {
            return user.id === userdetails ? (
              <li onClick={() => setUserdetails('')}>
                <ul>
                  {Object.keys(user).map(key => {
                    return (
                      <li>
                        <b>{key}:</b> {user[key]}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li onClick={() => setUserdetails(user.id)}>{user.name}</li>
            );
          })}
        </ul>
      </List>
      <List>
        <h3>Posts</h3>
        <ul>
          {posts.map((post: any) => {
            return post.id === postdetails ? (
              <li onClick={() => setPostdetails('')}>
                <ul>
                  {Object.keys(post).map(key => {
                    return (
                      <li>
                        <b>{key}:</b> {post[key]}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li onClick={() => setPostdetails(post.id)}>{post.title}</li>
            );
          })}
        </ul>
      </List>
      <List>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment: any) => {
            return comment.id === commentdetails ? (
              <li onClick={() => setCommentdetails('')}>
                <ul>
                  {Object.keys(comment).map(key => {
                    return (
                      <li>
                        <b>{key}:</b> {comment[key]}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li onClick={() => setCommentdetails(comment.id)}>
                {comment.body}
              </li>
            );
          })}
        </ul>
      </List>
    </Container>
  );
}

export default App;
