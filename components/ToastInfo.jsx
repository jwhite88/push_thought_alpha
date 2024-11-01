import { set } from 'mongoose'
import React, { useState } from 'react'
import Swal from 'sweetalert2'


const ToastInfo = ({ setMessageSent, setShowToastInfo }) => {
    // const [toastShared, setToastShared] = useState("")
    // const onMessageChange = (event) => {
    //     let message = event.target.value
    //     console.log("toastShared: ", toastShared)
    //     console.log("For sent msg", event.target.value)
    //     setToastShared(message)
    //     setMessageSent(message)
    // }

    const showConfirmationForm = () => {
        Swal.fire({
            title: "Did you send your message? Confirm below to be counted in our metrics.",
            cancelButtonText: "No",
            showCancelButton: true,
            confirmButtonText: "Yes"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    setMessageSent("Yes")
                    setShowToastInfo(false)
                    // handleSubmitTest()
                    Swal.close()
                } else if (result.isDismissed) {
                    setShowToastInfo(false)
                    // handleSubmitTest()
                    // Swal.close()
                    setMessageSent("No")
                    console.log("In the dismissed")
                    // if (result.isConfirmed) {
                    //     console.log("In the dismissed")
                    // }

                }

            });
    }

    // return (
    //     <div>
    //         <h2 style={{ fontSize: '20pt' }} >Did you send your message? Confirm below to be counted in our metrics.</h2>
    //         <div>
    //             <label>
    //                 <span style={{ display: "inline-block", }}>Yes</span> <input type="radio" style={{ transform: "scale(3.5)", position: "relative", bottom: "10px", left: "20px", display: "inline-block" }} name="isShared" value={"Yes"} onChange={onMessageChange} /> <br />
    //             </label>
    //             <label>
    //                 <span style={{ display: "inline-block" }}>No</span>  <input type="radio" style={{ transform: "scale(3.5)", position: "relative", bottom: "10px", left: "39px", display: "inline-block" }} name="isShared" value={"No"} onChange={onMessageChange} />
    //             </label>
    //             {/* <button onClick={console.log("button firing")}>Submit</button> */}
    //         </div>
    //     </div>
    // )


    return (showConfirmationForm())
}

export default ToastInfo
