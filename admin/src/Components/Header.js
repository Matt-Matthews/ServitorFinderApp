import React from 'react'
import '../Styles/header.css'
import Logo from '../Assets/logo.png';

function Header() {
  return (
       <div className='header-navbar'>
            <div >
                <img src={Logo} alt="Logo" className='logo'/>
            </div>
            <div className='admin'>
                  
                        <h4>Admin</h4>
                     
                  
                        <img src='https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=400' className='admin-image'/>
                    
            </div>
       </div>
  )
}

export default Header