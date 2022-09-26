import React from 'react'
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import {Spinner} from  'evergreen-ui'


function Footer(props){
  const [footer, setFooter] = useState(null);
// console.log(props)
  const getFooterData = async () => {
    const response = await fetch(props.URL + "footer")

    const data = await response.json();

    setFooter(data)
  }
  
  useEffect(()=> {getFooterData()}, []);

  const loaded = () => {
    
  return (
    <>
    <ContactForm className="contact-form-container"/>
    <div className="footer-container">
    <ul className="footer">
      <li ><a href={footer.linkdin}><img className="footer-icons"  src="https://i.imgur.com/IcKIpzf.jpg" alt="Linkdin"title="linkedin icon"/></a></li>
      <li ><a href={footer.github}><img className="footer-icons"  src="https://i.imgur.com/W4UWplu.png" alt="Github"title="github icons"/></a></li>
    </ul>
    
    </div>
    <p className="copyright">Copyright &copy; 
      <span>{new Date().getFullYear()} </span> 
      Ben Baker</p>
    </>

  )
}
return footer ? loaded() : <h1><Spinner 
size={40}/>Loading...</h1>;
}

export default Footer