import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <>
        <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Ecommerce</h2>
      <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
      <p><Link to="#"><i class="fa fa-facebook-square mr-1"></i></Link><Link to="#"><i class="fa fa-linkedin-square"></i></Link></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
        <ul class="m-0 p-0">
          <li>- <Link to="#">Lorem ipsum</Link></li>
          <li>- <Link to="#">Nam mauris velit</Link></li>
          <li>- <Link to="#">Etiam vitae mauris</Link></li>
          <li>- <Link to="#">Fusce scelerisque</Link></li>
          <li>- <Link to="#">Sed faucibus</Link></li>
          <li>- <Link to="#">Mauris efficitur nulla</Link></li>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(123) 456-7890</p>
      <p><i class="fa fa-envelope-o mr-3"></i>info@abcd.com</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
            
        </>
    )
}

export default Footer
