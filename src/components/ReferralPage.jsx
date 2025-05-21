import { Star, Trophy } from 'lucide-react';


function ReferralPage() {

     <section className="bg-gradient-to-r from-green-400 to-teal-400 p-10 md:p-16 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
      {/* Left content */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
          Unlock More Space
        </h2>
        <p className="text-xl md:text-2xl text-white mb-6">
          with Shooty's Referral Program!
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition">
          Invite Friends
        </button>

        {/* Rating */}
        <div className="flex items-center gap-2 bg-white text-orange-500 mt-6 w-fit px-4 py-2 rounded-full shadow">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" strokeWidth={0} size={18} />
            ))}
          </div>
          <span className="text-black font-semibold ml-2">4.9</span>
          <Trophy className="text-yellow-500 ml-2" size={20} />
        </div>
      </div>

      {/* Right image or SVG */}
      <div className="flex-1 flex justify-center">
        <img
          src="/referral-illustration.png" // Replace with your actual image path
          alt="Referral Illustration"
          className="max-h-[300px] md:max-h-[350px] object-contain"
        />
      </div>
    </section>
}
export default ReferralPage ;