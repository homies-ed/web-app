import { Link } from 'react-router-dom';

import CalendarIcon from '../icon/CalendarIcon';
import SettingsIcon from '../icon/SettingsIcon';
import HomiesIcon from '../icon/HomiesIcon';

const Menu = () => {
  return (
    <ol className='menu'>
      <Link to='/planer' className='link'>
        <li className='menu-item'>
            <CalendarIcon />
        </li>
      </Link>
      <Link to='/zbieranina' className='link'>
        <li className='menu-item'>
            <HomiesIcon />
        </li>
      </Link>
      <Link to='/ustawienia' className='link'>
        <li className='menu-item'>
            <SettingsIcon />
        </li>
      </Link>
    </ol>
  );
}

export default Menu;
