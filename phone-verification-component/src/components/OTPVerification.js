import React, { useState } from 'react'
import './OTPVerification.css'

function OTPVerification() {

    const initialState = {
        input01: "",
        input02: "",
        input03: "",
        input04: "",
        input05: "",
        input06: ""
    }
    const [inputForm, setInputForm] = useState(initialState)
    const [error, setError] = useState("")

    function validInput(input) {
        if(Number(input)>=0 && Number(input)<=9) return true
        else return false
    }

    const moveFocus = (e) => {
        var target = e.target;
        var inputMaxLength = target.maxLength
        var inputLength = target.value.length
        if(!validInput(target.value)) {
            setError("Enter the valid input.")
        } else {
            setError("")
            if(inputLength>=inputMaxLength) {
                setError("")
                var next = target;
                while(next = next.nextElementSibling) {
                    if(next === null) break;
                    if(target.tagName.toLowerCase() === "input") {
                        next.focus();
                        break;
                    }
                }
            }
            else if(inputLength === 0) {
                var prev = target;
                while(prev = prev.previousElementSibling) {
                    if(prev === null) break;
                    if(target.tagName.toLowerCase() === "input") {
                        prev.focus();
                        break;
                    }
                }
            }
        }
        
    }
    

    return (
        <div className="OTPVerification">
            <header>Phone Verification</header>
            <form>
                <label>Enter the OTP you received on 89206-6XXXX</label>
                <div onKeyUp={(e) => moveFocus(e)}>
                    <input autoFocus onChange={(e)=>setInputForm({...inputForm, input01: validInput(e.target.value) ? e.target.value: ""})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input02: validInput(e.target.value) ? e.target.value: ""})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input03: validInput(e.target.value) ? e.target.value: ""})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input04: validInput(e.target.value) ? e.target.value: ""})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input05: validInput(e.target.value) ? e.target.value: ""})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input06: validInput(e.target.value) ? e.target.value: ""})} className="input" type="text" maxLength={1} required />
                </div>
                <div className="editInfo">
                    <span className="text-blue">Change number</span>
                    <span className="text-blue">Re-send OTP</span>
                </div>
                <button className="button OTPSubmitButton">Verify Phone Number</button>
            </form>
            {error && <small className="error">{error}</small>}
        </div>
    )
}

export default OTPVerification
