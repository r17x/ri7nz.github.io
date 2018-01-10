var gulp        = require(     'gulp'   );

var sass        = require(  'gulp-sass' );

var postcss     = require('gulp-postcss');

/**
 * Ri7nz Function
 *
 * @param name string  
 *
 * @param source string
 * 
 * @param build string
 *
 */

const ri7nz     = function(name, source='src', build='build'){

    this.name         = name;

    this.buildFolder  = build;

    this.sourceFolder = source;

    this.style        = () => {
        
        var tailwindcss = require('tailwindcss');

        return gulp.src( this.sourceFolder + '/**/*.scss' )
                                            
                .pipe(postcss([
                    tailwindcss( './' + this.name + '.js' ),
                    require( 'autoprefixer' ) 
                ]))

                .pipe( sass().on('error', sass.logError) )

                .pipe( gulp.dest( this.buildFolder + '/' ) );
    
    };

    this.default    = () => {
        
        gulp.watch( this.sourceFolder + '/**/*.scss', ['style']);
    
    };

};

myGulp = new ri7nz('ri7nz');

//gulp.task( 'style', myGulp.style() );
//on Debug
gulp.task( 'style', () => {

        var tailwindcss = require('tailwindcss');

        return gulp.src( myGulp.sourceFolder + '/**/*.scss' )
                                            
                .pipe(postcss([
                    tailwindcss( './' + myGulp.name + '.js' ),
                    require( 'autoprefixer' ) 
                ]))

                .pipe( sass().on('error', sass.logError) )

                .pipe( gulp.dest( myGulp.buildFolder + '/' ) );
});

//gulp.task( 'default', myGulp.default() );
//on debug
gulp.task( 'default', () => {

    gulp.watch( myGulp.sourceFolder + '/**/*.scss', ['style']);

} );
