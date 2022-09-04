var userDetails = [
  {
    userName: 'pavanteja',
    userPassword: '1234'
  }
];
getUser = prompt('Enter user name');
getPass = prompt('Enter password');
function confirm(user, pass) {
  if (
    user === userDetails[0].userName &&
    pass === userDetails[0].userPassword
  ) {
    console.log('Welcome!');
  } else {
    alert('Incorrect username or password');
  }
}
confirm(getUser, getPass);
