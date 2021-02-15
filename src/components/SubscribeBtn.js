import React from "react"
import PropTypes from "prop-types"

export default class SubscribeBtn extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    isAuthorized: PropTypes.bool,
    showPopup: PropTypes.bool,
    getComponent: PropTypes.func.isRequired
  }

  render() {
    let { isAuthorized, onClick  } = this.props

    //must be moved out of button component
   // const AuthorizationPopup = getComponent("authorizationPopup", true)

    return (
      <div className="subscribe-wrapper">
        <button  className={"swagger-ui .subscribe-wrapper button "}onClick={onClick}>
          <span>Subscribe</span>

        </button>

      </div>
    )
  }
}
