$(document).ready(function(){

	$('.hide').hide();

	$('.trigger').click(function(){
		$('.hide').slideToggle();
	});
});

 $(function(){
    // set variable for the slideshow
    var slides = $('.fazes>li');
    var slideCount = 0;
    var totalSlides = slides.length;
    var slideCache = [];

    (function preloader(){
        // iffy - runs automatically when the page loads up and the jquery method fires 
        if(slideCount < totalSlides){
            // load Images
            slideCache[slideCount] = new Image();
            slideCache[slideCount].src = slides.eq(slideCount).find('img').attr('src');
            slideCache[slideCount].onload = function(){
                slideCount++;
                preloader();
            }

        } else {
            // run the slideshow
            slideCount = 0;
            SlideShow();
        }
    }());

    function SlideShow(){
        // code goes here
        slides.eq(slideCount).fadeTo(1000,1).delay(100).fadeTo(1000, 0.25, function(){
            slideCount < totalSlides - 1? slideCount ++ : slideCount = 0;
            SlideShow();
        });
    }
 });

// - -- - - - - - - - - - - - About the car variables - - - - - - - - - - - - - - - - - - - - - -
var carPayType = (function(){
    if ($('#ptype-car option:selected').text() == "Outright") {
        $('.finance').slideUp(500);
        $('.totals').slideUp(500);

       
        console.log('outright');

    } else {
        $('.finance').slideDown(500);
        $('.totals').slideDown(500);
        console.log('finance');
    

    };
});

var deposit = (function(){

    $('#initial').val($('#initial-payment').val());
    $('#upfront-sum').val((($('#initial').val()/100)*$('#car-fullpay').val()).toFixed(2));
    $('#remain-balance').val((+$('#car-fullpay').val() - +$('#upfront-sum').val()).toFixed(2));
});

var t = $('#clength');
var l = $('#remain-balance');
var a = $('#apr');

// - - - - - - - - - - about the car

$(document).ready(function(){
    $('.finance').slideUp(500);
    $('.totals').slideUp(500);
    
});

$('.car-pay-form').mouseenter(carPayType).mouseleave(carPayType);



$('#monthly-payments').val({
    "min" : 0,
    "max" : 10
});

$('#monthly-payments').mouseup(function(){

    $('#clength').val($('#monthly-payments').val());
    $('#contract-sum').val(($('#total-costs').val()/$('#clength').val()).toFixed(0));
    $('#interest-sum').val(((((+t.val()+((+t.val() *(+t.val()-1))/2))/+t.val())* +l.val() *(a.val()/100)/12)).toFixed(2));
    $('#total-costs').val(+$('#interest-sum').val() + +$('#car-fullpay').val() + +$('#loan-fee').val());
});

$('#monthly-payments').on('click touchend', function(){

    $('#clength').val($('#monthly-payments').val());
    $('#contract-sum').val(($('#total-costs').val()/$('#clength').val()).toFixed(0));
    $('#interest-sum').val(((((+t.val()+((+t.val() *(+t.val()-1))/2))/+t.val())* +l.val() *(a.val()/100)/12)).toFixed(2));
    $('#total-costs').val(+$('#interest-sum').val() + +$('#car-fullpay').val() + +$('#loan-fee').val());
});

$('#initial-payment').mouseup(deposit).mousedown(deposit);
$('#car-fullpay').keyup(deposit);
$('#initial-payment').on('click touchend', deposit);




// - - - - - - - - - - - - - - About You - - - - - - - - -  - - - - - - - - - - - - - - 

// - - - - - - - - -  Variables - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
    var preTax = $('#tax-free').val();
    var salary = document.getElementById('salary');
    var taxable = document.getElementById('taxable');
    var taxBand = document.getElementById('tax-band');
    var afterTax = document.getElementById('after-tax');
    var takehome = document.getElementById('takehome');
   

    // var preSal = parseFloat(salary.value);

    // salary.addEventListener("input",add);

//  - - - - - - - - - - - - - salary calculations - - - - - - - -  - - - - - - - - - -

    $('#salary').keyup(function(){
     var preSal = parseFloat(salary.value) || 0;

         if ((+preSal - +preTax)<0) {
            $('#taxable').val(0);
        } else { 
         taxable.value = +preSal - +preTax; 
            $('#taxable').val(taxable.value);
        };
    });


    $('#salary').keyup(function(){

        if (taxable.value<0.00000001) {
            taxBand.value = "None";
            afterTax.value = 0;
        } else if (taxable.value<32000) {
            var basic = taxable.value*0.8;
            taxBand.value = "Basic";
            afterTax.value = basic.toFixed(2);
        } else if (taxable.value<150000) {
            var higher = (32000*0.8)+((taxable.value-32000)*0.6);
            taxBand.value = "Higher";
            afterTax.value = higher.toFixed(2);
        } else {
            var addHigher = (32000*0.8)+(118000*0.6)+((taxable.value-150000)*0.55);
            taxBand.value = "Additional Higher";
            afterTax.value = addHigher.toFixed(2);
        };
        

    });

    

    $('#salary').keyup(function(){
        $('#takehome').val(+preTax + +afterTax.value);

        $('#mtakehome').val($('#takehome').val()/12);
        $('#ftakehome').val($('#mtakehome').val());

    });

// - - - - - - - - - - - - - - setting salary to 2 decimal places - - - - - - - - - - - - 

    $("#salary").keyup(function() {
    var num = parseFloat($("#mtakehome").val());
    var new_num = $("#mtakehome").val(num.toFixed(2));
    var num = parseFloat($("#ftakehome").val());
    var new_num = $("#ftakehome").val(num.toFixed(2));
});

//  - - - - - - - - - - - -  Living Costs - - - - - - - - - - - - - - - - - - - - - - - 

    $('.living-cost').keyup(function(){
        console.log(this.id);
        var che = this.id;
        
        console.log($('.'+this.id+' option:selected').text());
        var id = $('#'+this.id).val()

        if ($('.'+this.id+' option:selected').text() == "Week") {
            console.log('weekly spend');
            $('#'+this.id+'-av').val((id*52/12).toFixed(2));
        } else if ($('.'+this.id+' option:selected').text() == "Month") {
            console.log('monthly spend');
            $('#'+this.id+'-av').val(id);
        } else {
            console.log('yearly spend');
            $('#'+this.id+'-av').val(((id/12).toFixed(2)));
        };

      
    });

// - - - - - - - - - - -  Calculate Monthly Spend  - - - - - - - - - - - - - - - - - - - -

        
var mSpend = $('#mspend');
var fSpend = $('#fspend');
var fTakehome = $('#ftakehome');
var fRemain = $('#fremain');

         


    $('#calc-mspend').click(function(){
        
        
        mSpend.val(( +$('#bills-av').val() + +$('#fuel-av').val() + +$('#roadtax-av').val() + +$('#mot-av').val() + +$('#service-av').val() + +$('#repairs-av').val() + +$('#food-av').val() + +$('#nightsout-av').val() + +$('#general-av').val() + +$('#othersaving-av').val()).toFixed(2));
        $('#fspend').val(mSpend.val());
    });

// - - - - - - - - - - - --  final choice  - - - - - - - - - - - - - - - - -  -  
    var selected = (function(){

        var max = +$('#fremain').val() - +$('#contract-sum').val();

        if ($('#ptype-car option:selected').text() == "Outright") {
            console.log('zero');
            $('#myRange').attr({
                "min" : +0 ,
                "max" : +$('#fremain').val()
            });

            $('.needed').text('Total Car Cost');
            $('#fcar').val($('#car-fullpay').val());

        } else {
            console.log('contract-sum');
            $('#myRange').attr({
                "min" : +$('#contract-sum').val() ,
                "max" : +$('#fremain').val() 
            });

            $('.needed').text('Initial Car Cost');
            $('#fcar').val($('#total-costs').val());  
        };

        if (+fTakehome.val() > +fSpend.val()) {
        $('#fremain').val((+fTakehome.val() - +fSpend.val()).toFixed(2));
        $('#freal').val((+fRemain.val()/50 | 0)*50 -50);
            }   else {
        $('#freal').val(0);
        $('#fremain').val(0);
        };
    
    });
    
    $(document).keyup(selected).keydown(selected).mousedown(selected).mouseup(selected);
    $('#calc-mspend').click(selected);




    $('#myRange').mouseup

    var fin = (function(){
        $('#fchoose').val((+$('#myRange').val()).toFixed(2));
        $('#fmonths').val(Math.ceil($('#fcar').val()/$('#fchoose').val()));
    });

    $('#myRange').mouseup(fin);

    $('#myRange').on('click touchend', function(){
        $('#fchoose').val((+$('#myRange').val()).toFixed(2));
        $('#fmonths').val(Math.ceil($('#fcar').val()/$('#fchoose').val()));
    });

    


 // media screen -----------------------------------------------------------------------

$(document).ready(function(){

if ($(window).width() < 600 && $('#ptype-car option:selected').text() == "finance") {
    console.log('working');
    $('.carsave').css({
        "height" : "1500px"
    });

} else {
    console.log('not working');
    $('.carsave').css({
        "height" : "650px"
    });
};

});

 $(window).resize(function() {
  if ($(window).width() < 600 && $('#ptype-car option:selected').text() == "finance") {
    console.log('working');
    $('.carsave').css({
        "height" : "1500px"
    });

} else {
    console.log('not working');
    $('.carsave').css({
        "height" : "650px"
    });
};

});



