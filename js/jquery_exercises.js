$(() =>{
    "use strict";

    //**********************
    //Introduction

    $(() => {
        alert( 'The DOM has DOMING!' );
    });

    //**********************
    //Selectors

    // Id Selectors

    let getH1 = $('#1').html();
    alert(getH1);
    let getDiv = $('#2').html();
    alert(getDiv);

    //**********************
    //Class Selectors

  $('.codeup').css('border', '1px solid red');

  //**********************
    // Element Selectors

    $('li').css('font-size', '20px');
    $('h1').css('background-color','yellow');
    $('li').css('background-color','yellow');
    $('p').css('background-color','yellow');

    alert($('h1').html());
    alert($('.h1 ').text());

    $('h1, li, p').css('background-color','red');


    //**********************
    //Events

    $('#codeup').click(()=>{
        $('#codeup').css('background-color', 'red');
    })

    $('p').dblclick(()=>{
        $('p').css('font-size', '20px');
    })

    $('li').hover(
        function (){
            $(this).css('color', 'red');
        },
        function (){
            $(this).css('color', 'black');
        }
    );

})