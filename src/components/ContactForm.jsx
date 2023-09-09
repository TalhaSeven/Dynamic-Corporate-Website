import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      {/* contact icons started */}
      <div className="contactIconsParent text-center">
        <div className="contactIcons phone">
          <div className="p-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              className="rounded-full w-20 h-20 p-4 m-auto "
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </div>
          <span>907-200-3462 </span>
        </div>
        <div className="contactIcons map">
          <div className="p-10">
            <svg
              className=" bg-orange-400 rounded-full w-20 h-20 p-4 m-auto"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </div>
          <span>14/A, Kilix Home Tower</span>
        </div>
        <div className="contactIcons email">
          <div className="p-10">
            <svg
              className=" bg-orange-400 rounded-full w-20 h-20 p-4 m-auto"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
          </div>
          <span>support@kindedo.com </span>
        </div>
      </div>

      {/* contact icons finished */}

      {/* contact form started */}
<div className="formMapDiv">

      <form className="contactForm mt-12 p-10 border m-3 rounded-xl">
        <h2 className="text-3xl mr-5 mb-10 mt-5 ">Contact Us Right Here</h2>
        <div className="nameEmailFlex">
        <div className="mb-5">
          <div>
            <label htmlFor="name">
              Name <span className="redStar ">*</span>
            </label>
          </div>
          <input
            type="text"
            id="name"
            className="outline-0 border rounded-md mt-2 w-full h-10"
          />
        </div>
        <div className="mb-5">
          <div>
            <label htmlFor="email">
              Email <span className="redStar ">*</span>
            </label>
          </div>
          <input
            type="text"
            id="email"
            className="outline-0 border rounded-md mt-2 w-full h-10"
          />
        </div>
        </div>
       
       <div className="phoneSubjectFlex">
       <div className="mb-5">
          <div>
            <label htmlFor="phone">
              Phone <span className="redStar ">*</span>
            </label>
          </div>
          <input
            type="text"
            id="phone"
            className="outline-0 border rounded-md mt-2 w-full h-10"
          />
        </div>
        <div className="mb-5">
          <div>
            <label htmlFor="subject">
              Subject <span className="redStar ">*</span>
            </label>
          </div>
          <select
            id="subject"
            className="outline-0 border rounded-md mt-2 w-full h-10"
          >
            <option value="selectSubject">Select Subject</option>
            <option value="junior">Junior KG</option>
            <option value="senior">Senior KG</option>
          </select>
        </div>
       </div>
       
        <div className="mb-5">
          <div>
            <label htmlFor="comment">
              Comment <span className="redStar ">*</span>
            </label>
          </div>
          <textarea
            name=""
            id="comment"
            className="outline-0 border rounded-md mt-2 w-full h-30"
          ></textarea>
        </div>

        <div className="flex justify-start items-center gap-2 mb-5">
          <input type="checkbox" id="check" />
          <label htmlFor="check">Save Data for Next Comment</label>
        </div>

        <button className="sendBtn rounded-full text-white p-2 px-5 text-sm">
          Send Now
        </button>
      </form>

      {/* contact form finished */}

      {/* map started */}

      <div className="contactMapDiv">
        <iframe
          className="contactMap  border rounded-lg m-auto grayscale"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          
        />
      </div>
</div>


      {/* map finished */}
    </div>
  );
};

export default ContactForm;
