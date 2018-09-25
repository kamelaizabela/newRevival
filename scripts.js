    //scroll 

    $(document).ready(function (){
    $('a[href^="#"]').click(function() {
      var hash = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 2000);
      return false;
  });
  
});






// Form

var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
 
  fixStepIndicator(n)
}

function nextPrev(n) {
  
  var x = document.getElementsByClassName("tab");
  
  if (n == 1 && !validateForm()) 
  
  return false;
 
  x[currentTab].style.display = "none";
  
  currentTab = currentTab + n;
  
  if (currentTab >= x.length) {
   
    document.getElementById("booking").submit();
    alert("Thank you for reservation");
    return false;
  }

  showTab(currentTab);
}

function validateForm() {

  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
 
  for (i = 0; i < y.length; i++) {
   
    if (y[i].value == "") {
      
      valid = false;
      document.getElementById("demo").style.display = "block";
      document.getElementById("demo").innerHTML = "Please insert valid information in all required fields";
      
    }
  }
 
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    document.getElementById("demo").style.display = "none";

    $('#nextBtn').on('click', function() {
      $("#booking").valid();
      });
  }
  return valid; 


  
}



function fixStepIndicator(n) {

  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  x[n].className += " active";
}



//validation II 



 
   
  $("#booking").validate({  
    
            rules: {
               firstname: "required", 
               lastname: "required",
               phone: "required",
               email: {
                 required: true,
                 email: true
               },
               street: "required",
               city: "required",
               country: "required",
               postcode: {
                 required: true,
                 minlength: 5,
                  maxlength: 6,
                
               },
               phone: {
                required: true,
                minlength: 11,
               digits: true
              },
              cardnumber: {
                required: false,
                minlength: 12,
                maxlength: 12,
                digits: true
              },
              cvv: {
                required: false,
                minlength: 3,
                maxlength: 3,
                digits: true
              }

            },
 
            messages: {
                firstname: "Please enter your name",
                lastname: "Please enter your lastname",
                phone: "Phone is required",
                email: "Please enter a valid email address",
                PostCode: {
                  required: "Please enter your Postal Code!",
                  minlength: "Your Postal Code must be at least 5 numbers!",
                  maxlength: "Your Postal Code must be max 6 numbers!",
                  
              },
              phone: {
                required: "Please enter your phone number!",
                minlength: "Your phone number must be at least 11 numbers!",
                digits: "Your phone number must be at least 11 numbers!"
            },
            cvv: {
              required: "Please enter cvv number!",
              minlength: "CVV must be at least 3 numbers!",
              maxlength: "CVV must be max 3 numbers!",
              digits: "CVV must be at least 3 numbers!"
          },
          cardnumber: {
            required: "Please enter your card number!",
            minlength: "Card number must be at least 12 numbers!",
            maxlength: "Card number must be max 12 numbers!",
            digits: "Card number must be at least 12 numbers!"
        },
                
            },

            
            
        });

   

      
     



 

 // datapicker 

 $('.datepicker').datepicker();
 
 $('.inputDate').datepicker( {
   format: 'mm/dd/yy',
   toggleActive: true,
   forceParse: true,
   keepEmptyValues: false,
   todayHighlight: true,
   disableTouchKeyboard: true,
   autoclose: true,
  
 });



 $("#StartDate").datepicker({
  autoclose: true,
}).on('changeDate', function (selected) {
  var minDate = new Date(selected.date.valueOf());
  $('#EndDate').datepicker('setStartDate', minDate);
});

$("#EndDate").datepicker({
  autoclose: true
}).on('changeDate', function (selected) {
  var minDate = new Date(selected.date.valueOf());
  $('#StartDate').datepicker('setEndDate', minDate);
});


//


