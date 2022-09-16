import React from 'react'
import { useState, useEffect } from 'react';


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
    console.log(footer)
  return (
    <>
    <div className="footer-container">
    <ul className="footer">
      <li ><a href={footer.linkdin}><img className="footer-icons"  src="https://i.imgur.com/IcKIpzf.jpg" alt="Linkdin"title="linkedin icon"/></a></li>
      <li ><a href={footer.github}><img className="footer-icons"  src="https://i.imgur.com/W4UWplu.png" alt="Github"title="github icons"/></a></li>
    </ul>
    <p className="copyright">Copyright &copy; <script>document.write(new Date().getFullYear());</script>Ben Baker</p>
    </div>
    
    </>

  )
}
return footer ? loaded() : <h1>Loading...</h1>;
}

export default Footer