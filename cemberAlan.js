const arguments=process.argv.slice(2);
function cemberAlan(yaricap){
 let alan=3.14*(yaricap*yaricap)
 console.log("Yarıçapı "+yaricap+" olan dairenin alanı= "+alan);
}
cemberAlan(arguments[0]*1);