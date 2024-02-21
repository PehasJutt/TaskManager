import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { ViewSidebar } from '../../reducers/sidebarHide';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import ShowIcon from '../../assets/icon-show-sidebar.svg'

import './layout.css';

const Layout = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const sidebar = useSelector(state => state.sidebar);

  const getBodySectionStyles = () => {
    let themeStyle = '';
    if (theme.isThemeLight) themeStyle = 'BodyLight';
    else themeStyle = 'BodyDark';
    
    let sidebarStyle = '';
    if (sidebar.isHidden) sidebarStyle = 'BodyWithoutSidebar';
    else sidebarStyle = 'BodyWithSidebar';

    return (`${themeStyle} ${sidebarStyle}`);
  }

  const HandleSidebarShow = () => {
    dispatch(ViewSidebar());
  }

  return (
    <div className='MainWrapper'>
      <div className='SideSecWrapper'>
        <Sidebar />
      </div>
        {/* --------- */}
        <div className='HeaderSecWrapper'>
          <Header />
        </div>
        {sidebar.isHidden && <div className='ShowIcon' onClick={HandleSidebarShow}><img src={ShowIcon} alt='ShowSidebar'/></div>}
        <div className={getBodySectionStyles()}>
         <div className='EmptyBoardSection'>
          <div className='EmptyBoardMsg'>
            {'This board is empty. Add a new coloumn to get started.'}
          </div>
          <Button className='AddTaskBtn body-m'>+Add New Coloumn</Button>
         </div>
        </div>
        {/* --------- */}
    </div>
  );
}

export default Layout;
