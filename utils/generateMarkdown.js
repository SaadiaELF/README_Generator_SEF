// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ## Table of content :

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)
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
  ${data.license}\n

  ## 7. Questions\n
  If you have any question , please you can visit my GitHub profile : [Github](https://github.com/${data.github} or you can send my an email via my email address : ${data.email}.
`;
}

module.exports = generateMarkdown;
