export default function Footer() {
    return (
        <div className="footer_section layout_padding margin_top90">
         <div className="container">
            <div className="footer_section_2">
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <h2 className="useful_text">Contact Us</h2>
                     <div className="location_text"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_15">Location</span></a></div>
                     <div className="location_text"><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_15">(+7) 9523332950</span></a></div>
                     <div className="location_text"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_15">demo@gmail.com</span></a></div>
                     <div className="social_icon">
                        <ul>
                           <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <h2 className="useful_text">Useful links </h2>
                     <div className="footer_menu">
                        <ul>
                           <li className="active"><a href="index.html">Home</a></li>
                           <li><a href="service.html">Cources</a></li>
                           <li><a href="testimonial.html">Articles</a></li>
                           <li><a href="#">News</a></li>
                           <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <h2 className="useful_text">About Us</h2>
                     <p className="lorem_text">Readable content of a page when looking at its layoutreadable content of a page when looking at its layout
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}