/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const PropTypes = require('prop-types');
const React = require('react');
const {Button, Row} = require('react-bootstrap');

const LoginForm = require('@mapstore/components/security/forms/LoginForm');
const Modal = require('@mapstore/components/misc/Modal');
const Message = require('@mapstore/components/I18N/Message');
const LocaleUtils = require('@mapstore/utils/LocaleUtils');

require('@mapstore/components/security/css/security.css');

/**
 * A Modal window to show password reset form
 */
class LoginModal extends React.Component {
    static propTypes = {
        // props
        user: PropTypes.object,
        loginError: PropTypes.object,
        show: PropTypes.bool,
        options: PropTypes.object,

        // CALLBACKS
        onLoginSuccess: PropTypes.func,
        onSubmit: PropTypes.func,
        onError: PropTypes.func,
        onClose: PropTypes.func,
        closeGlyph: PropTypes.string,
        style: PropTypes.object,
        buttonSize: PropTypes.string,
        includeCloseButton: PropTypes.bool
    };

    static contextTypes = {
        messages: PropTypes.object
    };

    static defaultProps = {
        onLoginSuccess: () => {},
        onSubmit: () => {},
        onError: () => {},
        onClose: () => {},
        options: {},
        closeGlyph: "",
        style: {},
        buttonSize: "large",
        includeCloseButton: true
    };

    getForm = () => {
        return (<LoginForm
            role="body"
            ref="loginForm"
            showSubmitButton={false}
            user={this.props.user}
            loginError={this.props.loginError}
            onLoginSuccess={this.props.onLoginSuccess}
            onSubmit={this.props.onSubmit}
            onError={this.props.onError}
        />);
    };

    getFooter = () => {
        return (<span role="footer">
            <Button
                ref="submit"
                value={LocaleUtils.getMessageById(this.context.messages, "user.signIn")}
                bsStyle="primary"
                bsSize={this.props.buttonSize}
                className="pull-left"
                onClick={this.loginSubmit}
                key="submit">{LocaleUtils.getMessageById(this.context.messages, "user.signIn")}
            </Button>
        </span>);
    };

    render() {
        return (<Modal {...this.props.options} show={this.props.show} onHide={this.props.onClose}>
            <Modal.Header key="passwordChange" closeButton>
                <Modal.Title><Message msgId="user.login"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="centered">
                    <h3>
                        <Message msgId="login.spid-title"/>
                    </h3>
                </Row>
                <Row className="centered">
                    <Button
                        ref="submitSpid"
                        value={LocaleUtils.getMessageById(this.context.messages, "user.spidLogin")}
                        bsStyle="primary"
                        bsSize={this.props.buttonSize}
                        className="pull-left"
                        onClick={() => window.location.replace('login')}
                        key="submitSpid">
                        {LocaleUtils.getMessageById(this.context.messages, "user.spidLogin")}
                    </Button>
                </Row>
                <Row className="centered">
                    <div className="login-label-ms">
                        <h4>
                            <Message msgId="login.mapstore-credential"/>
                        </h4>
                    </div>
                </Row>
                <br/>
                {this.getForm()}
            </Modal.Body>
            <Modal.Footer>
                <Row className="centered">
                    {this.getFooter()}
                </Row>
            </Modal.Footer>
        </Modal>);
    }

    loginSubmit = () => {
        this.refs.loginForm.submit();
    };
}

module.exports = LoginModal;
