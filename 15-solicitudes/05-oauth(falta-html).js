// app.js
document.addEventListener('DOMContentLoaded', function () {
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: '338690250490-vgm6eujb68h7jdg3ht3u9e7joqi6dkh3.apps.googleusercontent.com'
      }).then(function () {
        renderSignInButton();
      });
    });
  });
  
  function renderSignInButton() {
    gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }
  
  function onSuccess(googleUser) {
    console.log('Usuario conectado: ' + googleUser.getBasicProfile().getName());
  }
  
  function onFailure(error) {
    console.error('Error en la conexión: ' + JSON.stringify(error));
  }
  