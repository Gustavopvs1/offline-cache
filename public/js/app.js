if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}

if (window.caches) {
    caches.open('test-1').then(cache => {

    })
    caches.open('test-2').then(cache => {
    
    })
    caches.delete('test-1').then(deleted => {
        console.log('Cache test-1 deleted', deleted);
    })

    // save files in cache
    caches.open('cache-1').then(cache => {
        // add only one file
        cache.add('/index.html')
        // add multiple files
        cache.addAll([
            'logo192.png',
            'logo512.png',
            'pages/offline.html',
        ]).then(() => {
            // delete a file
            cache.delete('logo192.png')
        })
        // verify if a file exists in cache
        cache.match('index.html').then(response => {
            response.text().then(console.log)
            if (response) {
                console.log('File exists in cache', response);
            }
        })
    })
}