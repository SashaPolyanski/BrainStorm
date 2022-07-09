import React from 'react';
import './App.css';
import ForgotPassword from "./features/auth/Password/ForgotPassword/ForgotPassword";
import RoutesComponent from "./main/ui/Routes/Routes";
import PasswordRecovery from "./features/auth/Password/PasswordRecovery/PasswordRecovery";
import CheckEmail from "./features/auth/Password/CheckEmail/CheckEmail";

function App() {
    return (
        <div className="App">
            {/*<RoutesComponent />*/}
            <ForgotPassword/>
            {/*<PasswordRecovery/>*/}
            {/*<CheckEmail/>*/}
        </div>
    );
}

export default App;
