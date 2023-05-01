import React from 'react'
import {Card,Button,Carousel,Col,Row} from 'react-bootstrap';
import image from '../../assest/illustration (1).png'
import image2 from '../../assest/illustration (2).png'
import logo from '../../assest/logo Final-01 1.png'
import per from '../../assest/22 1.png'
import slidePHo1 from '../../assest/DSC4335-1-2048x1366-2-1024x683 1.png'
import slidePHo2 from '../../assest/karyar-23-1500x671-2-1024x458 1.png'
import imgcard1 from '../../assest/Rectangle 25-1.png'
import imgcard2 from '../../assest/Rectangle 25-2.png'
import imgcard3 from '../../assest/Rectangle 25.png'
import LogoValu from '../../assest/karyar/android-chrome-512x512-1-300x300.png'
import LogoValu1 from '../../assest/karyar/SosapovertyLogo.png'
import LogoValu2 from '../../assest/karyar/اموزشگاه-کئیرا-150x150.png'
import LogoValu3 from '../../assest/karyar/بنیاد-سپهر.png'
import LogoValu4 from '../../assest/karyar/بنیاد-کودک.png'
import LogoValu5 from '../../assest/karyar/داتین-300x300 1.png'
import LogoValu6 from '../../assest/karyar/زنان-و-جوانان-194x300.png'
import LogoValu7 from '../../assest/karyar/سلوک.png'
import LogoValu8 from '../../assest/karyar/لایتک.png'
import LogoValu9 from '../../assest/karyar/موسسه-امین-اراسته 1.png'
import LogoValu10 from '../../assest/karyar/موسسه-رعد-300x157.png'
import LogoValu11 from '../../assest/karyar/موسسه-سماتک.png'
import LogoValu12 from '../../assest/karyar/نورالزهرا-292x300.png'
import LogoValu13 from '../../assest/karyar/کاشانه-مهر-کاشان.png'
import LogoValu14 from '../../assest/karyar/کافه-بازار-300x166.png'
import LogoValu15 from '../../assest/karyar/یاران-دانش-و-مهر.png'
import Vector from '../../assest/Vector.png'
import Vector1 from '../../assest/Vector-1.png'


import { BiChevronLeft } from "react-icons/bi";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
// import { Carousel } from "react-responsive-carousel";


import './Section.scss'

function Section() {
  return (
    <div className='section'>
     <div className="container">
      <div className="img-container">
        <img src={image} alt=""  />
      </div>
      <div className="details">
        <div className="content">
          <h2 >پیوستن به کاریار</h2>
          <br />
          <p>
          در کاریار یاد بگیرید که چگونه یک برنامه‌‌‌‌‌نویس حرفه‌‌‌‌‌‌‌‌‌ای شوید. مهارت‌های تخصصی 
و ارتباطی خود را تقویت کنید و به شبکه وسیعی از افراد حرفه‌ای و کارفرماها
متصل شوید. همین حالا  ثبت‌نام کنید
          </p>
        </div>
      </div>
      <div className="img-container2">
        <img src={image2} alt=""  />
      </div>
      <div className="details2">
        <div className="content2">
          <h2 > مدل آموزشی کاریار </h2>
          <br />
          <p>
          مهارت‌آموزان کاریار پس از طی فرایند پذیرش و ثبت‌نام نهایی، در یک دوره آموزشی آنلاین 6 الی 9 ماهه شرکت می‌کنند. هر مهارت‌آموز در طول دوره‌ آموزشی حدود ۲۰ ساعت در هفته را به آموزش‌های کاریار اختصاص می‌دهد.
          </p>
        </div>
      </div>
     </div>

     <div className='caard'>

      <h2>
        اموزش های کاریار
      </h2>
      <Row style={{margin:"0px 50px -90vh"}}>

       <Col className='col'>
     <Card style={{ width: '30rem', height:"50vh" }}>
      <Card.Img variant="top" src={logo} style={{width:"50px",margin:"30px"}} />
      <Card.Body>
        <Card.Title  className="title">مسیر آموزش و اشتغال امور اداری</Card.Title>
        <Card.Text style={{float:"right"}}>
        در این دوره با دانش عمومی کامپیوتر، کار با مرورگرهای وب و اینترنت آشنا می‌شوید.
        </Card.Text>
        <Button variant="success , bottom" >Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem', height:"50vh" }}>
      <Card.Img variant="top" src={logo} style={{width:"50px",margin:"30px"}} />
      <Card.Body>
        <Card.Title  className="title">مسیر آموزش و اشتغال امور اداری</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success , bottom" >Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col> 
      <Col className='col-1'>
     <Card style={{ width: '30rem', height:"50vh" }}>
      <Card.Img variant="top" src={logo} style={{width:"50px",margin:"30px"}} />
      <Card.Body>
        <Card.Title  className="title">مسیر آموزش و اشتغال امور اداری</Card.Title>
        <Card.Text style={{float:"right"}}>
        در این دوره با دانش عمومی کامپیوتر، کار با مرورگرهای وب و اینترنت آشنا می‌شوید.
        </Card.Text>
        <Button variant="success , bottom" >Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem', height:"50vh" }}>
      <Card.Img variant="top" src={logo} style={{width:"50px",margin:"30px"}} />
      <Card.Body>
        <Card.Title  className="title">مسیر آموزش و اشتغال امور اداری</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success , bottom" >Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col> 
      
      </Row>
    {/* //card-logo *****************/}
    <div className='valun'>
      <h3>
      از داوطلبان کاریار بشنوید
      </h3>
    <Card style={{ width: '90rem',height:"25vh",left:'100vh',top:"180px",borderRadius:"5px" }}>
      <Card.Img  src={per} style={{width:"100px",margin:"16px 60px"}} />
      <Card.Body>
        <Card.Title className='tit'>امیر‌حسین کیانی</Card.Title>
        <Card.Title className='tit2'>Card Title</Card.Title>
        <Card.Title className='tit3'>Card Title</Card.Title>
        <Card.Title className='tit4'>Card Title</Card.Title>
        <Card.Text className='Ctext' >
        بزرگترین دستاورد من از دوره‌های آموزشی کاریار، هدایت من برای ورود به دنیای ار برنامه‌نویسی و آشنا شدن با گزینه های پیش رویم است.        </Card.Text>
        <Card.Text className='Ctext' >

          کاریار و منتورها خیلی من را آگاه کردند و دیدم نسبت به قبل خیلی بازتر شده است.

        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '90rem',height:"25vh",left:'100vh',top:"230px",borderRadius:"5px" }}>
      <Card.Img  src={per} style={{width:"100px",margin:"16px 60px"}} />
      <Card.Body>
        <Card.Title className='tit'>امیر‌حسین کیانی</Card.Title>
        <Card.Title className='tit2'>Card Title</Card.Title>
        <Card.Title className='tit3'>Card Title</Card.Title>
        <Card.Title className='tit4'>Card Title</Card.Title>
        <Card.Text className='Ctext' >
        بزرگترین دستاورد من از دوره‌های آموزشی کاریار، هدایت من برای ورود به دنیای ار برنامه‌نویسی و آشنا شدن با گزینه های پیش رویم است.        </Card.Text>
        <Card.Text className='Ctext' >

          کاریار و منتورها خیلی من را آگاه کردند و دیدم نسبت به قبل خیلی بازتر شده است.

        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '90rem',height:"25vh",left:'100vh',top:"300px",borderRadius:"5px" }}>
      <Card.Img  src={per} style={{width:"100px",margin:"16px 60px"}} />
      <Card.Body>
        <Card.Title className='tit'>امیر‌حسین کیانی</Card.Title>
        <Card.Title className='tit2'>Card Title</Card.Title>
        <Card.Title className='tit3'>Card Title</Card.Title>
        <Card.Title className='tit4'>Card Title</Card.Title>
        <Card.Text className='Ctext' >
        بزرگترین دستاورد من از دوره‌های آموزشی کاریار، هدایت من برای ورود به دنیای ار برنامه‌نویسی و آشنا شدن با گزینه های پیش رویم است.        </Card.Text>
        <Card.Text className='Ctext' >

          کاریار و منتورها خیلی من را آگاه کردند و دیدم نسبت به قبل خیلی بازتر شده است.

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     </div>
     {/* <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        
      >
        <div>
          <img src={per} alt="dsdsd" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={per}  alt="dsdsd"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={per} alt="dsdsd"/>
          <div className="myCarousel">
            <h3 >Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel> */}
      {/* Slider */}
      <Carousel fade>
      <Carousel.Item>
        <Carousel.Caption className='cap'>
          <h3>مراسم تقدیر 
از داوطلبان کاریار برگزار شد.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <img
          className="d-block w-50 slidph"
          src={slidePHo1}
          alt="First slide"
          style={{height:"50vh"}}

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 slidph"
          src={slidePHo2}
          alt="Second slide"
          style={{height:"50vh"}}
          
        />

        <Carousel.Caption>
          <h3 style={{color:"#00984"}}>مراسم تقدیر 
از داوطلبان کاریار برگزار شد.</h3>
          <p >کاریار با هدف مهارت‌آموزی و ایجاد فرصت
درآمد‌زایی برای جوانان این مرزوبوم<br /> و با پشتوانه نیروهای داوطلب و بسیار حرفه‌ای
کارش را آغاز کرد.</p>
          <Button variant="outline-success" >vdsvds</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 slidph"
          src={slidePHo2}
          alt="Third slide"
          style={{height:"50vh"}}

        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* end */}
    <div className='txt'>
      <h2 className='h2'>
      اخبار و دانستنی‌ها
      </h2>
      <span className='spa'>
      مشاهده همه 
      <BiChevronLeft />
      </span>
    </div>
    {/* end */}
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 cc'>
      <MDBCol>
        <MDBCard className='h-100 c1'>
          <MDBCardImage
            src={imgcard1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardText style={{direction:"rtl",padding:"0px 50px"}}>
            مهارت‌آموزانِ مسیر آموزشی تحلیل داده ، <br /> پروژه
پایانی خود را ارائه دادند.
<br />
۱۰ اسفند ۱۴۰۱
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter style={{color:"#00984A"}}>
            <Button variant='outline-success' style={{padding:"5px 50px" , color:"#fff"}}>dvsdvsd</Button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 c2'>
          <MDBCardImage
            src={imgcard2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            
            <MDBCardText>
            رویداد “یاد بگیر و به کار بگیر” در تهران، بیرجند
و قائن برگزار شد.
<br />
۱۰ اسفند ۱۴۰۱
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
          <Button variant='outline-success' style={{padding:"5px 50px" , color:"#fff"}}>dvsdvsd</Button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 c3'>
          <MDBCardImage
            src={imgcard3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardText>
            مهارت‌آموزانِ مسیر آموزشی تحلیل داده، پروژه
پایانی خود را ارائه دادند.
<br />
۱۰ اسفند ۱۴۰۱
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
          <Button variant='outline-success' style={{padding:"5px 50px" , color:"#fff"}}>dvsdvsd</Button>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <h2 className='h'>موسسات همکار با کاریار</h2>
    <div id="grid">
    <div><img src={LogoValu} alt="" /></div>
    <div><img src={LogoValu1} alt="" /></div>
    <div><img src={LogoValu2} alt="" /></div>
    <div><img src={LogoValu3} alt="" /></div>
    <div><img src={LogoValu4} alt="" /></div>
    <div><img src={LogoValu5} alt="" /></div>
    <div><img src={LogoValu6} alt="" /></div>
    <div><img src={LogoValu7} alt="" /></div>
    <div><img src={LogoValu8} alt="" /></div>
    <div><img src={LogoValu9} alt="" /></div>
    <div><img src={LogoValu10} alt="" /></div>
    <div><img src={LogoValu11} alt="" /></div>
    <div><img src={LogoValu12} alt="" /></div>
    <div><img src={LogoValu13} alt="" /></div>
    <div><img src={LogoValu14} alt="" /></div>
    <div><img src={LogoValu15} alt="" /></div>

</div>
<div style={{margin:"0px 0px 0vh"}}>

<h1 className='h1'>مسیر شغلی خود را از همین امروز <span style={{color:'#00984A'}}>شروع</span> کنید</h1>
<p className='p'>به ما بپیوندید، آموزش کاربردی ببینید و بعد از رسیدن به درآمد، هزینه‌اش را بپردازید.</p>
<img src={Vector}  className="vec" alt="" />
<img src={Vector1} className="vec1" alt="" />
<Button variant='success' className='butto'>ثبت نام مهارت اموز</Button>
<p style={{padding:"35vh"}}>سوالی دارید که پاسخش را پیدا نکردید؟ <span style={{color:"#00984A"}}> پرسش‌های پرتکرار</span> را ببینید </p>
</div>

    </div>
  )
}

export default Section