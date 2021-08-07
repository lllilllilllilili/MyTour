import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Container} from 'react-bootstrap'

const Header = () => {
    return (
      <div className="nav_wrap">
        <header className="header_wrap">
          <div className="icon_wrap">
            <Link to="">MYTOUR</Link>
          </div>
          <div className="feats_wrap">
            <div className="review">
              <Link to="review">리뷰</Link>
            </div>
            <div className="mytour">
              <Link to="mytour">여행PLANNER</Link>
            </div>
            <div className="auth">
              <Link to="login">로그인</Link>
              <Link to="signup">회원가입</Link>
            </div>
          </div>
        </header>
        <hr></hr>
        <div className="menu_wrap">
          <div className="menu">
            <Link to="">여행지</Link>
            <Link to="">여행PLAN추천</Link>
            <Link to="">여행후기</Link>
          </div>
          <div className="menu_search">
            <input 
              type="text"
              placeholder="통합검색" />
          </div>
        </div>
      </div>
    )
}


export default Header;