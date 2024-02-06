const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  var swiper1 = new Swiper(".mySwiper1", {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper1-button-next',
      prevEl: '.swiper1-button-prev',
    },
  
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      // clickable: true,
    },
  });



  function openPage(pageName,elmnt,color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      // tablinks[i].style.backgroundColor = "";
      tablinks[i].classList.remove(color);
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    document.getElementById(pageName).style.color = "black";
  
    // Add the specific color to the button used to open the tab content
    // elmnt.classList.remove(color)
    elmnt.classList.toggle(color)
    console.log(elmnt)
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();