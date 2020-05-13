import React, { Component } from 'react';


class Contactacc extends Component {
    render() {
        return (
            <div>
                <p className="Contact-parag"  > Contact</p>
            <div   className="contact-display">
                <div>
               <img   style={{height:"350px"}}  src="https://joomly.net/frontend/web/images/googlemap/map.png"  />
                </div>
                <div>
                <form>
  <div class="form-row  test">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6   test">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group  test">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group test">
    <label for="inputAddress2">Your message</label>
    <textarea type="text" class="form-control" id="inputAddress2" placeholder="Your message"/>
  </div>
  
   
  
  <button type="submit" class="btn-contact">Sign in</button>
</form>
                </div>
                
            </div>
            </div>
        );
    }
}

export default Contactacc;