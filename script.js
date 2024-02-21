// Проверка, является ли устройство мобильным
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Функция для редиректа на мобильные устройства
function redirectIfMobile(url) {
    if (isMobileDevice()) {
        window.location.href = url; // Редирект на заданный URL, если устройство мобильное
    }
}

// Функция для редиректа на ПК
function redirectIfDesktop(url) {
    if (!isMobileDevice()) {
        window.location.href = url; // Редирект на заданный URL, если устройство не мобильное
    }
}

// Вызов функции для редиректа на мобильных устройствах
redirectIfMobile('./mobile/');

// Вызов функции для редиректа на ПК
redirectIfDesktop('./index/');

