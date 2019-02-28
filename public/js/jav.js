( function() {
    const image = document.querySelectorAll( '.img-wrap' );
    
    const observer = new IntersectionObserver( function( entries ) {
        entries.forEach( function( entry ) {
            if( entry.intersectionRatio > 0 ) {
                entry.target.classList.add( 'img-animation' );
            } else {
                entry.target.classList.remove( 'img-animation' );
            }
        });
    });
    
    Array.prototype.forEach.call( image, function( img ) {
        observer.observe( img );
    });
})();
