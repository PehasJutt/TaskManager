import {Button} from 'react-bootstrap';
import ActionIcon from '../../assets/icon-vertical-ellipsis.svg'
import './header.css';

const Header = () => {
  return (
    <div className='HeaderWrapper'>
     <div className='BoardTitle heading-l'>Platform Launch</div>
    <div className='HeaderSecRight'>
      <Button className='AddTaskBtn body-m' disabled>+Add New Task</Button>
      <img src={ActionIcon} alt='BoardActions' className='BoardActions'/>
    </div>
    </div>
  );
}

export default Header;
