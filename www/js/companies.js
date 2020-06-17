$(document).ready(function(){
    $.ajax({
        type: "GET",
        //url: "js/data/disco50.xml",
        url: "http://www.crashdrinks.com/disco50/js/data/disco50.xml",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {
    $('#load').fadeOut();
    $(xml).find("companyData").each(function(){
       $("#content").append('<div class="companyData ' + $(this).find("category").text() + ' ' + $(this).find("active").text() + '">' + '<b>' + $(this).find("companyName").text() + '</b>' + '<br/>' + $(this).find("storeType").text() + '<br/>' + $(this).find("discountRate").text() + ' ' + $(this).find("timeRest").text() + '<br/>' +  'Age Group: ' + $(this).find("targetAge").text() +'</div>') 
    });
}