import {
  getDataUser, removeUser,
} from './user';

const URL = 'https://tourify-app.herokuapp.com/users';
const URL2 = 'https://tourify-app.herokuapp.com/auth/login';
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
  }
};

export const GetUserAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
  });
  const user = await response.json();
  dispatch(getDataUser(user));
};

export const postUserApi = (newUser) => async () => {
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
};

export const deleteUserApi = (id, token) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  dispatch(removeUser(id));
};
