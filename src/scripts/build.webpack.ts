import webpack from 'webpack';
import config from '../webpack/config/build.webpack';
import chalk from 'chalk';
// import fs from 'fs';

webpack(config, (err, stats) => {
  if (err) {
    console.error(JSON.stringify(err.stack) || JSON.stringify(err));
    return;
  }
  if (stats) {
    const info = stats.toJson();
    // fs.writeFileSync('./stats.json', JSON.stringify(info)) //分析网站：http://webpack.github.io/analyse/
    if (stats.hasErrors()) {
      info.errors?.forEach((error) => {
        console.log(chalk.red(error.message));
      });
    }
  }
});
