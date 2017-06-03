var currentstep =1;
var northvalue;
var southvalue;
var eastvalue;
var westvalue;
var step1value;
var step2value;
var areavalue;
var longvalue;
var latvalue;
var depthvalue;
var step7value;

function goNext() {
    alert("currentstep:"+currentstep);
    if(currentstep ==1){

if($('input[name=radiostep'+currentstep+']:checked').length){
// alert("radio checked");
// alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
step1value = $('input[name=radiostep1]:checked').val();
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("You must select an option");
    // alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
}


    }

    //step2
    if(currentstep ==2){

        if($('input[name=radiostep'+currentstep+']:checked').length){
// alert("radio checked");
// alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
step2value = $('input[name=radiostep2]:checked').val();
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("You must select an option");
    alert("radio check num:"+$('input[name=radiostep'+currentstep+']:checked').length);
}


    }
     //step3
    if(currentstep ==3){
var northval=$.trim($("#step3north").val());
var southval=$.trim($("#step3south").val());
var eastval=$.trim($("#step3east").val());
var westval=$.trim($("#step3west").val());

if(northval.length > 0 && southval.length > 0 && eastval.length > 0 && westval.length > 0 ){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
northvalue= northval;
southvalue = southval;
eastvalue = eastval;
westvalue= westval;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
}
else{
    alert("Please enter a value for each");
}
    }
     //step4
    if(currentstep ==4){
       var areaval=$.trim($("#step4area").val());
        if(areaval.length >0){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
areavalue = areaval;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
        }
        else{
            alert("Please enter a value for area.");
        }
 
    }
     //step5
    if(currentstep ==5){
var longval=$.trim($("#step5latitude").val());
var latval=$.trim($("#step5longitude").val());
if(longval.length >0 && latval.length >0){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
longvalue = longval;
latvalue = latval;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
        }
        else{
            alert("Please enter a value for each.");
        }
    }
     //step6
    if(currentstep ==6){
var depthval=$.trim($("#step6depth").val());
        if(depthval.length >0){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
currentstep++;
depthvalue = depthval;
return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');
        }
        else{
            alert("Please enter a value for depth.");
        }
    }
     //step7
    if(currentstep ==7){
var step7val=$.trim($("#step7val").val());
        if(step7val.length >0){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
step7value = step7val;
        }
        else{
            alert("Please enter a value for step7.");
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
    //step6
      
    if(currentstep ==6){

$('.nav-tabs a[href="#step-'+currentstep+'"]').removeClass("done");
currentstep--;

return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');


    }
    //step7
     
    if(currentstep ==7){

$('.nav-tabs a[href="#step-'+currentstep+'"]').removeClass("done");
currentstep--;

return $('#myTab a[href="#step-'+currentstep+'"]').tab('show');


    }
}




function outputResult() {
    if(currentstep ==7){
var step7val=$.trim($("#step7val").val());
        if(step7val.length >0){
$('.nav-tabs a[href="#step-'+currentstep+'"]').addClass("done");
step7value = step7val;
$('#step1results').html($('#step1results').html()+step1value);
$('#step2results').html($('#step2results').html()+step2value);
$('#step3results').html($('#step3results').html()+northvalue+southvalue+eastvalue+westvalue);
$('#step4results').html($('#step4results').html()+areavalue);
$('#step5results').html($('#step5results').html()+latvalue+longvalue);
$('#step6results').html($('#step6results').html()+depthvalue);
$('#step7results').html($('#step7results').html()+step7value);
$('#calcresults').show(1000);
        }
        else{
            alert("Please enter a value for step7.");
        }
    }

}