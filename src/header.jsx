{/* Header */}


    function header (){
    return(
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="src/assets/logo.png" alt="OWN Web Solutions Logo" className="w-32 h-12 object-contain" />
        </div>
 
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-800">
          <a href="#" className="text-green-500">Home</a>
         <li><link to = {'/about'}>About</link></li>
         
          <a href="#" className="hover:text-green-500">Services</a>
          <a href="#" className="hover:text-green-500">Pricing</a>
          <a href="#" className="hover:text-green-500">Referral</a>
          <a href="#" className="hover:text-green-500">Contact Us</a>
        </nav>

        <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 text-sm font-semibold">
          Get In Touch
        </button>
      </header>
    )}

export default header ;