# NYPL SVG Icons

SVG icons used at NYPL Digital as React Components.

### Install

Not an npm module at the moment but it can be added in the dependencies in package.json as:

`"dgx-svg-icons": "git+ssh://bitbucket.org/NYPL/dgx-svg-icons.git#master",`


### Demo

* `npm install`
* `npm start`
* Go to localhost:3000

### Importing

All the icons are exported individually so you can choose which ones you want to import.

```javascript
import React from 'react';
import { render } from 'react-dom';

import {
  LionLogoIcon,
  BookIcon,
} from 'dgx-svg-icons';


render(
  <LionLogoIcon ariaHidden />,
  document.getElementById('LionLogoIcon')
);

render(
  <BookIcon ariaHidden />,
  document.getElementById('BookIcon')
);

```

### Props

There are props that all components use:

prop | type
--- | ---
viewBox | string
height | string
width | string
title | string
className | string
ariaHidden | boolean

By default, the `defaultProps` generate:

* viewBox
* height
* width
* title
* className

There are also props such as `fill`, `style`, and `size` for only a few components.

### Reference

![Apply Icon](https://bitbucket.org/NYPL/dgx-svg-icons/raw/master/images/svg.png)

Component Name  | Component Markup  
--- | ---
ApplyIcon | `<ApplyIcon />`
AudioDiscIcon | `<AudioDiscIcon />`
AudioHeadphoneIcon | `<AudioHeadphoneIcon />`
BookIcon | `<BookIcon />`
CarouselCircleIcon | `<CarouselCircleIcon />`
CheckSoloIcon | `<CheckSoloIcon />`
CircleDashIcon | `<CircleDashIcon />`
DivideLineIcon | `<DivideLineIcon />`
DotsIcon | `<DotsIcon />`
DvdDiscIcon | `<DvdDiscIcon />`
EReaderIcon | `<EReaderIcon />`
FilterIcon | `<FilterIcon />`
GridIcon | `<GridIcon />`
LargePrintIcon | `<LargePrintIcon />`
LeftWedgeIcon | `<LeftWedgeIcon />`
LionLogoIcon | `<LionLogoIcon />`
LionLogoWithText | `<LionLogoWithText />`
LionLogoWithTextInverse | `<LionLogoWithTextInverse />`
ListIcon | `<ListIcon />`
LocatorIcon | `<LocatorIcon />`
LoginIcon | `<LoginIcon />`
LoginIconSolid | `<LoginIconSolid />`
LogoutIcon | `<LogoutIcon />`
MediaBluRayIcon | `<MediaBluRayIcon />`
MenuIcon | `<MenuIcon />`
RadioActiveIcon | `<RadioActiveIcon />`
RadioInactiveIcon | `<RadioInactiveIcon />`
ResetIcon | `<ResetIcon />`
RightWedgeIcon | `<RightWedgeIcon />`
SearchIcon | `<SearchIcon />`
SmallDotClosedIcon | `<SmallDotClosedIcon />`
SmallDotOpenIcon | `<SmallDotOpenIcon />`
TagIcon | `<TagIcon />`
XIcon | `<XIcon />`
BuildingIcon | `<BuildingIcon />`
