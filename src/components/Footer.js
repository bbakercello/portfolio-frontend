import React from 'react'
import { useState, useEffect } from 'react';


const Footer = (props) => {
  const [footer, setFooter] = useState(null);
console.log(props)
  const getFooterData = async () => {
    const response = await fetch(props.URL + "footer")

    const data = await response.json();

    setFooter(data)
  }
  
  useEffect(()=> {getFooterData()}, []);

  const loaded = () => {
  return (
    <h1 className="footer">Footer</h1>


  )
}
return footer ? loaded() : <h1>Loading...</h1>;
}

export default Footer