import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../../assets/HomeImg.jpg';
import Navbar from '../../components/Navbar';
import './index.css'; // ✅ Import the CSS

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home-container">
        {/* Trust Name */}
        <h2 className="trust-title animate-fade-in-up text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-10 text-amber-700 drop-shadow-lg tracking-wide">
          उज्जवल गौरक्षण ट्रस्ट, मुजबी
        </h2>

        {/* Image */}
        <div className="image-wrapper flex justify-center mt-6">
          <img
            src={HomeImg}
            alt="Gaurakshan"
            className="rounded-3xl shadow-lg max-w-[180%] sm:max-w-5xl"
          />
        </div>

        <section className="what-we-do-section mt-12 px-6 md:px-20">
          <div className="what-we-do-box bg-yellow-50 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-6">
              हमारे प्रमुख कार्य
            </h2>

            <div className="activities-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '🩺 बीमार और बूढ़ी गायों की सेवा',
                  desc: 'हम बेसहारा, बूढ़ी या बीमार गायों का उपचार, ऑपरेशन और देखभाल पूरी निष्ठा से करते हैं।',
                },
                {
                  title: '💰 दूध उत्पादन नहीं, सेवा ही उद्देश्य',
                  desc: 'हमारी गायें दूध नहीं देतीं — हमारी सेवा बिना किसी लाभ की भावना से होती है।',
                },
                {
                  title: '🌿 रोजाना चारे की व्यवस्था',
                  desc: 'गौमाताओं के लिए हर दिन ₹2500/- का हरा चारा, भूसा और खल उपलब्ध कराया जाता है।',
                },
                {
                  title: '⚱️ गोबर की व्यवस्था अंतिम संस्कार हेतु',
                  desc: 'धार्मिक संस्कारों के लिए बहुत ही न्यूनतम मूल्य पर गोबर उपलब्ध कराया जाता है।',
                },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="activity-item bg-white rounded-2xl shadow-md p-5 hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-700">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Donation Section */}
        <section
          id="donate-options"
          className="donate-section mt-16 text-center px-6"
        >
          <h1 className="text-3xl font-bold text-orange-700">🙏 Donate for Gaurakshan</h1>
          <p className="text-gray-700 mt-2 text-lg">
            Your small contribution can protect a sacred life.
          </p>

          <Link to="/donate">
            <button className="donate-button mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-md text-lg transition-all duration-300">
              Donate Now
            </button>
          </Link>

          <h2 className="donation-amount-title text-xl mt-8 font-semibold text-gray-800">
            Choose Donation Amount
          </h2>

          <div className="donation-options mt-4 flex flex-wrap justify-center gap-4">
            {['₹101', '₹501', '₹1100', '₹2100'].map((amount, idx) => (
              <label key={idx} className="donation-label">
                <input type="radio" name="donation" className="hidden peer" />
                <div className="donation-box bg-white border border-green-500 rounded-xl px-6 py-3 cursor-pointer text-green-700 peer-checked:bg-green-100 hover:bg-green-50 transition">
                  {amount}
                </div>
              </label>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
