//<![CDATA[
var key = window.location.href.split("open/")[1].replace("/","")
var urls={
 'daftar':"https://bit.ly/pendaftarantoto",
 'login':"https://bit.ly/kliklinks",
}
if(key){
 if(urls[key]){
 window.location.href=urls[key]
 }else{
 document.write("'"+key+"' not found :(");
 }
}
