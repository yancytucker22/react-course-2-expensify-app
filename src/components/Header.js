import React from 'react';  
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


// export for testing purposes
export const Header= ({ startLogout }) => (
    <header> 
      <h1>Expensify</h1>
      <div>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Go help</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">Go create</NavLink><br/>
        <NavLink to="/edit" activeClassName="is-active">Go edit</NavLink>
        <button onClick={startLogout}>Logout</button>
        </div>
   
    </header>
  );
  

  const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });

  // connect to redux . undefined - need no state, 
  export default connect(undefined, mapDispatchToProps)(Header);