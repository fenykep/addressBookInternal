const fs = require('fs');
const pug = require('pug');
const sass = require('sass');

// Read the JSON data from the file
const data = JSON.parse(fs.readFileSync(`src/${process.env.TEST_DATA_FILE}.json`, 'utf8'));

// Render the index.pug file with the data
const html = pug.renderFile('src/index.pug', { cities: data.cities });

// Write the rendered HTML to the file
fs.writeFileSync('public/index.html', html);

// Render the style.scss file to style.css
const result = sass.renderSync({
  file: 'src/style.scss',
  outputStyle: 'compressed'
});

// Write the rendered CSS to the file
fs.writeFileSync('public/style.css', result.css);
