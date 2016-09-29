$(document).ready(function(){

    $('.hide').hide();

    $('.trigger').click(function(){
        $('.hide').slideToggle();
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
        slides.eq(slideCount).fadeTo(1000, 1).delay(100).fadeTo(1000, 0.25, function(){
            slideCount < totalSlides - 1? slideCount ++ : slideCount = 0;
            SlideShow();
        });
    };
 });
});


    var duration = document.getElementById('duration');
    

    var numOne = document.getElementById('tickets');
    var numTwo = document.getElementById('accommodation');
    var numThree = document.getElementById('transport');
    var numFour = document.getElementById('days');
    var numFive = document.getElementById('nights');
    var numSix = document.getElementById('eventdrinks');
    var numSeven = document.getElementById('eventfood');
    var addHol = document.getElementById('event-sum');
    var addExp = document.getElementById('expense-sum');
    var addSafety = document.getElementById('safety');
    var daysOne = document.getElementById('days-num');
    var daysTwo = document.getElementById('nights-num');
    var daysThree = document.getElementById('eventdrinks-num');
    var daysFour = document.getElementById('eventfood-num');
    var safetyDay = document.getElementById('safety-num');


    var tickets = parseFloat(numOne.value);
    var accommodation = parseFloat(numTwo.value);
    var transport = parseFloat(numThree.value);
    var days = parseFloat(numFour.value);
    var nights = parseFloat(numFive.value);
    var eventdrinks = parseFloat(numSix.value);
    var eventfood = parseFloat(numSeven.value);
    var daysNum = parseFloat(daysOne.value);
    var nightsNum = parseFloat(daysTwo.value);
    var eventdrinksNum = parseFloat(daysThree.value);
    var eventfoodNum = parseFloat(daysFour.value);
    var safetyNum = parseFloat(daysFour.value);



    numOne.addEventListener("input",add);
    numTwo.addEventListener("input",add);
    numThree.addEventListener("input",add);
    numFour.addEventListener("input",add);
    numFive.addEventListener("input",add);
    numSix.addEventListener("input",add);
    numSeven.addEventListener("input",add);
    daysOne.addEventListener("input",add);
    daysTwo.addEventListener("input",add);
    daysThree.addEventListener("input",add);
    daysFour.addEventListener("input",add);
    safetyDay.addEventListener("input",add);
    addHol.addEventListener("input",add);
    addExp.addEventListener("input",add);



    function add() {
    var tickets = parseFloat(numOne.value) || 0;
    var accommodation = parseFloat(numTwo.value) || 0;
    var transport = parseFloat(numThree.value) || 0;
    addHol.value=(tickets+accommodation+transport).toFixed(2);

    var days = parseFloat(numFour.value) || 0;
    var nights = parseFloat(numFive.value) || 0;
    var eventdrinks = parseFloat(numSix.value) || 0;
    var eventfood = parseFloat(numSeven.value) || 0;
    var daysNum = parseFloat(daysOne.value) || 0;
    var nightsNum = parseFloat(daysTwo.value) || 0;
    var eventdrinksNum = parseFloat(daysThree.value) || 0;
    var eventfoodNum = parseFloat(daysFour.value) || 0;
    var sum = ((days*daysNum)+(nights*nightsNum)+(eventdrinks*eventdrinksNum)+(eventfood*eventfoodNum))
    addSafety.value=(sum*safetyDay.value).toFixed(2);
    
    addExp.value=(sum*(safetyDay.value)+sum).toFixed(2);
    


};



$(document).ready(function(){

   $("#lock").click(function(){
        console.log(duration.value);
        $(".days").attr({
            "max" : duration.value,
            "min" : 1,
        }).css({
            "min-width" : "75px"
        });


   });

    $(document).keyup(function(){
        var x = $('#event-sum').val();
        var y = $('#expense-sum').val();
        var total = +x + +y;

        $("#total-costs").val((total).toFixed(2));  
    })
        


    console.log('hi');
   
   if (addExp.value>0) {
    console.log('higher than 0');
   };


    
});

// - - - - - - - - - - - - - - About You - - - - - - - - -  - - - - - - - - - - - - - - 

// - - - - - - - - -  Variables - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
    var preTax = $('#tax-free').val();
    var salary = document.getElementById('salary');
    var taxable = document.getElementById('taxable');
    var taxBand = document.getElementById('tax-band');
    var afterTax = document.getElementById('after-tax');
    var takehome = document.getElementById('takehome');
   

    var preSal = parseFloat(salary.value);

    salary.addEventListener("input",add);

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

        $('myRange').val({
            "min" : 0,
            "max" : $('#fremain').val()
        });

         if (+fTakehome.val() > +fSpend.val()) {
        $('#fremain').val((+fTakehome.val() - +fSpend.val()).toFixed(2));
        $('#freal').val((+fRemain.val()/50 | 0)*50 -50);
    }   else {
        $('#freal').val(0);
        $('#fremain').val(0);

    };
        $('#fcar').val($('#total-costs').val());


    });

    $(document).keyup(selected);
    $('#calc-mspend').click(selected);

    var fin = (function(){
        $('#fchoose').val((+$('#freal').val()/100)* +$('#myRange').val());
        $('#fmonths').val(Math.ceil($('#fcar').val()/$('#fchoose').val()));
    });

    $('#myRange').mouseup(fin);

    $('#myRange').on('click touchend', function(){
        $('#fchoose').val((+$('#freal').val()/100)* +$('#myRange').val());
        $('#fmonths').val(Math.ceil($('#fcar').val()/$('#fchoose').val()));
    });

    



