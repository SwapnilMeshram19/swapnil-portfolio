import React, { useRef,useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [message,setMessage]=useState('');
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iqraror', 'template_vkhy2qs', form.current, 'MIRtWM2SrhEjyFit8')
      .then((result) => {
          console.log(result.text);
          setEmail("");
          setName("");
          setMessage("");

      }, (error) => {
          console.log(error.text);
      });

  }

  // const sendMessage = ()=>{

  // }

  return (
    <div id="contact">
      <h1>Get in touch</h1>
      <div className='contact-info'>
        <div className="information">
          <a
            className="icons-container"
            href="https://mail.google.com/mail/?view=cm&to=swapnilm1908@gmail.com"
            target="_blank"
          >
            <EmailIcon className="icon" />
            <div className="icon-text"> Swapnilm1908@gmail.com</div>
          </a>
          <div className="icons-container">
            <CallIcon className="icon" />
            <div className="icon-text">9595183013</div>
          </div>

          <div className="icon-container">
            <a href="https://github.com/SwapnilMeshram19" target="_blank">
              <GitHubIcon className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/swapnil-meshram-37a715167"
              target="_blank"
            >
              <LinkedInIcon className="icon" />
            </a>
            <a href="https://twitter.com/swapnilm1908" target="_blank">
              <TwitterIcon className="icon" />
            </a>
          </div>
        </div>
        {/* <div class="vr"></div> */}
        <form className="send-message" ref={form} onSubmit={sendMessage}>
          <TextField
            required
            className="text-field"
            id="outlined-basic"
            label="Email ID"
            value={email}
            name="user_email"
            onChange={(e)=>{setEmail(e.target.value)}}
            variant="outlined"
            style={{marginBottom: "40px" }}
            sx={{
              input: { color: "white" },
              label: { color: "rgb(25, 118, 210)" },
            }}
          /> <br/>
          <TextField
          required
            className="text-field"
            id="outlined-basic"
            label="Name"
            name="user_name"
            value={name}
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
            style={{ marginBottom: "40px" }}
            sx={{
              input: { color: "aliceblue" },
              label: { color: "rgb(25, 118, 210)" },
            }}
          /><br/>
          <TextField
            className="text-field"
            id="outlined-multiline-static"
            label="Message"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            multiline
            rows={4}
            inputProps={{ style: { color: "white" } }}
            sx={{
              label: { color: "rgb(25, 118, 210)" },
            }}
          />
          <br />
          <Button
           type="submit"
            className="send-button"
            variant="contained"
            onClick={sendMessage}
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              border: "2px solid black",
              width: "20%",
              marginTop:"30px",
              

            }}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
