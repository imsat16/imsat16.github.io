import React, {useState} from 'react';
import {HAND} from '../assets/img/IndexImg';
import FooterComp from '../Component/FooterComp';

function Contact () {
  const [data, setData] = useState ({
    nama: '',
    email: '',
    phone: '',
    pesan: '',
  });

  const {nama, email, phone, pesan} = data;

  const handleChange = e => {
    setData ({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault ();

    try {
      const response = await fetch (
        'https://v1.nocodeapi.com/imsat/google_sheets/IGAkFzRkzHRmFbji?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify ([
            [nama, email, phone, pesan, new Date ().toLocaleString ()],
          ]),
        }
      );
      await response.json ();
      setData ({...data, nama: '', email: '', phone: '', pesan: ''});
    } catch (err) {
      console.log (err);
    }
  };

  return (
    <div>
      <section className="grid md:grid-cols-2 p-10 font-semibold">
        <div className=" flex justify-center items-center flex-col text-white ">
          <h2>Contact</h2>
          <img alt="" src={HAND} className=" w-80 items-center" />
        </div>
        <form className="" name="imsat-contact-form" onSubmit={handleSubmit}>
          <div className="grid gap-3 ">
            <div className="flex flex-col">
              <p className="text-white ">Nama</p>
              <input
                className="p-4 bg-white rounded-md"
                typeof="text"
                placeholder="full name"
                name="nama"
                value={nama}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white ">Email</p>
              <input
                className="p-4 bg-white rounded-md"
                typeof="email"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white ">Phone number</p>
              <input
                className="p-4 bg-white rounded-md"
                typeof="number"
                placeholder="+62 1293 1293 3123"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white ">Message</p>
              <textarea
                className="p-4 h-44 bg-white rounded-md"
                typeof="text"
                placeholder="message"
                name="pesan"
                value={pesan}
                onChange={handleChange}
              />
            </div>
            <div className="text-white">
              <div className=" float-right">
                <button
                  typeof="submit"
                  className=" px-4 py-2 font-semibold rounded-md border border-indigo-600 hover:bg-indigo-600 shadow-md flex gap-2 items-center"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <FooterComp />
    </div>
  );
}

export default Contact;
