import React from 'react';
import {
  LionLogoIcon,
  CarouselCircleIcon,
} from './icons';

// Stylesheet used for development mode
import './styles/styles.scss';

/*
 * Used for local development of React Components
 */
React.render(<LionLogoIcon />, document.getElementById('lionLogo'));
// Render Inverse for Lion Logo
React.render(<LionLogoIcon type="inverse" />, document.getElementById('lionLogoInverse'));

// Render Carousel Circle SVG Icon
React.render(<CarouselCircleIcon />, document.getElementById('carouselIcon'));
// Render Carousel Circle SVG Icon - Solid
React.render(<CarouselCircleIcon type="solid" />, document.getElementById('carouselIconSolid'));
