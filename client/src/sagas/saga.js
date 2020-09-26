import {
  takeEvery,
  call,
  put
  // , delay
} from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_USERS,
  // EDITED,
  FETCH_USERS_ASYNC,
  // FETCH_USERS_ASYNC_ERROR,
  ADD_USER,
  ADD_USER_ASYNC,
  EDIT_USER,
  DELETE_USER,
  DELETE_USER_ASYNC,
  EDIT_USER_ASYNC
} from "../actions/actionTypes";
import { fetchUsers } from "./api";

export default function* rootWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersAsync);
  yield takeEvery(ADD_USER, addUserAsync);
  yield takeEvery(EDIT_USER, editUserAsync);
  yield takeEvery(DELETE_USER, deleteUserAsync);
}

export function* fetchUsersAsync() {
  let response = yield call(fetchUsers);

  yield put({ type: FETCH_USERS_ASYNC, payload: response.data });
}

export function* addUserAsync(action) {
  yield axios.post(`http://localhost:8080/users`, {
    name: action.payload.name,
    last: action.payload.last,
    email: action.payload.email,
    gender: action.payload.gender,
    published: action.payload.published

  });
  console.log('add_user_async', { type: ADD_USER_ASYNC, payload: action.payload })
  yield put({ type: ADD_USER_ASYNC, payload: action.payload });
}

export function* editUserAsync(action) {
  console.log('actionaaaaaa', action.payload.id)
  axios.put(
    `http://localhost:8080/users/` + action.payload.id,
    action.payload
  );
  yield put({ type: EDIT_USER_ASYNC, payload: action.payload });
  const data = yield call(fetchUsers);
  console.log('put after', data)
  console.log('data.data', data.data)

  console.log('edit function fecthuserAsync', { type: FETCH_USERS_ASYNC, payload: data.data })

  yield put({ type: FETCH_USERS_ASYNC, payload: data.data });
}

export function* deleteUserAsync(action) {
  console.log('this is delete actuon', action)
  axios.delete("http://localhost:8080/users/" + action.payload);
  yield put({ type: DELETE_USER_ASYNC, payload: action.payload });
}
