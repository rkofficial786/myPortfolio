<?php
if ($_SERVER["REQUEST_METHOD"] == "post") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Send the email
  $to = "ruprajsingh1@gmail.com";
  $subject = "New contact form submission";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  mail($to, $subject, $body);

  // Redirect the user to a thank you page
 
  exit;
}
?>
