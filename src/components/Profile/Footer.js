import React from 'react';
import Logo from '../../components/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/src/styles/styles.scss'

const Footer = props => (
  <footer className="footer">
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__copyright">
          <Logo clicked={props.logoClick} topRef={props.topRef}/>Copyright &copy; 2018 Wei-Hao Wei
        </div>
      </div>
      <div className="col-1-of-2">
        <div className="footer__contact-me">
          <Logo invisible/>
          <FontAwesomeIcon icon="envelope-square" className="footer__icon" />
          <span className="footer__email">ikaeuu@gmail.com</span>
          <AwesomeButton type="secondary" action={props.btnClick}>
            Contact me
          </AwesomeButton>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;