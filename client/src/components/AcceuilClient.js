import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allannonce } from '../actions/transaction'
import {loadUser} from '../actions/authActions'
import FooterPage from './Footer'
import Carousel from 'react-bootstrap/Carousel';
import CardIem  from './CardAnnCl'
class Acceuilcl extends Component {
  carousell = ()=>{

    return(
       
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carou"
            src="https://www.digischool.fr/images/article/job-etudiant-travailler-comme-livreur--temoignage-lg-4204.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100   carou"
            src="https://www.capcampus.com/img/u/1/chauffeur-livreur.jpg"
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carou "
            src="https://www.studyrama.com/IMG/arton92096.png"
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
    )
    
    
    
    }
  

  componentDidMount() {
    this.props.allannonce()
    this.props.loadUser()
  }

  render() {
    return (

      <div>
        {/* {this.carousell()} */}
        <div   className="acceuil-ann-client">
        {this.props.annonces.annonce.map(el =>  <CardIem info={el}/>)}
         
        
        </div>
              <FooterPage />
      </div>
      
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    annonces: state.annonce,
    auth:state.auth
  }

}

export default connect(mapStateToProps, { allannonce,loadUser})(Acceuilcl);