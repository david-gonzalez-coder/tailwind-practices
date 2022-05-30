import { BsInstagram } from 'react-icons/bs'
import { FaDribbble } from 'react-icons/fa'
import { SiVsco } from 'react-icons/si'
import { ImCodepen } from 'react-icons/im'
import { useState } from 'react'
import profile from '../assets/profile.jpg'

const Title = ({ className, ...rest }) => <h2 className={'text-5xl font-bold ' + className} {...rest} />
const Input = ({ className, ...rest }) => <input className={'w-full outline-teal-500 rounded-lg border p-3 ' + className} {...rest}/>
const Btn1 = ({ className, ...rest }) => <button className={'btn btn-lg bg-teal-500 hover:bg-teal-400 hover:transition-colors transition-colors text-white font-medium' + className} {...rest} />
const Btn2 = ({ className, ...rest }) => <button className={"btn btn-ghost font-medium border-slate-500 text-slate-500" + className} {...rest} />

const Profile = () => {
  const [steps, setSteps] = useState('one')
  const links = [
    { link: 'https://www.instagram.com/', icon: <BsInstagram /> },
    { link: 'https://dribbble.com/', icon: <FaDribbble /> },
    { link: 'https://www.vsco.co/', icon: <SiVsco /> },
    { link: 'https://codepen.io/', icon: <ImCodepen /> },
  ]
  const linkStyle = 'text-2xl hover:ring-1 hover:text-teal-500 transition-all ring-teal-500 rounded-full p-2'
  const textareaStyle = "w-full outline-teal-500 rounded-lg border p-3  resize-none h-28"

  return (
    <div className='flex flex-wrap w-h-screen'>
      <div
        className='hidden bg-center bg-no-repeat bg-cover grow md:block'
        style={{backgroundImage: `url('${profile}')`}}
      />

      <div className='w-full md:w-[500px] 2xl:w-[600px] flex flex-center p-8  '>
        <div className='flex flex-col flex-wrap gap-6 text-center flex-center text-slate-700 bg-'>
          {steps === 'one' && (
            <>
              <Title>Name of user</Title>
              <p>
                Description. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quo dicta reiciendis iste facere quam molestias cum eaque
                a? Aliquam quae dolorem explicabo cupiditate hic quidem quos
                provident eveniet quia tenetur.
              </p>
              <Btn1 onClick={() => setSteps('two')}>Get in touch</Btn1>
              <nav className='flex justify-center w-full gap-4'>
                {links.map((e) => <a href={e.link} className={linkStyle}>{e.icon}</a>)}
              </nav>
            </>
          )}
          {steps === 'two' && (
            <>
              <Btn2 onClick={() => setSteps('one')}>Go back</Btn2>
              <Title>Get in touch</Title>
              <p>Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dicta</p>
              <form
                className='flex flex-col items-center w-full gap-4'
                onSubmit={e => {e.preventDefault(); setSteps('three')}}
              >
                <Input type='text' required placeholder='Name'/>
                <Input type='email' required placeholder='Email'/>
                <textarea className={textareaStyle} placeholder='message' />
                <Btn1 onClick={() => setSteps('two')}>Send message</Btn1>
              </form>
            </>
          )}
          {steps === 'three' && 
            <>
              <Title>Thank you</Title>
              <p>Your message has been sent successfully.</p>
              <Btn2 onClick={() => setSteps('one')}>Go back</Btn2>
            </>
          }
        </div>
      </div>
    </div>
  )
}
export default Profile
