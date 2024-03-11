import React from "react";

const FormInput = ({type, placefolder}) => (
  <div className="form-field-holder">
    <input type={type} placeholder={placefolder}/>

  </div>
);

const LoginButton = ({clicked}) => (
  <div className="form-field-holder">
    <button onClick={clicked}>
      Login
    </button>

  </div>
); 

const LoginComponent = () => {

  return (
    <div className="login-component">
      <span id="title">
        Login into your account
      </span>
       <FormInput type="text" placeholder="E-Mail"/>
       <FormInput type="password" placeholder="Password"/>
       <LoginButton clicked={() => alert("Login Now")}/>
    </div>
  );
 
};

export default LoginComponent;