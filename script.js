$("button#sender").on('click', function(e){
    e.preventDefault();
    var val1 = $("#oldest")val();
    var val2 = $("#older").val();
    var val3 = $("#new").val();
    var form = new FormData();
    form.append('oldest',val1);
    form.append('older',val2);
    form.append('new', val3);
    $ajax({
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
});
