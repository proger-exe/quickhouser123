// Проверка, является ли устройство мобильным
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Функция для редиректа
function redirectIfMobile(url) {
    if (isMobileDevice()) {
        window.location.href = url; // Редирект на заданный URL, если устройство мобильное
    }
}

// Вызов функции для редиректа на мобильных устройствах
redirectIfMobile('');

