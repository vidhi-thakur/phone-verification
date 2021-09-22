import './App.css';
import { useState } from 'react'
import OTPVerification from './components/OTPVerification';

function App() {
  const [verifyOTP, setVerifyOTP] = useState(false)
  return (
    <div className="App">
      <div className="main">
        {
          !verifyOTP? <button onClick={() => setVerifyOTP(true)} className="OTPVerificationButton button">Verify OTP</button>: <OTPVerification />
        }
      </div>
    </div>
  );
}

export default App;
