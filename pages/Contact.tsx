import ContactForm from '../components/contact/ContactForm';
import React from 'react';
// import ContactForm from '.';

const Contact = () => {
  return (
    <section className="bg-white dark:bg-transparent box-border md:py-28">
      <div className="py-8 md:mx-48 mx-auto max-w-screen-md justify-center">
        <h2 className="mb-8 hover:border-2 border-y-cyan-400 text-center text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {/* Contact Me */}
        </h2>
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
