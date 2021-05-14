// engineer html
const generateCards = employeeArr => {
    return `
    <div class="card col-sm-3 g-3">
        <div class="card-header">
        ${employeeArr.map(({name, id, email, role, confirmAddEmployee, officeNumber, github, school }) => {
            return `
            ${employeeArr.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employeeArr.id}</li>
                <li class="list-group-item">${employeeArr.email}</li>
                <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
            </ul>
        </div>
        `;
        })}
        <div class="card col-sm-3 g-3">
        <div class="card-header">
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
        </ul>
    </div>
    `
    for(let i = 0; i < employeeArr.length; i++) {
        if(employeeArr[i].role === 'Manager') {
            console.log('this is a manager');
        } else if(employeeArr[i].role === 'Engineer'){
            console.log('this is an engineer');
        } else if(employeeArr[i].role === 'Intern'){
            console.log('this is an Intern');
        }
    }
}
/* <div class="card col-sm-3 g-3">
    <div class="card-header">
    Featured
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
    </ul>
</div>

// everyone else?
<div class="card col-sm-3 g-3">
    <div class="card-header">
        Featured
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        </ul>
</div> */

module.exports = employeeArr => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">  
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