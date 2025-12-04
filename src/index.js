const config = require('./config');

// Arch Linux ASCII Art
const archLogo = `
           /\\
          /  \\
         /    \\
        /      \\
       /   ,,   \\
      /   |  |   \\
     /_-''    ''-_\\

`;

// Reset color code
const reset = '\x1b[0m';
const cyan = '\x1b[36m';
const bright = '\x1b[1m';
const yellow = '\x1b[33m';
const green = '\x1b[32m';

function displayProfile() {
  console.clear();
  
  // Display Arch Linux logo with colors
  console.log(cyan + archLogo + reset);
  
  // Display profile info
  console.log(bright + yellow + `═══════════════════════════════════` + reset);
  console.log(bright + green + `  ${config.profile.name}` + reset);
  console.log(bright + yellow + `═══════════════════════════════════` + reset);
  console.log(`\n${bright}Bio:${reset} ${config.profile.bio}\n`);
  
  console.log(`${bright}Contact:${reset}`);
  console.log(`  GitHub:  ${config.profile.github}`);
  console.log(`  Discord: ${config.profile.discord}\n`);
  
  console.log(`${bright}Skills:${reset}`);
  config.skills.forEach(skill => {
    console.log(`  • ${cyan}${skill}${reset}`);
  });
  
  console.log(`\n${bright}Tools and Platforms:${reset}`);
  config.tools.forEach(tool => {
    console.log(`  > ${cyan}${tool}${reset}`);
  });
  
  console.log(`\n${bright}Database and Storage:${reset}`);
  config.databases.forEach(db => {
    console.log(`  > ${cyan}${db}${reset}`);
  });
  
  console.log(`\n${bright}DevOps and Cloud:${reset}`);
  config.devops.forEach(devop => {
    console.log(`  > ${cyan}${devop}${reset}`);
  });
  
  console.log(`\n${bright + yellow}═══════════════════════════════════${reset}\n`);
}

module.exports = { displayProfile, displayMinimal };

function displayMinimal() {
  console.clear();
  
  console.log(`${bright}${config.profile.name}${reset} | ${config.profile.bio}`);
  console.log(`${cyan}${config.profile.github}${reset} | ${config.profile.discord}`);
  console.log('');
  console.log(`${bright}Skills:${reset} ${config.skills.join(' • ')}`);
  console.log(`${bright}Tools:${reset} ${config.tools.map(t => t.split(' ')[0]).join(' • ')}`);
  console.log(`${bright}DBs:${reset} ${config.databases.map(d => d.split(' ')[0]).join(' • ')}`);
  console.log(`${bright}DevOps:${reset} ${config.devops.map(d => d.split(' ')[0]).join(' • ')}`);
  console.log('');
}
