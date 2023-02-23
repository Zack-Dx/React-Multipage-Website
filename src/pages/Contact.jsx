import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name:${data.fullname}, Phone:${data.phone} , Email:${data.email} Message:${data.message}`
    );
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your name"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your phone"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="name@example.com"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  class="form-control"
                  id="floatingTextarea2"
                  required
                ></textarea>
                <label for="floatingTextarea2">Message</label>
              </div>
              <div className="my-4">
                <button type="submit" class="btn btn-outline-primary ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
