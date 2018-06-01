var jsonexport = require('jsonexport');
document.onload=load();

function load() {
    document.getElementById("change").onclick=()=> {changeToCsv()};
   document.getElementById("clickme").onclick=function () {
       document.getElementById("uploadme").click();
   };
    document.getElementById("uploadme").onchange=()=> {upload()};
}
function upload() {
    console.log('here');
   let file= document.getElementById("uploadme").files[0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        //document.getElementById("fileContents").innerHTML = evt.target.result;
        //console.log(evt.target.result);
        data_to_csv(evt.target.result);
    }
}
function data_to_csv(data) {
    try{
        let JSON_data=JSON.parse(data);

        jsonexport(JSON_data,function(err, csv){
        if(err) return console.log(err);
        //console.log(csv);
        document.getElementById('result').value=csv;
        document.getElementById('error').style.display='none';
        });
    }
    catch (e) {
        document.getElementById('error').style.display='block';
    }
};
 function changeToCsv() {
     let data= document.getElementById('data').value;
     data_to_csv(data);
 };

