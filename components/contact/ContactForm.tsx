import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import {sendContactForm} from '../lib/Api'

const initValue = { name: '', email: '', subject: '', message: '' };

const ContactForm = () => {
  const [state, setState] = useState({ values: initValue, isLoading: false });
  const { values, isLoading } = state;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
    }));
  };

  const onSubmit = async (e:any) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setState({ values: initValue, isLoading: false });
    await sendContactForm(values);
  };

  const isFormValid = values.name && values.email && values.subject && values.message;

  return (
    <section className=" dark:bg-transparent box-border  text-red-800">
      <div className="w-full px-4 md:px-20 md:w-[57vw] mx-auto xl:mx-36 bg-emerald-transparent  ">
        <h2 className="mb-8 w-52 text-center text-3xl tracking-tight font-extrabold  text-red-800 visible dark:text-blue-200 border-2 border-y-cyan-400">
          Contact Me
        </h2>
        <form onSubmit={onSubmit} className="space-y-5 p-6 md:py-11 border-2 border-y-cyan-400">
          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300  ">Your Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="shadow-sm bg-transparent border-2  text-red-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold dark:text-gray-300">Your Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="shadow-sm bg-transparent border-2 border-y-cyan-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-y-cyan-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-400">Your Message</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg shadow-sm border-2 border-y-cyan-400 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="py-1 px-2 text-sm text-center font-serif cursor-pointer text-white rounded-lg hover:bg-purple-600 text flex items-center justify-center"
          >
            {isLoading ? <AiOutlineLoading className="animate-spin" /> : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
