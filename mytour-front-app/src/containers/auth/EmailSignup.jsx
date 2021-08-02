import React, { useState, useEffect }  from 'react';
import {Link} from 'react-router-dom';

const EmailSignup = () => {
  
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    password2: '',
    memberAgree: false,
    privacyAgree: false,
    locationAgree: false
  })

  const [userInfoError, setUserInfoError] = useState({
    email: false,
    password: false,
    password2: false
  })
  
  const ErrorMessages = {
    emailMsg: '올바른 이메일 형식이 아닙니다.',
    passwordMsg: '비밀번호는 영문/숫자/특수문자가 최소 1개 이상 포함된 8-16자리여야 합니다.',
    password2Msg: '비밀번호가 일치하지 않습니다.'
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    validationCheck(name, value);
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleAgreementChange = (event) => {
    const {name, checked} = event.target;
    setUserInfo({...userInfo, [name]: checked})
    
  }

  const handleAgreementAll = (event) => {
    const {checked} = event.target;
    setUserInfo({
      ...userInfo,
      ['memberAgree']: checked, 
      ['privacyAgree']: checked,
      ['locationAgree']: checked})
  }

  const validationCheck = (name, value) => {
    if (name==='email') {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
      if (value.match(regExp)) setUserInfoError({...userInfoError, ['email']: false})
      else setUserInfoError({...userInfoError, ['email']: true})
    }
    else if (name==='password') {
      var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i; 
      if (value.match(regExp)) setUserInfoError({...userInfoError, ['password']: false})
      else setUserInfoError({...userInfoError, ['password']: true})
    }
    else if (name==='password2') {
      if (userInfo.password===value) setUserInfoError({...userInfoError, ['password2']: false})
      else setUserInfoError({...userInfoError, ['password2']: true})
    }
  }

  useEffect(()=> {
    
  })

  return (
    <div className="email_signup_wrap">
      <div 
        className="page_title" 
        style={emailSignupStyle.page_title}>SIGN UP</div>
      <div 
        className="signup_form_wrap"
        style={emailSignupStyle.signup_form_wrap}>
        <div 
          className="signup_form"
          style={emailSignupStyle.singup_form}>
          <form>
            <div>
              <label style={emailSignupStyle.signup_label}>
                <p style={emailSignupStyle.signup_info}>이메일 *</p>
                <input 
                  type="text"
                  name="email"
                  value={userInfo.email} 
                  onChange={handleChange}
                  style={emailSignupStyle.signup_input} />
                  {userInfoError.email ? (<p className="error_msg">{ErrorMessages.emailMsg}</p>) : ''}
              </label>
            </div>
            <div>
              <label style={emailSignupStyle.signup_label}>
                <p style={emailSignupStyle.signup_info}>비밀번호 *</p>
                <input 
                  type="password" 
                  name="password"
                  value={userInfo.password} 
                  onChange={handleChange} 
                  style={emailSignupStyle.signup_input}/>
                  {userInfoError.password ? (<p className="error_msg">{ErrorMessages.passwordMsg}</p>): ''}
              </label>
            </div>  
            <div>
              <label style={emailSignupStyle.signup_label}>
                <p style={emailSignupStyle.signup_info}>비밀번호 확인 *</p>
                <input 
                  type="password"
                  name="password2"
                  value={userInfo.password2} 
                  onChange={handleChange} 
                  style={emailSignupStyle.signup_input}/>
                  {userInfoError.password2 ? (<p className="error_msg">{ErrorMessages.password2Msg}</p>): ''}
              </label>
            </div>   
            <div style={{padding: '10px'}}>
              <label>
                <input 
                  type="checkbox" 
                  onClick={handleAgreementAll} />
                  <strong>전체 약관 동의</strong>
              </label>
              <div style={{
                    marginTop: '8px', 
                    marginBottom: '15px'}}>
                <div>
                  <label>
                    <input 
                      type="checkbox" 
                      name="memberAgree"
                      checked={userInfo.memberAgree} 
                      onChange={handleAgreementChange} />
                      회원 가입 및 운영약관 동의 (필수)
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                      type="checkbox" 
                      name="privacyAgree"
                      checked={userInfo.privacyAgree}
                      onChange={handleAgreementChange} />
                      개인정보 수집 및 이용 (필수)
                  </label>
                </div>
                <div>
                  <label>
                    <input 
                      type="checkbox" 
                      name="locationAgree"
                      checked={userInfo.locationAgree} 
                      onChange={handleAgreementChange} />
                      위치정보 이용약관 (선택)
                  </label>
                </div>
              </div>
            </div>
            <input 
              type="submit" 
              value="회원가입"
              style={emailSignupStyle.signup_submit}/>
            <hr></hr>
            <div 
              className="signup_type"
              style={emailSignupStyle.signup_type}>
              <Link to="email_sign_up"><div className="kakao_signup">카카오로 회원가입</div></Link>
              <Link to="email_sign_up"><div className="google_signup">페이스북으로 회원가입</div></Link>
              <Link to="email_sign_up"><div className="google_signup">구글로 회원가입</div></Link>
           </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const emailSignupStyle = {
  page_title: {
    textAlign: 'center',
    paddingTop: '45px',
    fontSize: '130%'
  },
  signup_form_wrap : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singup_form: {
    width: '430px',
    padding: '48px',
    margin: '30px auto',
    border: '1px solid #dee2e6',
    borderRadius: '2px'
  },
  signup_info: {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#495056',
    lineHeight: '16px',
  },
  signup_input: {
    height: '40px',
    paddingLeft: '12px',
    paddingRight: '12px',
    fontSize: '14px',
    width: '100%',
    borderRadius: '2px',
    border: '0',
    boxShadow: 'inset 0 0 0 1px #ced4da',
    backgroundColor: '#fff',
    fontWeight: '500',
    color: '#343a40',
    transition: 'box-shadow .2s ease',
    appearance: 'none'
  },
  signup_label: {
    width: '100%',
    marginBottom: '10px'
  },
  signup_submit: {
    width: '100%',
    border: '1px solid #cbe7fd',
    backgroundColor: '#7ADEE2',
    height: '45px',
    borderRadius: '3px'
  },
  signup_type: {
    display: 'grid',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '16px',
    height: '200px',
    alignContent: 'space-evenly'
  }
}
export default EmailSignup;