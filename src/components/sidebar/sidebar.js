import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

import LogoLight  from '../../assets/logo-light.svg'
import LogoDark  from '../../assets/logo-dark.svg'
import LightModeIcon from '../../assets/icon-light-theme.svg'
import DarkModeIcon from '../../assets/icon-dark-theme.svg'
import HideIcon from '../../assets/icon-hide-sidebar.svg'

import './sidebar.css';

const Sidebar = () => {

  useEffect ( () => {
   
  },[])

  return (
    <div className='SidebarWrapper'>
      <img
        src={LogoDark}
        alt='DarkLogo'
        className='Logo'
      />
      <div className='TotalBoards heading-s'>
        {'All Boards (8)'}
      </div>
      <div className='exp'>
      <div className='BoardNameSection'>
        {[1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4].map((value,index) => {
          return (
            <div key={index} className='BoardNameWrapper'>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className='BoardIcon'><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"/></svg>
              <div className='BoardName body-m'>
              {`Platform Launch (${value})`}
              </div>
            </div>
          );
        })}
      </div>

      <div className='SideFooterWrapper'>
        <div className='ThemeWrapper'>
        <img src={LightModeIcon} alt='LightModeIcon' className='ThemeIcon' />
        <Button>Hi</Button>
        <img src={DarkModeIcon} alt='DarkModeIcon' className='ThemeIcon' />
        </div>
        <div className='HideSecWrapper'>
        <img src={HideIcon} alt='HideIcon' className='HideIcon' />
        <span className='HideMsg body-m'> Hide Sidebar</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
