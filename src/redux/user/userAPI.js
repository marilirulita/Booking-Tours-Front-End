import {
  getDataUser, removeUser, addUser,
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
  } else {
    // eslint-disable-next-line
    alert('Your email or password is incorrect, please try again, or you have to create an account');
  }
};

export const GetUserAPI = (num) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(num), {
    method: 'GET',
  });
  const user = await response.json();
  dispatch(getDataUser(user));
};

export const postUserApi = (newUser, id) => async (dispatch) => {
  const response = await fetch(URL, {
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
  if (response.status !== 201) {
    const user = { ...newUser, id };
    const temporalUser = { token: 'jkfldksjdg', user: { ...user } };
    dispatch(addUser(temporalUser));
  }
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
