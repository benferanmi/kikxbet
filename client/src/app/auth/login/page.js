'use client';
import Link from 'next/link';
import '../register.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Page = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.password) tempErrors.password = 'Password is required';
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          const { authToken, ...userData } = result.data;

          // Save token and user data in cookies
          Cookies.set('authToken', authToken, { expires: 7 });
          Cookies.set('userData', JSON.stringify(userData), { expires: 7 });

          // Redirect to the dashboard or another authenticated page
          router.push('/');
        } else {
          const errorData = await response.json();
          setErrors({ general: errorData.error.message || 'Login failed. Please try again.' });
        }
      } catch (error) {
        setErrors({ general: 'An error occurred. Please try again later.' });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSocialLogin = (type) => {
    switch (type) {
      case 'google':
        window.location.href = `${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/google`;
        break;
      case 'facebook':
        window.location.href = `${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/facebook`;
        break;
      default:
        break;
    }
  };

  return (
    <section className='auto-main-width'>
      <div className='reg-spec-head'>
        <h2>Login</h2>
      </div>

      <div className='reg-reg-form'>
        <form onSubmit={handleSubmit}>
          <div className='reg-input-group'>
            <label>Email Address</label>
            <input type='email' name='email' placeholder='johndoe123@gmail.com' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className='reg-input-group'>
            <label>Password</label>
            <input type='password' name='password' placeholder='**********' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div className='reg-forgotpass'><Link href='./recoverpassword'>Forgot Password</Link></div>

          <div >
            <button type='submit' disabled={loading} className='reg-sub-button custom_btn_flash login_btn_custom_spacing'>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {errors.general && <p className='error'>{errors.general}</p>}
          </div>

          <div className='reg-quests'>
            <div className='reg-reg-question'>
              <p>Don&apos;t have an account?</p> <span><Link href='./signup'>Signup</Link></span>
            </div>
          </div>

          <div className='reg-other-methods'>
            <div className='reg-methods'>
              <div className='reg-met-each' onClick={() => handleSocialLogin('google')}>
                <Image
                  src='/assets/google.png'
                  height={20}
                  width={20}
                  alt='Google'
                />
                <p>Google</p>
              </div>

              <div className='reg-met-each' style={{ background: 'var(--teal)' }} onClick={() => handleSocialLogin('facebook')}>
                <Image
                  src='/assets/facebook.png'
                  height={20}
                  width={11}
                  alt='Facebook'
                />
                <p style={{ color: 'white' }}>  Facebook</p>
              </div>

              <div className='reg-met-each' onClick={() => handleSocialLogin('apple')}>
                <Image
                  src='/assets/apple.png'
                  height={32}
                  width={28}
                  alt='Apple'
                />
                <p> Apple</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
