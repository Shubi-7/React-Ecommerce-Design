import React from 'react'
import '../../header.css'
import {Link, withRouter} from 'react-router-dom';
const isActive=(history,path)=>{
    if(history.location.pathname===path){
        return {color:'orange'}
    }
    else{
        return {color:'white'}
    }
}

function Nav({history}) {
    return (
        <>
        <div className ="container-fluid bg-dark">
        <div class="row header d-flex align-items-center">
        <div className ="col-md-3"></div>
        <div className ="col-md-6">
        <form className="d-flex par form-outline">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success abc" type="submit"><i class="bi bi-search"></i></button>
            </form>
        </div>
        <div className ="col-md-3">
        <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
      </label>
          <ul className="d-flex m-1 res">
            <li className="list-unstyled mx-2"><i class="bi bi-heart ic"></i></li>
            <li className="list-unstyled mx-2"><i class="bi bi-people-fill ic"></i></li>
            <li className="list-unstyled mx-2"><i class="bi bi-bag-fill ic"></i></li>
          </ul>
        </div>
        </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">E-Commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" style={isActive(history,'/')} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={isActive(history,'/shop')} to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" style={isActive(history,'/contact')} to="/contact">Contact</Link>
                    </li>
                </ul>

                </div>
            </div>
            </nav>
            <br/>
            <br/>

            
        </>
    )
}

export default withRouter(Nav)
