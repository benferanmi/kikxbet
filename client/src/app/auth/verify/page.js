'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const VerifyPage = () => {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userData = urlParams.get('userData');

    if (token) {
      // Save token in cookies
      Cookies.set('authToken', token, { expires: 7 });
      console.log(decodeURIComponent(userData));
      Cookies.set('userData', decodeURIComponent(userData), { expires: 7 });

      // Redirect to the protected page
      router.push('/');
    } else {
      // If no token is found, redirect to login page
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <div>
      <h2>Verifying...</h2>
    </div>
  );
};

export default VerifyPage;
