# NYPL SVG Icons

[![GitHub version](https://badge.fury.io/gh/nypl%2Fdgx-svg-icons.svg)](https://badge.fury.io/gh/nypl%2Fdgx-svg-icons)

SVG icons used at NYPL Digital as React Components.
Version 0.3.8

This project uses Styleguidist to generate a page with all the available icons and their properties here: [https://nypl.github.io/dgx-svg-icons/]( https://nypl.github.io/dgx-svg-icons/)

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
* From the command line rebuild the `/dist` directory with `npm run build`.
* Optional but useful: rebuild the `/docs` styleguide with `npm run styleguide:build`.
* Add & commit the new `/dist` and `/docs` folders and make the pull request.

### Props

There are props that all components use:

prop | type
--- | ---
ariaHidden | boolean
className | string
height | string
iconId | string
preserveAspectRatio | string
svgRole | string
title | string
width | string
viewBox | string

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

### Styleguide

We are using [Styleguidist](https://react-styleguidist.js.org/) as an interactive styleguide for our icon components. To run the styleguide locally, run

```
    $ npm run styleguide
```

Alternatively, you can build the styleguide and start a local server in the generated `/docs` folder. To do so, run

```
    $ npm run styleguide:build
```

then run

```
    $ cd docs && python -m SimpleHTTPServer 4000
```

then go to `localhost:4000` to see the styleguide. Doing this will serve the same styleguide that Github Pages will serve up... like a hot-fudge sunday.

### Reference

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
EnvelopeIcon | `<EnvelopeIcon />`
FaceBookIcon | `<FaceBookIcon />`
FilterIcon | `<FilterIcon />`
FilterCancelIcon | `<FilterCancelIcon />`
GridIcon | `<GridIcon />`
LargePrintIcon | `<LargePrintIcon />`
LeftWedgeIcon | `<LeftWedgeIcon />`
LionLogoIcon | `<LionLogoIcon />`
LionLogoWithText | `<LionLogoWithText />`
LionLogoWithTextInverse | `<LionLogoWithTextInverse />`
ListIcon | `<ListIcon />`
LibraryCardIcon | `<LibraryCardIcon />`
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
xCloseIcon | `<XCloseIcon />`
BuildingIcon | `<BuildingIcon />`
GenericWedgeIcon | `<GenericWedgeIcon />`
LeftArrowIcon | `<LeftArrowIcon />`
RightArrowIcon | `<RightArrowIcon />`
