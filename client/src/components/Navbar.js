import React from 'react';
import { logout } from '../actions/authActions';
import { RemoveCurrentAnnonce } from '../actions/transaction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = props => {
    const logout = () => {
        props.logout()
        props.RemoveCurrentAnnonce()
    }
    const client = () => {
        if (props.auth.user.role === "client")
            return (
                <li className="col-auto">
                    <Link id="menu-item" to="/reservation">Mes Reservation</Link>
                </li>
            )
    }
    const transporteur = () => {
        if (props.auth.user.role === "transporteur")
            return (
                <li className="col">
                    <Link id="menu-item" to="/commandes">Mes Commandes</Link>
                </li>
            )
    }
    const clientConnected = () => {
        if (props.auth.user.role === "client")
            return (
                <ul className="row d-flex w-40">
                    <li className="col-auto">
                        hello, {props.auth.user && props.auth.user.firstname + '' + props.auth.user.lastname}
                    </li>

                    {/* { props.auth.user && client()} */}
                    <li className="col">
                        <Link id="menu-item" to="/">Home client</Link>
                    </li>
                    <li className="col">
                        <Link id="menu-item" to="/about">About</Link>
                    </li>
                    <li className="col">
                        <a href="#" onClick={logout}>
                            {/* <i className="fas fa-sign-out-alt"></i> */}
                    Logout

                </a>

                    </li>
                </ul>
            )



    }

    const userConnected = () => {

        return (
            <ul className="row d-flex w-40">
                <li className="col-auto">
                    hello, {props.auth.user && props.auth.user.firstname + '' + props.auth.user.lastname}
                </li>

                {props.auth.user && (props.auth.user.role === "client" && client())}
                <li className="col">
                    <Link id="menu-item" to="/">Home</Link>
                </li>
                <li className="col">
                    <Link id="menu-item" to="/commandes">Mes Commandes</Link>
                </li>
                {/* {props.auth.user && (props.auth.user.role === "transporteur"&&transporteur())} */}
                <li className="col">
                    <Link id="menu-item" to="/about">About</Link>
                </li>
                <li className="col">
                    <a href="#" onClick={logout}>
                        {/* <i className="fas fa-sign-out-alt"></i> */}
                    Logout

                </a>

                </li>
            </ul>)
    }
    const guest = () => {
        return (
            <ul className="drop"  >
                <li className="sousmenu" >
                    <a className="active"><Link >login</Link></a>
                    <div className="dropdown"  >
                        <a > <Link to="/acceuil/client" >As Client</Link>   </a>
                        <a > <Link to="/acceuil/transporter">As Transporter</Link></a>
                    </div>
                </li>

                <li >
                    <a>  <Link to="/register">Register</Link></a>
                </li>
                {/* <li >
                   <a> <Link to="/acceuil">acceuil</Link></a>
                </li> */}
                <li >
                    <a> <Link to="/contact">Contactez Nous</Link></a>
                </li>
            </ul>
        )


    }
    return (
        <div className="nav">
            <nav>


                <label className="logo"> DesignX</label>
                {
                    props.auth.isAuthenticated ? userConnected() : guest()

                }

            </nav>

        </div>

    );

};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout, RemoveCurrentAnnonce })(Navbar);