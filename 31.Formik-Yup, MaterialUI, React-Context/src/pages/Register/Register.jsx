import { useFormik } from 'formik';
import axios from 'axios';
import { RegisterSchema } from '../../Schema/RegisterSchema';
import '../Register/Register.css';

const baseURL = 'http://localhost:3000/users'

const Register = () => {
  const { values, errors, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      passwordRepeate: '',
      isLogin: false
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await axios.post(baseURL, values);
      handleReset();
    },
  });

  return (
    <div className='container'>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Fullname</label>
        {errors.fullname && <pre className="error">{errors.fullname}</pre>}
        <input type="text" name="fullname" placeholder='Enter Fullname....' onChange={handleChange} value={values.fullname} />
        

        <label>Username</label>
        {errors.username && <pre className="error">{errors.username}</pre>}
        <input type="text" name="username" placeholder='Enter Username....' onChange={handleChange} value={values.username} />
        

        <label>Email</label>
        {errors.email && <pre className="error">{errors.email}</pre>}
        <input type="email" name="email" placeholder='Enter Email....' onChange={handleChange} value={values.email} />
        

        <label>Password</label>
        {errors.password && <pre className="error">{errors.password}</pre>}
        <input type="password" name="password" placeholder='Enter Password....' onChange={handleChange} value={values.password} />
        

        <label>Password Repeate</label>
        {errors.passwordRepeate && <pre className="error">{errors.passwordRepeate}</pre>}
        <input type="password" name="passwordRepeate" placeholder='Enter Password Repeate....' onChange={handleChange} value={values.passwordRepeate} />
        
        <button type='submit'>Register!</button>
      </form>
    </div>
  )
}

export default Register;
