var gulp = require('gulp'),
    print = require('gulp-print'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed');
    
var DEST = 'build';

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString())
  this.emit('end')
}
gulp.task('js', function() {
    return gulp.src('app/**/*.js')
        .pipe(changed(DEST))
        .pipe(print())
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', swallowError)
        .pipe(gulp.dest(DEST));
});

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .on('error', swallowError)
        .pipe(gulp.dest('build/libs'));
});

gulp.task('build', ['js'], function(){
    return gulp.src(['app/**/*.html', 'app/**/*.css'])
            .pipe(print())
            .on('error', swallowError)
            .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    var watcher = gulp.watch('app/**/*.*', ['build']);
    watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type);
    });
});

gulp.task('default', ['libs','watch']);