const autoScroll = setInterval(() => {
    window.scrollBy(0, 10);
    

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        clearInterval(autoScroll);
    }
}, 0.1);
