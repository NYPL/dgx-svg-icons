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

* viewBox
* height
* width
* title
* className
* ariaHidden

By default, the `defaultProps` generate:
* viewBox
* height
* width
* title
* className

There are also props such as `fill`, `style`, and `size` for only a few components.

### Reference

Component Name  | Component Markup  | Preview 
--- | --- | ---
ApplyIcon | `<ApplyIcon />` | ![Apply Icon][images/apply.png]




