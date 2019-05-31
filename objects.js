let user = {
    username: 'Please enter your name',
    age: 20,
    bio: 'Please enter your bio',
    location: 'Please enter your location',
};

const updateDom = () => {
    document.getElementById('username').innerText = user.username;
    document.getElementById('age').innerText = user.age;
    document.getElementById('bio').innerText = user.bio;
    document.getElementById('location').innerText = user.location;
}

const updateUser = (field, id) => {
    var input = document.getElementById(field).value
    user[id] = input;
    updateDom();
};

updateDom();
