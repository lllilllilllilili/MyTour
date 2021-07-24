import React, { useState }  from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  return (
    <div className="email_signup_wrap">
      <h3 style={{textAlign: 'center', marginTop: '20px'}}>SIGN UP</h3>
      <div 
        className="signup_form_wrap"
        style={emailSignupStyle.signup_form_wrap}>
        <div 
          className="signup_form"
          style={emailSignupStyle.singup_form}>
          <form onSubmit={email}>
            <div>
              <label style={emailSignupStyle.signup_label}>
                <p style={emailSignupStyle.signup_info}>이메일 *</p>
                <input 
                  type="text" 
                  value={email} 
                  onChange={()=>setEmail(email)}
                  style={emailSignupStyle.signup_input} />
              </label>
            </div>
            <div>
              <label style={emailSignupStyle.signup_label}>
                <p style={emailSignupStyle.signup_info}>비밀번호 *</p>
                <input 
                  type="text" 
                  value={pw} 
                  onChange={()=>setPw(email)} 
                  style={emailSignupStyle.signup_input}/>
              </label>
            </div>  
            <div>
              <label style={emailSignupStyle.signup_label}>
                <p style={emailSignupStyle.signup_info}>비밀번호 확인 *</p>
                <input 
                  type="text" 
                  value={pw} 
                  onChange={()=>setPw(email)} 
                  style={emailSignupStyle.signup_input}/>
              </label>
            </div>   
            <div
              style={{padding: '10px'}}>
              <label>
                <input type="checkbox" value={pw} onChange={()=>setPw(email)} />
                <strong>전체 약관 동의</strong>
              </label>
              <div style={{marginTop: '8px', marginBottom: '15px'}}>
                <div>
                  <label>
                    <input type="checkbox" value={pw} onChange={()=>setPw(email)} />
                    회원 가입 및 운영약관 동의 (필수)
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" value={pw} onChange={()=>setPw(email)} />
                    개인정보 수집 및 이용 (필수)
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" value={pw} onChange={()=>setPw(email)} />
                    위치정보 이용약관 (선택)
                  </label>
                </div>
              </div>
            </div>
            <input 
              type="submit" 
              value="회원가입"
              style={emailSignupStyle.signup_submit}/>
          </form>
        </div>
      </div>
    </div>
  )
}

const emailSignupStyle = {
  signup_form_wrap : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singup_form: {
    width: '430px',
    padding: '48px',
    margin: '64px auto',
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
  }
}
export default EmailSignup;