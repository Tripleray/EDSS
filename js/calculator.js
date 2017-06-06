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
radiostep3 = $('input[name=radiostep3]:checked').val();
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

if(longval.length >0 && latval.length >0 && depthval.length >0 && areaval.length >0 && sareaval.length >0){
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
var longvalue=$.trim($("#step5latitude").val());
var latvalue=$.trim($("#step5longitude").val());
var depthvalue=$.trim($("#step5depth").val());
var areavalue=$.trim($("#step5area").val());
var sareavalue=$.trim($("#step5sarea").val());
var namevalue=$.trim($("#name").val());
var numbervalue=$.trim($("#phonenumber").val());
var emailvalue=$.trim($("#email").val());
var selectvalue = $('select[name=sel1]').val()

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

$('#step2input1').html(radiostep2);
$('#step2input2').html(radio2step2);
$('#step2input3').html(radio3step2);
$('#step2input4').html(radio4step2);
switch(radiostep2){
case "Yes":
$('#step2response1').html("Agricultural activities such as over-fertilization, overuse of manure, and the utilization of pesticides raises the potential of a harmful nutrient or chemical entering the system. Over-fertilization leads to an excess of inorganic nutrients that contribute to algae blooms. Overuse of manure can promote E. Coli outbreaks and contributes to decrease dissolved oxygen in the water.");
break;

case "No":
$('#step2response1').html("N/A");
break;
}

switch(radio2step2){
case "Yes":
$('#step2response2').html("Pesticides can introduce harmful, man made chemicals that are not easily removed by natural systems such as floating treatment wetlands. If you are aware of any pesticide related issues in your area, please contact the appropriate medical authorities to assess exposure, along with your areas applicable farm bureau contact.");
break;

case "No":
$('#step2response2').html("N/A");
break;

case "N/A":
$('#step2response2').html("N/A");
break;
}

switch(radio3step2){
case "Yes":
$('#step2response3').html("Industrial activity can lead to unknown dangerous chemicals and inorganic materials  to find their way into the surrounding ecosystem.");
break;

case "No":
$('#step2response3').html("N/A");
break;
}

switch(radio4step2){
case "Yes":
$('#step2response4').html("Industrial runoff can consist of unknown chemicals and other inorganic nutrients, such as nitrates and phosphates, all of which are dangerous for aquatic ecosystems in excessive concentrations. ");
break;

case "No":
$('#step2response4').html("N/A");
break;

case "N/A":
$('#step2response4').html("N/A");
break;
}

$('#step3input1').html(radiostep3);
switch(radiostep3){
case "Water Quality Remediation":
$('#step3response1').html("Due to the large amount of surface area in floating treatment wetlands, and water circulation through the material, many water quality parameters can be remediated. These parameters include suspended solids (dirt particles which can suffocate aquatic life), nutrients such as; total nitrogen, total phosphorous, copper, zinc, etc., dissolved oxygen concentration, and ammonia. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands have impacted water quality. ");
break;

case "Wildlife Habitat Management":
$('#step3response1').html("Floating treatment wetlands are very adaptable to any environmental situation, whether in hot arid climates or freezing temperatures. This allows the material to support a variety of wildlife such as microbes, mollusks, fish, birds, mammals, and humans. Some case studies show that wildlife returned to an area after installing floating treatment wetlands. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid in wildlife habitat management and remediation. ");
break;

case "Species/Pest Control":
$('#step3response1').html("Floating treatment wetlands have been used in tandem growing fathead minnows that consume up to 500 mosquito larvae a day. This kind of floating treatment wetland introduction to a water body supports fathead minnows development into an entrenched species in the food web by providing surface area to grow biofilm, which is an excellent food source for the minnows. This creates a more efficient ecosystem with less pests that may spread disease. We highly recommend talking to a floating treatment wetland specialist about setting up a minnow fueled pest reduction system if possible, which will also get people involved in the natural process of supporting life. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid species and pest control.  ");
break;

case "Wetland Restoration":
$('#step3response1').html("Floating treatment wetlands utilize the concentrated wetland effect, which means that they have an increased surface area for microbes to live on which filters water, just like in a natural wetland. This allows floating treatment wetlands to act as a “wetland seed” which will eventually grow into a full fledged wetland without having to add more floating treatment wetlands. The plants that are installed can aid in the growth of a new wetland from floating treatment wetlands spreading their plant colonies around where the islands are introduced. This action would stabilize sediment and prevent it from eroding at a fast pace, as well as slow the velocity of the water. Over time most floating treatment wetlands seem to become overrun with local plant,s making it almost impossible to determine whether the wetland is natural or man made. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid in wetland restoration.");
break;

case "Lake Restoration":
$('#step3response1').html("Floating treatment wetlands can revitalize a lake or pond system plagued with algae blooms, e. coli,  and suspended solids causing water to look murky and undesirable for a property owner. A lake or pond can be remediated with floating treatment wetlands by attracting microbial colonies which attach to the fibrous islands and begin creating biofilm, which is microbes and their residue. This biofilm filters the water of sediment and nutrients that float by. Over time this “living filter” effect can clean the aquatic system making it smell better, look better, and work better. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid in lake restoration.");
break;

case "Wave Breakers*":
$('#step3response1').html("The way floating treatment wetlands are constructed allows for wave motion to be absorbed as it passes through the floating island. This means that the waves die as they pass through the floating treatment wetlands and can be used to shield banks or shorelines. This is a desirable characteristic for stabilizing banks of rivers or lakes, as well as protecting ocean shorelines from constantly breaking waves. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid in bank stabilization and wave energy dissipation. ");
break;

case "Beautification/Aesthetics":
$('#step3response1').html("Floating treatment wetlands draw people in because of the beautiful array of wetland plant species that tend to grow on the floating islands. This includes flowers, reeds, cattails, bushes, and over time trees. Over time, your body of water may increase in beauty by increasing the complexity and diversity of wildlife that is attracted to the newly remediated area. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid in beautification and aesthetic improvement. ");
break;

case "Floating Dock Construction":
$('#step3response1').html("Floating treatment wetlands are not just for improving the ecosystem, they can improve your life as well. The material is useful as an engineering platform and can support large amounts of weight if desired by the user. This way you can reduce the environmental impact of a dock, fishing platform, or any aquatic construction. At the same time you will be improving the ecosystem just by putting the material in the water. Over time you might think the dock will sink with the growing number of plants on it, or maybe you want to build a gazebo to rest in during the day's hottest times, but the microbial colonies that grow on the floating treatment wetlands actually produce microscopic gas bubbles which increase buoyancy. As more plants grow it increases the surface area which will allow more of these bubbles to form, so the more plants, the better. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can be utilized as a floating dock material.  ");
break;

case "Odor reducer":
$('#step3response1').html("Floating treatment wetlands act as a “living filter” which means the material attracts filter feeding microbes that process organic material which would otherwise use up large amounts of dissolved oxygen to break down creating an anoxic/anaerobic aquatic environment. This kind of aquatic situation produces ammonia which causes unwanted smells to come from the water body. Floating treatment wetlands float on the surface of the water and act as a cap to hold in and reduce odor. Please refer to the case studies page -HERE- to become familiar with how floating treatment wetlands can aid in reducing odor originating in water bodies. ");
break;


}
$('#step4input1').html(radiostep4);
$('#step4input2').html(radio2step4);
$('#step4input3').html(radio3step4);
$('#step4input4').html(radio4step4);
$('#step4input5').html(radio5step4);
$('#step4input6').html(selectvalue);
$('#step4response6').html("Turbidity is the murkiness or haziness of water caused by the presence of total suspended solids (TSS) in a water body. TSS can prevent sunlight from reaching the system, which can prevent photosynthesis, reduce the amount of dissolved oxygen in the water body, and increase the temperature of the water due to the sediments capacity to absorb heat. Depending on the levels of TSS in your water body system, implementing a floating treatment wetland, promoting Riparian buffer growth, and increasing aeration of the water can all aid in mediating any dangerous levels of TSS.");
$('#step4response3').html("Understanding from which direction the inflow of water occurs allows a more concise understanding of your water body system. The inflow can tell us how quickly the water flows in, what this water consists of, and allows users to determine if there are any activities occurring upstream that may be worth knowing.");
$('#step4response4').html("Just as it is with the inflow, understanding the outflow of the water body system allows you to determine how quickly the standing water in the system flows out of the system. This factor plays into nutrient removal because, to a certain extent, this outflow is removing nutrients and sending it further downstream. By remediating the standing water, you can ensure that the water being sent downstream is not laden with excessive nutrients and will assist in promoting a healthy aquatic ecosystem.");
switch(radiostep4){
case "Yes":
$('#step4response1').html("Stormwater may consist of a variety of  pollutants. This is largely due to the fact that stormwater travels along solid surfaces and has the potential to pick up a variety of pollutants such as pesticides, grease, sediments, oil, chemicals, and other dangerous non-organic materials. Your water system may be at risk for contamination by some of these pollutants, and as such may require more extensive treatments using floating treatment wetlands and associated technology.");
break;

case "No":
$('#step4response1').html("N/A");
break;
}
switch(radio2step4){
case "Yes":
$('#step4response2').html("Wastewater can contain bacteria, both harmless and dangerous. Considering the variety of bacteria that can thrive in waste, utmost precaution should be taken when interacting with the wastewater. Wastewater treatment can be accomplished through industrial processes, however implementation of a floating treatment wetland may aid in the reduction of bacteria should the system not be overexposed to wastewater. If you believe your water body may be exposed to excessive levels of wastewater, please contact your area’s applicable governmental regulatory agency.");
break;

case "No":
$('#step4response2').html("N/A");
break;
}

switch(radio5step4){
case "Naturally Occurring":
$('#step4response5').html("Naturally occurring water bodies can harbor much more biodiversity because the system was allowed to develop under it’s own natural biological parameters. Additionally, naturally occurring water bodies are typically equipped with an inflow and outflow. This allows the system to constantly remove nutrients and sediments by sending them downstream, while also limiting the capability of insects to lay eggs in stagnant water, reducing insect pest populations.");
break;

case "Man made":
$('#step4response5').html("Man made water bodies have a more limited biodiversity because it is typically required to introduce species into the system by hand. While the system may gain biodiversity over time in the newly formed natural environment, it takes significantly longer to develop under these circumstances due to the slight environmental variations that may be present compared to naturally occurring water bodies. Finally, man made water bodies lack the inflow and outflow of water that restricts the flow of nutrients, causing all that become introduced to the water body to become trapped. Simply adding in an area for outflow can help in reducing the nutrient accumulation by allowing water to leave the system, taking harmful nutrients and other factors with it. ");
break;
}



$('#calcresults').show(1000);
        }
        else{
            alert("error");
        }
        
    }

