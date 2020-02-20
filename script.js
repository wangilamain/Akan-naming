var submit = document.getElementById('submit')

submit.addEventListener('click', outPut);

function outPut(){
  var year = document.getElementById("year").value;
  var YY = parseInt(year);
  var month = document.getElementById("month").value;
  var MM = parseInt(month);
  var day = document.getElementById("day").value;
  var DD = parseInt(day);
  var CC = (YY-1)/100+1;
  var dweek = parseInt(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
  console.log(dweek,'....................')
  var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girl = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("gender").checked){
    var gender= "male";
  }
  else{
    var gender = "female";
  }
  if(DD<1 || DD>31){
    alert("invalid day");
  }
  else if (MM<1 || MM > 12 || MM == 2 && DD > 29) {
    alert("invalid Month");
  }
  else if (Math.ceil(dweek) == 1 && gender === "male" ){
    document.getElementById("outcome").innerHTML = alert("Born on monday and your Akan name is " + boy[1]);
    }
    else if (Math.ceil(dweek) == 2 && gender === "male" ){
      document.getElementById("outcome").innerHTML = alert("Born on tuesday and your Akan name is " + boy[2]);
    }
      else if (Math.ceil(dweek) == 3 && gender === "male" ){
        document.getElementById("outcome").innerHTML = alert("Born on wednesday and your Akan name is " + boy[3]);
      }
      else if (Math.ceil(dweek) == 4 && gender === "male" ){
        document.getElementById("outcome").innerHTML = alert("Born on thursday and your Akan name is " + boy[4]);
      }
      else if (Math.ceil(dweek) == 5 && gender === "male" ){
        document.getElementById("outcome").innerHTML = alert("Born on friday and your Akan name is " + boy[5]);
      }
      else if (Math.ceil(dweek) == 6 && gender === "male" ){
        document.getElementById("outcome").innerHTML = alert("Born on saturday and your Akan name is " + boy[6])

      }
      else if (Math.ceil(dweek)== 0 && gender=== 'male' ){
        document.getElementById ("outcome").innerHTML = alert("Born on Sunday and your Akan name is " + boy[0]);
      }
      else if (Math.ceil(dweek) == 1 && gender === "female" ){
        document.getElementById("outcome").innerHTML =alert("Born on monday and your Akan name is " + girl[1]);
      }
      else if (Math.ceil(dweek) == 2 && gender === "female" ){
        document.getElementById("outcome").innerHTML = alert("Born on tuesday and your Akan name is " + girl[2]);
      }
      else if (Math.ceil(dweek) == 3 && gender === "female" ){
        document.getElementById("outcome").innerHTML = alert("Born on wednesday and your Akan name is " + girl[3]);
      }
      else if (Math.ceil(dweek) == 4 && gender === "female" ){
        document.getElementById("outcome").innerHTML = alert("Born on thursday and your Akan name is " + girl[4]);
      }
      else if (Math.ceil(dweek) == 5 && gender === "female" ){
        document.getElementById("outcome").innerHTML = alert("Born on friday and your Akan name is " + girl[5]);
      }
      else if (Math.ceil(dweek) == 6 && gender === "female" ){
        document.getElementById("outcome").innerHTML = alert("Born on saturday and your Akan name is " + girl[6]);
      }
      else if (Math.ceil(dweek) == 0 && gender === "female" ){
        document.getElementById("outcome").innerHTML = alert("Born on sunday and your Akan name is " + girl[0]);
      }
      else {
        alert("enter your information please")
      }

}
