import React from 'react';

import Avatar from '/assets/avatars/default.png';

import './banner.scss';

/**
 * Needs to display:
 * - Avatar
 * - Username
 * - Roster
 * - Options Cog
 * - Logout Button
 */
export const Banner_Component = () => {
  return (
    <header>
      <div className='user-bar'>
        <div className='user-avatar'>
          <img src={Avatar} />
        </div>
        <div className='user-name'>Toxocious</div>
        <div className='user-roster'>
          <img />
          <img />
          <img />
          <img />
          <img />
          <img />
        </div>
        <div className='user-buttons'>
          <button>COG</button>
          <button>LOG</button>
        </div>
      </div>
    </header>
  );
};
