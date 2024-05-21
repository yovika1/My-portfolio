import React from 'react'

const Contact = () => {
  return (
<section className="bg-white dark:bg-transparent box-border md:py-32 ">
  <div className="py-8  md:h-[32vw] px-28 md:w-[42vw] mx-auto max-w-screen-md justify-center  border-2 border-y-cyan-400">
      <h2 className="mb-8 hover:border-2 border-y-cyan-400 w-44 text-center text-3xl tracking-tight font-extrabold  text-gray-900 dark:text-white">Contact Me</h2>
      <form action="#" className="space-y-5 ">
          <div className='flex gap-20 '>
             <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="email" id="email" className="shadow-sm bg-transparent border-2 hover: border-y-cyan-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
              </div> 
             <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email" id="email" className="shadow-sm bg-transparent border-2 border-y-cyan-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5  dark:border-gray-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
              </div> 
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-[29vw] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-y-cyan-400 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" className="block p-2.5 w-[29vw] text-sm text-gray-900 bg-transparent rounded-lg shadow-sm border-2 border-y-cyan-400focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:border-2 border-y-cyan-400 bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section> 
  )
}

export default Contact