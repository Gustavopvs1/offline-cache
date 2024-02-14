if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}
/* if (window.caches) {
    //console.log('soporta cache')
    //Crear el primer cache
    caches.open('test-1')
    caches.open('test-2')

    //Verificar si existe un cache
    caches.has('test-1').then(console.log)

    caches.delete('test-1').then(console.log)

    caches.open('cache-v1').then(cache => {
        cache.add('/index.html')
        cache.addAll([
            'logo192.png',
            'logo512.png',
            '/pages/offline.html'
        ]).then(()=>{
           cache.put('index.html', new Response('Interceptando archivo index'))
        })
        cache.keys().then(console.log)
    })
} */