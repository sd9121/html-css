function resultDisplay()
{
var results = JSON.parse(localStorage.getItem("results"));
var list= JSON.parse(localStorage.getItem("names"));
var div=document.getElementById("associatedAssets");
var tab = "<table><tr><th>Question</th><th>Correct Answer</th><th>Your Answer</th></tr>";
for (var i=0; i<results.length && list ; i=i+1,list=list.rest)
{
  if(list.value.ans!=results[i])
    tab += "<tr><td style='background-color:red;'>"+(i+1)+"." + list.value.q+ "</td><td style='background-color:red;'>" + list.value.ans + "</td><td style='background-color:red;'>" + results[i] + "</td></tr>";
    else
     tab += "<tr><td style='background-color:#d1e0e0'>"+(i+1)+"." + list.value.q+ "</td><td style='background-color:#d1e0e0'>" + list.value.ans + "</td><td style='background-color:#d1e0e0'>" + results[i] + "</td></tr>";
    }
        tab += "</table>";
        div.innerHTML = tab;
}
function goHome()
{
  window.location="index.html";
}

