import React from 'react';
import { render } from 'react-dom';
import {
  LionLogoIcon,
  LionLogoWithText,
  CarouselCircleIcon,
  BookIcon,
  DotsIcon,
} from './icons';

// Stylesheet used for development mode
import './styles/styles.scss';

/*
 * Used for local development of React Components
 */

// Render NYPL Logo
render(<LionLogoWithText />, document.getElementById('LionLogoWithText'));
// Render Inverse NYPL Logo
render(<LionLogoWithText type="inverse" />, document.getElementById('LionLogoWithTextInverse'));

// Render Lion Logo Icon
render(<LionLogoIcon />, document.getElementById('lionLogo'));

// Render Inverse for Lion Logo Icon
render(<LionLogoIcon type="inverse" />, document.getElementById('lionLogoInverse'));

// Render Carousel Circle SVG Icon
render(<CarouselCircleIcon />, document.getElementById('carouselIcon'));

// Render Carousel Circle SVG Icon - Solid
render(<CarouselCircleIcon type="solid" />, document.getElementById('carouselIconSolid'));

// Render Book SVG Icon
render(<BookIcon />, document.getElementById('bookIcon'));

// Render Dots SVG Icon
render(<DotsIcon />, document.getElementById('dotsIcon'));
