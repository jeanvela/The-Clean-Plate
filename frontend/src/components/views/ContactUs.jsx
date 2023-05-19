import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hd2h5nl",
        "template_og5ehry",
        form.current,
        "LutCavkqEbwKDQ8p_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        toast.success("Email send succesfully", {
          position: "bottom-left",
        }),
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="h-screen w-full bg-cover bg-[url('/../bg2.jpg')]  bg-center ">
      <div className=" justify-center  flex-col  ">
        <h2 className=" font-bold text-4xl flex justify-center py-12 ">
          contactUs
        </h2>
      </div>
      <div className="">
        <div
          className="justify-items-center
grid justify-self-stretch place-content-center
 "
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="  justify-center block p-6 rounded-xl  shadow-xl bg-amber-50 hover:bg-amber-200 max-w-md  "
          >
            <div className="form-group mb-6   w-96">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal    
        bg-clip-padding
        border border-solid border-amber-50
        rounded
     "
                placeholder="Name"
                name="user_name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                name="user_email"
                type="email"
                className="form-control block
              
        w-full
        px-3
        py-1.5
        text-base
        font-normal
       
        border border-solid border-amber-50
        rounded
        transition
        ease-in-out
        m-0"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                name="message"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        bg-white bg-clip-padding
        border border-solid border-amber-50
        rounded
        
       
      "
                rows="3"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className="form-group  text-center mb-6"></div>
            <button
              type="submit"
              value="send"
              className=" text-white cursor-pointer p-2 flex justify-center rounded-md shadow-md w-full bg-yellow-900 hover:bg-amber-800  mt-1 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
