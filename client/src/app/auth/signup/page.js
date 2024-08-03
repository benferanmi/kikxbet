'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../register.css';

const Page = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    password: '',
    confirmPassword: '',
    country: '',
    referralCode: '',
    accept: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServererror] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.fullname) tempErrors.fullname = 'Username is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    if (!formData.country) tempErrors.country = 'Country is required';
    if (!formData.accept) tempErrors.accept = 'You must accept the terms and conditions';
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:6020/dev/kikxbet/api/v1/auth/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Please check your email for verification.');
          router.push('/auth/login');
        } else {
          const errorData = await response.json();
          console.log(errorData);
          console.log('eroorsssss ', errors);
          setServererror(errorData.error.message || { general: 'An error occurred during signup.' });
        }
      } catch (error) {
        setErrors({ general: 'An error occurred. Please try again later.' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className='auto-main-width'>
      <div className='reg-spec-head'>
        <h2>Signup</h2>
      </div>

      <div className='reg-reg-form'>
        <form onSubmit={handleSubmit}>
          <div className='reg-input-group'>
            <label>Email Address</label>
            <input type='email' name='email' placeholder='johndoe123@gmail.com' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className='reg-input-group'>
            <label>Username</label>
            <input type='text' name='fullname' placeholder='John Doe' value={formData.fullname} onChange={handleChange} />
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>
          <div className='reg-input-group'>
            <label>Password</label>
            <input type='password' name='password' placeholder='**********' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div className='reg-input-group'>
            <label>Confirm Password</label>
            <input type='password' name='confirmPassword' placeholder='**********' value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
          </div>
          <div className='reg-input-group'>
            <label>Country of Residence</label>
            <input type='text' name='country' placeholder='Germany' value={formData.country} onChange={handleChange} />
            {errors.country && <p className='error'>{errors.country}</p>}
          </div>

          <div className="reg-ref-code">
            <div className='reg-input-group'>
              <label>Referral Code</label>
              <input type='text' name='referralCode' placeholder='Optional' value={formData.referralCode} onChange={handleChange} />
            </div>
          </div>

          <div className="reg-check-group">
            <div className="reg-check-g">
              <input type="checkbox" name="accept" checked={formData.accept} onChange={handleChange} />
              <p>I agree to <Link href='/terms'>terms of services</Link> and the <Link href='/policy'>privacy policy</Link>.</p>
              {errors.accept && <p className='error'>{errors.accept}</p>}
            </div>
          </div>

          <div className='reg-sub-button'>
            <button type='submit' disabled={loading}>
              {loading ? 'Signing up...' : 'Signup'}
            </button>
          </div>
            {errors.general ? (<p className='error'>{errors.general}</p>) : <p className='error'>{serverError}</p>}
        </form>

        <div className='reg-other-methods'>
          <div className='reg-methods'>
            <div className='reg-met-each'>
              <Image
                src='/assets/google.png'
                height={20}
                width={20}
                alt='Google'
              />
              <p> Google</p>
            </div>

            <div className='reg-met-each' style={{ background: 'var(--teal)' }}>
              <Image
                src='/assets/facebook.png'
                height={20}
                width={11}
                alt='Facebook'
              />
              <p style={{ color: 'white' }}> Facebook</p>
            </div>

            <div className='reg-met-each'>
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
      </div>
    </section>
  );
};

export default Page;
