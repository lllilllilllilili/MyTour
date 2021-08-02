import React from 'react';
import {Link} from 'react-router-dom';


import '../../assets/css/auth/auth.css'

const Signup = () => {
  return (
    <div className="signup_wrap">
      <div className="signup_type_wrap">
        <div className="singup_title">
          WELCOME~
        </div>
        <div className="signup_type">
          <Link to="email_sign_up"><div className="kakao_signup">카카오로 회원가입</div></Link>
          <Link to="email_sign_up"><div className="google_signup">페이스북으로 회원가입</div></Link>
          <Link to="email_sign_up"><div className="google_signup">구글로 회원가입</div></Link>
          <Link to="email_sign_up"><div className="email_signup">이메일로 회원가입</div></Link>
        </div>
      </div>  
    </div>
  )
}

export default Signup;