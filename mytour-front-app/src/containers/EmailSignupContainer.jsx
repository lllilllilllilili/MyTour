import React from "react";
import { connect } from "react-redux";
import {setUserInfoEmail, setUserInfoPassword, setUserInfoPassword2, setUserInfoMemberAgree, setUserInfoPrivacyAgree, setUserInfoLocationAgree, setUserInfoErrorEmail, setUserInfoErrorPassword, setUserInfoErrorPassword2 } from "../modules/EmailSignup"; 
import EmailSignup from "../components/auth/EmailSignup";

const EmailSignupContainer = ({
    userInfo,
    userInfoError,
    setUserInfoEmail,
    setUserInfoMemberAgree,
    setUserInfoPassword,
    setUserInfoPrivacyAgree,
    setUserInfoLocationAgree,
    setUserInfoErrorEmail,
    setUserInfoErrorPassword,
    setUserInfoErrorPassword2,
})=> {
    return(
        <EmailSignup 
        userInfo={userInfo}
        userInfoError={userInfoError}
        setUserInfoEmail={setUserInfoEmail}
        setUserInfoPassword={setUserInfoPassword}
        setUserInfoPassword2={setUserInfoPassword2}
        setUserInfoMemberAgree={setUserInfoMemberAgree}
        setUserInfoPrivacyAgree={setUserInfoPrivacyAgree}
        setUserInfoLocationAgree={setUserInfoLocationAgree}
        setUserInfoErrorEmail={setUserInfoErrorEmail}
        setUserInfoErrorPassword={setUserInfoErrorPassword}
        setUserInfoErrorPassword2={setUserInfoErrorPassword2}
        />
    )
}

export default connect(
    ({userInfo, userInfoError}) => (console.log(userInfo), console.log(userInfoError),{
        userInfo : userInfo,
        userInfoError : userInfoError
    }),
    {
        setUserInfoEmail,
        setUserInfoPassword,
        setUserInfoPassword2,
        setUserInfoMemberAgree,
        setUserInfoPrivacyAgree,
        setUserInfoLocationAgree,
        setUserInfoErrorEmail,
        setUserInfoErrorPassword,
        setUserInfoErrorPassword2,
    }
)(EmailSignupContainer);