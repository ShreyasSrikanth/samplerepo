var form = document.getElementById('my-form');

form.addEventListener('submit',localStore);

function localStore(e){
    e.preventDefault();

    name = document.getElementById('Name').value;
    email = document.getElementById('email').value;

    var user = { name: name, email: email };

    // Convert the object to a JSON string
    var userJSON = JSON.stringify(user);

    // Store the JSON string in local storage
    localStorage.setItem('user', userJSON);

    //clear the form
    document.getElementById('Name').value = '';
    document.getElementById('email').value = '';


    alert('User data stored in local storage!');
}

