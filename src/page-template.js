// engineer html
const generateCards = employeeArr => {
    // console.log('is this the undefined?' + employeeArr);
    // console.log(employeeArr.filter(role));
    return `
    ${employeeArr
        .filter(({ role }) => role === 'Manager')
        .map(({name, id, email, role, officeNumber}) => {
        return `
        <div class="card col-sm-3 g-3">
        <div class="card-header">         
            ${name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${email}" class="card-link">${email}</a></li>
                <li class="list-group-item"><i class="fas fa-mug-hot"></i> ${role}</li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>
        `;
        })
    .join('')}
     
    ${employeeArr
        .filter(({ role }) => role === 'Engineer')
        .map(({name, id, email, role, github}) => {
        return `
        <div class="card col-sm-3 g-3">
        <div class="card-header">         
            ${name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${email}" class="card-link">${email}</a></li>
                <li class="list-group-item"><i class="fas fa-laptop-code"></i> ${role}</li>
                <li class="list-group-item"><i class="fab fa-github mr-2"></i>Github: <a href="https://${github}" class="card-link"> Profile </a></li>
            </ul>
        </div>
        `;
        })
    .join('')}

    ${employeeArr
        .filter(({ role }) => role === 'Intern')
        .map(({name, id, email, role, school}) => {
        return `
        <div class="card col-sm-3 g-3">
        <div class="card-header">         
            ${name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${email}" class="card-link"> ${email}</a></li>
                <li class="list-group-item"><i class="fas fa-user-graduate"></i> ${role}</li>
                <li class="list-group-item"><i class="fas fa-university"></i> ${school}</li>
            </ul>
        </div>
        `;
        })
    .join('')}
    `;
}


module.exports = employeeArr => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">  
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>        
    </head>

    <body>
    <header>
        <h1 class="container col-12"> My Team</h1>
    </header>
    <section class="container col-12" id="teamCard">
            <div class="row card-holder">
               ${generateCards(employeeArr)}             
            </div>
    </section>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <h3>&copy; ${new Date().getFullYear()} by David Shaw </h3>
        </div> 
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};