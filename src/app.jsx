import React from 'react';
import { render } from 'react-dom';
import {
  LionLogoIcon,
  LionLogoWithText,
  CarouselCircleIcon,
  BookIcon,
  DotsIcon,
  SoloXIcon,
  FilterIcon,
  ListIcon,
  GridIcon,
  ApplyIcon,
  ResetIcon,
  CircleDashIcon,
  AudioHeadphoneIcon,
  MediaBluRayIcon,
  AudioDiscIcon,
  DvdDiscIcon,
  LargePrintIcon,
  EReaderIcon,
  TagIcon,
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
render(<BookIcon fill="#000" />, document.getElementById('bookIcon'));

// Render Dots SVG Icon
render(<DotsIcon />, document.getElementById('dotsIcon'));

// Render Dots SVG Icon
render(<SoloXIcon fill="#000" />, document.getElementById('soloXIcon'));

// Render Dots SVG Icon
render(<FilterIcon />, document.getElementById('filterIcon'));

// Render Dots SVG Icon
render(<ListIcon fill="#000" />, document.getElementById('listIcon'));

// Render Dots SVG Icon
render(<GridIcon />, document.getElementById('gridIcon'));

// Render Dots SVG Icon
render(<ApplyIcon />, document.getElementById('applyIcon'));

// Render Dots SVG Icon
render(<ResetIcon fill="#000" />, document.getElementById('resetIcon'));

// Render Dots SVG Icon
render(<CircleDashIcon fill="#000" />, document.getElementById('circleDashIcon'));

// Render Dots SVG Icon
render(<AudioHeadphoneIcon />, document.getElementById('audioHeadphoneIcon'));

// Render Dots SVG Icon
render(<MediaBluRayIcon />, document.getElementById('mediaBluRayIcon'));

// Render Dots SVG Icon
render(<AudioDiscIcon />, document.getElementById('audioDiscIcon'));

// Render Dots SVG Icon
render(<DvdDiscIcon />, document.getElementById('dvdDiscIcon'));

// Render Dots SVG Icon
render(<LargePrintIcon />, document.getElementById('largePrintIcon'));

// Render Dots SVG Icon
render(<EReaderIcon />, document.getElementById('eReaderIcon'));

// Render Dots SVG Icon
render(<TagIcon />, document.getElementById('tagIcon'));

