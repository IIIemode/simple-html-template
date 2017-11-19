const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');

// Автоперезагрузка при изменении файлов в папке `dist`:
// Принцип: меняем файлы в `/src`, они обрабатываются и переносятся в `dist` и срабатывает автоперезагрузка.
// Это таск нужен только при локальной разработке.
gulp.task('livereload', () => {
    browserSync.create();

    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        files: [
            'dist/**/*.*'
        ]
    });
});

gulp.task('styles', () => {
    gulp.src('src/less/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        .pipe(process.env.NODE_ENV == 'production' ? imagemin() : gulp.dest('./dist/img'));  
});

gulp.task('scripts', () => {
    gulp.src(['src/js/**/*.*'])
        .pipe(gulp.dest('./dist/js')); // Помещаем в папку './dist/js'
});

gulp.task('js', () => {
    gulp.src([ // Берем script.js и библиотеку jquery
        'node_modules/jquery/dist/jquery.min.js',
        'src/js/**/scripts.js'
    ])
        .pipe(concat('script.js')) // Собираем их в кучу в новом файле script.js
        // .pipe(uglify()) // Сжимаем scripts.js
        .pipe(gulp.dest('./dist/js')); // Помещаем в папку './dist/js'
});

gulp.task('html', () => {
    gulp.src('src/index.ejs')
        .pipe(ejs().on('error', gutil.log))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

// Отслеживание изменений в файлах, нужно только при локальной разработке
gulp.task('watch', () => {
    gulp.watch('src/less/**/*.less', ['styles']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.ejs', ['html']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch('src/js/**/*.*', ['js']);
});

gulp.task('default', ['styles', 'html', 'img', 'scripts', 'js', 'livereload', 'watch']);
gulp.task('prod', ['styles', 'html', 'img', 'scripts', 'js']);
