// function to generate markdown for README
function generateMarkdown(info) {
  return `# ${info.title}
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${info.UserName}/${info.Title})
  # Description
  ${info.Description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${info.Installation}
  # Usage
  This application is used for ${info.Usage}
  # License
  This project is license under the ${info.License} license.
  # Contributing
  Contributors: ${info.Contributor}
  # Tests
  To run tests, you need to run the following command: ${info.Test}
  # Questions
  If you have any questions about the repo, open an issue or contact ${info.UserName} directly ${info.Email}.
`;
}

module.exports = generateMarkdown;
