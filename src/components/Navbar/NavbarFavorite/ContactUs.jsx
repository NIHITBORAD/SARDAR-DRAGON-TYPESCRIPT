import React from 'react';

function ContactUs() {
  return (
    <div>
      {/* Header */}
      <div className="container-fluid" style={{ backgroundColor: 'chocolate', color: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={{ textAlign: 'center', padding: '2vh', fontSize: '16pt', letterSpacing: '1px' }}>Home <i className="fa fa-arrow-right"></i> Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-us">Contact Us</div>
            <div className="contact-us1">Get In Touch With Us</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form action="" className="form-tbl">
              <label htmlFor="">Your Name :</label>
              <input type="text" name="" id="" className="form-control" /><br />

              <label htmlFor="">Your Email Address :</label>
              <input type="email" name="" id="" className="form-control" /><br />

              <label htmlFor="">Your Subject :</label>
              <input type="text" name="" id="" className="form-control" /><br />

              <label htmlFor="">Your Message :</label>
              <textarea name="" id="" className="form-control"></textarea><br />

              <input type="submit" value="Submit" className="form-control" />
            </form>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="location">Our Location</div>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7421.519783270022!2d70.9413169549836!3d21.556241966991102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395876e31af2cc0b%3A0x6f9eb10385114307!2sHadala%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1693674189444!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a href="https://www.fridaynightfunkin.net/">FNF PC</a>
              </div>
              <style>{`.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}`}</style>
            </div> <br /><br />
          </div>
        </div>
      </div>

      {/* Address and Contact Info */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="box-title">Address</div>
              <div> HOME NO :305 HADALA BAGASARA AMRELI.</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box">
              <div className="box-title">Have any Questions?</div>
              <div>Our Mail : nihitborad000@gmail.com</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box">
              <div className="box-title">Owner name</div>
              <div>Dilipbhai Borad</div>
              <div>Nihit Borad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
