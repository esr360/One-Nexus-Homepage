//*****************************************************************
// One-Nexus - A front-end framework for creating modular and 
// configurable UI components - https://github.com/esr360/One-Nexus
//*****************************************************************

import * as app from './app';
import * as ONE_NEXUS from '../One-Nexus/assets/app';

// Merge `app` with One-Nexus
Object.assign(app, ONE_NEXUS);

// Vendor
//*****************************************************************

export { default as ParticleNetwork } from 'canvas-particle-network';

// Modules
//*****************************************************************

import { billboard    } from './modules/billboard/billboard';
import { footer       } from './modules/footer/footer';
import { header       } from './modules/header/header';
import { homepage     } from './modules/homepage/homepage';
import { spacestation } from './modules/spacestation/spacestation';

export { billboard, footer, homepage, spacestation };

// Attach `app` to the Window object
//*****************************************************************

window.APPUI = window.APPUI || app;