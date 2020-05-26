<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'kandula.varun@gmail.com';

//  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
//    include( $php_email_form );
//  } else {
//    die( 'Unable to load the "PHP Email Form" Library!');
//  }

  $contact1 = new PHP_Email_Form;
  $contact1->ajax = true;
  
  $contact1->to = $receiving_email_address;
  $contact1->from_name = $_POST['name'];
  $contact1->from_phoneNumber = $_POST['phoneNumber'];
  $contact1->from_email= $_POST['email'];
  $contact1->address = $_POST['address'];
  $contact1->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  
  // $contact->smtp = array(
  //   'host' => 'example.com',
  //   'username' => 'kandulava',
  //   'password' => 'LinkNJ2003',
  //   'port' => '587'
  // );
  

  $contact1->add_message( $_POST['name'], 'From: ');
  $contact1->add_message( $_POST['email'], 'Email: ');
  $contact1->add_message( $_POST['phoneNumber'], 'Phone Number: ');
  $contact1->add_message( $_POST['address'], 'Address:');
  $contact1->add_message( $_POST['message'], 'Message:');

  echo $contact->send();
?>
