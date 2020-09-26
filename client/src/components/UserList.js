import React from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  editMode,
  fetchUserById
} from "../actions/userActions";
import "../../src/App.css";

class UserList extends React.Component {
  componentDidMount() {
    this.props.onFetchUsers();
  }

  onEdit = userId => {
    console.log('userIddddddd', userId)
    this.props.onEditCheckMode();
    this.props.onFetchUserById(userId);
  };

  onDelete = userId => {
    console.log('ddeeeeeellleee', userId)
    this.props.onDeleteUser(userId);
  };



  render() {
    console.log('Usersssssss', this.props.Users)
    return (
      <div className="App">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.Users.map(u => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.last}</td>
                  <td>{u.email}</td>
                  <td>{u.gender}</td>
                  <td>{u.published ? "published" : "pending"}</td>

                  <td>
                    <button onClick={() => this.onEdit(u._id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.onDelete(u._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  Users: state.userReducer.users,
  error: state.userReducer.error
});

const mapDispatchToPrpos = dispatch => {
  return {
    onEditCheckMode: () => {
      dispatch(editMode())
    },
    onFetchUsers: () => {
      dispatch(fetchUsers())
    },
    onDeleteUser: (id) => {
      dispatch(deleteUser(id))
    },
    onFetchUserById: (id) => {
      dispatch(fetchUserById(id))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPrpos
  // { fetchUsers, deleteUser, editMode, fetchUserById }
)(UserList);
