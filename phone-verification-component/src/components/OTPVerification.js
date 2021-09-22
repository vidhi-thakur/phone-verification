import React from 'react'
import './OTPVerification.css'

function OTPVerification() {
    return (
        <div className="OTPVerification">
            <header>Phone Verification</header>
            <form>
                <label>Enter the OTP you received on 89206 - 6XXXX</label>
                <input type="number" min={0} max={9} maxLength={1} autoFocus={false} required />
                <input type="number" min={0} max={9} maxLength={1} autoFocus={false} required />
                <input type="number" min={0} max={9} maxLength={1} autoFocus={false} required />
                <input type="number" min={0} max={9} maxLength={1} autoFocus={false} required />
                <input type="number" min={0} max={9} maxLength={1} autoFocus={false} required />
                <input type="number" min={0} max={9} maxLength={1} autoFocus={false} required />
                <button>Verify Phone Number</button>
            </form>
        </div>
    )
}

export default OTPVerification
