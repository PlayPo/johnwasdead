const autoScroll = setInterval(() => {
    window.scrollBy(0, 10);
    
    // Detener si llegamos al final de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        clearInterval(autoScroll);
    }
}, 0);