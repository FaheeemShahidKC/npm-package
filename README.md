# Project Validation

A npm package for common validation functionalities in your projects.

<!DOCTYPE html>
<html lang="en">

<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Project Validation</title>
     <style>
          body {
               font-family: Arial, sans-serif;
               margin: 0;
               padding: 0;
               background-color: #f4f4f4;
          }

          header {
               background-color: #333;
               color: #fff;
               padding: 1rem;
               text-align: center;
          }

          section {
               max-width: 800px;
               margin: 2rem auto;
               padding: 1rem;
               background-color: #fff;
               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
               color: #333;
          }

          code {
               background-color: #f4f4f4;
               padding: 0.2rem 0.5rem;
               border: 1px solid #ccc;
               border-radius: 4px;
               font-family: monospace;
          }

          pre {
               background-color: #f4f4f4;
               padding: 1rem;
               overflow-x: auto;
          }

          ul {
               list-style-type: none;
               padding: 0;
          }

          li {
               margin-bottom: 0.5rem;
          }
     </style>
</head>

<body>

     <header>
          <h1>Project Validation</h1>
     </header>

     <section>
          <h2>Installation</h2>
          <pre><code>npm install project-validation</code></pre>

          <h2>Usage</h2>

          <h3>Email Validation</h3>
<pre><code>const { validateEmail } = require('project-validation');

const email = 'test@example.com';

if (validateEmail(email)) {

     console.log('Email is valid');

} else {

     console.log('Email is not valid');

}

</code></pre>

          <!-- Repeat similar sections for other functionalities -->

          <h2>Configuration</h2>
          <p>No additional configuration is required. The package is ready to use out of the box.</p>

          <h2>Contributing</h2>
          <p>Feel free to sned a pull request to contribute the development of this package. 

          <h2>License</h2>
          <p>This project is licensed under the MIT License.
          </p>
     </section>

</body>

</html>