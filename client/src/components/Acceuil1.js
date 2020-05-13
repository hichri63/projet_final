import React from "react";
// import { connect } from "react-redux";
// import { loadUser} from "../actions/AuthActions";
import CarouselPage from "./CarouselPage";
import Descriptionacceuil from './Descriptionacceuil';
import Contactacc from './contactacc';
// import Image from "./Image";
// import Footer from './Footer';
// import MultiCarousel from "./MultiCarousel";
// import Conseil from "./Conseil";


class Acceuil1 extends React.Component {



 
  render() {
    return (
      <div>
 <CarouselPage/>
 <Descriptionacceuil/>
 <div className="scroll-image-background">
     <p   className="scrollp"><span>Need a car? Contact us today!</span><br/>
       Service is our attitude, and attitude is everything!</p>
      
 </div>
 
 <Contactacc/>
 <div className="scroll-image-background1">

 </div>
 

 {/* <Conseil />
 <div className="scroll-image-bg1">
 </div>
 <MultiCarousel />
 <Footer /> */}
      </div>
		)
	}}


export default Acceuil1;
