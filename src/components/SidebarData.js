import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  

  


  {
    title: 'Stock Prediction',
    path: '/stockReminder',
    icon:<FaIcons.FaClock/>,
    cName: 'nav-text'
    
  },
  {
    title: 'Add Products',
    path: '/Products',
    icon:<FaIcons.FaCartPlus/>,
    cName: 'nav-text'
  },
  {
    title: 'Stock',
    path: '/stock',
    icon:<FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
  },

  {

    title: 'Re-Order',
    path: '/reorder',
    icon:<IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },


  {
    title: 'Expiry Reminder',
    path: '/expiryReminder',
    icon:<FaIcons.FaCreativeCommonsNc/>,
    cName: 'nav-text'
  },


];