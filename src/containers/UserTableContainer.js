import {connect} from 'react-redux';
import UserTable from '../components/UserTable';

const mapStateToProps = (state, ownProps) => ({
  userId: state.loginReducer.userId,
  token: state.loginReducer.token
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
