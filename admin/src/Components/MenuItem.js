import React from 'react';
import '../Styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MenuItem({iconName, text,currentIndex,index,setCurrentIndex}) {
  return (
    <div className='menuItem' onClick={()=>setCurrentIndex(index)} >
        <FontAwesomeIcon color='#B615DE' icon={iconName} />
        <h3 className={currentIndex===index?'text':'textColor'}>{text}</h3>
    </div>
  );
}
