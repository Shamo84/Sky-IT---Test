import axios from 'axios';

const _url = 'https://gorest.co.in/public/v2';

const fetchUsers = async () => {
  const response = await axios.get(`${_url}/users`);
  return response.data;
};
const fetchPosts = async () => {
  const response = await axios.get(`${_url}/posts`);
  return response.data;
};
const fetchComments = async () => {
  const response = await axios.get(`${_url}/comments`);
  return response.data;
};

export { fetchUsers, fetchPosts, fetchComments };
