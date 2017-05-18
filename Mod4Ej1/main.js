var netflix = 'netflix';
var amazonvideo = 'Amazon Video';
var curiosotystream = 'Curiosity Stream';

var netflixPricing = 10.00;
var amazonvideoPricing = 9.00;
var curiosotystreamPricing = 3.00;

var netflixIsused = true;
var amazonvideoIsused = true;
var curiosotystreamIsused = true;

var total = 0;

if (netflixIsused === true ){
    total = total + netflixPricing;
}
if (amazonvideoIsused === true ){
    total += amazonvideoPricing;
}
if (curiosotystreamIsused === true ){
    total += curiosotystreamPricing;
}

alert ('You spend $ ' + total + ' on Online Streaming Services each month.');