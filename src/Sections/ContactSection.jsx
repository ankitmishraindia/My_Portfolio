import homeimage from '../assets/contact_image.jpg'
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function ContactSection(){



    const [formData,setFormData]=useState({
        fullName:'',
        email:'',
        message:''
    });

    function handleChange(e){
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        
    }

    //handle submit form
    async function onMail(event){
        event.preventDefault();
        console.log(formData)
        if(!formData.fullName || !formData.email || !formData.message){
            toast.error('Please fill all the fields')
            return;
        }
        //validate fullName
        if(formData.fullName.length<5){
            toast.error("Name must be atleast 5 character long")
            return;
        }
        //validate email
        if(!formData.email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            toast.error('Please enter a valid email Id')
            return;
        }
        //validate message
        if(formData.message.length<20){
            toast.error('Please write atleast 20 character')
            return;
        }
        

        try {
            const response = await fetch('https://formspree.io/f/xrgngvqn', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              toast.success('Form submitted successfully!');
              // Optionally, reset the form
              setFormData({
                fullName: '',
                email: '',
                message: '',
              });
            } else {
              toast.error('Error submitting form');
            }
          } catch (error) {
            toast.error('Error submitting form', error);
          }
      }

      //smooth scrolling
        const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        };

    return(
        <div id='contact' className=" w-full flex items-center flex-col gap-4 lg:gap-14 text-center px-4 py-8 relative bg-cover " style={{backgroundImage:`url(${homeimage})`}}>
                   <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">CONTACT</h2>
                        <div className="w-[100px] bg-yellow-500 h-2 rounded-xl mt-3 m-auto"></div>
                        <p className='lg:text-xl mt-3 m-auto w-[80%]'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                   </div>
                   <form onSubmit={onMail} className=' flex flex-col gap-3 md:ga w-[80%] md:w-[70%] lg:w-[50%] bg-white rounded-lg p-8'>
                        <label className='text-left font-semibold' htmlFor="fullName">Name:</label>
                        <input 
                        required
                        className='w-full bg-gray-300 rounded-md py-2 px-3' 
                        type="text" 
                        placeholder='Enter your Name ..'
                        name='fullName'
                        id='fullName'
                        value={formData.fullName}
                        onChange={handleChange}/>

                        <label className='text-left font-semibold' htmlFor="email">Email:</label>
                        <input 
                        required
                        className='w-full bg-gray-300 rounded-md py-2 px-3' 
                        type="email" 
                        placeholder='Enter your email Id ..'
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}/>

                        <label className='text-left font-semibold' htmlFor="message">Message:</label>
                        <textarea 
                        required
                        className='w-full bg-gray-300 rounded-md py-2 px-3'
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10"
                        placeholder='Enter your message here ..'
                        value={formData.message}
                        onChange={handleChange}>
                
                        </textarea>

                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Send</button>
                   </form>
                   
                   <a onClick={()=>scrollToSection('home')} className='absolute bottom-2 right-5 cursor-pointer bg-yellow-500 text-white'>
                      <MdOutlineKeyboardDoubleArrowUp size={44}/>
                   </a>
        </div>
    )
}

export default ContactSection;