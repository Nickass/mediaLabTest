//import plugins
import { src, dest, gulp } from 'gulp';
import notify from 'gulp-notify';
import sprite from 'gulp-svg-sprite';

const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';

const config = {
  mode: {
    symbol: {
      dest: '.',
      sprite: 'sprite',
    }
  } 
};


// task
export const buildIcons = () => {

  return src(dirs.src + '/icons/**/*.svg')
      .pipe(sprite(config))

      .on('error', notify.onError("Error: <%= error.message %>"))

      .pipe(dest(dirs.dest + '/icons/'))
      .pipe(bs.stream());
};