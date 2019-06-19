import React from 'react';  
import { NavLink } from 'react-router-dom';


const Header= () => (
    <header> 
      <h1>Expensify</h1>
      <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Go help</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">Go create</NavLink><br/>
        <NavLink to="/edit" activeClassName="is-active">Go edit</NavLink>
      </div>
  
    </header>
  );
  
  export default Header;