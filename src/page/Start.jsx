import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useTabIndex } from '../service/module';
import Logo from '../component/Logo';

const firebaseConfig = {
  apiKey: "AIzaSyD9Ynqwmh0s-_2Bw1PGfYsXguSThD0kN5A",
  authDomain: "homies-homeschool.firebaseapp.com",
  projectId: "homies-homeschool",
  storageBucket: "homies-homeschool.appspot.com",
  messagingSenderId: "222336692108",
  appId: "1:222336692108:web:9883ee14c3b884d28e30a9",
  measurementId: "G-H51F0KDXPC"
};

const app = initializeApp(firebaseConfig);

const isAuthorised = () => {
  try {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) return true;
      else return false;
    });
  } catch(error) {
    console.error(error);
  }
}

const Start = () => {
  useTabIndex();

  let destination = isAuthorised() ? '/zbieranina' : '/logowanie';

  return (
    <article className='start'>
      <Logo />
      <p className='quote' tabIndex='0'>Curabitur tincidunt lorem lobortis lorem venenatis, et porttitor dui porttitor. Nam vel malesuada tortor.</p>
      <Link to={destination}><button className='start-button button link'>Zacznij</button></Link>
    </article>
  );
}

export default Start;
