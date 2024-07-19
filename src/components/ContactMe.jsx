import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_tkoje8b', // Replace with your EmailJS service ID
      'template_jdy4j46', // Replace with your EmailJS template ID
      formData,
      '-6Nq44cWFEQpfISzd' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send message');
    });
  };

  return (
    <div className="mt-8 border-b border-neutral-900 pb-4">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-2xl text-xl text-white title-font mb-4">
              Contact Me
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-black bg-indigo-200 border-0 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
