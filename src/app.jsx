import React from 'react';
import { render } from 'react-dom';
import {
  LionLogoIcon,
  LionLogoWithText,
  LionLogoWithTextInverse,
  CarouselCircleIcon,
  BookIcon,
  DotsIcon,
  XIcon,
  FilterIcon,
  ListIcon,
  GridIcon,
  ApplyIcon,
  DownLoadIcon,
  ResetIcon,
  CircleDashIcon,
  AudioHeadphoneIcon,
  MediaBluRayIcon,
  AudioDiscIcon,
  DvdDiscIcon,
  LargePrintIcon,
  EReaderIcon,
  TagIcon,
  LocatorIcon,
  MenuIcon,
  LoginIcon,
  LoginIconSolid,
  LogoutIcon,
  SearchIcon,
  CheckSoloIcon,
  DivideLineIcon,
  RightWedgeIcon,
  LeftWedgeIcon,
  RadioInactiveIcon,
  RadioActiveIcon,
  SmallDotClosedIcon,
  SmallDotOpenIcon,
  BuildingIcon,
  DownWedgeIcon,
  LeftArrowIcon,
  RightArrowIcon,
  FaceBookIcon,
  TwitterIcon,
} from './icons';

// Stylesheet used for development mode
import './styles/styles.scss';

/*
 * Used for local development of React Components
 */

// Render NYPL Logo
render(<LionLogoWithText ariaHidden />, document.getElementById('LionLogoWithText'));

// Render Inverse NYPL Logo
render(<LionLogoWithTextInverse ariaHidden />, document.getElementById('LionLogoWithTextInverse'));

// Render Lion Logo Icon
render(<LionLogoIcon />, document.getElementById('lionLogo'));

// Render Inverse for Lion Logo Icon
render(<LionLogoIcon type="inverse" />, document.getElementById('lionLogoInverse'));

// Render Carousel Circle SVG Icon
render(<CarouselCircleIcon ariaHidden />, document.getElementById('carouselIcon'));

// Render Carousel Circle SVG Icon - Solid
render(<CarouselCircleIcon type="solid" />, document.getElementById('carouselIconSolid'));

// Render Book SVG Icon
render(<BookIcon />, document.getElementById('bookIcon'));

// Render Dots SVG Icon
render(<DotsIcon />, document.getElementById('dotsIcon'));

// Render Dots SVG Icon
render(<XIcon />, document.getElementById('XIcon'));

// Render Dots SVG Icon
render(<FilterIcon />, document.getElementById('filterIcon'));

// Render Dots SVG Icon
render(<ListIcon/>, document.getElementById('listIcon'));

// Render Dots SVG Icon
render(<GridIcon />, document.getElementById('gridIcon'));

// Render Dots SVG Icon
render(<ApplyIcon />, document.getElementById('applyIcon'));

// Render the Download Icon
render(<DownLoadIcon />, document.getElementById('downLoadIcon'));

// Render Dots SVG Icon
render(<ResetIcon/>, document.getElementById('resetIcon'));

// Render Dots SVG Icon
render(<CircleDashIcon />, document.getElementById('circleDashIcon'));

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

// Render Locator SVG Icon (Small Dot)
render(<LocatorIcon />, document.getElementById('locatorIcon'));

// Render Locator SVG Icon (Large Dot)
render(<LocatorIcon />, document.getElementById('locatorIconLarge'));

// Render Menu SVG Icon
render(
  <MenuIcon />, document.getElementById('menuIcon'));

// Render Search SVG Icon
render(<SearchIcon />, document.getElementById('searchIcon'));

// Render Login SVG Icon
render(<LoginIcon />, document.getElementById('loginIcon'));

// Render Login Solid SVG Icon
render(<LoginIconSolid />, document.getElementById('loginIconSolid'));

// Render Logout SVG Icon
render(<LogoutIcon />, document.getElementById('logoutIcon'));

// Render Check Solo Icon
render(<CheckSoloIcon />, document.getElementById('checkSoloIcon'));

// Render Divide Line Icon
render(<DivideLineIcon />, document.getElementById('divideLineIcon'));

// Render Rigth Wedge Icon
render(<RightWedgeIcon />, document.getElementById('rightWedgeIcon'));

// Render Left Wedge Icon
render(<LeftWedgeIcon />, document.getElementById('leftWedgeIcon'));

// Render Radio Inactive Icon
render(<RadioInactiveIcon />, document.getElementById('radioInactiveIcon'));

// Render Radio Active Icon
render(<RadioActiveIcon />, document.getElementById('radioActiveIcon'));

// Render Small Dot Closed Icon
render(<SmallDotClosedIcon />, document.getElementById('smallDotClosedIcon'));

// Render Small Dot Open Icon
render(<SmallDotOpenIcon />, document.getElementById('smallDotOpenIcon'));

// Render the Buiding Icon
render(<BuildingIcon />, document.getElementById('bldgIcon'));

// Render the Down Wedge Icon
render(<DownWedgeIcon />, document.getElementById('downWedgeIcon'));

// Render the Left Arrow Icon
render(<LeftArrowIcon />, document.getElementById('leftArrowIcon'));

// Render the Wedge Down Icon
render(<RightArrowIcon />, document.getElementById('rightArrowIcon'));

// Render the Facebook Icon
render(<FaceBookIcon />, document.getElementById('faceBookIcon'));

// Render the Twitter Icon
render(<TwitterIcon />, document.getElementById('twitterIcon'));
