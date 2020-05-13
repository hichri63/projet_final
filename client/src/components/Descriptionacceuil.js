import React, { Component } from 'react';
import {Card,CardDeck } from 'react-bootstrap';
import AboutService from './AboutService';

class Descriptionacceuil extends Component {
    render() {
        return (
            <div  >
                <AboutService/>
                <div style= {{ backgroundColor:"#F5F5F5",paddingTop:"20px"}}>
                    <p  className="parag-services">Our Services
                    <hr/></p>
                <CardDeck style={{width:"80%", margin:"0 auto" }}   >
  <Card>
    <Card.Img variant="top" src="https://image.freepik.com/photos-gratuite/femme-asiatique-ramasser-sac-nourriture-livraison-boite-du-pouce-vers-haut-sans-contact-sans-contact-livreur-velo-devant-maison-pour-distanciation-sociale-pour-risque-infection-concept-coronavirus_73503-1929.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://as1.ftcdn.net/jpg/01/73/97/92/500_F_173979206_Ckz3jZWK1UfCFYZWDcNV03TDsDL4ushx.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://image.freepik.com/photos-gratuite/courrier-livreur-gants-masque-latex-medical-livre-toute-securite-achats-ligne-dans-boite-blanche-porte-pendant-epidemie-coronavirus_120485-4327.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
                
            </div>
        );
    }
}

export default Descriptionacceuil;