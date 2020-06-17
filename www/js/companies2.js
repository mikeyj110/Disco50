$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "js/data/test.xml",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {
$(xml).find("Tutorial").each(function()
{
  $("#content").append($(this).find("Title").text() + "<br />");

  $(this).find("Category").each(function()
  {
    $("#content").append($(this).text() + "<br />");
  });

  $("#content").append("<br />");
});
}

