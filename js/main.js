let a=[800,900,600,700,1200,1000,1300,550];
function price(a){
    return(a>500&&1000>=a);
}
document.write(a.filter(price));