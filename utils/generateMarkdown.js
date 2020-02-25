function generateMarkdown(data) {

  return `
# ${data.project}

![license-badge](https://img.shields.io/badge/license-${encodeURI(data.license)}-blue)

## Description
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
#### To install necessary dependencies, run the following command:
\`\`\`
${data.install}
\`\`\`

## Usage
${data.info}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribute}

## Tests
##### To run the tests, run the following command:
\`\`\`
${data.run}
\`\`\`

## Questions
<img src="${data.avatar_url}" style='border-radius: 16px' width='30' />

If you have any questions about the repo, open an issue or contact [${data.username}](${data.url}) directly at ${data.contact}.

`;
}

module.exports = generateMarkdown;

