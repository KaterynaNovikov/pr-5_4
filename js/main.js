const modalAuth = document.querySelector('.modal-auth');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const logInForm = document.getElementById('logInForm');
const closeAuthButton = document.querySelector('.close-auth');
const authButton = document.querySelector('.button-auth');
const cardsContainer = document.querySelector('.cards-restaurants');
import initializeSwiper from './swiper.js';

document.addEventListener('DOMContentLoaded', () => {

    initializeSwiper();
});

let isAuthorized = false; 
let scrollPosition = 0;

function openModalAuth() {
    scrollPosition = window.scrollY;
    modalAuth.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
}

function closeModalAuth() {
    modalAuth.classList.remove('active'); 
    document.body.style.overflow = ''; 
    window.scrollTo(0, scrollPosition); 
    clearErrorStyles(); 
}

function clearErrorStyles() {
    loginInput.classList.remove('error');
    passwordInput.classList.remove('error');
}

function validateInputs() {
    let isValid = true;

    if (!loginInput.value.trim()) {
        loginInput.classList.add('error');
        isValid = false;
    } else {
        loginInput.classList.remove('error');
    }

    if (!passwordInput.value.trim()) {
        passwordInput.classList.add('error');
        isValid = false;
    } else {
        passwordInput.classList.remove('error');
    }

    return isValid;
}

function renderCards() {
    const restaurants = [
        {
            title: "Піца плюс",
            time: "50 хвилин",
            rating: "4.5",
            price: "від 200 ₴",
            category: "Піца",
            img: "img/pizza-plus/preview.jpg",
        },
        {
            title: "Танукі",
            time: "60 хвилин",
            rating: "4.5",
            price: "від 1 200 ₴",
            category: "Суші, роли",
            img: "img/tanuki/preview.jpg",
        }
    ];

    restaurants.forEach(restaurant => {
        const cardHTML = `
            <a href="#" class="card card-restaurant">
                <img src="${restaurant.img}" alt="${restaurant.title}" class="card-image">
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title">${restaurant.title}</h3>
                        <span class="card-tag tag">${restaurant.time}</span>
                    </div>
                    <div class="card-info">
                        <div class="rating">${restaurant.rating}</div>
                        <div class="price">${restaurant.price}</div>
                        <div class="category">${restaurant.category}</div>
                    </div>
                </div>
            </a>
        `;
        cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

cardsContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.card-restaurant');
    if (card && !isAuthorized) {
        event.preventDefault(); 
        openModalAuth();
    }
});

authButton.addEventListener('click', () => {
    openModalAuth();
});

closeAuthButton.addEventListener('click', () => {
    closeModalAuth();
});

modalAuth.addEventListener('click', (event) => {
    if (event.target === modalAuth) {
        closeModalAuth();
    }
});

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateInputs()) {
        alert('Авторизація успішна!');
        isAuthorized = true; 
        closeModalAuth();
    } else {
        alert('Заповніть всі поля!');
    }
});

renderCards();
