import React from "react";
import { connect } from "react-redux";
// import { addUser } from "../actions/userActions";
import { ADD_USER } from '../actions/actionTypes'
import "bootstrap/dist/css/bootstrap.css";

class UserForm extends React.Component {

  // console.log('this is action from addUser', addUser);
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      last: '',
      email: '',
      gender: '',
      published: false
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLast = this.onChangeLast.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeRadio = this.onChangeRadio.bind(this)
    this.onChangeCheck = this.onChangeCheck.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    })
  }
  onChangeLast = e => {
    this.setState({
      last: e.target.value
    })
  }
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }
  onChangeRadio = e => {
    this.setState({
      gender: e.target.value
    })
  }
  onChangeCheck = () => {
    this.setState(initialState => ({
      published: !initialState.published,
    }));
  }

  onSubmit = e => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      last: this.state.last,
      email: this.state.email,
      gender: this.state.gender,
      published: this.state.published

    };
    console.log('user click action', user)
    this.props.onIncrement(user);



  };

  render() {
    return (
      <div>
        <h3>Add</h3>
        <br />
        <div className="container">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="name"
                type="text"
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="last"
                type="text"
                onChange={this.onChangeLast}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="email"
                type="text"
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="Radios1">
                <input className="form-check-input"
                  type="radio" name="example"
                  id="exampleRadios1"
                  onChange={this.onChangeRadio}
                  value="male" checked={this.state.gender === 'male'}
                />
                male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="Radios2">
                <input className="form-check-input"
                  type="radio" name="example"
                  id="exampleRadios2"
                  value="female"
                  onChange={this.onChangeRadio}
                  checked={this.state.gender === 'female'}
                />
                female
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox"
                className="form-check-input"
                onChange={this.onChangeCheck}
                checked={this.state.published}
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div >
    );
  }
}

// console.log('this is action from addUser', addUser);
const mapDispatchToProps = {
  onIncrement: (user) => {
    return {
      type: ADD_USER,
      payload: user
    }
  }
}

export default connect(
  null,
  mapDispatchToProps)(UserForm);
