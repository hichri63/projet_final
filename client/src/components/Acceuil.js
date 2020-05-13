import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allannonce } from '../actions/transaction'
// import Carousell from './CarouselPage';
import Carousel from 'react-bootstrap/Carousel';
import FooterPage from './Footer'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

class Acceuil extends Component {

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
  }

  render() {
    return (

      <div>
       {this.carousell()}
        <div   className="acceuil">
       
        {this.props.annonces.annonce.map(el => (
          <div  >
            <Card style={{ width: '28rem' }}>
              <Card.Img variant="top" style={{height:'250px'}} src={el.imagevoiture} />
              <Card.Body>
                <Card.Title>Date départ : {el.Datedep}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Link to={`/acceuil/${el.villedep}`}  >More information  </Link>
              </Card.Body>
            </Card>
          

          </div>

        ))}</div>
              <FooterPage />
      </div>
      
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    annonces: state.annonce
  }

}

export default connect(mapStateToProps, { allannonce })(Acceuil);