import React, {useState} from "react";
function loginForm(){ 
        
    return(
        
        <form>
            <div className="form-inner">
                <h3>Login</h3>
                
                <div className="Form-group">
                  <label htmlFor="name">Username</label>
                  <input type="text" name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password"/>

                </div>
                <input type="submit" value="Login"></input>
            </div>
        </form>
    )
}

export default loginForm;