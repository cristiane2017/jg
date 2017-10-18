$(function(){
      $(".fg-button").hover(
          function(){ $(this).removeClass("ui-state-default").addClass("ui-state-focus"); },
      	   function(){ $(this).removeClass("ui-state-focus").addClass("ui-state-default"); }
       );
   $("#flat0").menu({
       content: $("#flat0").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat1").menu({
       content: $("#flat1").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat5").menu({
       content: $("#flat5").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat8").menu({
       content: $("#flat8").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat11").menu({
       content: $("#flat11").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat14").menu({
       content: $("#flat14").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat17").menu({
       content: $("#flat17").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat19").menu({
       content: $("#flat19").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat23").menu({
       content: $("#flat23").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat26").menu({
       content: $("#flat26").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat29").menu({
       content: $("#flat29").next().html(),
       showSpeed: 400,
       flyOut: true
   });
});
$(function () {
     $("#dock").Fisheye({
     maxWidth: 48,
     items: "a", itemsText: "span", container: ".dock-container",
     itemWidth: 43,
     proximity: 53,
     alignment : "right",
     valign: "bottom", halign : "center"});
});
function cargar(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").load(function() {$(this).contents().find("body").css({"text-align":"inherit"});});
}
function cargarIma(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").load(function() {$(this).contents().find("body").css({"text-align":"center"});});
}
