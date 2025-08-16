import {useState} from "react";
function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!email || !message) {
            alert("Please fill in both fields.");
            return;
        }
        const subject = encodeURIComponent("Portfolio Contact");
        const body = encodeURIComponent(`From: ${email}\n\nMessage: ${message}`);
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=akshanskhare@email.com&su=${subject}&body=${body}`,
            "_blank"
        );
    };

    return (
        <div id="contact" className="w-full min-h-auto flex flex-col items-start bg-[#242424] p-10 gap-5 mb-10 md:w-[90%] lg:w-[65%] mt-10">
            <h1 className="text-3xl font-bold text-[#f49108] md:w-[65%]">Connect With Me</h1>

            {/* contact form */}
            <div className="flex flex-col items-center gap-4 w-full p-4 md:p-8">
                {/* Email field */}
                <div className="flex mb-4 w-full max-w-md gap-5">
                    <div>
                        <img src="png/email.png" alt="email png" />
                    </div>
                    <input
                        className="shadow appearance-none border border-[#f49108] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* Message Field */}
                <div className="flex mb-4 w-full max-w-md gap-5">
                    <div>
                        <img src="png/message.png" alt="message png" />
                    </div>
                    <input
                        className="shadow appearance-none border border-[#f49108] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        row='4'
                        placeholder="Your Message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                {/* Submit Button */}
                <button
                    onClick={handleSend}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 rounded p-2 text-lg font-bold text-white hover:cursor-pointer active:scale-95 transition-transform duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                    Send Message
                </button>
            </div>
        </div>
    );
}
export default Contact;
