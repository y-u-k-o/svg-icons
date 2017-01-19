module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    svgstore: {
        options: {
          prefix : 'svg-', // This will prefix each <g> ID
          includeTitleElement: false
        },
        default : {
          files: {
            'svg-icons.svg': ['svg-icons/*.svg']
          }
        }
    },
    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            mergePaths : true
          },
          {
            cleanupListOfValues: true
          },
          {
            cleanupNumericValues: 2
          }, {
            removeStyleElement: true
          }, {
            removeAttrs: {
              attrs: ['fill', 'style']
            }
          }
        ]
      },
      dist: {
        files: {
          'example/svg-sprite.svg': 'svg-icons.svg'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-svgmin');

  // Default task.
  grunt.registerTask('default', [
    'svgstore',
    'svgmin'
  ]);
};