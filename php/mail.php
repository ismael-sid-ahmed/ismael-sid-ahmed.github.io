<?php
if($_POST["msg"]) {
mail("ismaelsidahmed.hasnaoui@gmail.com", "name",
$_POST["msg"]. "From: ismaelemailsender@protonmail.com");
}
?>