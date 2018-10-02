// import plugins
import {watch, parallel, series, gulp} from 'gulp';

import {dirs, sources} from './gulp_tasks/util/paths';

import bs from 'browser-sync';

// tasks list
import { buildSass } from './gulp_tasks/sass';
import { buildPug } from './gulp_tasks/pug';
import { buildIcons } from './gulp_tasks/icons';
import { buildimages } from './gulp_tasks/images';
import { buildscripts } from './gulp_tasks/scripts';
import { connectServer, browserSync } from './gulp_tasks/connect';



export const devWatch = () => {
  global.watch = true;
  watch(sources.icons, series(buildIcons)).on('end', bs.reload);
  watch(sources.styles, series(buildSass)).on('end', bs.reload);
  watch(sources.templates, series(buildPug)).on('end', bs.reload);
  watch(sources.images, series(buildimages)).on('end', bs.reload);
  watch(sources.scripts, series(buildscripts)).on('end', bs.reload);
};

// tasks build
export const build = series(buildscripts, buildimages, buildIcons, buildSass, buildPug , parallel(devWatch,connectServer,browserSync));
export default build;