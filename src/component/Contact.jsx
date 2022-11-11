import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const [load, setLoad] = useState('Send Feedback');
    const [errors, setErrors] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    })


    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length >= 0 && (valid = false));
        return valid;
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let error = '';

        switch (name) {
            case 'from_name':
                error =
                    value.length < 3
                        ? 'Full Name must be at least 3 characters long!'
                        : '';
                break;
            case 'reply_to':
                error =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                error =
                    value.message < 4
                        ? 'Feedback must contain atleast 4 characters'
                        : '';
                break;
            default:
                break;
        }

        setErrors({ ...errors, [name]: error });
    }

    const sendEmail = (e) => {

        e.preventDefault();

        console.log(errors.from_name.length)
        if (!validateForm(errors)) {
            return
        }
       

        console.log('called')
        setLoad('sending ...')

        emailjs.sendForm('service_opkntuq', 'template_jebrj4a', form.current, 'BHJeDdMA85GhUdWhF')
            .then((result) => {
                alert('Feedback form submited successfully')
                setLoad('Send Feedback')
                e.target.reset()
            }, (error) => {
                alert('server error please try again')
                setLoad('Send Feedback')
                e.target.reset()
            });


    };
    return (
        <div className=''>
            <div className='bg-slate-700 text-white mx-3 rounded-lg p-3'>

                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex flex-col'>
                        <div className='text-center text-3xl mb-3 underline'>
                            Contact us
                        </div>
                        <div className='flex flex-col items-center mb-3'>

                            <input type="text" name="from_name"
                                className='bg-slate-600 p-2  w-3/4 rounded-md placeholder:text-center outli'
                                placeholder='Enter Your Name'
                                onChange={handleChange}

                            />
                            {errors.from_name.length > 0 &&
                                <span className='bg-red-400 mt-1 px-3 text-center rounded-3xl'>{errors.from_name}</span>}

                        </div>

                        <div className='flex flex-col items-center mb-3'>

                            <input type="email" name="reply_to"
                                className='bg-slate-600 p-2 w-3/4 rounded-md  placeholder:text-center'
                                placeholder='Enter Your Email'
                                onChange={handleChange}
                            />
                            {errors.reply_to.length > 0 &&
                                <span className='bg-red-400 mt-1 px-3 text-center rounded-3xl'>{errors.reply_to}</span>}
                        </div>

                        <div className='flex flex-col items-center mb-3'>

                            <textarea name="message"
                                className='bg-slate-600 p-2 w-3/4 h-60  rounded-md  placeholder:text-center'
                                placeholder='Give your feedback'
                                onChange={handleChange}
                            />
                            {errors.message.length > 0 &&
                                <span className='bg-red-400 mt-1 px-3 text-center rounded-3xl'>{errors.message}</span>}
                        </div>
                    </div>


                    <div className='flex justify-center '>

                        <button type='submit' className='bg-green-800 p-3 rounded-2xl hover:bg-green-900' >
                            {load}
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Contact
