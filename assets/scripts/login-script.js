/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/**
* create variable loginFormElement for form view / Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* create variable inputEmailElement for view of email input / Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* create variable inputPasswordElement for view of password input / Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* create variable expectedEmail for saving information temporarily / Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* create variable expectedPassword for saving information temporarily / Membuat variabel expectedPassword untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* add click action on button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * create variable email for saving the value of the email obtained when press the button / Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;
  
    /**
  * create variable password for saving the value of the password obtained when press the button / Membuat variabel password untuk menyimpan niali password yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  
  /* ensure that the value of email and password matches the stored value || Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* if match, the program moves to "home" page || Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
    
     /* if not, the program shows information that the input is wrong || Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
