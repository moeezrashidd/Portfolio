import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            className="contact w-full max-w-3xl mx-auto p-4 md:p-8 bg-[#262629] text-[#E7E7E7] rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm font-semibold">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="px-4 py-2 rounded-md bg-[#1E1E20] text-[#E7E7E7] border border-gray-600 focus:outline-none focus:border-indigo-500"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-semibold">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="px-4 py-2 rounded-md bg-[#1E1E20] text-[#E7E7E7] border border-gray-600 focus:outline-none focus:border-indigo-500"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1 text-sm font-semibold">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="px-4 py-2 rounded-md bg-[#1E1E20] text-[#E7E7E7] border border-gray-600 focus:outline-none focus:border-indigo-500 resize-none"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold transition-all duration-300 hover:bg-indigo-700"
                >
                    Send
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Contact;
