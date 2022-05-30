import { BsInstagram } from 'react-icons/bs'
import { FaDribbble } from 'react-icons/fa'
import { SiVsco } from 'react-icons/si'
import { ImCodepen } from 'react-icons/im'
import { useState } from 'react'
const Profile = () => {
  const [steps, setSteps] = useState('one')
  const links = [
    { link: 'https://www.instagram.com/', icon: <BsInstagram /> },
    { link: 'https://dribbble.com/', icon: <FaDribbble /> },
    { link: 'https://www.vsco.co/', icon: <SiVsco /> },
    { link: 'https://codepen.io/', icon: <ImCodepen /> },
  ]
  return (
    <div className='w-h-screen flex flex-wrap'>
      <div
        className='hidden md:block grow bg-no-repeat bg-cover bg-center '
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556483563-7f4034a4eeb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        }}
      />

      <div className='w-full md:w-[500px] 2xl:w-[600px] flex flex-center p-8'>
        <div className='flex flex-center flex-wrap gap-6 text-center text-slate-700 flex-col'>
          {steps === 'one' && (
            <>
              <h2 className='text-5xl font-bold '>Name of user</h2>
              <p>
                Description. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quo dicta reiciendis iste facere quam molestias cum eaque
                a? Aliquam quae dolorem explicabo cupiditate hic quidem quos
                provident eveniet quia tenetur.
              </p>
              <button
                className='btn py-3 px-10 bg-teal-500 hover:bg-teal-400 hover:transition-colors transition-colors text-white font-medium text-lg'
                onClick={() => setSteps('two')}
              >
                Get in touch
              </button>
              <nav className='w-full flex justify-center gap-4'>
                {links.map((e) => (
                  <a
                    href={e.link}
                    className='text-2xl hover:ring-1 hover:text-teal-500 transition-all ring-teal-500 rounded-full p-2'
                  >
                    {e.icon}
                  </a>
                ))}
              </nav>
            </>
          )}
          {steps === 'two' && (
            <>
              <button
                className='btn btn-ghost font-medium border-slate-500 text-slate-500'
                onClick={() => setSteps('one')}
              >
                Go back
              </button>
              <h2 className='text-5xl font-bold'>Get in touch</h2>
              <p>
                Description. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quo dicta
              </p>

              <form
                action=''
                className='w-full flex flex-col gap-4 items-center'
                onSubmit={(e) => {
                  e.preventDefault()
                  setSteps('three')
                }}
              >
                <input
                  type='text'
                  className='w-full outline-teal-500 rounded-lg border p-3'
                  placeholder='Name'
                  required
                />
                <input
                  type='email'
                  className='w-full outline-teal-500 rounded-lg border p-3'
                  placeholder='Email'
                  required
                />
                <textarea
                  required
                  className='w-full outline-teal-500 rounded-lg p-3 border resize-none h-28'
                  placeholder='message'
                />
                <button
                  className='btn py-3 px-10 bg-teal-500 hover:bg-teal-400 hover:transition-colors transition-colors text-white font-medium text-md'
                  onClick={() => setSteps('two')}
                >
                  Send message
                </button>
              </form>
            </>
          )}
          {steps === 'three' && (
            <>
              <h2 className='text-5xl font-bold'>Thank you</h2>
              <p>Your message has been sent successfully.</p>
              <button
                className='btn btn-ghost font-medium border-slate-500 text-slate-500'
                onClick={() => setSteps('one')}
              >
                Go back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default Profile
