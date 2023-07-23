import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import './App.css'
import './assets/landing.jpg'
const initVals = { name: '', email: '', password: '', confirm_pass: '' }
function App() {
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: initVals,
    validationSchema: object({
      name: string()
        .max(30, 'Must be 30 characters or less')
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      email: string().email('Invalid email address').required('Email Required'),
      password: string().required('Password Required'),
      confirm_pass: string().oneOf([ref('password'), null], 'Password must match').required('Password Required')
    }),
    onSubmit: val => {
      alert(JSON.stringify(val, null, 1))
    }
  })
  return (
    <div id='main' className='h-screen bg-gradient-to-r from-red-500 to-purple-900 flex'>
      <div id='form-page' className='md:flex-row max-sm:w-5/6 relative h-2/3 w-1/2  flex flex-col m-auto border rounded-2xl p-5 bg-white overflow-hidden '>
        <div id='form-image' className=' flex flex-col text-slate-800 grow basis-1/2 z-10'>
          <label id='Registartion' className='text-2xl  z-10 pb-5'>Registration Form</label>
          <img src='src\assets\landing.jpg' alt="landing" className='z-0 scale-x-150 grow absolute max-md:-translate-y-1/2 md:relative top-0' />
        </div>
        <div id='form-container' className=' flex min-h-full h-max grow basis-1/2 z-20'>
          <form id='form' onSubmit={handleSubmit} className='flex flex-col grow   '>
            <input type="text" name='name' placeholder='name...'
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              autoComplete='off'
            />
            <span>
              {
                touched.name && errors.name ? errors.name : null
              }
            </span>
            <input type="email" name='email' placeholder='email...'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              autoComplete='off'
            /><span>
              {
                touched.email && errors.email
              }
            </span>
            <input type="password" name='password' placeholder='password...'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              autoComplete='off'
            />
            <span>
              {
                touched.password && errors.password && errors.password
              }
            </span>
            <input type="password" name='confirm_pass' placeholder='confirm password'
              onChange={handleChange}
              value={values.confirm_pass}
              onBlur={handleBlur}
              autoComplete='off'
            /><span>
              {
                touched.confirm_pass && errors.confirm_pass && errors.confirm_pass
              }

            </span>
            <button type='submit' className='bg-gradient-to-l w-1/2 mx-auto p-2 text-white text-2xl font-normal rounded-2xl'>Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
