//import plugins
import {src, dest, gulp} from 'gulp';
import notify from 'gulp-notify';

const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';

export const buildscripts = () => {

  return src(dirs.src + "/scripts/**/*.*")
      .pipe(dest(dirs.dest + '/scripts/'))
      .on('error', notify.onError("Error: <%= error.message %>"))
      .pipe(bs.stream());
};