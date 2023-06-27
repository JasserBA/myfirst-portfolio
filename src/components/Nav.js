import {React,useState} from 'react';
import './Nav.css';
import logo from './pictures/jba-logo.png'
import facebook from './pictures/fb.png'
import twitter from './pictures/twitter.png'
import gmail from './pictures/g+.png'
import menu from './pictures/menu.png'
export default function Nav () {
const [showContent,setShowContent]=useState(false);

const handleClick = () => {
  setShowContent(!showContent);
};
  return (<><div className='all-nav'>
    <nav>
       <div className='logo-name'> <img src={logo} className='logocss' alt='jba-logo'/>
      <p> &lt; <h2>Jasser BenAbdallah</h2>/&gt;</p></div>
        <div>
            <ul id='navbar'>
                <li><a className='active' href="#Intro">Home</a></li>
                <li><a href="#ABOUTME">About me</a></li>
                <li><a href="#MYWORKS">MyWorks</a></li>
                <li><a href="#CONTACT">Contact</a></li>
                <li><img src={facebook}/></li>
                <li><img src={twitter}/></li>
                <li><img src={gmail}/></li>
                </ul>
                <img src={menu} className='menucss' alt='menu-logo'onClick={handleClick}></img>

        </div>
     
        </nav> 
        <div className={`box-menu ${showContent ? 'show' : ''}`} > <ul id='navbar2'>
                <li><a href="#Intro">Home</a></li>
                <li><a href="#ABOUTME">About me</a></li>
                <li><a href="#MYWORKS">MyWorks</a></li>
                <li><a href="#CONTACT">Contact</a></li>
          
            
            </ul></div>
            </div></>
  )

  }
  