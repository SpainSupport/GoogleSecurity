
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
});

