import { useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';

import ActionIcon from '../../assets/icon-vertical-ellipsis.svg'

import './header.css';

const Header = () => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={theme.isThemeLight? 'HeaderWrapperLight' : 'HeaderWrapperDark'}>
     <div className={theme.isThemeLight? 'HeaderTitleLight' : 'HeaderTitleDark'}>
      <span className='heading-l'>
        {'Platform Launch'}
        </span>
      </div>
    <div className='HeaderSecRight'>
      <Button className='AddTaskBtn body-m' disabled>{'+Add New Task'}</Button>
      <img src={ActionIcon} alt='BoardActions' className='BoardActions'/>
    </div>
    </div>
  );
}

export default Header;
