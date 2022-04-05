import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// export const userRegister = createAsyncThunk('register', user => {
//   return axios.post('/api/users/register', user).then(res => res.data);
// });

// export const userLogin = createAsyncThunk('login', user => {
//   return axios.post('/api/users/login', user).then(res => res.data);
// });

export const userData = createAsyncThunk('user', ({userid, token}) => {
  return axios
    .get(`http://localhost:3001/api/users/me/${userid}`)
    .then(res => {
      let user = res.data;
      user.token = token;
      return user;
    })
    .catch(err => console.error(err));
});

// export const userLogout = createAsyncThunk('logout', () => {
//   return axios.post('/api/users/logout').then(res => res.data);
// });

const userReducer = createReducer(
  {},
  {
    // [userRegister.fulfilled]: (state, action) => action.payload,
    // [userLogin.fulfilled]: (state, action) => action.payload,
    [userData.fulfilled]: (state, action) => action.payload,
    // [userLogout.fulfilled]: (state, action) => action.payload,
  },
);

export default userReducer;
