import React from 'react'
import Modal from '../components/Modal'
import PendingOperationButton from '../components/PendingOperationButton'
// import Logging from '../util/logging'

class ChangePasswordModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      password: '',
      confirmPassword: '',
      passwordsMatch: false,
      passwordIsValid: false,
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    let fieldName = event.target.name
    let fieldContent = event.target.value
    // Serialize updates
    this.setState((state) => {
      let newState = {}
      if (fieldName === 'password') {
        newState.password = fieldContent
        newState.passwordIsValid = newState.password !== ''
        newState.passwordsMatch = newState.password === state.confirmPassword
      }
      if (fieldName === 'confirm-password') {
        newState.confirmPassword = fieldContent
        newState.passwordsMatch = state.password === newState.confirmPassword
      }
      return newState
    })
  }

  onClose() {
    this.setState({
      visible: false,
    })
  }

  onSubmit() {
    // TODO implement
  }

  render() {
    return (
      <Modal hidden={!this.state.visible} containerClass="change-password-modal-container">
        <h2>Welcome!</h2>
        <p>
          To make your account secure, please create a new password to replace the temporary password you were given in
          the email invitation.
        </p>

        <form className="change-password-form">
          <label htmlFor="password">
            New password<span>*</span>
          </label>
          <input
            type="password"
            required
            aria-required={true}
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <label htmlFor="confirm-password">
            Confirm new password<span>*</span>
          </label>
          <input
            type="password"
            required
            aria-required={true}
            id="confirm-password"
            name="confirm-password"
            value={this.state.confirmPassword}
            onChange={this.onChange}
          />

          {this.state.passwordsMatch ? 'Passwords match.' : 'Passwords do not match.'}

          {/* TODO Enable if state.passwordIsValid && state.passwordsMatch */}
          <PendingOperationButton className="save-password" operation={this.onSubmit}>
            Save
          </PendingOperationButton>
        </form>
      </Modal>
    )
  }
}

export default ChangePasswordModal
