import React, { useState } from 'react';
import { Link } from 'gatsby'

import { ButtonMobileStyle, MenuMobileStyle } from './styles'

/* Silent warning as import is necessary */
/* eslint-disable-next-line */
import Logo from '../../assets/logo.svg'

export default function MenuMobile() {
  const [activeBtn, setactiveBtn] = useState(false)

  function handleClick() {
    setactiveBtn(!activeBtn);
  }

  return (
    <>
      <ButtonMobileStyle active={activeBtn} onClick={handleClick}>
        <i className="menu-icon"></i>
      </ButtonMobileStyle>
      
      {
        activeBtn && <MenuMobileStyle>
        <ul>
          <li><Link to="/community" activeClassName="active">Community</Link></li>
          <li><a href="https://docs.shellhub.io/" target="_blank" rel="noreferrer">Documentation</a></li>
          <li><Link to="/articles" activeClassName="active">Articles</Link></li>
          <li><Link to="/blog" activeClassName="active">Blog</Link></li>
          <li><Link to="/pricing" activeClassName="active">Pricing</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>

        <Link href="//cloud.shellhub.io/login" className="btn" activeClassName="active">Login</Link>

      </MenuMobileStyle>
      }
    </>
  )
}