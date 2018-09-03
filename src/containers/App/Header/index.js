import React from 'react';
import StatusOption from './StatusOption';
import { SHOW_ALL, SHOW_ONLINE, SHOW_OFFLINE } from '../../../constants';

const Header = () => (
  <div className="Header">
    <h1>Twitch Streamers</h1>
    <div className="StatusOptions">
      <StatusOption filter={SHOW_ALL}>all</StatusOption>
      <StatusOption filter={SHOW_ONLINE}>online</StatusOption>
      <StatusOption filter={SHOW_OFFLINE}>offline</StatusOption>
    </div>
  </div>
);

export default Header;
