import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import SparklesText from './components/ui/sparkles-text';
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contact() {
    const notify = () => toast("Message is Sent");
    const notify1 = () => toast("Unable to Sent");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState('');
    function sendEmail(e: any): any {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .sendForm(
                'service_jsk39i5',
                'template_jp000wt',
                e.target,
                't0hKekkSkVM8UPWan'
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    notify()
                    setTimeout(() => {
                        setStateMessage('');
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    notify1();
                    console.error('EmailJS Error:', error);
                    setTimeout(() => {
                        setStateMessage('');
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        e.target.reset();
    };
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <SparklesText className='text-5xl mt-6 font-mono' text="Contact Me" />

            <div className='mt-10 w-[60%] border rounded shadow-xl p-6 mx-auto'>

                <form className="font-mono" onSubmit={sendEmail}>
                    <div>
                        <Label>Name</Label>
                        <Input className='mb-5 w-full' type="text" name="user_name" />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input className='mb-5 w-full' type="email" name="user_email" />
                    </div>
                    <div>
                        <Label>Message</Label>
                        <Textarea className='mb-5 w-full' name="message" />
                    </div>
                    <div className='flex justify-center'>
                        <Button className="" type="submit" value="Send" disabled={isSubmitting}>Send</Button>
                    </div>
                    <ToastContainer />
                    {/* {stateMessage && <p className='text-center'>{stateMessage}</p>} */}
                </form>
            </div>
        </div>


    );
};
