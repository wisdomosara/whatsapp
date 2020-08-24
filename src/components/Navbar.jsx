import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom' ;

export default class Navbar extends Component {

    render() {
        const navStyle = {
            textDecoration: "none",
            color:"white",
            fontWeight: "200"
        }
        const fixed ={
            position : "fixed",
            top : 0,
            backgroundColor: "#075E54"
        }
        return (
            <div className="header">
                <nav className="pt-3 pb-4">
                    <div className="nav-left">
                        <Link to='/' style={navStyle}>
                            <h1 className="mb-0">Whatsapp</h1>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-ellipsis-v    "></i>
                    </div>
                </nav>
                <div className="controls container-fluid" >
                    <div className="row">
                        <NavLink to="/camera" className="col-1 d-flex justify-content-center align-items-center">
                            <div >
                                <i className="fas fa-camera"></i>
                            </div>
                        </NavLink>
                        <NavLink to="/Chats" className="col-4 py-2">
                            <div >
                                <h5 className="text-center mb-0">CHATS</h5>
                            </div>
                        </NavLink>
                        
                        <NavLink to="/Status" className="col-4 py-2">
                            <div>
                                <h5 className="text-center mb-0">STATUS</h5>
                            </div>
                        </NavLink>
                        <NavLink to="/Calls" className="col-3 py-2">
                            <div >
                                <h5 className="text-center mb-0">CALLS</h5>
                            </div>
                        </NavLink>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
