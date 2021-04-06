 
import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Nav.css'
const Nav = () => {
    
    const [show,setShow]=useState(false);

    const transitionNav=()=>{
        if(window.scrollY>100){
            setShow(true);
        }
        else{
            setShow(false);

        }
    }
    useEffect(()=>{
          
        window.addEventListener('scroll',transitionNav);
        return window.addEventListener('scroll',transitionNav);
        
    },[])


    return (
    <div className={`Nav ${show && 'nav_black'}`}>
        <div className="Nav_Content">
          <a href="#"> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo"/></a>
            <Avatar className="avatar" alt="Code" src="https://scontent.fdac26-1.fna.fbcdn.net/v/t1.6435-9/148261231_777715112950178_6206472532195129701_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=sJK_ZUMR7i8AX_xksOn&_nc_ht=scontent.fdac26-1.fna&oh=92f6c5e6ac4a99ef1aa41b8e730ed9cc&oe=609126E2" />
        </div>

    </div>

    );
};

export default Nav;