    // SNOW
    $( document ).ready( function() {
        $().flurry({
            height: 700,
            speed: 9000,
            wind: 100,
            variance: 80,
            container: $('main')
        });
    });

    // = = = = = MORPHING TIME! = = = = = =

    MorphSVGPlugin.convertToPath('polygon'); 

    var morph = 0;
    var image = '';
    var forward = true;

    $('main').on('click', '.facebook', function(){      

        FB.ui(
          {
            method: 'feed',
            link: 'http://www.nerdyholidays.com/' + image,
          },
          function(response) {
            // if (response && !response.error_message) {
            //   alert('Posting completed.');
            // } else {
            //   alert('Error while posting.');
            // }
          }
        );
    });

    $('main').on('click', '.next', function(){        
        forward = true;
        $('#nerdyHolidays').trigger('click');
    });
    $('main').on('click', '.prev', function(){
        forward = false;
        $('#nerdyHolidays').trigger('click');
    });

    $(document).keydown(function(event){
        if($('aside.lightBox').is(':visible')){
            if (event.which == 39) {
              // forward = true;
              $('.infoBurst a').trigger('click');
            } else if (event.which == 37) {
              // forward = false;
              $('.infoBurst a').trigger('click');
            }
        } else {
            if (event.which == 39) {
                forward = true;
                $('#nerdyHolidays').trigger('click');
            } else if (event.which == 37) {
                forward = false;
                $('#nerdyHolidays').trigger('click');
            }
        }
    });

    $('#nerdyHolidays').click(function(){

        $('nav.initial').css('display','flex');

        var chosen;

        if (forward) {
            chosen = morph + 1;
        } else {
            chosen = morph - 1;
        }

        if (chosen < 1) {
            chosen = 5;
        } else if (chosen > 5) {
            chosen = 1;
        }

        // HOGSWATCH
        if (chosen == 1) {
            image = 'hogswatch.html';
            hogswatch();
        // FESTIVUS
        } else if (chosen == 2) {
            image = 'festivus.html';
           festivus();
        // DECEMBERWEEN
        } else if (chosen == 3) {
            image = 'decemberween.html';
            decemberween();
        // ROBANUKAH
        } else if (chosen == 4) {
            image = 'robanukah.html';
            robanukah();
        // WINTERVEIL
        } else if (chosen == 5) {
            image = 'winterveil.html';
            winterveil()
        }

        morph = chosen;

    });


    // for media queries - on click of about burst, show light box
    $('.infoBurst a').click(function(){
        $('aside').toggleClass('lightBox');
            if($('p.override').is(':visible')){
                $('.infoBurst a span').text('close');  
                $('nav .prev, nav .next').css('visibility','hidden');  
            } else {
                $('.infoBurst a span').text('about');
                $('nav .prev, nav .next').css('visibility','visible');  
            }
    });

    // click "x", trigger close button
    $('.close').click(function(){
        $('.infoBurst a').trigger('click');
    });

    var hogswatch = function() {
        TweenLite.to('#poly01', 1.75, {morphSVG: {shape:'#poly01b'}, stroke:'#6A0000', fill:'#BE0808', ease:Power4.easeInOut});
        TweenLite.to('#poly02', 1.75, {morphSVG: {shape:'#poly02b'}, stroke:'#979797', fill:'#551313', ease:Power4.easeInOut});
        TweenLite.to('#poly03', 1.75, {morphSVG: {shape:'#poly03b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly04', 1.75, {morphSVG: {shape:'#poly04b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly05', 1.75, {morphSVG: {shape:'#poly05b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly06', 1.75, {morphSVG: {shape:'#poly06b'}, stroke:'#510500', fill:'#741306', ease:Power4.easeInOut});
        TweenLite.to('#poly07', 1.75, {morphSVG: {shape:'#poly07b'}, stroke:'#730000', fill:'#E00B0B', ease:Power4.easeInOut});
        TweenLite.to('#poly08', 1.75, {morphSVG: {shape:'#poly08b'}, stroke:'#6A0000', fill:'#BE0808', ease:Power4.easeInOut});
        TweenLite.to('#poly09', 1.75, {morphSVG: {shape:'#poly09b'}, stroke:'#6A0000', fill:'#BE0808', ease:Power4.easeInOut});
        TweenLite.to('#poly10', 1.75, {morphSVG: {shape:'#poly10b'}, stroke:'#6A0000', fill:'#BE0808', ease:Power4.easeInOut});
        TweenLite.to('#poly11', 1.75, {morphSVG: {shape:'#poly11b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});  
        TweenLite.to('#poly12', 1.75, {morphSVG: {shape:'#poly12b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly13', 1.75, {morphSVG: {shape:'#poly13b'}, stroke:'#D7D7D7', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly14', 1.75, {morphSVG: {shape:'#poly14b'}, stroke:'#D7D7D7', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly15', 1.75, {morphSVG: {shape:'#poly15b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly16', 1.75, {morphSVG: {shape:'#poly16b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly17', 1.75, {morphSVG: {shape:'#poly17b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly18', 1.75, {morphSVG: {shape:'#poly18b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly19', 1.75, {morphSVG: {shape:'#poly19b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly20', 1.75, {morphSVG: {shape:'#poly20b'}, stroke:'#6A0000', fill:'#BF0808', ease:Power4.easeInOut});
        TweenLite.to('#poly21', 1.75, {morphSVG: {shape:'#poly21b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly22', 1.75, {morphSVG: {shape:'#poly22b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly23', 1.75, {morphSVG: {shape:'#poly23b'}, stroke:'#000000', fill:'#3A3832', ease:Power4.easeInOut});
        TweenLite.to('#poly24', 1.75, {morphSVG: {shape:'#poly24b'}, stroke:'#000000', fill:'#3A3832', ease:Power4.easeInOut});
        TweenLite.to('#poly25', 1.75, {morphSVG: {shape:'#poly25b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly26', 1.75, {morphSVG: {shape:'#poly26b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly27', 1.75, {morphSVG: {shape:'#poly27b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly28', 1.75, {morphSVG: {shape:'#poly28b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly29', 1.75, {morphSVG: {shape:'#poly29b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly30', 1.75, {morphSVG: {shape:'#poly30b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly31', 1.75, {morphSVG: {shape:'#poly31b'}, stroke:'#D7D7D7', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly32', 1.75, {morphSVG: {shape:'#poly32b'}, stroke:'#D7D7D7', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly33', 1.75, {morphSVG: {shape:'#poly33b'}, stroke:'#D7D7D7', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly34', 1.75, {morphSVG: {shape:'#poly34b'}, stroke:'#D6D6D6', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly35', 1.75, {morphSVG: {shape:'#poly35b'}, stroke:'#979797', fill:'#BE0808', ease:Power4.easeInOut});
        TweenLite.to('#poly36', 1.75, {morphSVG: {shape:'#poly36b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly37', 1.75, {morphSVG: {shape:'#poly37b'}, stroke:'#979797', fill:'#E5E0C3', ease:Power4.easeInOut});
        TweenLite.to('#poly38', 1.75, {morphSVG: {shape:'#poly38b'}, stroke:'#000000', fill:'#3A3832', ease:Power4.easeInOut});
        TweenLite.to('#poly39', 1.75, {morphSVG: {shape:'#poly39b'}, stroke:'#000000', fill:'#275EAF', ease:Power4.easeInOut});
        TweenLite.to('#poly40', 1.75, {morphSVG: {shape:'#poly40b'}, stroke:'#000000', fill:'#275EAF', ease:Power4.easeInOut});
        TweenLite.to('#poly41', 1.75, {morphSVG: {shape:'#poly41b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly42', 1.75, {morphSVG: {shape:'#poly42b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly43', 1.75, {morphSVG: {shape:'#poly43b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly44', 1.75, {morphSVG: {shape:'#poly44b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly45', 1.75, {morphSVG: {shape:'#poly45b'}, stroke:'#979797', fill:'#551414', ease:Power4.easeInOut});
        TweenLite.to('#poly46', 1.75, {morphSVG: {shape:'#poly46b'}, stroke:'#1D1D1D', fill:'#3C2096', ease:Power4.easeInOut});
        TweenLite.to('#poly47', 1.75, {morphSVG: {shape:'#poly47b'}, stroke:'#1D1D1D', fill:'#211C47', ease:Power4.easeInOut});
        TweenLite.to('#poly48', 1.75, {morphSVG: {shape:'#poly48b'}, stroke:'#1D1D1D', fill:'#4D4174', ease:Power4.easeInOut});
        TweenLite.to('#poly49', 1.75, {morphSVG: {shape:'#poly49b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly50', 1.75, {morphSVG: {shape:'#poly50b'}, stroke:'#520500', fill:'#A01300', ease:Power4.easeInOut});
        TweenLite.to('#poly51', 1.75, {morphSVG: {shape:'#poly51b'}, stroke:'#510500', fill:'#741306', ease:Power4.easeInOut});
        TweenLite.to('#poly52', 1.75, {morphSVG: {shape:'#poly52b'}, stroke:'#070706', fill:'#3A3932', ease:Power4.easeInOut});
        TweenLite.to('#poly53', 1.75, {morphSVG: {shape:'#poly53b'}, stroke:'#510500', fill:'#741306', ease:Power4.easeInOut});
        TweenLite.to('#poly54', 1.75, {morphSVG: {shape:'#poly54b'}, stroke:'#510500', fill:'#741306', ease:Power4.easeInOut});
        TweenLite.to('#poly55', 1.75, {morphSVG: {shape:'#poly55b'}, stroke:'#510500', fill:'#741306', ease:Power4.easeInOut});
        TweenLite.to('#poly56', 1.75, {morphSVG: {shape:'#poly56b'}, stroke:'#979797', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly57', 1.75, {morphSVG: {shape:'#poly57b'}, stroke:'#EFCD4A', fill:'#EFCD49', ease:Power4.easeInOut});
        TweenLite.to('#poly58', 1.75, {morphSVG: {shape:'#poly58b'}, stroke:'#EFCD4A', fill:'#EFCD49', ease:Power4.easeInOut});
        TweenLite.to('#poly59', 1.75, {morphSVG: {shape:'#poly59b'}, stroke:'#8E7516', fill:'#EFCD4A', ease:Power4.easeInOut});
        TweenLite.to('#poly60', 1.75, {morphSVG: {shape:'#poly60b'}, stroke:'#8E7516', fill:'#EFCD4A', ease:Power4.easeInOut});
        $('aside').fadeIn();
        $('aside').html('<h1 class="fadeTime">Hogswatchnight<span class="close">x</span></h1><p class="fadeTime">Created by the award-winning author <a href="http://www.terrypratchettbooks.com/" target="_blank">Sir Terry Pratchett</a>, Hogswatchnight was introduced in his novel <em>Hogfather</em>, as part of the Discworld universe. The Hogfather is a character in the book, representing something akin to Santa Claus.</p><p class="fadeTime">The book was later adapted into a two-part <a href="https://www.youtube.com/watch?v=fUUxRssbDOU" target="_blank">TV series</a> in 2006, where Sir Terry Pratchett himself made a cameo.</p> <p class="fadeTime"><a href="http://wiki.lspace.org/mediawiki/Hogswatch" target="_blank">Hogswatchnight</a> occurs every December 36<sup>th</sup> (the new year beginning on the 1st of Ick) and is a festival celebrating the winter solstice and the New Year. It has elements that resemble Christmas, including carol singing, presents, warm alcoholic drinks, and giant department stores.</p><p class="fadeTime">Wish your friends a <strong>Merry Hogswatch!</strong></p><div class="fadeTime"><a href="" class="fadeTime social facebook">Share on Facebook</a><a target="_blank" href="http://twitter.com/intent/tweet?text=Merry Hogswatch!🎄💀🎁&hashtags=nerdyholidays&url=http://bit.ly/1Ntufce" class="fadeTime social">Share on Twitter</a></div><nav class="fadeTime"> <a  class="prev"><svg  width="75px" height="74px" viewBox="0 0 75 74"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-75.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M128.678226,110 L148.518669,150.678937 L115.961735,182.118803 L76,160.870771 L83.8592235,116.2989 L128.678226,110 Z M123.960714,144.636339 L123.960714,147.207768 C123.960714,147.917593 123.743082,148.523614 123.307812,149.025848 C122.872542,149.528083 122.306699,149.779197 121.610267,149.779197 L107.46741,149.779197 L113.353571,155.685447 C113.862502,156.167592 114.116964,156.770264 114.116964,157.493482 C114.116964,158.2167 113.862502,158.819373 113.353571,159.301518 L111.846874,160.828304 C111.351336,161.323842 110.748664,161.571607 110.038839,161.571607 C109.342407,161.571607 108.733038,161.323842 108.210714,160.828304 L95.1325886,147.730089 C94.6370504,147.234551 94.3892851,146.631879 94.3892851,145.922054 C94.3892851,145.225622 94.6370504,144.616253 95.1325886,144.093929 L108.210714,131.035893 C108.719645,130.526962 109.329014,130.2725 110.038839,130.2725 C110.735271,130.2725 111.337943,130.526962 111.846874,131.035893 L113.353571,132.5225 C113.862502,133.031431 114.116964,133.6408 114.116964,134.350625 C114.116964,135.06045 113.862502,135.669819 113.353571,136.17875 L107.46741,142.064911 L121.610267,142.064911 C122.306699,142.064911 122.872542,142.316024 123.307812,142.818259 C123.743082,143.320494 123.960714,143.926514 123.960714,144.636339 Z"></path> </g> </g> </svg></a> <a class="next"><svg  width="73px" height="75px" viewBox="0 0 73 75"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-318.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M342.983862,183.052964 L319,144.670761 L348.092223,110 L390.056068,126.954494 L386.898927,172.103708 L342.983862,183.052964 Z M371.477645,148.716819 C371.477645,149.440037 371.229879,150.049406 370.734341,150.544944 L357.656216,163.623069 C357.133892,164.118608 356.524523,164.366373 355.828091,164.366373 C355.145052,164.366373 354.542379,164.118608 354.020055,163.623069 L352.513359,162.116373 C352.004428,161.607442 351.749966,160.998073 351.749966,160.288248 C351.749966,159.578423 352.004428,158.969054 352.513359,158.460123 L358.39952,152.573962 L344.256662,152.573962 C343.56023,152.573962 342.994388,152.322849 342.559118,151.820614 C342.123848,151.318379 341.906216,150.712359 341.906216,150.002534 L341.906216,147.431105 C341.906216,146.72128 342.123848,146.115259 342.559118,145.613025 C342.994388,145.11079 343.56023,144.859677 344.256662,144.859677 L358.39952,144.859677 L352.513359,138.953427 C352.004428,138.471281 351.749966,137.868609 351.749966,137.145391 C351.749966,136.422173 352.004428,135.8195 352.513359,135.337355 L354.020055,133.830659 C354.528986,133.321728 355.131659,133.067266 355.828091,133.067266 C356.537916,133.067266 357.147285,133.321728 357.656216,133.830659 L370.734341,146.908784 C371.229879,147.377536 371.477645,147.980209 371.477645,148.716819 Z"></path> </g> </g> </svg></a> </nav><div class="infoBurst noDelay"> <h1>Hogswatchnight</h1> <a><span>About</span></a> </div>');

        $('.infoBurst a').click(function(){
            $('aside').toggleClass('lightBox');
            if($('p.fadeTime').is(':visible')){
                $('.infoBurst a span').text('close'); 
                $('.noDelay h1, nav .prev, nav .next').css('visibility','hidden');   
            } else {
                $('.infoBurst a span').text('about');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','visible');
            }
        });
        $('.close').click(function(){
            $('.infoBurst a').trigger('click');
        });
    }

    var festivus = function() {
        TweenLite.to('#poly01', 1.75, {morphSVG: {shape:'#poly01c'}, stroke:'#683311', fill:'#A77447', ease:Power4.easeInOut});
        TweenLite.to('#poly02', 1.75, {morphSVG: {shape:'#poly02c'}, stroke:'#562E0B', fill:'#8B572A', ease:Power4.easeInOut});
        TweenLite.to('#poly03', 1.75, {morphSVG: {shape:'#poly03c'}, stroke:'#193011', fill:'#28411A', ease:Power4.easeInOut});
        TweenLite.to('#poly04', 1.75, {morphSVG: {shape:'#poly04c'}, stroke:'#28411A', fill:'#1E3212', ease:Power4.easeInOut});
        TweenLite.to('#poly05', 1.75, {morphSVG: {shape:'#poly05c'}, stroke:'#28411A', fill:'#1E3212', ease:Power4.easeInOut});
        TweenLite.to('#poly06', 1.75, {morphSVG: {shape:'#poly06c'}, stroke:'#151515', fill:'#282828', ease:Power4.easeInOut});
        TweenLite.to('#poly07', 1.75, {morphSVG: {shape:'#poly07c'}, stroke:'#424242', fill:'#554834', ease:Power4.easeInOut});
        TweenLite.to('#poly08', 1.75, {morphSVG: {shape:'#poly08c'}, stroke:'#172D10', fill:'#2E481F', ease:Power4.easeInOut});
        TweenLite.to('#poly09', 1.75, {morphSVG: {shape:'#poly09c'}, stroke:'#424242', fill:'#554834', ease:Power4.easeInOut});
        TweenLite.to('#poly10', 1.75, {morphSVG: {shape:'#poly10c'}, stroke:'#424242', fill:'#655A43', ease:Power4.easeInOut});
        TweenLite.to('#poly11', 1.75, {morphSVG: {shape:'#poly11c'}, stroke:'#424242', fill:'#655A43', ease:Power4.easeInOut});  
        TweenLite.to('#poly12', 1.75, {morphSVG: {shape:'#poly12c'}, stroke:'#424242', fill:'#554834', ease:Power4.easeInOut});
        TweenLite.to('#poly13', 1.75, {morphSVG: {shape:'#poly13c'}, stroke:'#151515', fill:'#292929', ease:Power4.easeInOut});
        TweenLite.to('#poly14', 1.75, {morphSVG: {shape:'#poly14c'}, stroke:'#424242', fill:'#554834', ease:Power4.easeInOut});
        TweenLite.to('#poly15', 1.75, {morphSVG: {shape:'#poly15c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly16', 1.75, {morphSVG: {shape:'#poly16c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly17', 1.75, {morphSVG: {shape:'#poly17c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly18', 1.75, {morphSVG: {shape:'#poly18c'}, stroke:'#AC5A5A', fill:'#B61D1D', ease:Power4.easeInOut});
        TweenLite.to('#poly19', 1.75, {morphSVG: {shape:'#poly19c'}, stroke:'#424242', fill:'#786B53', ease:Power4.easeInOut});
        TweenLite.to('#poly20', 1.75, {morphSVG: {shape:'#poly20c'}, stroke:'#151515', fill:'#292929', ease:Power4.easeInOut});
        TweenLite.to('#poly21', 1.75, {morphSVG: {shape:'#poly21c'}, stroke:'#ECD5B8', fill:'#FAD8AE', ease:Power4.easeInOut});
        TweenLite.to('#poly22', 1.75, {morphSVG: {shape:'#poly22c'}, stroke:'#EBD4B7', fill:'#DFC4A2', ease:Power4.easeInOut});
        TweenLite.to('#poly23', 1.75, {morphSVG: {shape:'#poly23c'}, stroke:'#424242', fill:'#655A43', ease:Power4.easeInOut});
        TweenLite.to('#poly24', 1.75, {morphSVG: {shape:'#poly24c'}, stroke:'#EBD4B7', fill:'#FFE4C2', ease:Power4.easeInOut});
        TweenLite.to('#poly25', 1.75, {morphSVG: {shape:'#poly25c'}, stroke:'#E2B883', fill:'#EFC693', ease:Power4.easeInOut});
        TweenLite.to('#poly26', 1.75, {morphSVG: {shape:'#poly26c'}, stroke:'#172D10', fill:'#2E481F', ease:Power4.easeInOut});
        TweenLite.to('#poly27', 1.75, {morphSVG: {shape:'#poly27c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly28', 1.75, {morphSVG: {shape:'#poly28c'}, stroke:'#ECD5B8', fill:'#FFE4C2', ease:Power4.easeInOut});
        TweenLite.to('#poly29', 1.75, {morphSVG: {shape:'#poly29c'}, stroke:'#1E3212', fill:'#1E3212', ease:Power4.easeInOut});
        TweenLite.to('#poly30', 1.75, {morphSVG: {shape:'#poly30c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly31', 1.75, {morphSVG: {shape:'#poly31c'}, stroke:'#151515', fill:'#292929', ease:Power4.easeInOut});
        TweenLite.to('#poly32', 1.75, {morphSVG: {shape:'#poly32c'}, stroke:'#ECD5B8', fill:'#F9D8AE', ease:Power4.easeInOut});
        TweenLite.to('#poly33', 1.75, {morphSVG: {shape:'#poly33c'}, stroke:'#424242', fill:'#655A43', ease:Power4.easeInOut});
        TweenLite.to('#poly34', 1.75, {morphSVG: {shape:'#poly34c'}, stroke:'#D6D6D6', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly35', 1.75, {morphSVG: {shape:'#poly35c'}, stroke:'#424242', fill:'#786B53', ease:Power4.easeInOut});
        TweenLite.to('#poly36', 1.75, {morphSVG: {shape:'#poly36c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly37', 1.75, {morphSVG: {shape:'#poly37c'}, stroke:'#ECD5B8', fill:'#FFE5C2', ease:Power4.easeInOut});
        TweenLite.to('#poly38', 1.75, {morphSVG: {shape:'#poly38c'}, stroke:'#EBD4B7', fill:'#FFF0DC', ease:Power4.easeInOut});
        TweenLite.to('#poly39', 1.75, {morphSVG: {shape:'#poly39c'}, stroke:'#AEAEAE', fill:'#F3F3F3', ease:Power4.easeInOut});
        TweenLite.to('#poly40', 1.75, {morphSVG: {shape:'#poly40c'}, stroke:'#AEAEAE', fill:'#F3F3F3', ease:Power4.easeInOut});
        TweenLite.to('#poly41', 1.75, {morphSVG: {shape:'#poly41c'}, stroke:'#193011', fill:'#1E3212', ease:Power4.easeInOut});
        TweenLite.to('#poly42', 1.75, {morphSVG: {shape:'#poly42c'}, stroke:'#8D4507', fill:'#B3570A', ease:Power4.easeInOut});
        TweenLite.to('#poly43', 1.75, {morphSVG: {shape:'#poly43c'}, stroke:'#8D4507', fill:'#B3570A', ease:Power4.easeInOut});
        TweenLite.to('#poly44', 1.75, {morphSVG: {shape:'#poly44c'}, stroke:'#1D3111', fill:'#28411A', ease:Power4.easeInOut});
        TweenLite.to('#poly45', 1.75, {morphSVG: {shape:'#poly45c'}, stroke:'#8D4507', fill:'#B4570A', ease:Power4.easeInOut});
        TweenLite.to('#poly46', 1.75, {morphSVG: {shape:'#poly46c'}, stroke:'#151515', fill:'#292929', ease:Power4.easeInOut});
        TweenLite.to('#poly47', 1.75, {morphSVG: {shape:'#poly47c'}, stroke:'#151515', fill:'#282828', ease:Power4.easeInOut});
        TweenLite.to('#poly48', 1.75, {morphSVG: {shape:'#poly48c'}, stroke:'#EBD4B7', fill:'#FFE4C2', ease:Power4.easeInOut});
        TweenLite.to('#poly49', 1.75, {morphSVG: {shape:'#poly49c'}, stroke:'#151515', fill:'#282828', ease:Power4.easeInOut});
        TweenLite.to('#poly50', 1.75, {morphSVG: {shape:'#poly50c'}, stroke:'#ECD5B8', fill:'#FFE4C2', ease:Power4.easeInOut});
        TweenLite.to('#poly51', 1.75, {morphSVG: {shape:'#poly51c'}, stroke:'#1E3212', fill:'#28411A', ease:Power4.easeInOut});
        TweenLite.to('#poly52', 1.75, {morphSVG: {shape:'#poly52c'}, stroke:'#ECD5B8', fill:'#FFE4C2', ease:Power4.easeInOut});
        TweenLite.to('#poly53', 1.75, {morphSVG: {shape:'#poly53c'}, stroke:'#6F4B49', fill:'#A55348', ease:Power4.easeInOut});
        TweenLite.to('#poly54', 1.75, {morphSVG: {shape:'#poly54c'}, stroke:'#193011', fill:'#2E481F', ease:Power4.easeInOut});
        TweenLite.to('#poly55', 1.75, {morphSVG: {shape:'#poly55c'}, stroke:'#8A4F48', fill:'#A55348', ease:Power4.easeInOut});
        TweenLite.to('#poly56', 1.75, {morphSVG: {shape:'#poly56c'}, stroke:'#151515', fill:'#282828', ease:Power4.easeInOut});
        TweenLite.to('#poly57', 1.75, {morphSVG: {shape:'#poly57c'}, stroke:'#D5D5D5', fill:'#B3B1AC', ease:Power4.easeInOut});
        TweenLite.to('#poly58', 1.75, {morphSVG: {shape:'#poly58c'}, stroke:'#D4D4D4', fill:'#DFDFDF', ease:Power4.easeInOut});
        TweenLite.to('#poly59', 1.75, {morphSVG: {shape:'#poly59c'}, stroke:'#8E7516', fill:'#EFCD4A', ease:Power4.easeInOut});
        TweenLite.to('#poly60', 1.75, {morphSVG: {shape:'#poly60c'}, stroke:'#8E7516', fill:'#EFCD4A', ease:Power4.easeInOut});
        $('aside').html('<h1 class="fadeTime">Festivus<span class="close">x</span></h1><p class="fadeTime">"Happy Festivus" is the traditional greeting of <a href="http://festivusweb.com/" target="_blank">Festivus</a>, a holiday featured in <em>The Strike</em> episode of Seinfeld which first aired on December 18, 1997. Since then, many people have been inspired by this zany, offbeat <a href="https://www.youtube.com/watch?v=y8rzt-vj2gU" target="_blank">Seinfeld holiday</a> and now celebrate Festivus as any other holiday.</p> <p class="fadeTime">According to the Seinfeld model, Festivus is celebrated each year on December 23<sup>rd</sup>. However many people celebrate it other times in December and even at other times throughout the year.</p> <p class="fadeTime">The slogan of Festivus is "A Festivus for the rest of us!" The usual holiday tradition of a tree is manifested in an unadorned aluminum pole, which is in direct contrast to normal holiday materialism.</p> <p class="fadeTime">Wish your friends a <strong>Happy Festivus!</strong></p><div class="fadeTime"><a href="" class="fadeTime social facebook">Share on Facebook</a><a target="_blank" href="http://twitter.com/intent/tweet?text=Happy Festivus!❄️👴💬&hashtags=nerdyholidays&url=http://bit.ly/21zW48Q"  class="fadeTime social">Share on Twitter</a></div><nav class="fadeTime"> <a class="prev"><svg  width="75px" height="74px" viewBox="0 0 75 74"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-75.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M128.678226,110 L148.518669,150.678937 L115.961735,182.118803 L76,160.870771 L83.8592235,116.2989 L128.678226,110 Z M123.960714,144.636339 L123.960714,147.207768 C123.960714,147.917593 123.743082,148.523614 123.307812,149.025848 C122.872542,149.528083 122.306699,149.779197 121.610267,149.779197 L107.46741,149.779197 L113.353571,155.685447 C113.862502,156.167592 114.116964,156.770264 114.116964,157.493482 C114.116964,158.2167 113.862502,158.819373 113.353571,159.301518 L111.846874,160.828304 C111.351336,161.323842 110.748664,161.571607 110.038839,161.571607 C109.342407,161.571607 108.733038,161.323842 108.210714,160.828304 L95.1325886,147.730089 C94.6370504,147.234551 94.3892851,146.631879 94.3892851,145.922054 C94.3892851,145.225622 94.6370504,144.616253 95.1325886,144.093929 L108.210714,131.035893 C108.719645,130.526962 109.329014,130.2725 110.038839,130.2725 C110.735271,130.2725 111.337943,130.526962 111.846874,131.035893 L113.353571,132.5225 C113.862502,133.031431 114.116964,133.6408 114.116964,134.350625 C114.116964,135.06045 113.862502,135.669819 113.353571,136.17875 L107.46741,142.064911 L121.610267,142.064911 C122.306699,142.064911 122.872542,142.316024 123.307812,142.818259 C123.743082,143.320494 123.960714,143.926514 123.960714,144.636339 Z"></path> </g> </g> </svg></a> <a class="next"><svg  width="73px" height="75px" viewBox="0 0 73 75"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-318.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M342.983862,183.052964 L319,144.670761 L348.092223,110 L390.056068,126.954494 L386.898927,172.103708 L342.983862,183.052964 Z M371.477645,148.716819 C371.477645,149.440037 371.229879,150.049406 370.734341,150.544944 L357.656216,163.623069 C357.133892,164.118608 356.524523,164.366373 355.828091,164.366373 C355.145052,164.366373 354.542379,164.118608 354.020055,163.623069 L352.513359,162.116373 C352.004428,161.607442 351.749966,160.998073 351.749966,160.288248 C351.749966,159.578423 352.004428,158.969054 352.513359,158.460123 L358.39952,152.573962 L344.256662,152.573962 C343.56023,152.573962 342.994388,152.322849 342.559118,151.820614 C342.123848,151.318379 341.906216,150.712359 341.906216,150.002534 L341.906216,147.431105 C341.906216,146.72128 342.123848,146.115259 342.559118,145.613025 C342.994388,145.11079 343.56023,144.859677 344.256662,144.859677 L358.39952,144.859677 L352.513359,138.953427 C352.004428,138.471281 351.749966,137.868609 351.749966,137.145391 C351.749966,136.422173 352.004428,135.8195 352.513359,135.337355 L354.020055,133.830659 C354.528986,133.321728 355.131659,133.067266 355.828091,133.067266 C356.537916,133.067266 357.147285,133.321728 357.656216,133.830659 L370.734341,146.908784 C371.229879,147.377536 371.477645,147.980209 371.477645,148.716819 Z"></path> </g> </g> </svg></a> </nav><div class="infoBurst noDelay"> <h1>Festivus</h1> <a><span>About</span></a> </div>');
        $('.infoBurst a').click(function(){
            $('aside').toggleClass('lightBox');
            if($('p.fadeTime').is(':visible')){
                $('.infoBurst a span').text('close');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','hidden');     
            } else {
                $('.infoBurst a span').text('about');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','visible');
            }
        });
        $('.close').click(function(){
            $('.infoBurst a').trigger('click');
        });
    }

    var decemberween = function() {
        TweenLite.to('#poly01', 1.75, {morphSVG: {shape:'#poly01d'}, stroke:'#F1A9A8', fill:'#F1A9A8', ease:Power4.easeInOut});
        TweenLite.to('#poly02', 1.75, {morphSVG: {shape:'#poly02d'}, stroke:'#F1A9A8', fill:'#F1A9A8', ease:Power4.easeInOut});
        TweenLite.to('#poly03', 1.75, {morphSVG: {shape:'#poly03d'}, stroke:'#BFA400', fill:'#BFA400', ease:Power4.easeInOut});
        TweenLite.to('#poly04', 1.75, {morphSVG: {shape:'#poly04d'}, stroke:'#42157A', fill:'#42157C', ease:Power4.easeInOut});
        TweenLite.to('#poly05', 1.75, {morphSVG: {shape:'#poly05d'}, stroke:'#129406', fill:'#0A7E00', ease:Power4.easeInOut});
        TweenLite.to('#poly06', 1.75, {morphSVG: {shape:'#poly06d'}, stroke:'#151515', fill:'#417505', ease:Power4.easeInOut});
        TweenLite.to('#poly07', 1.75, {morphSVG: {shape:'#poly07d'}, stroke:'#6D29C7', fill:'#6D29C7', ease:Power4.easeInOut});
        TweenLite.to('#poly08', 1.75, {morphSVG: {shape:'#poly08d'}, stroke:'#5B20A6', fill:'#6D29C7', ease:Power4.easeInOut});
        TweenLite.to('#poly09', 1.75, {morphSVG: {shape:'#poly09d'}, stroke:'#FFCAC9', fill:'#FFCAC9', ease:Power4.easeInOut});
        TweenLite.to('#poly10', 1.75, {morphSVG: {shape:'#poly10d'}, stroke:'#FFDDDD', fill:'#FFDDDD', ease:Power4.easeInOut});
        TweenLite.to('#poly11', 1.75, {morphSVG: {shape:'#poly11d'}, stroke:'#424242', fill:'#D0011B', ease:Power4.easeInOut});  
        TweenLite.to('#poly12', 1.75, {morphSVG: {shape:'#poly12d'}, stroke:'#0FA801', fill:'#0FA801', ease:Power4.easeInOut});
        TweenLite.to('#poly13', 1.75, {morphSVG: {shape:'#poly13d'}, stroke:'#098300', fill:'#0FA801', ease:Power4.easeInOut});
        TweenLite.to('#poly14', 1.75, {morphSVG: {shape:'#poly14d'}, stroke:'#424242', fill:'#417505', ease:Power4.easeInOut});
        TweenLite.to('#poly15', 1.75, {morphSVG: {shape:'#poly15d'}, stroke:'#A09F9F', fill:'#B7B7B7', ease:Power4.easeInOut});
        TweenLite.to('#poly16', 1.75, {morphSVG: {shape:'#poly16d'}, stroke:'#C8C8C8', fill:'#EBEBEB', ease:Power4.easeInOut});
        TweenLite.to('#poly17', 1.75, {morphSVG: {shape:'#poly17d'}, stroke:'#8D1C0D', fill:'#BE1900', ease:Power4.easeInOut});
        TweenLite.to('#poly18', 1.75, {morphSVG: {shape:'#poly18d'}, stroke:'#8D1C0D', fill:'#E12000', ease:Power4.easeInOut});
        TweenLite.to('#poly19', 1.75, {morphSVG: {shape:'#poly19d'}, stroke:'#097D00', fill:'#129406', ease:Power4.easeInOut});
        TweenLite.to('#poly20', 1.75, {morphSVG: {shape:'#poly20d'}, stroke:'#BFA400', fill:'#BFA400', ease:Power4.easeInOut});
        TweenLite.to('#poly21', 1.75, {morphSVG: {shape:'#poly21d'}, stroke:'#000000', fill:'#000000', ease:Power4.easeInOut});
        TweenLite.to('#poly22', 1.75, {morphSVG: {shape:'#poly22d'}, stroke:'#EBEBEB', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly23', 1.75, {morphSVG: {shape:'#poly23d'}, stroke:'#11860A', fill:'#0FA801', ease:Power4.easeInOut});
        TweenLite.to('#poly24', 1.75, {morphSVG: {shape:'#poly24d'}, stroke:'#098202', fill:'#119405', ease:Power4.easeInOut});
        TweenLite.to('#poly25', 1.75, {morphSVG: {shape:'#poly25d'}, stroke:'#A09F9F', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly26', 1.75, {morphSVG: {shape:'#poly26d'}, stroke:'#BFA400', fill:'#BFA400', ease:Power4.easeInOut});
        TweenLite.to('#poly27', 1.75, {morphSVG: {shape:'#poly27d'}, stroke:'#8D1B0C', fill:'#E12000', ease:Power4.easeInOut});
        TweenLite.to('#poly28', 1.75, {morphSVG: {shape:'#poly28d'}, stroke:'#FFDFDF', fill:'#FFDFDF', ease:Power4.easeInOut});
        TweenLite.to('#poly29', 1.75, {morphSVG: {shape:'#poly29d'}, stroke:'#0FA801', fill:'#129406', ease:Power4.easeInOut});
        TweenLite.to('#poly30', 1.75, {morphSVG: {shape:'#poly30d'}, stroke:'#8D1C0D', fill:'#E12000', ease:Power4.easeInOut});
        TweenLite.to('#poly31', 1.75, {morphSVG: {shape:'#poly31d'}, stroke:'#151515', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly32', 1.75, {morphSVG: {shape:'#poly32d'}, stroke:'#098202', fill:'#129406', ease:Power4.easeInOut});
        TweenLite.to('#poly33', 1.75, {morphSVG: {shape:'#poly33d'}, stroke:'#129406', fill:'#129406', ease:Power4.easeInOut});
        TweenLite.to('#poly34', 1.75, {morphSVG: {shape:'#poly34d'}, stroke:'#098300', fill:'#0FA801', ease:Power4.easeInOut});
        TweenLite.to('#poly35', 1.75, {morphSVG: {shape:'#poly35d'}, stroke:'#098800', fill:'#0FA801', ease:Power4.easeInOut});
        TweenLite.to('#poly36', 1.75, {morphSVG: {shape:'#poly36d'}, stroke:'#941000', fill:'#CD1B00', ease:Power4.easeInOut});
        TweenLite.to('#poly37', 1.75, {morphSVG: {shape:'#poly37d'}, stroke:'#EBEBEB', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly38', 1.75, {morphSVG: {shape:'#poly38d'}, stroke:'#A09F9F', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly39', 1.75, {morphSVG: {shape:'#poly39d'}, stroke:'#000000', fill:'#000000', ease:Power4.easeInOut});
        TweenLite.to('#poly40', 1.75, {morphSVG: {shape:'#poly40d'}, stroke:'#000000', fill:'#000000', ease:Power4.easeInOut});
        TweenLite.to('#poly41', 1.75, {morphSVG: {shape:'#poly41d'}, stroke:'#BEA300', fill:'#BFA400', ease:Power4.easeInOut});
        TweenLite.to('#poly42', 1.75, {morphSVG: {shape:'#poly42d'}, stroke:'#8D1C0D', fill:'#E12000', ease:Power4.easeInOut});
        TweenLite.to('#poly43', 1.75, {morphSVG: {shape:'#poly43d'}, stroke:'#8D1C0D', fill:'#E12000', ease:Power4.easeInOut});
        TweenLite.to('#poly44', 1.75, {morphSVG: {shape:'#poly44d'}, stroke:'#000000', fill:'#000000', ease:Power4.easeInOut});
        TweenLite.to('#poly45', 1.75, {morphSVG: {shape:'#poly45d'}, stroke:'#B7B7B7', fill:'#B7B7B7', ease:Power4.easeInOut});
        TweenLite.to('#poly46', 1.75, {morphSVG: {shape:'#poly46d'}, stroke:'#151515', fill:'#D0011B', ease:Power4.easeInOut});
        TweenLite.to('#poly47', 1.75, {morphSVG: {shape:'#poly47d'}, stroke:'#151515', fill:'#417505', ease:Power4.easeInOut});
        TweenLite.to('#poly48', 1.75, {morphSVG: {shape:'#poly48d'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly49', 1.75, {morphSVG: {shape:'#poly49d'}, stroke:'#151515', fill:'#407305', ease:Power4.easeInOut});
        TweenLite.to('#poly50', 1.75, {morphSVG: {shape:'#poly50d'}, stroke:'#BFA400', fill:'#BFA400', ease:Power4.easeInOut});
        TweenLite.to('#poly51', 1.75, {morphSVG: {shape:'#poly51d'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly52', 1.75, {morphSVG: {shape:'#poly52d'}, stroke:'#129406', fill:'#0FA801', ease:Power4.easeInOut});
        TweenLite.to('#poly53', 1.75, {morphSVG: {shape:'#poly53d'}, stroke:'#E5E5E5', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly54', 1.75, {morphSVG: {shape:'#poly54d'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly55', 1.75, {morphSVG: {shape:'#poly55d'}, stroke:'#E4E4E4', fill:'#FFFFFF', ease:Power4.easeInOut});
        TweenLite.to('#poly56', 1.75, {morphSVG: {shape:'#poly56d'}, stroke:'#151515', fill:'#48FF0B', ease:Power4.easeInOut});
        TweenLite.to('#poly57', 1.75, {morphSVG: {shape:'#poly57d'}, stroke:'#000000', fill:'#000000', ease:Power4.easeInOut});
        TweenLite.to('#poly58', 1.75, {morphSVG: {shape:'#poly58d'}, stroke:'#FFDDDD', fill:'#FFDFDF', ease:Power4.easeInOut});
        TweenLite.to('#poly59', 1.75, {morphSVG: {shape:'#poly59d'}, stroke:'#1C1C5C', fill:'#30319F', ease:Power4.easeInOut});
        TweenLite.to('#poly60', 1.75, {morphSVG: {shape:'#poly60d'}, stroke:'#242478', fill:'#1C1C5C', ease:Power4.easeInOut});
        $('aside').html('<h1 class="fadeTime">Decemberween<span class="close">x</span></h1> <p class="fadeTime">Introduced in the flash-animated cartoon series <a href="http://homestarrunner.com/" target="_blank">Homestar Runner</a>, Decemberween is a holiday celebrated 55 days after Halloween, on December 25. </p> <p class="fadeTime">It has many similarities to Christmas, with colorful lights, garlands, and the giving of presents, but also has some obvious differences. Though Christmas carols have made appearances, their correct words are never sung and only the tune is used. <a href="https://www.youtube.com/watch?v=DSCAHLq6dG4" target="_blank">Decemberween</a> food has some unique variations on more recognizable cuisine. Instead of turkeys and hams, the traditional meal is bunnies.</p> <p class="fadeTime">The origins of the holiday are complicated, involving at least one Angel, two Kobe Bryants, the Santa Claus-like Dr. Christmas, a sailor named Archibald, and The King of Town.</p> <p class="fadeTime">Wish your friends a <strong>Happy Decemberween!</strong></p><div class="fadeTime"><a href="" class="fadeTime social facebook">Share on Facebook</a><a target="_blank" href="http://twitter.com/intent/tweet?text=Happy Decemberween!🎄🎀🎶&hashtags=nerdyholidays&url=http://bit.ly/1XLHpml" class="fadeTime social">Share on Twitter</a></div><nav class="fadeTime"> <a  class="prev"><svg  width="75px" height="74px" viewBox="0 0 75 74"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-75.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M128.678226,110 L148.518669,150.678937 L115.961735,182.118803 L76,160.870771 L83.8592235,116.2989 L128.678226,110 Z M123.960714,144.636339 L123.960714,147.207768 C123.960714,147.917593 123.743082,148.523614 123.307812,149.025848 C122.872542,149.528083 122.306699,149.779197 121.610267,149.779197 L107.46741,149.779197 L113.353571,155.685447 C113.862502,156.167592 114.116964,156.770264 114.116964,157.493482 C114.116964,158.2167 113.862502,158.819373 113.353571,159.301518 L111.846874,160.828304 C111.351336,161.323842 110.748664,161.571607 110.038839,161.571607 C109.342407,161.571607 108.733038,161.323842 108.210714,160.828304 L95.1325886,147.730089 C94.6370504,147.234551 94.3892851,146.631879 94.3892851,145.922054 C94.3892851,145.225622 94.6370504,144.616253 95.1325886,144.093929 L108.210714,131.035893 C108.719645,130.526962 109.329014,130.2725 110.038839,130.2725 C110.735271,130.2725 111.337943,130.526962 111.846874,131.035893 L113.353571,132.5225 C113.862502,133.031431 114.116964,133.6408 114.116964,134.350625 C114.116964,135.06045 113.862502,135.669819 113.353571,136.17875 L107.46741,142.064911 L121.610267,142.064911 C122.306699,142.064911 122.872542,142.316024 123.307812,142.818259 C123.743082,143.320494 123.960714,143.926514 123.960714,144.636339 Z"></path> </g> </g> </svg></a> <a class="next"><svg  width="73px" height="75px" viewBox="0 0 73 75"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-318.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M342.983862,183.052964 L319,144.670761 L348.092223,110 L390.056068,126.954494 L386.898927,172.103708 L342.983862,183.052964 Z M371.477645,148.716819 C371.477645,149.440037 371.229879,150.049406 370.734341,150.544944 L357.656216,163.623069 C357.133892,164.118608 356.524523,164.366373 355.828091,164.366373 C355.145052,164.366373 354.542379,164.118608 354.020055,163.623069 L352.513359,162.116373 C352.004428,161.607442 351.749966,160.998073 351.749966,160.288248 C351.749966,159.578423 352.004428,158.969054 352.513359,158.460123 L358.39952,152.573962 L344.256662,152.573962 C343.56023,152.573962 342.994388,152.322849 342.559118,151.820614 C342.123848,151.318379 341.906216,150.712359 341.906216,150.002534 L341.906216,147.431105 C341.906216,146.72128 342.123848,146.115259 342.559118,145.613025 C342.994388,145.11079 343.56023,144.859677 344.256662,144.859677 L358.39952,144.859677 L352.513359,138.953427 C352.004428,138.471281 351.749966,137.868609 351.749966,137.145391 C351.749966,136.422173 352.004428,135.8195 352.513359,135.337355 L354.020055,133.830659 C354.528986,133.321728 355.131659,133.067266 355.828091,133.067266 C356.537916,133.067266 357.147285,133.321728 357.656216,133.830659 L370.734341,146.908784 C371.229879,147.377536 371.477645,147.980209 371.477645,148.716819 Z"></path> </g> </g> </svg></a> </nav><div class="infoBurst noDelay"> <h1>Decemberween</h1> <a><span>About</span></a> </div>');
        $('.infoBurst a').click(function(){
            $('aside').toggleClass('lightBox');
            if($('p.fadeTime').is(':visible')){
                $('.infoBurst a span').text('close');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','hidden');     
            } else {
                $('.infoBurst a span').text('about');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','visible');
            }
        });
        $('.close').click(function(){
            $('.infoBurst a').trigger('click');
        });
    }

    var robanukah = function() {
        TweenLite.to('#poly01', 1.75, {morphSVG: {shape:'#poly01e'}, stroke:'#83999E', fill:'#839B9E', ease:Power4.easeInOut});
        TweenLite.to('#poly02', 1.75, {morphSVG: {shape:'#poly02e'}, stroke:'#83999E', fill:'#8FADAD', ease:Power4.easeInOut});
        TweenLite.to('#poly03', 1.75, {morphSVG: {shape:'#poly03e'}, stroke:'#31484E', fill:'#748888', ease:Power4.easeInOut});
        TweenLite.to('#poly04', 1.75, {morphSVG: {shape:'#poly04e'}, stroke:'#667F82', fill:'#91ABAC', ease:Power4.easeInOut});
        TweenLite.to('#poly05', 1.75, {morphSVG: {shape:'#poly05e'}, stroke:'#667F82', fill:'#91ABAC', ease:Power4.easeInOut});
        TweenLite.to('#poly06', 1.75, {morphSVG: {shape:'#poly06e'}, stroke:'#839B9E', fill:'#91ABAC', ease:Power4.easeInOut});
        TweenLite.to('#poly07', 1.75, {morphSVG: {shape:'#poly07e'}, stroke:'#748888', fill:'#748888', ease:Power4.easeInOut});
        TweenLite.to('#poly08', 1.75, {morphSVG: {shape:'#poly08e'}, stroke:'#566D74', fill:'#ABC9C7', ease:Power4.easeInOut});
        TweenLite.to('#poly09', 1.75, {morphSVG: {shape:'#poly09e'}, stroke:'#566D74', fill:'#ABC9C7', ease:Power4.easeInOut});
        TweenLite.to('#poly10', 1.75, {morphSVG: {shape:'#poly10e'}, stroke:'#222222', fill:'#212121', ease:Power4.easeInOut});
        TweenLite.to('#poly11', 1.75, {morphSVG: {shape:'#poly11e'}, stroke:'#222222', fill:'#212121', ease:Power4.easeInOut});  
        TweenLite.to('#poly12', 1.75, {morphSVG: {shape:'#poly12e'}, stroke:'#F7FB9B', fill:'#F5F6A0', ease:Power4.easeInOut});
        TweenLite.to('#poly13', 1.75, {morphSVG: {shape:'#poly13e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly14', 1.75, {morphSVG: {shape:'#poly14e'}, stroke:'#7C510E', fill:'#875A0E', ease:Power4.easeInOut});
        TweenLite.to('#poly15', 1.75, {morphSVG: {shape:'#poly15e'}, stroke:'#F7FB9B', fill:'#F5F6A0', ease:Power4.easeInOut});
        TweenLite.to('#poly16', 1.75, {morphSVG: {shape:'#poly16e'}, stroke:'#222222', fill:'#212121', ease:Power4.easeInOut});
        TweenLite.to('#poly17', 1.75, {morphSVG: {shape:'#poly17e'}, stroke:'#222222', fill:'#212121', ease:Power4.easeInOut});
        TweenLite.to('#poly18', 1.75, {morphSVG: {shape:'#poly18e'}, stroke:'#191919', fill:'#1D1D1D', ease:Power4.easeInOut});
        TweenLite.to('#poly19', 1.75, {morphSVG: {shape:'#poly19e'}, stroke:'#49431B', fill:'#795814', ease:Power4.easeInOut});
        TweenLite.to('#poly20', 1.75, {morphSVG: {shape:'#poly20e'}, stroke:'#735B01', fill:'#9A6C06', ease:Power4.easeInOut});
        TweenLite.to('#poly21', 1.75, {morphSVG: {shape:'#poly21e'}, stroke:'#324D55', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly22', 1.75, {morphSVG: {shape:'#poly22e'}, stroke:'#6C5621', fill:'#544417', ease:Power4.easeInOut});
        TweenLite.to('#poly23', 1.75, {morphSVG: {shape:'#poly23e'}, stroke:'#324D55', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly24', 1.75, {morphSVG: {shape:'#poly24e'}, stroke:'#4A5416', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly25', 1.75, {morphSVG: {shape:'#poly25e'}, stroke:'#324D55', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly26', 1.75, {morphSVG: {shape:'#poly26e'}, stroke:'#4A5416', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly27', 1.75, {morphSVG: {shape:'#poly27e'}, stroke:'#334E56', fill:'#92A6A4', ease:Power4.easeInOut});
        TweenLite.to('#poly28', 1.75, {morphSVG: {shape:'#poly28e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly29', 1.75, {morphSVG: {shape:'#poly29e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly30', 1.75, {morphSVG: {shape:'#poly30e'}, stroke:'#334E56', fill:'#92A6A4', ease:Power4.easeInOut});
        TweenLite.to('#poly31', 1.75, {morphSVG: {shape:'#poly31e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly32', 1.75, {morphSVG: {shape:'#poly32e'}, stroke:'#334E56', fill:'#92A6A4', ease:Power4.easeInOut});
        TweenLite.to('#poly33', 1.75, {morphSVG: {shape:'#poly33e'}, stroke:'#6C5621', fill:'#544417', ease:Power4.easeInOut});
        TweenLite.to('#poly34', 1.75, {morphSVG: {shape:'#poly34e'}, stroke:'#4C646B', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly35', 1.75, {morphSVG: {shape:'#poly35e'}, stroke:'#4C646B', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly36', 1.75, {morphSVG: {shape:'#poly36e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly37', 1.75, {morphSVG: {shape:'#poly37e'}, stroke:'#4C646B', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly38', 1.75, {morphSVG: {shape:'#poly38e'}, stroke:'#4C646B', fill:'#798C91', ease:Power4.easeInOut});
        TweenLite.to('#poly39', 1.75, {morphSVG: {shape:'#poly39e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly40', 1.75, {morphSVG: {shape:'#poly40e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly41', 1.75, {morphSVG: {shape:'#poly41e'}, stroke:'#334E56', fill:'#92A6A4', ease:Power4.easeInOut});
        TweenLite.to('#poly42', 1.75, {morphSVG: {shape:'#poly42e'}, stroke:'#334E56', fill:'#92A6A4', ease:Power4.easeInOut});
        TweenLite.to('#poly43', 1.75, {morphSVG: {shape:'#poly43e'}, stroke:'#334E56', fill:'#92A6A4', ease:Power4.easeInOut});
        TweenLite.to('#poly44', 1.75, {morphSVG: {shape:'#poly44e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly45', 1.75, {morphSVG: {shape:'#poly45e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly46', 1.75, {morphSVG: {shape:'#poly46e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly47', 1.75, {morphSVG: {shape:'#poly47e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly48', 1.75, {morphSVG: {shape:'#poly48e'}, stroke:'#511D1F', fill:'#5F1B23', ease:Power4.easeInOut});
        TweenLite.to('#poly49', 1.75, {morphSVG: {shape:'#poly49e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly50', 1.75, {morphSVG: {shape:'#poly50e'}, stroke:'#7C510E', fill:'#875A0E', ease:Power4.easeInOut});
        TweenLite.to('#poly51', 1.75, {morphSVG: {shape:'#poly51e'}, stroke:'#511D1F', fill:'#5F1B23', ease:Power4.easeInOut});
        TweenLite.to('#poly52', 1.75, {morphSVG: {shape:'#poly52e'}, stroke:'#735B01', fill:'#9A6C06', ease:Power4.easeInOut});
        TweenLite.to('#poly53', 1.75, {morphSVG: {shape:'#poly53e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly54', 1.75, {morphSVG: {shape:'#poly54e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly55', 1.75, {morphSVG: {shape:'#poly55e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly56', 1.75, {morphSVG: {shape:'#poly56e'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly57', 1.75, {morphSVG: {shape:'#poly57e'}, stroke:'#49431B', fill:'#795814', ease:Power4.easeInOut});
        TweenLite.to('#poly58', 1.75, {morphSVG: {shape:'#poly58e'}, stroke:'#FDD800', fill:'#FDD800', ease:Power4.easeInOut});
        TweenLite.to('#poly59', 1.75, {morphSVG: {shape:'#poly59e'}, stroke:'#545116', fill:'#5C7004', ease:Power4.easeInOut});
        TweenLite.to('#poly60', 1.75, {morphSVG: {shape:'#poly60e'}, stroke:'#545116', fill:'#5C7004', ease:Power4.easeInOut});
        $('aside').html('<h1 class="fadeTime">Robanukah<span class="close">x</span></h1> <p class="fadeTime">Robanukah was first mentioned in the <em>Fear of a Bot Planet</em> episode of <a href="https://www.youtube.com/watch?v=XtTL0A5nhfk" target="_blank">Futurama</a>, and is supposedly the "holiest two weeks on the robot calendar." </p> <p class="fadeTime">It was invented by <a href="http://theinfosphere.org/Bender_Bending_Rodriguez" target="_blank">Bender Bending Rodriguez</a> as an excuse to skip work. It is celebrated one month after Robomadan, which itself is celebrated one month after Robonzaa (which is a holiday that tributes his ancestral prototypes and is celebrated by drinking contests), both of which were also invented by Bender.</p> <p class="fadeTime">Celebrated whenever Bender feels like not doing work, Robanukah traditions include drinking alcohol, doing the "Robot" break dance, lighting beer bottles like candles, making paper robot cut-outs and carving industrial barrels like jack-o-lanterns.</p> <p class="fadeTime">Wish your friends a <strong>Happy Robanukah!</strong></p><div class="fadeTime"><a href="" class="fadeTime social facebook">Share on Facebook</a><a target="_blank" href="http://twitter.com/intent/tweet?text=Happy Robanukah!🌟🍻🚶&hashtags=nerdyholidays&url=http://bit.ly/1NtBzEN" class="fadeTime social">Share on Twitter</a></div><nav class="fadeTime"> <a  class="prev"><svg  width="75px" height="74px" viewBox="0 0 75 74"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-75.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M128.678226,110 L148.518669,150.678937 L115.961735,182.118803 L76,160.870771 L83.8592235,116.2989 L128.678226,110 Z M123.960714,144.636339 L123.960714,147.207768 C123.960714,147.917593 123.743082,148.523614 123.307812,149.025848 C122.872542,149.528083 122.306699,149.779197 121.610267,149.779197 L107.46741,149.779197 L113.353571,155.685447 C113.862502,156.167592 114.116964,156.770264 114.116964,157.493482 C114.116964,158.2167 113.862502,158.819373 113.353571,159.301518 L111.846874,160.828304 C111.351336,161.323842 110.748664,161.571607 110.038839,161.571607 C109.342407,161.571607 108.733038,161.323842 108.210714,160.828304 L95.1325886,147.730089 C94.6370504,147.234551 94.3892851,146.631879 94.3892851,145.922054 C94.3892851,145.225622 94.6370504,144.616253 95.1325886,144.093929 L108.210714,131.035893 C108.719645,130.526962 109.329014,130.2725 110.038839,130.2725 C110.735271,130.2725 111.337943,130.526962 111.846874,131.035893 L113.353571,132.5225 C113.862502,133.031431 114.116964,133.6408 114.116964,134.350625 C114.116964,135.06045 113.862502,135.669819 113.353571,136.17875 L107.46741,142.064911 L121.610267,142.064911 C122.306699,142.064911 122.872542,142.316024 123.307812,142.818259 C123.743082,143.320494 123.960714,143.926514 123.960714,144.636339 Z"></path> </g> </g> </svg></a> <a class="next"><svg  width="73px" height="75px" viewBox="0 0 73 75"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-318.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M342.983862,183.052964 L319,144.670761 L348.092223,110 L390.056068,126.954494 L386.898927,172.103708 L342.983862,183.052964 Z M371.477645,148.716819 C371.477645,149.440037 371.229879,150.049406 370.734341,150.544944 L357.656216,163.623069 C357.133892,164.118608 356.524523,164.366373 355.828091,164.366373 C355.145052,164.366373 354.542379,164.118608 354.020055,163.623069 L352.513359,162.116373 C352.004428,161.607442 351.749966,160.998073 351.749966,160.288248 C351.749966,159.578423 352.004428,158.969054 352.513359,158.460123 L358.39952,152.573962 L344.256662,152.573962 C343.56023,152.573962 342.994388,152.322849 342.559118,151.820614 C342.123848,151.318379 341.906216,150.712359 341.906216,150.002534 L341.906216,147.431105 C341.906216,146.72128 342.123848,146.115259 342.559118,145.613025 C342.994388,145.11079 343.56023,144.859677 344.256662,144.859677 L358.39952,144.859677 L352.513359,138.953427 C352.004428,138.471281 351.749966,137.868609 351.749966,137.145391 C351.749966,136.422173 352.004428,135.8195 352.513359,135.337355 L354.020055,133.830659 C354.528986,133.321728 355.131659,133.067266 355.828091,133.067266 C356.537916,133.067266 357.147285,133.321728 357.656216,133.830659 L370.734341,146.908784 C371.229879,147.377536 371.477645,147.980209 371.477645,148.716819 Z"></path> </g> </g> </svg></a> </nav><div class="infoBurst noDelay"> <h1>Robanukah</h1> <a><span>About</span></a> </div>');
        $('.infoBurst a').click(function(){
            $('aside').toggleClass('lightBox');
            if($('p.fadeTime').is(':visible')){
                $('.infoBurst a span').text('close');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','hidden');     
            } else {
                $('.infoBurst a span').text('about');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','visible');
            }
        });
        $('.close').click(function(){
            $('.infoBurst a').trigger('click');
        });
    }

    var winterveil = function() {
        TweenLite.to('#poly01', 1.75, {morphSVG: {shape:'#poly01f'}, stroke:'#83999E', fill:'#EBD5C8', ease:Power4.easeInOut});
        TweenLite.to('#poly02', 1.75, {morphSVG: {shape:'#poly02f'}, stroke:'#2B0805', fill:'#5A120F', ease:Power4.easeInOut});
        TweenLite.to('#poly03', 1.75, {morphSVG: {shape:'#poly03f'}, stroke:'#31484E', fill:'#EBD5C8', ease:Power4.easeInOut});
        TweenLite.to('#poly04', 1.75, {morphSVG: {shape:'#poly04f'}, stroke:'#5F1716', fill:'#AE2625', ease:Power4.easeInOut});
        TweenLite.to('#poly05', 1.75, {morphSVG: {shape:'#poly05f'}, stroke:'#5F1716', fill:'#AE2625', ease:Power4.easeInOut});
        TweenLite.to('#poly06', 1.75, {morphSVG: {shape:'#poly06f'}, stroke:'#E7E7E7', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly07', 1.75, {morphSVG: {shape:'#poly07f'}, stroke:'#E7E7E7', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly08', 1.75, {morphSVG: {shape:'#poly08f'}, stroke:'#AA5447', fill:'#5F1716', ease:Power4.easeInOut});
        TweenLite.to('#poly09', 1.75, {morphSVG: {shape:'#poly09f'}, stroke:'#AA5447', fill:'#5F1716', ease:Power4.easeInOut});
        TweenLite.to('#poly10', 1.75, {morphSVG: {shape:'#poly10f'}, stroke:'#5F1716', fill:'#EC4B3B', ease:Power4.easeInOut});
        TweenLite.to('#poly11', 1.75, {morphSVG: {shape:'#poly11f'}, stroke:'#5F1716', fill:'#EC4B3B', ease:Power4.easeInOut});  
        TweenLite.to('#poly12', 1.75, {morphSVG: {shape:'#poly12f'}, stroke:'#9B9345', fill:'#9B9344', ease:Power4.easeInOut});
        TweenLite.to('#poly13', 1.75, {morphSVG: {shape:'#poly13f'}, stroke:'#5F1716', fill:'#AE2625', ease:Power4.easeInOut});
        TweenLite.to('#poly14', 1.75, {morphSVG: {shape:'#poly14f'}, stroke:'#5F1716', fill:'#AE2625', ease:Power4.easeInOut});
        TweenLite.to('#poly15', 1.75, {morphSVG: {shape:'#poly15f'}, stroke:'#9B9345', fill:'#9B9344', ease:Power4.easeInOut});
        TweenLite.to('#poly16', 1.75, {morphSVG: {shape:'#poly16f'}, stroke:'#545116', fill:'#3C3A0E', ease:Power4.easeInOut});
        TweenLite.to('#poly17', 1.75, {morphSVG: {shape:'#poly17f'}, stroke:'#831817', fill:'#AE2625', ease:Power4.easeInOut});
        TweenLite.to('#poly18', 1.75, {morphSVG: {shape:'#poly18f'}, stroke:'#9B9345', fill:'#9B9344', ease:Power4.easeInOut});
        TweenLite.to('#poly19', 1.75, {morphSVG: {shape:'#poly19f'}, stroke:'#631E1D', fill:'#8C1A19', ease:Power4.easeInOut});
        TweenLite.to('#poly20', 1.75, {morphSVG: {shape:'#poly20f'}, stroke:'#545116', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly21', 1.75, {morphSVG: {shape:'#poly21f'}, stroke:'#E7E7E7', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly22', 1.75, {morphSVG: {shape:'#poly22f'}, stroke:'#545116', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly23', 1.75, {morphSVG: {shape:'#poly23f'}, stroke:'#E7E7E7', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly24', 1.75, {morphSVG: {shape:'#poly24f'}, stroke:'#4A5416', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly25', 1.75, {morphSVG: {shape:'#poly25f'}, stroke:'#E7E7E7', fill:'#E7E7E7', ease:Power4.easeInOut});
        TweenLite.to('#poly26', 1.75, {morphSVG: {shape:'#poly26f'}, stroke:'#631E1D', fill:'#8C1A19', ease:Power4.easeInOut});
        TweenLite.to('#poly27', 1.75, {morphSVG: {shape:'#poly27f'}, stroke:'#595959', fill:'#FCFBC9', ease:Power4.easeInOut});
        TweenLite.to('#poly28', 1.75, {morphSVG: {shape:'#poly28f'}, stroke:'#460100', fill:'#450000', ease:Power4.easeInOut});
        TweenLite.to('#poly29', 1.75, {morphSVG: {shape:'#poly29f'}, stroke:'#EBD5C8', fill:'#879B9F', ease:Power4.easeInOut});
        TweenLite.to('#poly30', 1.75, {morphSVG: {shape:'#poly30f'}, stroke:'#595959', fill:'#FCFBC9', ease:Power4.easeInOut});
        TweenLite.to('#poly31', 1.75, {morphSVG: {shape:'#poly31f'}, stroke:'#460100', fill:'#450000', ease:Power4.easeInOut});
        TweenLite.to('#poly32', 1.75, {morphSVG: {shape:'#poly32f'}, stroke:'#545116', fill:'#545116', ease:Power4.easeInOut});
        TweenLite.to('#poly33', 1.75, {morphSVG: {shape:'#poly33f'}, stroke:'#B4AC5D', fill:'#B4AC5D', ease:Power4.easeInOut});
        TweenLite.to('#poly34', 1.75, {morphSVG: {shape:'#poly34f'}, stroke:'#B4AC5D', fill:'#B4AC5D', ease:Power4.easeInOut});
        TweenLite.to('#poly35', 1.75, {morphSVG: {shape:'#poly35f'}, stroke:'#831817', fill:'#AE2625', ease:Power4.easeInOut});
        TweenLite.to('#poly36', 1.75, {morphSVG: {shape:'#poly36f'}, stroke:'#EBD5C8', fill:'#879B9F', ease:Power4.easeInOut});
        TweenLite.to('#poly37', 1.75, {morphSVG: {shape:'#poly37f'}, stroke:'#A2A5A2', fill:'#C1B0A5', ease:Power4.easeInOut});
        TweenLite.to('#poly38', 1.75, {morphSVG: {shape:'#poly38f'}, stroke:'#C1B0A5', fill:'#EBD5C8', ease:Power4.easeInOut});
        TweenLite.to('#poly39', 1.75, {morphSVG: {shape:'#poly39f'}, stroke:'#4A5315', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly40', 1.75, {morphSVG: {shape:'#poly40f'}, stroke:'#4A5315', fill:'#707D26', ease:Power4.easeInOut});
        TweenLite.to('#poly41', 1.75, {morphSVG: {shape:'#poly41f'}, stroke:'#5F1716', fill:'#BC2E22', ease:Power4.easeInOut});
        TweenLite.to('#poly42', 1.75, {morphSVG: {shape:'#poly42f'}, stroke:'#3D3A0F', fill:'#5E7619', ease:Power4.easeInOut});
        TweenLite.to('#poly43', 1.75, {morphSVG: {shape:'#poly43f'}, stroke:'#3D3A0F', fill:'#526910', ease:Power4.easeInOut});
        TweenLite.to('#poly44', 1.75, {morphSVG: {shape:'#poly44f'}, stroke:'#3D3A0F', fill:'#6C871E', ease:Power4.easeInOut});
        TweenLite.to('#poly45', 1.75, {morphSVG: {shape:'#poly45f'}, stroke:'#EBD5C8', fill:'#879B9F', ease:Power4.easeInOut});
        TweenLite.to('#poly46', 1.75, {morphSVG: {shape:'#poly46f'}, stroke:'#5F1716', fill:'#BC2E22', ease:Power4.easeInOut});
        TweenLite.to('#poly47', 1.75, {morphSVG: {shape:'#poly47f'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly48', 1.75, {morphSVG: {shape:'#poly48f'}, stroke:'#83999E', fill:'#EBD5C8', ease:Power4.easeInOut});
        TweenLite.to('#poly49', 1.75, {morphSVG: {shape:'#poly49f'}, stroke:'#1D1D1D', fill:'#120D09', ease:Power4.easeInOut});
        TweenLite.to('#poly50', 1.75, {morphSVG: {shape:'#poly50f'}, stroke:'#5F1716', fill:'#D6392C', ease:Power4.easeInOut});
        TweenLite.to('#poly51', 1.75, {morphSVG: {shape:'#poly51f'}, stroke:'#5F1716', fill:'#D6392C', ease:Power4.easeInOut});
        TweenLite.to('#poly52', 1.75, {morphSVG: {shape:'#poly52f'}, stroke:'#5F1716', fill:'#BC2D21', ease:Power4.easeInOut});
        TweenLite.to('#poly53', 1.75, {morphSVG: {shape:'#poly53f'}, stroke:'#5F1716', fill:'#D6392C', ease:Power4.easeInOut});
        TweenLite.to('#poly54', 1.75, {morphSVG: {shape:'#poly54f'}, stroke:'#B4AC5D', fill:'#B4AC5D', ease:Power4.easeInOut});
        TweenLite.to('#poly55', 1.75, {morphSVG: {shape:'#poly55f'}, stroke:'#1D1D1D', fill:'#E2E3BF', ease:Power4.easeInOut});
        TweenLite.to('#poly56', 1.75, {morphSVG: {shape:'#poly56f'}, stroke:'#1D1D1D', fill:'#120D09', ease:Power4.easeInOut});
        TweenLite.to('#poly57', 1.75, {morphSVG: {shape:'#poly57f'}, stroke:'#8B9EA1', fill:'#C1B0A6', ease:Power4.easeInOut});
        TweenLite.to('#poly58', 1.75, {morphSVG: {shape:'#poly58f'}, stroke:'#B4AC5D', fill:'#B4AC5D', ease:Power4.easeInOut});
        TweenLite.to('#poly59', 1.75, {morphSVG: {shape:'#poly59f'}, stroke:'#545116', fill:'#5C7004', ease:Power4.easeInOut});
        TweenLite.to('#poly60', 1.75, {morphSVG: {shape:'#poly60f'}, stroke:'#545116', fill:'#545116', ease:Power4.easeInOut});
        $('aside').html('<h1 class="fadeTime">Feast of Winter Veil<span class="close">x</span></h1> <p class="fadeTime">The <a href="http://www.wowhead.com/event=141/feast-of-winter-veil" target="_blank">Feast of Winter Veil</a> is a festive time of year during which players in the <em>World of Warcraft</em> online universe can sample delicious festive treats, playfully toss snowballs, and receive special holiday gifts! It is similar to Christmas, featuring Greatfather Winter as an in-game version of Santa Claus.</p> <p class="fadeTime">There are a number of special foods which players can purchase, ranging from delicious Gingerbread Cookie to the maybe-not-quite-so-delicious  Graccu\'s Mince Meat Fruitcake!</p> <p class="fadeTime">As the festival nears its end, on the morning of December 25th players can retrieve festive gifts from beneath tall, decorated trees found in Orgrimmar or Ironforge.</p> <p class="fadeTime">Wish your friends a <strong>Happy Winter Veil!</strong></p><div class="fadeTime"><a href="" class="fadeTime social facebook">Share on Facebook</a><a target="_blank" href="http://twitter.com/intent/tweet?text=Happy Winter Veil!🎄🎁🎅&hashtags=nerdyholidays&url=http://bit.ly/21zZPuY" class="fadeTime social">Share on Twitter</a></div> <nav class="fadeTime"> <a  class="prev"><svg  width="75px" height="74px" viewBox="0 0 75 74"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-75.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M128.678226,110 L148.518669,150.678937 L115.961735,182.118803 L76,160.870771 L83.8592235,116.2989 L128.678226,110 Z M123.960714,144.636339 L123.960714,147.207768 C123.960714,147.917593 123.743082,148.523614 123.307812,149.025848 C122.872542,149.528083 122.306699,149.779197 121.610267,149.779197 L107.46741,149.779197 L113.353571,155.685447 C113.862502,156.167592 114.116964,156.770264 114.116964,157.493482 C114.116964,158.2167 113.862502,158.819373 113.353571,159.301518 L111.846874,160.828304 C111.351336,161.323842 110.748664,161.571607 110.038839,161.571607 C109.342407,161.571607 108.733038,161.323842 108.210714,160.828304 L95.1325886,147.730089 C94.6370504,147.234551 94.3892851,146.631879 94.3892851,145.922054 C94.3892851,145.225622 94.6370504,144.616253 95.1325886,144.093929 L108.210714,131.035893 C108.719645,130.526962 109.329014,130.2725 110.038839,130.2725 C110.735271,130.2725 111.337943,130.526962 111.846874,131.035893 L113.353571,132.5225 C113.862502,133.031431 114.116964,133.6408 114.116964,134.350625 C114.116964,135.06045 113.862502,135.669819 113.353571,136.17875 L107.46741,142.064911 L121.610267,142.064911 C122.306699,142.064911 122.872542,142.316024 123.307812,142.818259 C123.743082,143.320494 123.960714,143.926514 123.960714,144.636339 Z"></path> </g> </g> </svg></a> <a class="next"><svg  width="73px" height="75px" viewBox="0 0 73 75"><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g transform="translate(-318.000000, -109.000000)" stroke="#002C33" fill="#002C33"> <path d="M342.983862,183.052964 L319,144.670761 L348.092223,110 L390.056068,126.954494 L386.898927,172.103708 L342.983862,183.052964 Z M371.477645,148.716819 C371.477645,149.440037 371.229879,150.049406 370.734341,150.544944 L357.656216,163.623069 C357.133892,164.118608 356.524523,164.366373 355.828091,164.366373 C355.145052,164.366373 354.542379,164.118608 354.020055,163.623069 L352.513359,162.116373 C352.004428,161.607442 351.749966,160.998073 351.749966,160.288248 C351.749966,159.578423 352.004428,158.969054 352.513359,158.460123 L358.39952,152.573962 L344.256662,152.573962 C343.56023,152.573962 342.994388,152.322849 342.559118,151.820614 C342.123848,151.318379 341.906216,150.712359 341.906216,150.002534 L341.906216,147.431105 C341.906216,146.72128 342.123848,146.115259 342.559118,145.613025 C342.994388,145.11079 343.56023,144.859677 344.256662,144.859677 L358.39952,144.859677 L352.513359,138.953427 C352.004428,138.471281 351.749966,137.868609 351.749966,137.145391 C351.749966,136.422173 352.004428,135.8195 352.513359,135.337355 L354.020055,133.830659 C354.528986,133.321728 355.131659,133.067266 355.828091,133.067266 C356.537916,133.067266 357.147285,133.321728 357.656216,133.830659 L370.734341,146.908784 C371.229879,147.377536 371.477645,147.980209 371.477645,148.716819 Z"></path> </g> </g> </svg></a> </nav><div class="infoBurst noDelay"> <h1>Feast of Winter Veil</h1> <a><span>About</span></a> </div>');
        $('.infoBurst a').click(function(){
            $('aside').toggleClass('lightBox');
            if($('p.fadeTime').is(':visible')){
                $('.infoBurst a span').text('close'); 
                $('.noDelay h1, nav .prev, nav .next').css('visibility','hidden');    
            } else {
                $('.infoBurst a span').text('about');
                $('.noDelay h1, nav .prev, nav .next').css('visibility','visible');
            }
        });
        $('.close').click(function(){
            $('.infoBurst a').trigger('click');
        });
    }
    