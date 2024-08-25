import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cabe37f3-dfd0-42a4-9ca3-9963c6760a4d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted and Contact you soon!!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    // <div className='title'>
    //   <p>Contact us </p>
    //   <h2>Get in touch</h2>
    //   <Contact />
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam dolorem quae omnis odit quos? Repudiandae, perspiciatis nisi ab earum ullam officiis quis eveniet harum vero maxime laboriosam exercitationem fuga!</p>
            <ul>
                <li>Contact@gerate</li>
                <li>7654345678</li>
                <li>55,ijhnbhjijhb<br />US</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number'
                required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'
                required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
      
    </div>
    // </div>
  )
}

export default Contact
