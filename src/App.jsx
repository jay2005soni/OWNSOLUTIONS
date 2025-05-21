import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // Import star icons for rating
import { BrowserRouter as Router, Routes } from 'react-router-dom';



// Images - make sure these paths are correct relative to your file
// import HEADER from './header';
import banner from './assets/Banner.png';
import img1 from './assets/img1.png';
import checkimg2 from './assets/checkimg2.png';
import photogroup from './assets/photogroup.png';
import googleLogo from './assets/googleLogo.png' // imported instead of relative path


import { BrowserRouter,  Route } from 'react-router-dom'; // ✅ This is required
import Header from './header';

import About from './components/AboutPage';

import 
{
  createBrowserRouter,
  
 

}
from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <div> Hello World </div>},
]);

// Sample reviews data
const reviews = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Jane Doe',
    date: 'March 2025',
    rating: 5,
    text: 'Great service and support. Highly recommended!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Smith',
    date: 'April 2025',
    rating: 4,
    text: 'Very helpful and professional team.',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Alice Johnson',
    date: 'May 2025',
    rating: 5,
    text: 'Found my dream job with their help!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Bob Williams',
    date: 'April 2025',
    rating: 4,
    text: 'Good academic guidance and career advice.',
  },
];

function App() {
  // const [showAbout, setShowAbout] = useState(false);
  return (


   <Router>
     {/* <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="src/assets/logo.png" alt="OWN Web Solutions Logo" className="w-32 h-12 object-contain" />
        </div>
 
 
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-800">
          <a href="#" className="text-green-500">Home</a>
       
<a href="/#" className="hover:text-green-500">About Us</a>
          <a href="#" className="hover:text-green-500">Services</a>
          
          <a href="#" className="hover:text-green-500">Referral</a>
          <a href="#" className="hover:text-green-500">Contact Us</a>
        </nav>

        <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 text-sm font-semibold">
          Get In Touch
        </button>
      </header> */}

 <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referral" element={<Referral />} /> */}
      </Routes>
    </BrowserRouter>
    <div className="min-h-screen bg-white font-sans">

      
      {/* Banner */}
      <div className="flex justify-center items-center mt-8 px-4">
        <img src={banner} alt="Banner" className="rounded-lg w-full object-cover" />
      </div>

      {/* Headline */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your One Stop <span className="text-green-500">Destination</span> For Success
        </h2>
      </div>

      {/* Job Placement Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-32 gap-12 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <img src={img1} alt="Job Placement Illustration" className="w-full h-auto" />
        </div>

        <div className="text-center md:text-left max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Your Dream Job Placement</h1>
          <p className="text-gray-900 text-lg leading-relaxed">
            We Help You Discover Opportunities, Unlock Potential, <br />
            And Land The Job You’ve Always Dreamed Of.
          </p>
          <button className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500">Explore Now</button>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Partner In Academic Excellence
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Empowering You With The Tools, Guidance, And <br />
            Support To Achieve Your Educational Goals.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500">Learn More</button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src={checkimg2} alt="Academic Tools" className="w-64 md:w-80 h-auto object-contain" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={photogroup} alt="Thumbs Up" className="w-64 md:w-80 h-auto object-contain" />
        </div>

        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us!</h2>
          <h3 className="text-xl font-semibold text-green-500">
            Partner With Pride Solutions Today And Take The First Step Towards A Brighter Future
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Pride Solutions, we empower individuals to reach their full potential with tailored job and academic solutions.
          </p>
          <button className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500">Join Now</button>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          OUR ACHIEVEMENTS
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { end: 500, label: "Assignment Done" },
            { end: 500, label: "Topics Covered" },
            { end: 100, label: "Skilled Professionals" },
            { end: 144, label: "Jobs Landed" }
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-black">
                <CountUp end={item.end} duration={2} enableScrollSpy />+
              </h3>
              <p className="mt-2 text-gray-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-12 bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            You Will Grow, You Will Succeed. <br />We Promise That
          </h2>
          <p className="text-gray-600">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt.
          </p>

          <div className="space-y-4 text-gray-800 text-sm">
            <div className="flex items-center space-x-3">
              <span>📞</span>
              <p><strong>Call</strong><br />+9999999</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>📧</span>
              <p><strong>Email</strong><br />abc@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>⏰</span>
              <p><strong>Hours</strong><br />Mon - Fri: 10AM - 10PM</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>📍</span>
              <p><strong>Location</strong><br />Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Contact Info</h3>
          <p className="text-sm text-gray-600 mb-6">Nibh dis faucibus proin lacus tristique</p>

          <form action="https://docs.google.com/forms/d/e/1FAIpQLSfYCV6hVrkJz_7HfwGne9Tj87qtgbVS_o0GV-BZszud8cdeSw/viewform?usp=header" method="POST" target="_blank">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input name="entry.1111111111" type="text" placeholder="Your name" className="p-2 border border-gray-300 rounded" required />
              <input name="entry.2222222222" type="text" placeholder="Your last name" className="p-2 border border-gray-300 rounded" />
            </div>
            <input name="entry.3333333333" type="email" placeholder="Your E-mail" className="p-2 w-full border border-gray-300 rounded mb-4" required />
            <textarea name="entry.4444444444" placeholder="Your message..." rows="4" className="p-2 w-full border border-gray-300 rounded mb-4" required></textarea>
            <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
              Send Message
            </button>
          </form>
        </div>
      </section>

 <section className="max-w-7xl mx-auto px-6 md:px-20 mt-12">
    <h2 className="text-center text-3xl font-bold mb-10 text-gray-900">Why Choose Us!</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {["Integrity", "Expertise", "Reliability", "Innovation"].map((title, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500 font-bold text-xl">
            {title.charAt(0)}
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
      ))}
    </div>
  </section>

  {/* Reviews Section */}
  <section className="bg-white py-16 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Reviews</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reviews.map((review, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
          <div className="flex space-x-1 text-yellow-400">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-gray-700">{review.text}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Footer */}
 <footer class="bg-green-50 text-gray-800 px-6 py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* <!-- Logo + Description --> */}
    <div>
      <div class="flex items-center gap-2 mb-4">
        <img src="src/assets/logo.png" alt="Logo" class="w-25 h-20" />
       
      </div>
      <p class="text-sm">
        Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
      </p>
    </div>

    {/* <!-- Company Links --> */}
    <div>
      <h3 class="font-bold mb-3">Company</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Reffral</a></li>
        <li><a href="#">Contact Us</a></li>
        {/* <li><a href="#">For Employers</a></li> */}
      </ul>
    </div>

    {/* <!-- Job Categories --> */}
    {/* <div>
      <h3 class="font-bold mb-3">Job Categories</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#">Telecommunications</a></li>
        <li><a href="#">Hotels & Tourism</a></li>
        <li><a href="#">Construction</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Financial Services</a></li>
      </ul>
    </div> */}
<span></span>
    {/* <!-- Newsletter --> */}
    <div>
      <h3 class="font-bold mb-3">Newsletter</h3>
      <p class="text-sm mb-3">Eu nunc pretium vitae platea. Non netus elementum vulputate</p>
      <input type="email" placeholder="Email Address" class="w-full px-3 py-2 border rounded mb-3 text-sm" />
      <button class="bg-green-500 text-white px-4 py-2 rounded w-full font-semibold text-sm">
        Subscribe now
      </button>
    </div>
  </div>

  {/* <!-- Bottom Bar --> */}
  <div class="mt-10 border-t pt-4 text-sm flex flex-col md:flex-row items-center justify-between text-gray-500">
    <p>© Copyright Jaykishan Soni</p>
    <div class="flex gap-4 mt-2 md:mt-0">
      <a href="#" class="hover:text-gray-800">Privacy Policy</a>
      <a href="#" class="hover:text-gray-800">Terms & Conditions</a>
    </div>
  </div>
</footer>


<Routes>
          
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Add other routes if needed */}
        </Routes>
      </div>
    </Router>
   

);
}
export default App ;
