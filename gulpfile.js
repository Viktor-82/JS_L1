const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function buildJs() {
    return gulp.src('src/*.js') // это папка где лежат js файлы
    .pipe(sourcemaps.init())
    .pipe(concat('app.js')) // это как будет называться собранный файл
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dist/')); // папка в которую будем складывать файл
}
/* Следит за всеми файлами в src/ с расширением .js и 
применяет к ним в случае изменение функцию buildJs */
gulp.watch('src/*.js', buildJs); 

exports.default = buildJs; 