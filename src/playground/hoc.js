import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p> The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info please do not share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/> 
             ) : ( 
                <p>please log in to see component</p>
        )}
        </div>
        );
};


const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail" />,document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the component" />,document.getElementById('app'));