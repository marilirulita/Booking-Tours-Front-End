import {
  getDataUser, addUser,
} from './user';

const URL = 'http://127.0.0.1:3000/users';
const URL2 = 'http://127.0.0.1:3000/auth/login';
export const LoginAPI = (data) => async (dispatch) => {
  const response = await fetch(URL2, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch(getDataUser(data));
    localStorage.setItem('user', JSON.stringify(data));
    // window.location.href = '/';
  }
};

// Fetch function to get a single user data from the API
export const GetUserAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
  });
  const user = await response.json();
  dispatch(getDataUser(user));
};

// Fetch function to create a new user
export const postUserApi = (newUser) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(newUser),
  });
  dispatch(addUser(newUser));
};
