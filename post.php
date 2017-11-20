<?php
if (isset($_POST) && !empty($_POST)) {
    $chosen = $_POST;
    print_r($_POST);
    print_r($_FILES);
    mail("salprez4@gmail.com", $chosen);
}
?>