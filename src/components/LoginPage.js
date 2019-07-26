import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// stateless functional component
export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>LogIn</button>
    </div>
);   

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
 