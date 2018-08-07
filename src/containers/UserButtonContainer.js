import {connect} from 'react-redux';
import { login } from '../actions';
import UserButton from '../components/UserButton';

const mapStateToProps = (state, ownProps) => ({
  userId: state.loginReducer.userId,
  token: state.loginReducer.token
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogin: (userId, token) => dispatch(login(userId, token))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserButton);
