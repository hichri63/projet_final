import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import  {connect} from  'react-redux';
import {Link} from 'react-router-dom';
import {loadUser} from '../actions/authActions';
import ResrverModal from './Model';

class CardAnnCl extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      componentWillMount(){
    
        if (this.props.auth.token) {
          this.props.loadUser()
      }
    }

    render() {
        return (
            <div >
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
     
<div className="card annonce-flip" >
  <img className="card-img-top" alt="100%x180" src={this.props.info.imagevoiture} style={{height: "150px", width: "250px"}}/>
     <div style={{display:"flex", alignItems:"center"}}>
    <h4 className="card-title text-flip" > {this.props.info.villedep}</h4>--->
    <h4 className="card-text text-flip ">{this.props.info.villearr}  </h4>
    </div>
  
    
  {!this.props.auth.isAuthenticated ? <Link to="/login"><a type="button" className="info"><i class="fas fa-angle-double-right">  Pour plus D'info</i></a></Link> : <a type="button" className="info" onClick={this.handleClick}><i class="fas fa-angle-double-right"> Pour plus D'info</i></a> }
     
</div> 
   {/* second part */}
   <div className="card annonce-flip2 " style={{width: "340px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={this.props.info.imagevoiture} className="card-img" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><img src="https://img.icons8.com/bubbles/50/000000/phonelink-ring.png"/>{this.props.info.Datedep}</h5>
        <p className="card-text"><img src="https://img.icons8.com/bubbles/100/000000/address.png"/>{this.props.info.villedep}</p>
        <p className="card-text"><img  src="https://img.icons8.com/bubbles/50/000000/map-marker.png"/><small className="text-muted">{this.props.info.villearr}</small></p>
      </div>
    </div>
  </div>
  <div>
      <a type="button" className="info" onClick={this.handleClick}><i class="fas fa-angle-double-left"> Back</i></a> 
     <ResrverModal info={this.props.info}   />
     </div>
</div>
 
      </ReactCardFlip>
      </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return{
        auth:state.auth    
    }
}

export default   connect (mapStateToProps,{loadUser}) (CardAnnCl);

