import { connect } from 'react-redux';
import { login } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogin: (userId, token) => dispatch(login(userId, token))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
