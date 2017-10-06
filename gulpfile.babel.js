// -----------------------------------------------------------------------
//
//  GULP TASKS
//
// -----------------------------------------------------------------------

// ----------------------------------------------------
// Dependencies
// ----------------------------------------------------
import gulp from 'gulp'
import maps from 'gulp-sourcemaps'
import sass from 'gulp-ruby-sass'
import svgmin from 'gulp-svgmin'
import svgstore from 'gulp-svgstore'

// ----------------------------------------------------
// Paths
// ----------------------------------------------------
const paths = {
  icons:  'src/icons/*',
  images:  'src/img/*',
  scripts: 'src/js/*.js',
  styles:  'src/sass/*.s*ss'
};

// ----------------------------------------------------
// Convert, minify and sourcemap the styles
// ----------------------------------------------------
gulp.task('styles', () => {
  return sass(paths.styles, {
    style: 'compressed',
    sourcemap: true })
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest('static/css'))
  }
);

// ----------------------------------------------------
// Join and optimize SVG icons
// ----------------------------------------------------
gulp.task('icons', () => {
  return gulp.src(paths.icons)
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest('static/svg'))
});

// ----------------------------------------------------
// Watcher
// ----------------------------------------------------
gulp.task('watch', () => {
  gulp.watch(paths.styles, ['styles'])
});

// ----------------------------------------------------
// Default task: run gulp all at once
// ----------------------------------------------------
gulp.task('default', ['styles', 'watch'])
