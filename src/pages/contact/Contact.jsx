import React from 'react'

const Contact = () => {
  return (
    <div>
    <div class="contact py-28 grid lg:grid-cols-2 gap-x-24 gap-y-10 lg:gap-y-16 container mx-auto px-4">
   
      <div class="area_header mb-0 order-1">
        <h2 class="text-4xl font-bold">
          Have a question? Let's get in touch with us.
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Fill up the form and our team will get back to you within 24 hrs.
        </p>
      </div>

 
      <form class="contact_form flex flex-col gap-4 order-2 lg:order-3">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          class="form_input bg-gray-200/60 p-4 rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          class="form_input bg-gray-200/60 p-4 rounded-lg"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          class="form_input bg-gray-200/60 p-4 rounded-lg"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Type Message"
          class="form_input bg-gray-200/60 p-4 rounded-lg"
          rows="5"
        ></textarea>
        <button class="btn mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg self-start">
          Submit
        </button>
      </form>

    
      <div class="contact_info grid md:grid-cols-2 gap-10 md:gap-16 order-3 lg:order-2">
        <div class="card">
          <h2 class="card_title text-xl font-bold mb-4">Location</h2>
          <p class="card_text text-gray-600">
            UZB, Tashkent, 
          </p>
        </div>
        <div class="card">
          <h2 class="card_title text-xl font-bold mb-4">Contact Us</h2>
          <a href="#" class="card_text text-gray-600 block">+998 88 908 08 10</a>
          <a href="#" class="card_text text-gray-600 block">team@gmail.com</a>
        </div>
      </div>

      
      <div class="contact_map w-full order-4">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=DLF%20Cybercity,%20Bhubaneswar,%20India,%20&52050&t=&z=11&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          class="w-full aspect-video"
        ></iframe>
      </div>
    </div>
    </div>
  )
}

export default Contact