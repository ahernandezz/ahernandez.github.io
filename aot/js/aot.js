$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy 
  
      $('section').each(function(){
  
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let top = $(window).scrollTop();
  
        if(top > offset && top < offset + height){
          $('.navbar ul li a').removeClass('active')
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      )
  
  
    });
  
  });



  // // change image on click
  // let btnall = document.querySelector('#btnall');
  // let btn1 = document.querySelector('#btn1');
  // let btn2 = document.querySelector('#btn2');
  // let btn3 = document.querySelector("#btn3");
  // let btn4 = document.querySelector("#btn4");
  // let btn5 = document.querySelector("#btn5");
  // let btn6 = document.querySelector("#btn6");
  // let btn7 = document.querySelector("#btn7");
  // let btn8 = document.querySelector("#btn8");
  // let btn9 = document.querySelector("#btn9");

  // btn1.addEventListener('click', () =>{
  // titan1.src = "aot/images/aot-eren-titan.jpg";
  // eren_p.innerHTML = 'attack titan';
  // eren_h3.innerHTML = "Attack, Founder, War Hammer titan";
  // })
  //  btn2.addEventListener('click', () =>{
  //    titan2.src = "aot/images/aot-armin-titan.jpg";
  //   armin_p.innerHTML = "titan ";
  //   armin_h3.innerHTML = "Colossus titan";

  //  })
  // btn3.addEventListener('click', () =>{
  //   titan3.src = "aot/images/aot-annie-titan.jpg";
  //   annie_p.innerHTML = "titan";
  //   annie_h3.innerHTML = "Female titan";

  // })
  // btn4.addEventListener('click', () =>{
  //   titan4.src = "aot/images/aot-zeke-titan.jpg";
  //   zeke_p.innerHTML = "titan";
  //   zeke_h3.innerHTML = "Beast titan";

  // })
  // btn5.addEventListener('click', () =>{
  //   titan5.src = "aot/images/aot-bertholdt-titan.png";
  //   bertholdt_p.innerHTML = "titan";
  //   bertholdt_h3.innerHTML = "Colossus titan";

  // })
  // btn6.addEventListener('click', () =>{
  //   titan6.src = "aot/images/aot-reiner-titan.jpg";
  //   reiner_p.innerHTML = "titan";
  //   reiner_h3.innerHTML = "Armor titan";

  // })
  // btn7.addEventListener('click', () =>{
  //   titan7.src = "aot/images/aot-Pieck-titan.png";
  //   pieck_p.innerHTML = "titan";
  //   pieck_h3.innerHTML = "Cart titan";

  // })
  // btn8.addEventListener('click', () =>{
  //   titan8.src = "aot/images/aot-Tybur-titan.png";
  //   tyber_p.innerHTML = "titan";
  //   tyber_h3.innerHTML = "War Hammer titan";

  // })
  // btn9.addEventListener('click', () =>{
  //   titan9.src = "aot/images/aot-porco-titan.png";
  //   porco_p.innerHTML = "titan";
  //   porco_h3.innerHTML = "Jaw titan";
  // })

  // btnall.addEventListener('click',() =>{
  //   titan1.src = "aot/images/aot-eren-titan.jpg";
  //   eren_p.innerHTML = 'attack titan';
  //   eren_h3.innerHTML = "Attack, Founder, War Hammer titan";

  //   titan2.src = "aot/images/aot-armin-titan.jpg";
  //   armin_p.innerHTML = "titan ";
  //   armin_h3.innerHTML = "Colossus titan";

  //   titan3.src = "aot/images/aot-annie-titan.jpg";
  //   annie_p.innerHTML = "titan";
  //   annie_h3.innerHTML = "Female titan";

  //   titan4.src = "aot/images/aot-zeke-titan.jpg";
  //   zeke_p.innerHTML = "titan";
  //   zeke_h3.innerHTML = "Beast titan";

  //   titan5.src = "aot/images/aot-bertholdt-titan.png";
  //   bertholdt_p.innerHTML = "titan";
  //   bertholdt_h3.innerHTML = "Colossus titan";

  //   titan6.src = "aot/images/aot-reiner-titan.jpg";
  //   reiner_p.innerHTML = "titan";
  //   reiner_h3.innerHTML = "Armor titan";

  //   titan7.src = "aot/images/aot-Pieck-titan.png";
  //   pieck_p.innerHTML = "titan";
  //   pieck_h3.innerHTML = "Cart titan";

  //   titan8.src = "aot/images/aot-Tybur-titan.png";
  //   tyber_p.innerHTML = "titan";
  //   tyber_h3.innerHTML = "War Hammer titan";
    
  //   titan9.src = "aot/images/aot-porco-titan.png";
  //   porco_p.innerHTML = "titan";
  //   porco_h3.innerHTML = "Jaw titan";
  // })
// new way of toggle between names 

  function toggleTitan() {
    var x = document.getElementById("eren_h3");
    var b = document.getElementById("btn1");
    if (eren_h3.innerHTML === "eren" && btn1.innerHTML ==="titan form") {
      eren_h3.innerHTML = "Attack, Founder, War Hammer titan";
      btn1.innerHTML = "human form";
      titan1.src = "aot/images/aot-eren-titan.jpg";
      armin_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      eren_h3.innerHTML = "eren";
      btn1.innerHTML = "titan form";
      titan1.src = "aot/images/aot-eren.jpg";
      eren_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }
  }

  function toggleTitan2() {
    if (armin_h3.innerHTML === "armin" && btn2.innerHTML ==="titan form") {
      armin_h3.innerHTML = "Colossus titan";
      btn2.innerHTML = "human form";
      titan2.src = "aot/images/aot-armin-titan.jpg";
      armin_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      armin_h3.innerHTML = "armin";
      btn2.innerHTML = "titan form";
      titan2.src = "aot/images/aot-armin.jpg";
      armin_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }
  } 

  function toggleTitan3() {
    if (annie_h3.innerHTML === "annie" && btn3.innerHTML ==="titan form") {
      annie_h3.innerHTML = "female titan";
      btn3.innerHTML = "human form";
      titan3.src = "aot/images/aot-annie-titan.jpg";
      annie_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      annie_h3.innerHTML = "annie";
      btn3.innerHTML = "titan form";
      titan3.src = "aot/images/aot-annie.jpg";
      annie_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }
  } 

  function toggleTitan4() {
    if (zeke_h3.innerHTML === "zeke" && btn4.innerHTML ==="titan form") {
      zeke_h3.innerHTML = "beast titan";
      btn4.innerHTML = "human form";
      titan4.src = "aot/images/aot-zeke-titan.jpg";
      zeke_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      zeke_h3.innerHTML = "zeke";
      btn4.innerHTML = "titan form";
      titan4.src = "aot/images/aot-zeke.jpg";
      zeke_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }

  } 

  function toggleTitan5() {
    if (bertholdt_h3.innerHTML === "bertholdt" && btn5.innerHTML ==="titan form") {
      bertholdt_h3.innerHTML = "Colossus titan";
      btn5.innerHTML = "human form";
      titan5.src = "aot/images/aot-bertholdt-titan.png";
      bertholdt_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      bertholdt_h3.innerHTML = "bertholdt";
      btn5.innerHTML = "titan form";
      titan5.src = "aot/images/aot-bertholdt.png";
      bertholdt_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }

  } 

  function toggleTitan6() {
    if (reiner_h3.innerHTML === "reiner" && btn6.innerHTML ==="titan form") {
      reiner_h3.innerHTML = "Armor titan";
      btn6.innerHTML = "human form";
      titan6.src = "aot/images/aot-reiner-titan.jpg";
      reiner_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      reiner_h3.innerHTML = "reiner";
      btn6.innerHTML = "titan form";
      titan6.src = "aot/images/aot-reiner.jpg";
      reiner_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }

  } 

  function toggleTitan7() {
    if (pieck_h3.innerHTML === "pieck" && btn7.innerHTML ==="titan form") {
      pieck_h3.innerHTML = "Cart titan";
      btn7.innerHTML = "human form";
      titan7.src = "aot/images/aot-pieck-titan.png";
      pieck_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      pieck_h3.innerHTML = "pieck";
      btn7.innerHTML = "titan form";
      titan7.src = "aot/images/aot-pieck.png";
      pieck_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }

  } 

  function toggleTitan8() {
    if (tybur_h3.innerHTML === "Lara Tybur" && btn8.innerHTML ==="titan form") {
      tybur_h3.innerHTML = "War Hammer titan";
      btn8.innerHTML = "human form";
      titan8.src = "aot/images/aot-tybur-titan.png";
      tybur_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      tybur_h3.innerHTML = "Lara Tybur";
      btn8.innerHTML = "titan form";
      titan8.src = "aot/images/aot-tybur.png";
      tybur_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }

  } 

  function toggleTitan9() {
    if (porco_h3.innerHTML === "porco" && btn9.innerHTML ==="titan form") {
      porco_h3.innerHTML = " Jaw Titan";
      btn9.innerHTML = "human form";
      titan9.src = "aot/images/aot-porco-titan.png";
      porco_p.innerHTML = "age : 2200 <br> height : 200M <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    } else {
      porco_h3.innerHTML = "porco";
      btn9.innerHTML = "titan form";
      titan9.src = "aot/images/aot-porco.jpg";
      porco_p.innerHTML = "age : 22 <br> height : 169cm <br> affiliation : Survey Corps <br>Birthday : November 3rd";
    }

  } 