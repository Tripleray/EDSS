var currentstep =1;
var radiostep1;
var radio2step1;
var radio3step1;
var radiostep2;
var radio2step2;
var radio3step2;
var radio4step2;
var radiostep3;
var radiostep4;
var radio2step4;
var radio3step4;
var radio4step4;
var radio5step4;
var step4drop;
var sareavalue;
var areavalue;
var longvalue;
var latvalue;
var depthvalue;
var namevalue;
var numbervalue;
var emailvalue;


function goNext() {
    alert("currentstep:"+currentstep);
    if(currentstep ==1){

if($('input[name=radiostep'+currentstep+']:checked').length && $('input[name=radio2step'+currentstep+']:checked').length && $('input[name=radio3step'+currentstep+']:checked').length){
// alert("radio checked");
// alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
radiostep1 = $('input[name=radiostep1]:checked').val();
radio2step1 = $('input[name=radio2step1]:checked').val();
radio3step1 = $('input[name=radio3step1]:checked').val();
currentstep++;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("You must select an option for each");
    // alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
}


    }

    //step2
    if(currentstep ==2){

       if($('input[name=radiostep'+currentstep+']:checked').length && $('input[name=radio2step'+currentstep+']:checked').length && $('input[name=radio3step'+currentstep+']:checked').length && $('input[name=radio4step'+currentstep+']:checked').length){
// alert("radio checked");
// alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
radiostep2 = $('input[name=radiostep2]:checked').val();
radio2step2 = $('input[name=radio2step2]:checked').val();
radio3step2 = $('input[name=radio3step2]:checked').val();
radio4step2 = $('input[name=radio4step2]:checked').val();
currentstep++;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("You must select an option for each");
    // alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
}


    }
     //step3
    if(currentstep ==3){
 if($('input[name=radiostep'+currentstep+']:checked').length){
// alert("radio checked");
// alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
radiostep3 = $('input[name=radio4step2]:checked').val();
currentstep++;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("You must select an option");
    // alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
}

    }



     //step4
    if(currentstep ==4){
      if($('input[name=radiostep'+currentstep+']:checked').length && $('input[name=radio2step'+currentstep+']:checked').length && $('input[name=radio3step'+currentstep+']:checked').length && $('input[name=radio4step'+currentstep+']:checked').length&& $('input[name=radio5step'+currentstep+']:checked').length){
// alert("radio checked");
// alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
radiostep4 = $('input[name=radiostep4]:checked').val();
radio2step4 = $('input[name=radio2step4]:checked').val();
radio3step4 = $('input[name=radio3step4]:checked').val();
radio4step4 = $('input[name=radio4step4]:checked').val();
radio5step4 = $('input[name=radio5step4]:checked').val();
currentstep++;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("You must select an option for each");
    // alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
} 
 
    }


     //step5
    if(currentstep ==5){
var longval=$.trim($("#step5latitude").val());
var latval=$.trim($("#step5longitude").val());
var depthval=$.trim($("#step5depth").val());
var areaval=$.trim($("#step5area").val());
var sareaval=$.trim($("#step5sarea").val());
var name=$.trim($("#name").val());
var number=$.trim($("#phonenumber").val());
var email=$.trim($("#email").val());

if(longval.length >0 && latval.length >0 && depthval.length >0 && areaval.length >0 && sareaval.length >0 && name.length >0 && number.length >0 && email.length >0){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
longvalue = longval;
latvalue = latval;
depthvalue = depthval;
areavalue = areaval;
sareavalue = sareaval;
namevalue = name;
numbervalue = number;
emailvalue = email;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
        }
        else{
            alert("Please enter a value for each.");
        }
    }

  
}



function goBack() {
    $('#calcresults').hide(1000);
   //step2
    if(currentstep ==2){

        
$('.nav-tabs a[href="#step-'+currentstep+'"]').removeClass("done");
currentstep--;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');




    }
     //step3
    if(currentstep ==3){

$('.nav-tabs a[href="#step-'+currentstep+'"]').removeClass("done");
currentstep--;

return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');


    }
    //step4
     
    if(currentstep ==4){

$('.nav-tabs a[href="#step-'+currentstep+'"]').removeClass("done");
currentstep--;

return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');


    }
    //step5
    
    if(currentstep ==5){

$('.nav-tabs a[href="#step-'+currentstep+'"]').removeClass("done");
currentstep--;

return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');


    }
}




function outputResult() {
    if(currentstep ==5){

$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
$('#resultstitle').html(namevalue+"'s Water Body Floating Treatment Wetland Report");
$('#resultsphone').html(numbervalue);
$('#resultsemail').html(emailvalue);
$('#step1input1').html(radiostep1);
$('#step1input2').html(radio2step1);
$('#step1input3').html(radio3step1);
switch(radiostep1){
case "None":
$('#step1response1').html("Your Riparian Buffer lacks any riparian vegetation, putting your system at extreme risk for runoff and erosion issues, and more specifically total suspended solids (TSS). These TSS increase turbidity (murkiness), reducing the availability of oxygen in the water, and ultimately suffocating aquatic organisms. We recommend planting both Riparian Buffer plants and installing floating treatment wetlands along the banks to reduce the inflow of erosion.");
break;

case "Very little":
$('#step1response1').html("Your Riparian Buffer lacks adequate vegetation, putting your system at moderate risk for runoff and erosion issues, more specifically total suspended solids (TSS). These TSS increase turbidity (murkiness), reducing the availability of oxygen in the water, and ultimately suffocating aquatic organisms. We recommend either planting Riparian Buffer plants and installing floating treatment wetlands along the banks to reduce erosion, However both options working in tandem will produce the best results.");
break;

case "Moderate":
$('#step1response1').html("Your Riparian Buffer has moderate vegetation, which reduces the chance that your system becomes at risk for runoff and erosion issues, more specifically total suspended solids (TSS). While at moderate risk, these suspended solids still increase turbidity (murkiness), reducing the availability of oxygen in the water, which could eventually suffocate any aquatic organisms. Please take appropriate measures to ensure this vegetation can grow and spread further (some upkeep).");
break;

case "Excessive":
$('#step1response1').html("Your Riparian Buffer has ample vegetation, which greatly reduces the chance that your system becomes at risk for runoff and erosion issues, more specifically suspended solids. While at minimal risk, any suspended solids can still increase turbidity (murkiness), reducing the availability of oxygen in the water. Please take appropriate measures to ensure this vegetation continues to thrives (minimal upkeep).");
break;
}

switch(radio2step1){
case "None":
$('#step1response2').html("Your water body is at very low risk of algae bloom issues. These issues include reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. However, due to the current status of your water body, no remediation actions are required to prevent algae growth.");
break;

case "Very little":
$('#step1response2').html("Your water body is at a slight risk for an increase in algae bloom. The issues associated with these blooms include reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. Installation of a floating treatment wetland, creation of a structured aquatic feeding chain, and providing aeration to the water body by installing an air pump aeration system would all reduce the chances of the current algae blooming and causing issues. In this instance, installation of one of the previously mentioned options would help prevent/reduce algae formation.");
break;

case "Moderate":
$('#step1response2').html("Your water body is being moderately impacted by the current presence of algae. The issues associated with the bloom your system is experiencing includes reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. Installation of a floating treatment wetland, creation of a structured aquatic feeding chain, providing aeration to the water body by installing an air pump aeration system, and increasing surface area in the aquatic system will help with reducing algae blooms intensity and frequency.To do this, either insert sticks into the bottom of your water body allowing them to stick out of the surface of the water. Another way to increase surface area is add gravel to the water body so it settles on the bottom of the water body, this will allow microbes to have a place to thrive and filter. By doing so, you will both increase surface area for nutrient fixating microbes and secure the sediment resting on the bottom of the water body in order to reduce the amount of total suspended solids (TSS), which can greatly hinder oxygen availability and wildlife growth. In this instance, implementation of at least 2 of the previously mentioned options would help reduce current algae and prevent future algae formation in your water body.");
break;

case "Excessive":
$('#step1response2').html("Your water body is being extremely impacted by the current presence of algae. The issues associated with the bloom your system is experiencing includes reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. Installation of a floating treatment wetland, creation of a structured aquatic feeding chain, providing aeration to the water body by installing an air pump aeration system, and increasing surface area in the aquatic system will help with reducing algae blooms intensity and frequency.To do this, either insert sticks into the bottom of your water body allowing them to stick out of the surface of the water. By doing so, you will both increase surface area for nutrient fixating microbes and secure the sediment resting on the bottom of the water body in order to reduce the amount of total suspended solids (TSS), which can greatly hinder oxygen availability and wildlife growth.  In this instance, implementing as many of the previously mentioned options possible would be necessary for adequately reducing current algae presence and preventing future algae bloom formation in your water body.");
break;
}

switch(radio3step1){
case "Excessive":
$('#step1response3').html("Your water body is at very low risk of algae bloom issues. These issues include reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. However, due to the current status of your water body, no remediation actions are required to prevent algae growth.");
break;

case "Very little":
$('#step1response3').html("Your water body is at a slight risk for an increase in algae bloom. The issues associated with these blooms include reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. Installation of a floating treatment wetland, creation of a structured aquatic feeding chain, and providing aeration to the water body by installing an air pump aeration system would all reduce the chances of the current algae blooming and causing issues. In this instance, installation of one of the previously mentioned options would help prevent/reduce algae formation.");
break;

case "Moderate":
$('#step1response3').html("Your water body is being moderately impacted by the current presence of algae. The issues associated with the bloom your system is experiencing includes reduction of dissolved oxygen, reduction of vital nutrients, or production of dangerous toxins that can cause illness by harmful algae blooms. Installation of a floating treatment wetland, creation of a structured aquatic feeding chain, providing aeration to the water body by installing an air pump aeration system, and increasing surface area in the aquatic system will help with reducing algae blooms intensity and frequency.To do this, either insert sticks into the bottom of your water body allowing them to stick out of the surface of the water. Another way to increase surface area is add gravel to the water body so it settles on the bottom of the water body, this will allow microbes to have a place to thrive and filter. By doing so, you will both increase surface area for nutrient fixating microbes and secure the sediment resting on the bottom of the water body in order to reduce the amount of total suspended solids (TSS), which can greatly hinder oxygen availability and wildlife growth. In this instance, implementation of at least 2 of the previously mentioned options would help reduce current algae and prevent future algae formation in your water body.");
break;
}




$('#calcresults').show(1000);
        }
        else{
            alert("error");
        }
        
    }

