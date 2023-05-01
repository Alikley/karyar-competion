import React from 'react'
import './Home.scss'
import {Button } from 'react-bootstrap/';
import ST from '../../assest/illustration.png'
import ImageStudent1 from '../../assest/Ellipse 2.png'
import ImageStudent2 from '../../assest/Ellipse 3.png'
import ImageStudent3 from '../../assest/Ellipse 4.png'
import ImageStudent4 from '../../assest/Ellipse 2.png'
import Section from '../section/Section';

function Home() {


  return (
    <div className='home'>
        <div className='banner'>
          <img className='st' src={ST} alt="" />
          <p className='logo'>کاریار</p>
          <p className='title'>مدرسه انلاین برنامه نویسی<br />متصل به بازار کار</p>
          <p className='content'>
           کاریار مرجع متفاوتی برای معرفی کدنویسان تازه‌نفس به استارت‌آپ‌های کوچک <br />و شرکت‌های پیشرو در اکوسیستم استارت‌آپی ایران و پلتفرمی برای پرورش<br /> تولیدکنندگان تکنولوژی در سطح جهان است.
          </p>
            <div className='student'>
          <img className='image1' src={ImageStudent1} alt="" />
          <img className='image2' src={ImageStudent2} alt="" />
          <img className='image3' src={ImageStudent3} alt="" />
          <img className='image4' src={ImageStudent4} alt="" />
            </div>
            <p className='stu'> <span style={{color:'#D34B7F'}}>250+</span>  مهارت‌‌آموز</p>
            <Button variant="success" style={{padding:"7px 42px",margin:"73vh",marginRight:"-15vh",color:"#fff"}}>ثبت نام مهارت اموز</Button>
            <div className='box1'>
              <div className="value1"></div>
                <p>
                  دوره اموزشی
                </p>
             </div>
             <div className='box1'>
              <div className="value2"></div>
                <p>
                   ورود به بازار
                </p>
             </div>
             <div className='box1'>
              <div className="value3"></div>
                <p>
                   منتور‌ و‌ مربی  
                </p>
             </div>
           </div>
           {/********* card **********/}
           <br />
           <br />
           
          <div>
            <h1>ویژگی‌های متمایز دوره‌های آموزشی کاریار </h1>

            <div className='card'>

            </div>

            <div className='card2'>

            </div>
            
            <div className='card3'>

            </div>

            <div className='card4'>

            </div>
          </div>
          <Section />
           <br />
           <br />
         
            
    </div>
  )
}

export default Home