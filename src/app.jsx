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
  XCloseIcon,
  FilterIcon,
  FilterCancelIcon,
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
  GenericWedgeIcon,
  LeftArrowIcon,
  RightArrowIcon,
  FaceBookIcon,
  TwitterIcon,
  EnvelopeIcon,
  LibraryCardIcon,
  PencilIcon,
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

render(<XCloseIcon iconId="close" />, document.getElementById('xCloseIcon'));

// Render the Facebook Icon
render(<FaceBookIcon iconId="facebook" />, document.getElementById('faceBookIcon'));

// Render Filter SVG Icon
render(<FilterIcon />, document.getElementById('filterIcon'));

// Render Canecle Filter SVG icon
render(<FilterCancelIcon />, document.getElementById('filterCancelIcon'));

// Render List SVG Icon
render(<ListIcon/>, document.getElementById('listIcon'));

// Render Grid SVG Icon
render(<GridIcon />, document.getElementById('gridIcon'));

// Render Apply SVG Icon
render(<ApplyIcon iconId="apply" />, document.getElementById('applyIcon'));

// Render the Download Icon
render(<DownLoadIcon iconId="download" />, document.getElementById('downLoadIcon'));

// Render Reset SVG Icon
render(<ResetIcon/>, document.getElementById('resetIcon'));

// Render Circle with Dash SVG Icon
render(<CircleDashIcon />, document.getElementById('circleDashIcon'));

// Render Headphones / Audio SVG Icon
render(<AudioHeadphoneIcon />, document.getElementById('audioHeadphoneIcon'));

// Render Media Blue Ray SVG Icon
render(<MediaBluRayIcon />, document.getElementById('mediaBluRayIcon'));

// Render Audio Disc SVG Icon
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

// Render the Generic Wedge Icon
render(<GenericWedgeIcon />, document.getElementById('GenericWedgeIcon'));

// Render the Left Arrow Icon
render(<LeftArrowIcon />, document.getElementById('leftArrowIcon'));

// Render the Wedge Down Icon
render(<RightArrowIcon />, document.getElementById('rightArrowIcon'));

// Render the Twitter Icon
render(<TwitterIcon iconId="twitter" />, document.getElementById('twitterIcon'));

// Render the Envelope Icon
render(<EnvelopeIcon iconId="mail" />, document.getElementById('envelopeIcon'));

// Render the Envelope Icon
render(<LibraryCardIcon iconId="libraryCard" />, document.getElementById('libraryCardIcon'));

// Render the Pencil Icon
render(<PencilIcon iconId="pencilIcon" />, document.getElementById('pencilIcon'));
