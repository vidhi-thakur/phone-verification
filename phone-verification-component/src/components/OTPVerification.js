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
        if (Number(input) >= 0 && Number(input) <= 9) return true
        else return false
    }

    const moveFocus = (e) => {
        var target = e.target;
        var inputMaxLength = target.maxLength
        var inputLength = target.value.length
        if (!validInput(target.value)) {
            setError("Enter the valid input.")
        } else {
            setError("")
            if (inputLength >= inputMaxLength) {
                focusNext(target)
            }
            else if (inputLength === 0) {
                focusPrev(target)
            }
        }
        if (e.keyCode === 39) {
            focusNext(target)
        }
        if (e.keyCode === 37) {
            focusPrev(target)
        }
    }

    function focusNext(target) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next === null) break;
            if (target.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }

    function focusPrev(target) {
        var prev = target;
        while (prev = prev.previousElementSibling) {
            if (prev === null) break;
            if (target.tagName.toLowerCase() === "input") {
                prev.focus();
                break;
            }
        }
    }

    const pasteDataFromClipboard = (e) => {
        var clipboardData = e.clipboardData.getData('text');
        if (clipboardData.length === 6) {
            setError("");
            var arrayOfInput = clipboardData.split('')
            if (checkForAllInputs(arrayOfInput)) {
                updateInputValue(arrayOfInput)
            }
        } else {
            setError("OTP should be 6 digit!")
        }
    }

    function updateInputValue(arrayOfInput) {
        arrayOfInput.map((input, i) => {
            inputForm[`input0${i + 1}`] = input;
        });
    }

    function checkForAllInputs(arr) {
        var count = 0;
        arr.map(data => {
            if (validInput(data)) {
                count++
                console.log(count)
            }
        })
        if (count === 6) {
            console.log(count)
            return true
        }
        else {
            return false
        }
    }

    return (
        <div className="OTPVerification">
            <header>Phone Verification</header>
            <form>
                <label>Enter the OTP you received on 89206-6XXXX</label>
                <div onKeyUp={(e) => moveFocus(e)} onPaste={(e) => pasteDataFromClipboard(e)}>
                    <input autoFocus value={inputForm.input01} onChange={(e) => setInputForm({ ...inputForm, input01: validInput(e.target.value) ? e.target.value : "" })} className="input" type="text" maxLength={1} required />
                    <input value={inputForm.input02} onChange={(e) => setInputForm({ ...inputForm, input02: validInput(e.target.value) ? e.target.value : "" })} className="input" type="text" maxLength={1} required />
                    <input value={inputForm.input03} onChange={(e) => setInputForm({ ...inputForm, input03: validInput(e.target.value) ? e.target.value : "" })} className="input" type="text" maxLength={1} required />
                    <input value={inputForm.input04} onChange={(e) => setInputForm({ ...inputForm, input04: validInput(e.target.value) ? e.target.value : "" })} className="input" type="text" maxLength={1} required />
                    <input value={inputForm.input05} onChange={(e) => setInputForm({ ...inputForm, input05: validInput(e.target.value) ? e.target.value : "" })} className="input" type="text" maxLength={1} required />
                    <input value={inputForm.input06} onChange={(e) => setInputForm({ ...inputForm, input06: validInput(e.target.value) ? e.target.value : "" })} className="input" type="text" maxLength={1} required />
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
