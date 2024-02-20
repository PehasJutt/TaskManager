import { Button } from 'react-bootstrap';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './layout.css';

const Layout = () => {
  return (
    <div className='MainWrapper'>
      <div className='SideSecWrapper'>
        <Sidebar />
      </div>
      <div>
        <div className='HeaderSecWrapper'>
          <Header />
        </div>
        <div className='BodySecWrapper BodyLight'>
         <div className='EmptyBoardSection'>
          <div className='EmptyBoardMsg'>
            This board is empty. Add a new coloumn to get started.
          </div>
          <Button className='AddTaskBtn body-m'>+Add New Coloumn</Button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
