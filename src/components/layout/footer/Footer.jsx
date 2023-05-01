import React from 'react'
import './Footer.scss'
import Vector from '../../../assest/Vector.png'
import Vector1 from '../../../assest/Vector-1.png'
 import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../assest/Karyar.png'
import arm from '../../../assest/karyar (4)/Mask group 1.png'
import arm2 from '../../../assest/karyar (4)/لوگو-سایت_page-0001-1024x1024.png'
import arm3 from '../../../assest/karyar (4)/لوگو-سایت_page-0003-768x768.png'



function Footer() {
  return (
    <div>
     
        <div class="site-footer">
      <div class="container">
          <img src={Logo} alt="logo" className='log'  />
        <hr className='hr'/>
        <div class="row">
          <div class="col-sm-12 col-md-6" style={{padding:"0px 60px 0px 15px"}}>
            <h6 style={{color:"#000"}}>درباره کاریار</h6>
            <p class="text-justify">کاریار استارت‌آپی اجتماعی و غیرانتفاعی، متعهد به عدالت، دسترسی و فرصت همگانی است که با ایجاد محیطی با دسترسی مناسب در زمینه‌ی آموزش IT به خصوص کدنویسی، فرصت رشد و پیشرفت را برای تمام اقشار جامعه فارغ از طبقه‌بندی‌های اجتماعی و انتزاعی موجود، فراهم می‌کند.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 style={{color:"#000"}}>بخش‌های سایت</h6>
            <ul class="footer-links" style={{margin:"0px 0px 0px 50px"}}>
              <li><Link href="http://scanfcode.com/category/c-language/" className='link'>قوانین و مقررات</Link></li>
              <br />
              <li><Link href="http://scanfcode.com/category/front-end-development/" className='link'>پرسش‌های پرتکرار</Link></li>
              <br />

              <li><Link href="http://scanfcode.com/category/back-end-development/" className='link'>همکاری با کاریار</Link></li>
              <br />

              <li><Link href="http://scanfcode.com/category/java-programming-language/" className='link'>حمایت از کاریار</Link></li>
              <br />

              <li><Link href="http://scanfcode.com/category/android/" className='link'>استودیو کاریار</Link></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3" style={{margin:"0px 0px 80px"}}>
            <h6 style={{color:"#000"}}>ارتباط با ما</h6>
            <ul class="footer-links" style={{margin:"0px 0px 0px 30px"}}>
              <li><Link href="http://scanfcode.com/about/" className='link' style={{margin:"-250px"}}>آدرس: تهران،‌خیابان قائم مقام فراهانی،کوچه یکم،‌شماره ۱۷،‌‌طبقه ۲</Link></li>
              <li><Link href="http://scanfcode.com/contact/" className='link' >شماره تماس: </Link></li>
              <li><Link href="http://scanfcode.com/contribute-at-scanfcode/" className='link' style={{marginLeft:"-300px"}}>۰۲۱٨٨٨۴۲۶۹۳</Link></li>
              <li><Link href="http://scanfcode.com/privacy-policy/" className='link' style={{marginLeft:"-300px"}}>۰٩۰۵۷۲۵۷۱۸۳</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><Link class="facebook" href="#"><img src={arm} className="arm" alt="" /></Link></li>
              <li><Link class="twitter" href="#"><img src={arm2} className="arm" alt="" /></Link></li>
              <li><Link class="dribbble" href="#"><img src={arm3} className="arm" alt="" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
</div>
<div class="col-md-8 col-sm-6 col-xs-12" >
            <p class="copyright-text">کپی رایت 2023 © کاریار _ تمامی حقوق مادی و معنوی محفوظ است.
            </p>
          </div>
    </div>
  )
}

export default Footer