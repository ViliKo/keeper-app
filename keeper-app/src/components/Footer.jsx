import React from "react";

const copyDate = new Date().getFullYear();

const Footer = _ => {
  return (
    <footer className="site_footer">
        <p className="site_footer__copyright">Copyright by vilikoivufreelancer ©{copyDate} </p>
    </footer>
  )    
}

export default Footer;
