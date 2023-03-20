import './Navbar.css';
import Temple from '../assets/temple.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='hub logo' />
          <span>The Hub</span>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign up</Link>
        </li>
        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
