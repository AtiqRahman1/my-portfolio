import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_skaduzx', 'template_1ph6pjk', form.current, 'AYRNFPN6pyctRuy_2')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Get In Touch!</h1>
                        <p class="py-6">If you have any inquiry, please feel free to drop me a line. I will get back to you as soon as I can. That's a promise!</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="Your Email" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea class="textarea textarea-bordered" name="message" placeholder="Your Message"></textarea>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">
                                        <input type="submit" value="Send" />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;