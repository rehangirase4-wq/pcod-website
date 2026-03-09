function checkSymptoms(){

const periods =
document.getElementById("periods").checked;

const weight =
document.getElementById("weight").checked;

const result =
document.getElementById("result");

if(periods || weight){

result.innerHTML =
"Suggestion: Please consult a doctor.";

}else{

result.innerHTML =
"You seem fine but consult doctor if symptoms appear.";

}

}



function sendEmail(){

const name =
document.getElementById("name").value;

const message =
document.getElementById("message").value;

const periods =
document.getElementById("periods").checked;

const weight =
document.getElementById("weight").checked;


let symptoms = "";

if(periods) symptoms += "Irregular Periods\n";

if(weight) symptoms += "Weight Gain\n";


const subject =
"PCOD Website User Data";


const body =
"Name: "+name+
"\n\nSelected Symptoms:\n"+
symptoms+
"\n\nUser Message:\n"+
message;


window.location.href =
"mailto:rehangirase4@gmail.com"+
"?subject="+encodeURIComponent(subject)+
"&body="+encodeURIComponent(body);

}
