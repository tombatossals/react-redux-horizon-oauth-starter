import React from 'react'
import LoginComponent from '../../../components/User/Login'
import { authenticate } from '../../../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getUserPropTypes } from '../../../lib/proptypes'
import { UserStatus } from '../../../lib/constants'

class Login extends React.Component {
  static propTypes = {
    user: getUserPropTypes(),
    handleAuthenticate: React.PropTypes.func.isRequired,
    router: React.PropTypes.any
  }

  componentDidMount () {
    this.ensureNotLoggedIn(this.props)
  }

  componentWillReceiveProps (props) {
    this.ensureNotLoggedIn(props)
  }

  ensureNotLoggedIn (props) {
    if (props.user.status === UserStatus.AUTHENTICATED) {
      props.router.push(props.location.query.redirect || '/')
    }
  }

  render () {
    return (
      <LoginComponent
        external
        onAuthenticate={this.props.handleAuthenticate}
        status={this.props.user.actionStatus}
        message={this.props.user.message}
      />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

export default withRouter(connect(mapStateToProps, { handleAuthenticate: authenticate })(Login))