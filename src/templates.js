function generateManager(manager) {
  return `
  <div class="item">
  <div class="upper">
    <h2>${manager.getName()}</h2>
    <h2><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h2>
  </div>
  <div class="lower">
    <p>ID: ${manager.getId()}</p>
    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p>Office number: ${manager.getOfficeNumber()}</p>
  </div>
</div>

    `;
}

function generateEngineer(engineer) {
  return `
  <div class="item">
  <div class="upper">
    <h2>${engineer.getName()}</h2>
    <h2><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h2>
  </div>
  <div class="lower">
    <p>ID: ${engineer.getId()}5</p>
    <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
    <p>
      GitHub:
      <a
        href="https://github.com/${engineer.getGithub()}
        target="_blank"
        rel="noopener noreferrer"
        >${engineer.getGithub()}</a
      >
    </p>
  </div>
</div>

    `;
}

function generateIntern(intern) {
  return `
  <div class="item">
  <div class="upper">
    <h2>${intern.getName()}</h2>
    <h2><i class="fa-solid fa-user-graduate"></i> ${intern.getName()}</h2>
  </div>
  <div class="lower">
    <p>ID: ${intern.getId()}</p>
    <p>Email: <a href=${intern.getEmail()}">${intern.getEmail()}</a></p>
    <p>School: ${intern.getSchool()}</p>
  </div>
</div>

    `;
}

function htmlBuilder(teamHtml) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Team Generator</title>
    </head>
    <body>
      <h1>My Team</h1>
      <div class="container">
      ${teamHtml}
      </div>
    </body>
  </html>
  
    `;
}

function teamGenerator(team) {
  let html = "";
  html += generateManager(team.manager);

  for (let engineer of team.engineers) {
    html += generateEngineer(engineer);
  }
  for (let intern of team.interns) {
    html += generateIntern(intern);
  }
  return htmlBuilder(html);
}

module.exports = teamGenerator;
