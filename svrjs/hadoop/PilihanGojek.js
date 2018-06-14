/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    
});
function Retrieve_data_Trans(){
    console.log("retrieve data");
     $('#topup').remove();
     $('#withdraw').remove();
};
function Retrieve_data_TopUp(){
     $('#trans').remove();
     $('#withdraw').remove();
};
function Retrieve_data_Withdraw(){
    $('#topup').remove();
     $('#trans').remove();
};
//function simpan
//function ajax view form GET
function view_form_post(urel,idtoapp){
//  console.log(url_fe+","+idtormv+","+idtormv+","+idtoapp);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
//     $('#loading-image').show();
       if (this.readyState === 4 && this.status === 200) {
           $('#'+idtoapp).append(this.responseText);
        }
     };
     xhttp.open("GET", urel, true);
     xhttp.send();
};
// function ajax set parameter to form post 
function set_param(urel,jstring,cb){
    var http = new XMLHttpRequest();
    var url = urel;
//    var params = "lorem=ipsum&name=binny";
    var params = "isi="+jstring;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.responseType = 'json';
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
//            console.log(http.response);
            if(typeof cb === 'function')
                cb(http.response);
//            alert(http.responseText);
        }
    }
    http.send(params);
};
//function ajax set param form GET
function set_param_get(urel,cb){
//  console.log(url_fe+","+idtormv+","+idtormv+","+idtoapp);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState === 4 && this.status === 200) {
//          console.log(xhttp.response["satker"][0][0]);
            if(typeof cb === 'function')
                cb(xhttp.response);
        }
     };
     xhttp.open("GET", urel, true);
     xhttp.responseType = 'json';
     xhttp.send();
};
