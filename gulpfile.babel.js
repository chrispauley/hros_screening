//
// gulp views
// gulp sass
// gulp serve

import gulp from "gulp";
import pug from "gulp-pug";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import browserSync from "browser-sync";
import markdown from 'gulp-markdown';

const paths = {
  styles: {
    src: "./src/styles/**/*.scss",
    dest: "public/styles/"
  },
  views: {
    src: "./src/templates/*.pug",
    dest: "public"
  }
};

const md_options = {
  gfm: true,
  baseUrl: "http://screening.hrsres.com:8008/wiki/",
  ext: 'html'
}

gulp.task('markdown', () =>
  gulp.src('./src/schema/screening_wiki/Home.md')
      .pipe(markdown(md_options))
      .pipe(gulp.dest('public/wiki'))
);

gulp.task("views", function() {
  return gulp
    .src(paths.views.src)
    .pipe(
      pug({
        doctype: "html",
        pretty: true
      })
    )
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", ["views", "sass"], function() {
  gulp.watch("./src/styles/**/*.scss", ["sass"]);
  gulp.watch("./src/templates/*.pug", ["views"]);
});

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};

gulp.task("sass", function() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("serve", ['sass', 'views', 'watch'],() => {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  })

});
