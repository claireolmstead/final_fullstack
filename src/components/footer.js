import React, {Component} from "react";
export default class Footer extends Component{
    render() {
        return(
            <footer id="accountFix">
                <a className="loginFooter" href="https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank">Forgot your password?</a>
                <a className="loginFooter" href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">Create Account</a>
            </footer>
        )
    }
}