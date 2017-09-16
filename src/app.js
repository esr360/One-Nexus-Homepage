//*****************************************************************
// One-Nexus - A front-end framework for creating modular and 
// configurable UI components - https://github.com/esr360/One-Nexus
//*****************************************************************

import * as app from './app';
import * as global from './app.json';
import * as ONE_NEXUS from '../One-Nexus/src/app';

Object.assign(app, ONE_NEXUS);

export { ONE_NEXUS, global };

// Vendor
//*****************************************************************

export { default as ParticleNetwork } from 'canvas-particle-network';
export { default as Typed } from 'typed.js';

// Tools
//*****************************************************************

import { scrollTrigger } from './tools/js/app.scrollTrigger';

export { scrollTrigger };

// Modules
//*****************************************************************

import { billboard    } from './modules/billboard/billboard';
import { footer       } from './modules/footer/footer';
import { header       } from './modules/header/header';
import { homepage     } from './modules/homepage/homepage';
import { spacestation } from './modules/spacestation/spacestation';

export { billboard, footer, homepage, spacestation };

// App-Level Definitions
//*****************************************************************

window.APPUI = app;

scrollTrigger();