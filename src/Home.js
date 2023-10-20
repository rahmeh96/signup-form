import React, { useState } from 'react'
import image from './assets/images/illustration-sign-up-desktop.svg';
import FaCheckCircle from './assets/images/icon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function Home() {

  const [openModal, setOpenModal]= useState(false);

  const message="you entered an invalid email";
  const schema = yup.object().shape({
    email: yup.string().email().required(message)
  })
 const {register, handleSubmit, formState: {errors}}= useForm(
  {
    resolver: yupResolver(schema)
  })
    const onSubmit= (data)=>{
      console.log(data);
    }
    const handleClick =()=>{setOpenModal(true);
                      document.getElementById('pop').replace('grid-container', 'pop')    }
   const handleClick2= ()=> {setOpenModal(false);
      document.getElementById("pop").classList.replace('open', 'grid-container');
    }
  
    
  return (<>
    <article className='grid-container'>
    <div><h1> Stay Updated!</h1>
    <p> join 60,000+ product managers receiving monthly updates on: </p>
    <ul>
      <li> <FaCheckCircle/> discovery and building what matters</li><br/>
      
      <li> <FaCheckCircle/>   Measuring to ensure updates are a success</li><br/>
      <li> <FaCheckCircle/> and much more!</li>
    </ul>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Email adress</label>
      <span> {errors.email?.message}</span>
      <input type='text' placeholder='email@company.com' {...register("email")}></input> <br/>
     <button className='active' onClick={handleClick1} > "Subscribe to our newsletter!
     </button>
     

    </form>
    </div>
    <div className='image-div'>
      <img src={image} alt='illustration'/>
    </div>
  </article>
  {openModal &&  
    <div className='modal-background' >
    <div className="modal-container">
            <div className='icon'> <FaCheckCircle/></div>
        <h1>
            Thank you for subscribing!
        </h1><br/>
        <p> a conirmation email has been sent to email@gmail.com, Please open it and click the button inside to confirm your subscription </p><br/>
     <button className="titleCloseBtn" onClick={handleClick2}> Dismiss message!</button>
        </div>
        </div>}
  
       
        
  </>
  )
}
