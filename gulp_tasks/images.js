//import plugins
import {src, dest, gulp} from 'gulp';
import notify from 'gulp-notify';

const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';

export const buildimages = () => {

  return src(dirs.src + "/images/**/*.*")
      .pipe(dest(dirs.dest + '/images/'))
      .on('error', notify.onError("Error: <%= error.message %>"))
      .pipe(bs.stream());
};