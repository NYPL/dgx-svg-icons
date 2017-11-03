# NYPL SVG Icons

SVG icons used at NYPL Digital as React Components.

### Install

`npm i --save @nypl/dgx-svg-icons`

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

```

### Contributing to this repo
* Prior to submitting a pull request, delete the `/dist` directory
* From the command line rebuild `/dist` with `npm run build`
* Add & commit the new `/dist` folder and make the pull request


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
preserveAspectRatio | string
iconId | string
svgRole | string

By default, the `defaultProps` generate:

* viewBox
* title
* className
* preserveAspectRatio
* svgRole

There are also props such as `fill`, `style`, and `size` for only a few components.

### Accessibility Guidelines
There are certain icons that will appear multiple times and have presentational value, but not necessarily semantic or have value with respect to accessibility, and others where there should only be one instance.

In the case of multiple rendering of an icon, such as the three-dotted "more" icon a unique ID is not required and should not be set (unless your application requires it to be set), but it should have the `ariaHidden` attribute set (if not already set by default in the icon.jsx file).

Example:
```javascript

render(<DotsIcon ariaHidden />);

```

In the case where a unique id should be set for each instance and in the case of it appearing multiple times. The `iconId` property will set `id="{iconId}"` on the svg's `title` attribute, this will also set `aria-labelledby` attribute on the `<svg>` tag. icon.jsx files that should have an `id` will throw a console error if it is missing, but the .jsx file itself will not set one by default, you must explicitly set it.

Example:
```javascript

render(<LoginIcon iconId="login-icon" />);

```

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
DownLoadIcon | `<DownLoadIcon />`
DvdDiscIcon | `<DvdDiscIcon />`
EReaderIcon | `<EReaderIcon />`
FaceBookIcon | `<FaceBookIcon />`
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
TwitterIcon | `<TwitterIcon />`
XIcon | `<XIcon />`
BuildingIcon | `<BuildingIcon />`
DownWedgeIcon | `<DownWedgeIcon />`
LeftArrowIcon | `<LeftArrowIcon />`
RightArrowIcon | `<RightArrowIcon />`
