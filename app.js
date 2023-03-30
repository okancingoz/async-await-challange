import axios from 'axios';

const getData = async function (number) {
  const { data: users } = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${number}`
  );

  return [{ users, posts }];
};

export default getData;
