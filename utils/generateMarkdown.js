// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let str;
  switch (license) {
    case 'MIT':
      str = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      break;
    case 'The Unlicense':
      str = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
      break;
    case 'Boost Software License 1.0':
      str = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
      break;
    case 'Apache License 2.0':
      str = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
      break;
    case 'None':
      str = ''
      break;
  }
  return str;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let str;
  switch (license) {
    case 'MIT':
      str = '(https://opensource.org/licenses/MIT)'
      break;
    case 'The Unlicense':
      str = '(http://unlicense.org/)'
      break;
    case 'Boost Software License 1.0':
      str = '(https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'Apache License 2.0':
      str = '(https://opensource.org/licenses/Apache-2.0'
      break;
    case 'None':
      str = ''
      break;
  }
  return str;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const myLicense = data.license;
  return `# ${data.title} ${renderLicenseBadge(myLicense)} ${renderLicenseLink(myLicense)}\n
  
  ## Table of content :

  1. [Description](#1.-description)
  2. [Installation](#2.-installation)
  3. [Usage](#3.-usage)
  4. [Contributing](#4.-contributing)
  5. [Tests](#5.-tests)
  6. [License](#6.-license)
  7. [Questions](#7.-questions)
\n
  ## 1. Description\n
  ${data.description}\n

  ## 2. Installation\n
  ${data.installation}\n

  ## 3. Usage\n
  ${data.usage}\n

  ## 4. Contributing\n
  ${data.Contribution}\n
  
  ## 5. Tests\n
  ${data.test}\n

  ## 6. License\n
  \n

  ## 7. Questions\n
  If you have any question , please you can visit [my GitHub profile] (https://github.com/${data.github}) or you can send me an email via my email address : ${data.email}.
`;
}

module.exports = generateMarkdown;
