//<![CDATA[
var key = window.location.href.split("open/")[1].replace("/","")
var urls={
 'daftar':"https://www.xn--ptn188-wg8bpc.com/register?ref=JOGABBS0WFT",
 'login':"https://www.xn--ptn188-wg8bpc.com/register?ref=JOGABBS0WFT",
}
if(key){
 if(urls[key]){
 window.location.href=urls[key]
 }else{
 document.write("'"+key+"' not found :(");
 }
}
