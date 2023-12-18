import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sv7i17n",
        "template_nf7vqxk",
        form.current,
        "Q3TAuECGDlUuLdAnW"
      )
      .then(
        (result) => {
            console.log(result.text);
            if (result.text === 'OK') {
              form.current.reset(); 
            }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    return (
        <div className="w-10/12 mx-auto my-8 ">
            
        <div className="ml-36 md:w-2/3">
            <p className="text-center text-3xl font-bold my-5">Send us Your Questions</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-around items-center gap-3">
              <input
                placeholder="Your Name"
                className="text-black bg-transparent border border-black rounded-3xl p-3 w-full"
                type="text"
                name="from_name"
              />
              <input
                placeholder="Your Email"
                className="text-black w-full bg-transparent border-black border rounded-3xl p-3"
                type="email"
                name="from_email"
              />
            </div>
            <br />
            <br />
            <textarea
              placeholder="Your Message"
              className=" bg-transparent border-black border rounded-3xl p-8 w-full text-black"
              name="message"
            />
            <div className="text-center mt-3">
              <input
                className="btn rounded-3xl bg-transparent uppercase text-black border border-black"
                type="submit"
                value="send message"
              />
            </div>
          </form>
        </div>
        </div>
    );
};

export default Contact;