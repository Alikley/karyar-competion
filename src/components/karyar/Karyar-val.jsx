import React from 'react'
import './Karyar-val.scss'
import {Button, Col,Form,Row} from 'react-bootstrap/';
import { CiMail,CiPhone,CiLocationOn,CiLinkedin,CiInstagram } from "react-icons/ci";
import Vec from '../../assest/Vector-2.png'
import Vec2 from '../../assest/Vector.png'
import Vec3 from '../../assest/Vector-1.png'

function Karyarval() {
  return (
    <div className='karyar'>
        <div className='text'>
            <h1>همکاری با کاریار </h1>
            <img src={Vec} alt="" />
        </div>
        <div className='box'>
                <h3>همکاری داوطلبانه</h3>
                <p>ما در کاریار مهارت‌های ساده و کاربردی کدنویسی را به صورت آنلاین به افراد علاقه‌مند در سراسر ایران آموزش می‌دهیم تا برای آن‌ها امکان اشتغال فراهم شود. چشم‌انداز ما کشوری است که در آن کسی به خاطر محدودیت جغرافیایی یا نداشتن دسترسی به امکانات، از یادگیری و اشتغال باز نمی‌ماند.</p>
                <p>
                عضوی از خانواده‌ی کاریار باشید: اگر علاقه‌مند به فعالیت اجتماعی هستید و از ارتقای کیفیت زندگی دیگران لذت می‌برید. 
اگر در رشته‌ی خود موفق هستید، سابقه‌ی کار حرفه‌ای و مدیریتی دارید یا در حال حاضر کسب و کار خود را اداره می‌کنید، از شما دعوت می‌کنیم به گروه راهنماهای کاریار بپیوندید و هدایت مهارت‌آموزها و داوطلب‌ها را بر عهده بگیرید.
اگر از راهنمایی کردن دیگران لذت می‌برید و بر یکی از زبان‌های برنامه نویسی مسلط هستید، به گروه داوطلب‌های کاریار بپیوندید و در طول برگزاری دوره با حل تمرین و کمک به پیشبرد پروژه‌ها مهارت‌آموزها را راهنمایی کنید.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />

                <Form>
                    <Row>
                        <Col>
                        <Form.Label style={{margin:"0px 0px 0px 39.5vh"}}>نام و نام خانوادگی</Form.Label>
                            <Form.Control placeholder="نام و نام‌خانوادگی خود را وارد کنید" type="text" className='form-right'   />

                            <Form.Label style={{margin:"0px 0px 0px 44vh"}}>آدرس ایمیل</Form.Label>
                            <Form.Control placeholder="ایمیل خود را وارد کنید" type="email" className='form-right'/>

                            <Form.Label style={{margin:"0px 0px 0px 39vh"}}>کشور محل سکونت</Form.Label>
                            <Form.Control placeholder="نام کشور محل سکونت خود را وارد کنید" type='text' className='form-right'/>
                            
                            <Form.Label style={{margin:"0px 0px 0px 9vh"}}>زبان‌های‌ برنامه‌نویسی یا مهارتی که به آن‌ مسلط هستید</Form.Label>
                            <Form.Control placeholder="برای مثال پایتون، جاوا اسکریپت، My SQL " type='text' className='form-right'/>
                        </Col>
                         <Col>
                        <Form.Label style={{margin:"0px 0px 0px 50vh"}}>مقطع و رشته تحصیلی</Form.Label>
                            <Form.Control placeholder="مقطع و رشته تحصیلی خود را وارد کنید" type='text' className='form-left'/>

                            <Form.Label style={{margin:"0px 0px 0px 58vh"}}>شماره موبایل</Form.Label>
                            <Form.Control placeholder="شماره همراه خود را وارد کنید" type='text' className='form-left'/>

                            <Form.Label style={{margin:"0px 0px 0px 52vh"}}>استان محل سکونت</Form.Label>
                            <Form.Control placeholder="نام استان محل سکونت خود را وارد کنید" type='text' className='form-left'/>

                            <Form.Label style={{margin:"0px 0px 0px 31vh"}}>مدت‌زمانی که در هفته می‌توانید وقت بگذارید</Form.Label>
                            <Form.Control placeholder="برای مثال 10 ساعت" type='text' className='form-left'/>
                        </Col>
                        <br />
                        <br />
                        <br />

                        
                        <Form.Label className='lbl'>تجربیات مشابه</Form.Label>
                        <Form.Control placeholder="برای مثال 10 ساعت" type='text' className='form-boot'/>

                        <Button variant='success' >ارسال</Button>
                    </Row>
                </Form>
        </div>
        <div className='box2'>
            <h2>همکاری موسسات آموزشی</h2>
            <p>
            اگر شما از موسسات نیکوکاری هستید که به دانش آموزان و دانشجویان مستعد، بورسیه تحصیلی می‌دهید، با معرفی دانش‌آموزان و دانشجویان علاقمند خود به کاریار زمینه‌ای فراهم کنید تا این افراد وارد دوره‌های آموزشی کاربردی و معطوف به اشتغال در زمینه کدنویسی شوند.
برای معرفی مهارت‌آموزان یا کسب اطلاعات بیشتر با کاریار تماس بگیرید.
            </p>
        </div>
        <div className='box3'>
            <h2>همکاری کسب و کارها</h2>
            <p>
            اگر شما از کسب و کارهایی هستید که نیاز به برنامه‌نویس دارید، می‌توانید با معرفی فرصت‌های کارآموزی و یا اشتغال به صورت تمام‌وقت یا پروژه‌ای، به صورت حضوری یا آنلاین به کارآموزان کاریار با ما همکاری کنید.
برای همکاری در زمینه‌ی جذب نیرو یا کسب اطلاعات بیشتر با کاریار تماس بگیرید.
            </p>
        </div>
        <div className='box4'>
            <h2>همکاری موسسات نیکوکاری</h2>
            <p>
            اگر شما موسسه آموزشی هستید که دوره‌های مرتبط با برنامه‌نویسی، طراحی وب، ICDL و یا دوره‌های توسعه فردی چون دوره مهارت‌های ارتباطی برگزار می‌کنید، می‌توانید با معرفی مدرس‌ها و دوره‌های آموزشی خود، امکان آموزش را برای مهارت‌آموزهای کاریار فراهم کنید.
برای همکاری در حوزه‌ی آموزش یا کسب اطلاعات بیشتر با کاریار تماس بگیرید.
            </p>
        </div>
        <div className='box5'>
            <h2 style={{padding:"50px"}}>برای همکاری با ما <span style={{color:"#00984A"}}>تماس</span> بگیرید</h2>
            <p><CiMail style={{fontSize:"25px"}} />  info@kaaryar.ir</p>
            <p s><CiPhone style={{fontSize:"28px"}}  /> 09057257183 - 02188842693</p>
            <p ><CiLocationOn style={{fontSize:"28px"}}/>تهران، خیابان قائم مقام فراهانی، کوچه یکم ،شماره ۱۷، طبقه 2 </p>
            <p style={{color:"#00984A"}}><CiLinkedin style={{fontSize:"28px"}}/>لینکدین کاریار</p>
            <p><CiInstagram style={{fontSize:"28px"}}/>اینستاگرام کاریار</p>
            <img src={Vec2} className="right" alt="" />
            <img src={Vec3} className="left" alt="" />

        </div>
    </div>
  )
}

export default Karyarval