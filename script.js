function result(){
    var totalbill = document.querySelectorAll("input")[0].value;
    var totalperson = document.querySelectorAll("input")[1].value;
    var tippercentage = document.querySelectorAll("input")[2].value;

    var result = (totalbill / totalperson) * tippercentage / 100
    var finalresult = result + totalbill
    document.querySelectorAll("input")[3].value = finalresult;
  
}




