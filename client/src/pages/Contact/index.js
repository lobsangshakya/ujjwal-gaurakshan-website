// client/src/pages/Contact.jsx

import React from 'react';
import Navbar from '../../components/Navbar';
import './index.css'; // global or contact-specific styles

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="contact-section px-6 md:px-20 py-16 bg-green-50 rounded-t-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-10">
                    संपर्क करें
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* 🧑 Team Contacts */}
                    <div className="contact-info text-gray-800 space-y-5">
                        <p className="text-lg">
                            <strong>संचालक :</strong> Akhilesh Arya<br />
                            📞 +91 76669 74223
                        </p>
                        <p className="text-lg">
                            <strong>सचिव (Secretary):</strong> Amit K. Bhalgat<br />
                            📞 +91 95886 00787
                        </p>
                        <p className="text-lg">
                            <strong>कोषाध्यक्ष (Treasurer):</strong> Mahendra Jain<br />
                            📞 +91 94228 33980
                        </p>
                    </div>

                    {/* 📍 Map & Address */}
                    <div className="contact-info text-gray-800 space-y-5">
                        <p className="text-lg">
                            📍 <strong>पता:</strong><br />
                            Ujjwal Gaurakshan Trust Mujbi,<br />
                            NH‑6, At‑Ujjwal Gaurakshan Sanstha,<br />
                            Parwati Nagar, Po Bela, Tah Mujbi,<br />
                            Maharashtra 441906
                        </p>

                        <iframe
                            title="Ujjwal Gaurakshan Trust Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.869153163499!2d79.60303870000003!3d21.157604899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b39ce34120663%3A0xe8c09fcd67925b78!2sUjjwal%20Gaurakshan%20Trust%20mujbi!5e0!3m2!1sen!2sin!4v1753283571889!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg shadow-md border-0"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
