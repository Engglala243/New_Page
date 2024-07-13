// rfce // import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert && 
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert.msg}:{props.alert.type}
    </div>}
    </div>
  );
}

export default Alert;
