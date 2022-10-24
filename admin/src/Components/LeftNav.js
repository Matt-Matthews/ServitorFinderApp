import React from 'react'
import MenuItem from './MenuItem';
import { faClipboard,faUser,faUserTie,faPager, faCancel } from '@fortawesome/free-solid-svg-icons';

function LeftNav() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <div className='leftNav'>
        <MenuItem iconName={faClipboard} 
            text='Dashboard' 
            currentIndex={currentIndex} 
            index={0}
            setCurrentIndex={setCurrentIndex}
        />
        <MenuItem iconName={faUser} 
            text='Customers'
            currentIndex={currentIndex} 
            index={1}
            setCurrentIndex={setCurrentIndex} 
        />
        <MenuItem iconName={faUserTie} 
            text='Provider' 
            currentIndex={currentIndex} 
            index={2}
            setCurrentIndex={setCurrentIndex}
        />
        <MenuItem iconName={faPager} 
            text='applications'
            currentIndex={currentIndex} 
            index={3}
            setCurrentIndex={setCurrentIndex}
        />
        <MenuItem iconName={faCancel} 
            text='Reports' 
            currentIndex={currentIndex} 
            index={4}
            setCurrentIndex={setCurrentIndex}
        />
    </div>
  )
}

export default LeftNav