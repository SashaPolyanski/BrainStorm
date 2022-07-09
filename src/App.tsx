import React from 'react';
import './App.css';
import ForgotPassword from "./features/auth/Password/ForgotPassword/ForgotPassword";
import RoutesComponent from "./main/ui/Routes/Routes";
import PasswordRecovery from "./features/auth/Password/PasswordRecovery/PasswordRecovery";

function App() {
    return (
        <div className="App">
            {/*<RoutesComponent />*/}
            {/*<ForgotPassword/>*/}
            <PasswordRecovery/>
        </div>
    );
}

export default App;
