import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            회원가입
            <div>
                <Link to="email_sign_up">이메일 회원가입</Link>
            </div>
        </div>
    )
}

export default Signup;