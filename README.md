# Project-pack
A npm package for common validation functionalities and other stuffs in your projects.

## Installation
Install the package using npm:

npm install project-pack

# Example
const { validateEmail } = require('project-pack');

const email = 'test@example.com';
if (validateEmail(email)) {
  console.log('Email is valid');
} else {
  console.log('Email is not valid');
}

# Configuration
No additional configuration is required. The package is ready to use out of the box.

# Contributing
Feel free to contribute to the development of this package.

# License
This project is licensed under the MIT License