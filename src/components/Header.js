import React from 'react';  
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


// <NavLink to="/create" activeClassName="is-active">Go create</NavLink><br/>
//<NavLink to="/help" activeClassName="is-active">Go help</NavLink><br/>
//<NavLink to="/edit" activeClassName="is-active">Go edit</NavLink>

// export for testing purposes
export const Header= ({ startLogout }) => (
    <header className="header"> 
    <div className="content-container">
      <div className="header__content">
          <Link className="header__title" to="/dashboard" activeclassname="is-active">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--link" onClick={startLogout}>Logout</button>
          </div>
        </div>
    </header>
  );
  

  const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });

  // connect to redux . undefined - need no state, 
  export default connect(undefined, mapDispatchToProps)(Header);