import React, { useState, useEffect } from 'react'
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

    const [foucsState, setFocusState] = useState(1)
    const [inputForm, setInputForm] = useState(initialState)

    useEffect(() => {
        setFocusState(foucsState+1)
    }, [inputForm])

    // function updateAutoFocus() {
    //     if()
    // }

    function validInput(input) {
        if(Number(input)>=0 && Number(input)<=9) return true
        else return false
    }

    const moveFocus = (e) => {
        var target = e.target;
        var inputMaxLength = target.maxLength
        var inputLength = target.value.length
        if(inputLength>=inputMaxLength) {
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

    return (
        <div className="OTPVerification">
            <header>Phone Verification</header>
            <form>
                <label>Enter the OTP you received on 89206 - 6XXXX</label>
                <div onKeyUp={(e) => moveFocus(e)}>
                    <input onChange={(e)=>setInputForm({...inputForm, input01: e.target})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input02: e.target})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input03: e.target})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input04: e.target})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input05: e.target})} className="input" type="text" maxLength={1} required />
                    <input onChange={(e)=>setInputForm({...inputForm, input06: e.target})} className="input" type="text" maxLength={1} required />
                </div>
                <button>Verify Phone Number</button>
            </form>
        </div>
    )
}

export default OTPVerification
