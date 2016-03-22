import React from 'react';
import { LionLogoIcon } from './icons';

// Stylesheet used for development mode
import './styles/styles.scss';

/*
 * Used for local development of React Components
 */
React.render(<LionLogoIcon />, document.getElementById('lionLogo'));
// Render Inverse for Lion Logo
React.render(<LionLogoIcon type='inverse' />, document.getElementById('lionLogoInverse'));
