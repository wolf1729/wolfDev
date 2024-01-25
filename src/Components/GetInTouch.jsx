import { useRef, useState } from 'react'
import '../Styles/GetInTouchStyle.css'
import emailjs from '@emailjs/browser'

function GetInTouchSection() {

    const send = async(formData) => {
        formData.preventDefault()

        console.log(name)
        console.log(email)
        console.log(message)

        try {
            emailjs.sendForm('service_biw86eg', 'contact_form', form.current, 'rY1einib_LJxSHPBo')
            console.log('sent')
        } 
        catch (error) {
            console.log(`error occured ${error}`)
        }
    }

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[message, setMessage] = useState()
    const form = useRef()
  
    return (
    <div className='container9'>
        <p className='GITCont'>GET IN TOUCH</p>
       <form onSubmit={send} ref={form}>
            <div className='nameCont'>
                <label>NAME</label>
                <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} className='nameInput'/>
            </div>
            <div className='emailCont'>
                <label>EMAIL</label>
                <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className='emailInput'/>
            </div>
            <div className='messageCont'>
                <label>MESSAGE</label>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' className='messageInput' rows={10} cols={61}></textarea>
            </div>
            <button type='submit' className='button'>SEND</button>
       </form>
    </div>
  );
}

export default GetInTouchSection