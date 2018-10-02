//import plugins
import { src, dest, gulp } from 'gulp';
import sass from 'gulp-sass';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';

const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';


// task
export const buildSass = () => {

  return src(dirs.src + '/sass/*.scss')
      .pipe(sass({
        indentedSyntax: false,
        cache: false
      }))

      .on('error', notify.onError("Error: <%= error.message %>"))

      .pipe(autoprefixer({
        browsers: ['> 0%']
      }))

      .pipe(dest(dirs.dest + '/css/'))
      .pipe(bs.stream());
};