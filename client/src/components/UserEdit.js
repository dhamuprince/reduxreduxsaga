import React from "react";
import { connect } from "react-redux";
import { editUser } from "../actions/userActions";
// import { editUser } from "../actions/userActions";


class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      last: '',
      email: '',
      gender: '',
      published: false
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    let user = this.props.user;
    console.log('this.props.user', this.props.user)
    console.log('componentDid', user)
    this.setState({
      id: user._id,
      name: user.name,
      last: user.last,
      email: user.email,
      gender: user.gender,
      published: user.published
    });

  }

  onSubmit = e => {
    e.preventDefault();
    const id = this.state.id;
    const name = this.state.name;
    const last = this.state.last;
    const email = this.state.email;
    const gender = this.state.gender;
    const published = this.state.published;

    const user = {
      id,
      name,
      last,
      email,
      gender,
      published
    };
    console.log('userrrrrr', user)
    this.props.onClicked(user);
  };

  render() {
    return (
      <div className="container">
        <h3>Edit </h3>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <label> First Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label> Last Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.last}
              onChange={e => {
                this.setState({ last: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> Email </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="Radios1">
              <input className="form-check-input"
                type="radio" name="example"
                id="exampleRadios1"
                value="male"
                onChange={e => {
                  this.setState({
                    gender: e.target.value
                  })
                }}
                checked={this.state.gender === 'male'}
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
                onChange={e => {
                  this.setState({
                    gender: e.target.value
                  })
                }}
                checked={this.state.gender === 'female'}
              />
                female
              </label>
          </div>
          <div className="form-check">
            <input type="checkbox"
              className="form-check-input"
              onChange={() => {
                this.setState(initialState => ({
                  published: !initialState.published,
                }));
              }
              }
              checked={this.state.published}
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({

  user: state.userReducer.user
});
const mapDispatchToPrpos = dispatch => {
  return {
    onClicked: user => {
      console.log('this is from dispatch', user)
      dispatch(editUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPrpos
)(UserEdit);
