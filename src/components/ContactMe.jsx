import {useRef, useState} from "react"
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmailToMe = async (e) => {
        e.preventDefault();

        let notification = "";
        const displayNotification = document.getElementById("formNotification")

        console.log(process.env.REACT_APP_PUBLIC_KEY);

        if(contactName === "" || contactEmail === "" || message === ""){
            notification = "Please fill out the contact form";
            displayNotification.innerHTML = notification;
        }else{
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    notification = "Sent email successful";
                     displayNotification.innerHTML = notification;
                     displayNotification.style.color = "green"
                }, (error) => {
                    console.log(error.text);
                    notification = "Opps...! Something went wrong";
                     displayNotification.innerHTML = notification;
                     displayNotification.style.color = "red"
                });
        }
    };

    return ( 
        <div id="contactme" className="row justify-content-center align-items-center" 
        // style={{ minHeight: "100vh" }}
        >
  

            <div className="row justify-content-center" style={{background: "#d8cecd"}}>
                <div className="col col-lg-8 m-3  border rounded shadow" style={{background: "#FFFFFF"}}>
                
                    <div id="textContactMe" className="row mt-3">
                        <h3 className="text-center">Contact to me</h3>
                        <p className="text-center">I am excited to connect to you. If you have any questions or just say hi,<br /> I will try my best to get back to you as soon as I can
                        </p>
                    </div>

                <form className="p-3" ref={form} onSubmit={sendEmailToMe}>
                    <div className="mb-1">
                        <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="exampleInputName" name="from_name" required
                        value={contactName}
                        onChange={(event) => setContactName(event.target.value)}/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                        name="from_email" aria-describedby="emailHelp" required
                        value={contactEmail}
                        onChange={(event) => setContactEmail(event.target.value)}/>
                        <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-1 " >
                        <label htmlFor="exampleFormControlTextarea1" className="form-label" >Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                        name="message" required
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        style={{minHeight: "25vh", maxHeight: "30vh"}}></textarea>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-7 col-md-4">
                        <button id="btnSendEmail" type="submit" className="w-100 btn border btn-lg my-2"
                        // style={{background: "linear-gradient(to left, #82b54b 0%, #405d27 100%)",
                        //         color: "white", fontWeight: "bold"}}
                        >Send email</button>
                        </div>
                        <p className="text-center fw-bold mt-1" id="formNotification"></p>
                    </div>
                </form>

                </div>
            </div>
        </div>
     );
}
 
export default ContactMe;