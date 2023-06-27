import './Body.css'
import Fpicutre from './pictures/First-pic.jpg'
import Spicutre from './pictures/Second-pic.jpg'
import Progpic from './pictures/programming-pic.png'
import html from './pictures/html.png';
import css from './pictures/css.png';
import js from './pictures/js.png';
import python from './pictures/python.png';
import c from './pictures/c.png';
import mysql from './pictures/mysql.png';
import php from './pictures/php.png';
import react from './pictures/react.png';
import ps from './pictures/ps.png';
import expskillpic from './pictures/Expertise_skillpic.png';
import work01 from './pictures/work01.gif';
import work02 from './pictures/work02.gif';
import send from './pictures/send.png';
import phone from './pictures/phone.png';
import fb01 from './pictures/fb01.png';
import twitter01 from './pictures/twitter01.png';
import g01 from './pictures/g+01.png';
import cvpdf from './pictures/JasserBAbdallah-cv.pdf';
import scrollback from './pictures/scrollback.png'
export default function Body() {
  
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzgJfkJ8Z5hTXQK4ZsoEmaFMe6_mO2guAfII3w2cnTQvbpHu2VScvd6c-_8O43NjAsk/exec';
    const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg")
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', section: new FormData(form) })
          .then((response) => {msg.innerHTML = "Message sent Successifully!";setTimeout(() => {
            msg.innerHTML = "";
          }, 500);form.reset()})
          .catch((error) => console.error('Error!', error.message));
      });
    }
  




  return (
    <section>
  {/* Intro-part*/}
    <div id='Intro'>
        <div className='Intro-text'>
            <h1 >HELLO 👋🏻, I’m <span>Jasser</span>!</h1>
            <p>I’m a Computer science student <br/>
                & Front end developer, having  <br/>
                a experience of designing and building  <br/>
                web with HTML,CSS,JS...</p>
        </div>
            <div className='Intro-picture'>
              <img src={Fpicutre}/>
            </div>
    </div>
    {/* About_me-part*/}
    <div id='ABOUTME'  style={{opacity:'.0'}}>#</div>
        <div id='About_me'>
            <div className='border-Spicture'></div>
              <div className='About_me-picture'>
                <img src={Spicutre}/>
              </div>
              <div className='About_me-text'>
                <h2>About me</h2>
                <p>My name is Jasser BenAbdallah, i’m 20 years old, <br/>
                Computer science student at ISITICOM-Hammam-Sousse. <br/>
                I enjoy discovering new things.</p>
              </div>
        </div>


    {/* What_i_do-part     */} 
    <div className='WHATIDO'>
        <div id='What_i_do' >
              <div className='What_i_do-text' >
                <h2>What i do ?</h2>
                <p>A COMPUTER ENGINEER STUDENT WHO WANTS TO EXPLORE EVERY TECH STACK</p>

             <div className='img-social' >   {[html, css, js, python, c, mysql, php, react, ps].map(image => <img style={{marginRight:'10px'}} src={image} />)}</div>
              </div>
              <div className='What_i_do-picture'>
                <img src={Progpic}/>
              </div>
        </div>
    </div> 
      {/* Expertise_skills-part */}     
          <div id='Expertise_skills'>
                <div className='border-Spicture'></div>
                  <div className='Expertise_skills-picture'>
                    <img src={expskillpic}/>
                  </div>
                  <div className='Expertise_skills-text'>
                    <h2>Expertise skills</h2>
                    <h4>Frontend / Design</h4>
                    <div id='poll01'></div>
                    <div id='poll11'></div>

                    <h4>Backend</h4>
                    <div id='poll02'></div>
                    <div id='poll22'></div>

                    <h4>Programming</h4>
                    <div id='poll03'></div>
                    <div id='poll33'></div>

                  </div>
            </div>     
          {/*Myprojects-part  */}
    <div id='MYWORKS' style={{opacity:'.0'}}># </div>
          <div id='My_works' >
          <h2>My-works</h2>
          <div className='work0i'>
          <div className='work01'>
          <div className='tools01'> <a href={'https://github.com/JasserBA/Quiz-App-Reactjs'}target='_blank'>Quiz-App</a><br/>Programming languages: <span>HTML, CSS, Reactjs</span> </div><img src={work01}/>
            </div>
            <div className='work02'>
              <div className='tools02'><a href={'https://github.com/JasserBA/Reactjs-login-signup-page'} target='_blank'> Login/Signup-Page</a><br/>Programming languages: <span>HTML, CSS, Reactjs</span></div>
            <img src={work02}/>
            </div>
              </div>
              <a href='https://github.com/JasserBA' target='_blank'>
              <button>See more</button></a>
            </div>
          
          {/*Contact-part*/}
              <div id='CONTACT'   >
              <div id="contact-left">
                <h2>Contact Me </h2>
                <div className='contact-left01'>
                <img src={send}/><p>Contact@example.com</p>
                </div>
                <div className='contact-left02'>
                <img src={phone}/><p>+216 97 719 int(''.join(str(i) for i in [i for i in range(3,6)]))</p>
                </div>
                <div className='contact-left02-social-media'>
                {[fb01, twitter01, g01].map(image => <img  style={{marginRight:'10px',}} src={image} />)}
                </div>
                <div className='contact-left03'>

                <a href={cvpdf} download>
        <button >Download CV</button></a></div>
              </div>
              <div id='contact-right'>
            <form name='submit-to-google-sheet' >
              <input type="text" name='Name' placeholder='Write your name!' required style={{margin:'0 0 20px 0'}}/><br/>
              <input type="text" name='Email' placeholder='Write your email!' required style={{margin:'0 0 20px 0'}}/><br/>
              <textarea name='Message'  placeholder='Write a message!' required/><br/>
              <button type='submit'>Submit</button>
          </form>
          <span id='msg'></span>
          </div>
          </div>

{/* footer-scroll-back */}
<div id='scroll-back' > 
<a href='#navbar' >
<img src={scrollback} style={{cursor:'pointer'}}/></a>
<h2>Scroll-back to top</h2>
</div>

  </section>

)

}
