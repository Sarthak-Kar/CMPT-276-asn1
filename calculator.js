function show_percent(a ,b, c){
  var x = document.getElementById(a).value;
  var y = document.getElementById(b).value;
  var z = document.getElementById(c);
  if(y!=0){
  z.innerHTML = ((x/y)*100).toFixed(2) + '%';
  }
  else{
    z.innerHTML = "";
  }
}

function cal_mean(){
  var a = document.getElementById("percent1").innerHTML;
  var b = document.getElementById("percent2").innerHTML;
  var c = document.getElementById("percent3").innerHTML;
  var d = document.getElementById("percent4").innerHTML;
  
  a=a.substring(0, a.length - 1);
  b=b.substring(0, b.length - 1);
  c=c.substring(0, c.length - 1);
  d=d.substring(0, d.length - 1);
  
  var n=0, result=0;
  if(a!=""){
    result+=parseFloat(a);
    n++;}
  if(b!=""){
    result+=parseFloat(b);
    n++;}
  if(c!=""){
    result+=parseFloat(c);
    n++;}
  if(d!=""){
    result+=parseFloat(d);
    n++;  }
  
  var x = document.getElementById("answer");
  x.innerHTML = (result/n).toFixed(2) + " %";
  
}

function cal_weighted(){
  var a = document.getElementById("percent1").innerHTML;
  var b = document.getElementById("percent2").innerHTML;
  var c = document.getElementById("percent3").innerHTML;
  var d = document.getElementById("percent4").innerHTML;
  
  var p = document.getElementById("weight1");
  var q = document.getElementById("weight2");
  var r = document.getElementById("weight3");
  var s = document.getElementById("weight4");
  
  a=a.substring(0, a.length - 1);
  b=b.substring(0, b.length - 1);
  c=c.substring(0, c.length - 1);
  d=d.substring(0, d.length - 1);
  
  
  var n=0, result=0;
  if(a!=""){
    result+=parseFloat(a) * parseFloat(p.value);
    n+=parseFloat(p.value);}
  if(b!=""){
    result+=parseFloat(b) * parseFloat(q.value);
    n+=parseFloat(q.value);}
  if(c!=""){
    result+=parseFloat(c) * parseFloat(r.value);
    n+=parseFloat(r.value);}
  if(d!=""){
    result+=parseFloat(d) * parseFloat(s.value);
    n+=parseFloat(s.value);  }
  var x = document.getElementById("answer");
  x.innerHTML = (result/n).toFixed(2) + " %";
}


