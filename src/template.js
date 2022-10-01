// create the team
const generateTeam = team => {
    // create the manager html
    const generateManager = manager => {
        return `
        <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-0 shadow">
          <div class="card-body text-center">
            <h5 class="card-title mb-0 p-2">${manager.getRole()}</h5>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Name: ${manager.getName()} </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Employer ID: ${manager.getId()} </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Office Number: ${manager.getOfficeNumber()} </div>
          </div>
        </div>
      </div>
        `;
    };
    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-0 shadow">
          <div class="card-body text-center">
            <h5 class="card-title mb-0 p-2">${engineer.getRole()}</h5>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Name: ${engineer.getName()} </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Employer ID: ${engineer.getId()} </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a> </div>
          </div>
        </div>
      </div>
        `;
    };
    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-0 shadow">
          <div class="card-body text-center">
            <h5 class="card-title mb-0 p-2">${intern.getRole()}</h5>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Name: ${intern.getName()} </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Employer ID: ${intern.getId()} </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </div>
            <div class="card-text text-black-50 border border-dark p-2 m-2">School: ${intern.getSchool()} </div>
          </div>
        </div>
      </div>
        `;
    };
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return html.join("");
}
// create the html for the page structure
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Info</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css" />
    </head>
    <body>
      <!-- Header -->
      <header class="bg-primary text-center py-5 mb-4">
        <div class="container">
          <h1 class="fw-light text-white">Meet the Team</h1>
        </div>
      </header>
      <!-- Page Content -->
      <div class="container">
        <div class="row">
          ${generateTeam(team)}
        </div>
      </div>
      <script src="/assets/js/index.js"></script>
    </body>
    </html>
    `;
};