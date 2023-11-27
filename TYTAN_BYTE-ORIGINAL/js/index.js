const user = JSON.parse(localStorage.getItem('login_success')) || false;
const userNameElement = document.querySelector('#user-name');
const logout = document.querySelector('#logout');
const loginButton = document.querySelector('#loginButton'); // Asume que hay un botón o enlace con el ID 'loginButton'
const logoElement = document.querySelector('#logo'); // Asume que hay un elemento con el ID 'logo'

if (user) {
    // Si hay un usuario, muestra el nombre del usuario en la página
    if (user.name) {
        userNameElement.textContent = `Bienvenido, ${user.name}`;
    }

    logout.addEventListener('click', () => {
        alert('Que tenga un buen dia ;3!');
        localStorage.removeItem('login_success');
        window.location.href = './index.html';
    });

    // Oculta el botón de inicio de sesión si hay una sesión iniciada
    loginButton.style.display = 'none';
    
    // Muestra el nombre del usuario y oculta el logo
    userNameElement.style.display = 'block';
    logoElement.style.display = 'none';
} else {
    // Si no hay usuario, oculta el botón de cierre de sesión y muestra el botón de inicio de sesión
    logout.style.display = 'none';
    loginButton.style.display = 'block'; // Asume que inicialmente ocultas el botón de inicio de sesión
    
    // Oculta el nombre del usuario y muestra el logo
    userNameElement.style.display = 'none';
    logoElement.style.display = 'block';
}

// Puedes agregar un evento al botón de inicio de sesión para redirigir a la página de inicio de sesión
loginButton.addEventListener('click', () => {
    window.location.href = '../login/login.html';
});


// SCROLL
document.addEventListener('DOMContentLoaded', () => {
    const goToTopLink = document.getElementById('go-to-top');

    goToTopLink.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
});
//FIN DEL SCROLL 
//scrollreveal

window.sr = ScrollReveal();

    ScrollReveal().reveal('.head', 
    { delay: 500,
      origin:'left',
      distance:'-90px',
    });
     
    ScrollReveal().reveal('.main_titulo', 
    { delay: 600,
      origin:'top',
      distance:'-100px',
    }); 
    ScrollReveal().reveal('.sub_titulo', 
    { delay: 700,
      origin:'botton',
      distance:'-100px',
    }); 
    ScrollReveal().reveal('.btn_home', 
    { delay: 800,
      origin:'botton',
      distance:'-100px',
    });
   
    
   