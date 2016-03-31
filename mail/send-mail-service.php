<?php

$contactData = json_decode(file_get_contents('php://input'), true);

$body = '<html><body>';
$body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$body .= "<tr style='background: #eee;'><td><strong>Datos de contacto:</strong></td></tr>";
$body .= "<tr><td><strong>Nombre:</strong> </td><td>" . strip_tags($contactData['nombre']) . "</td></tr>";
$body .= "<tr><td><strong>Apellidos:</strong> </td><td>" . strip_tags($contactData['apellidos']) . "</td></tr>";
$body .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($contactData['email']) . "</td></tr>";
$body .= "<tr><td><strong>Empresa:</strong> </td><td>" . strip_tags($contactData['empresa']) . "</td></tr>";
$body .= "<tr><td><strong>Telefono:</strong> </td><td>" . $contactData['telefono'] . "</td></tr>";
$body .= "<tr><td><strong>Mensaje:</strong> </td><td>" . $contactData['mensaje'] . "</td></tr>";
$body .= "</table>";
$body .= "</body></html>";

require_once 'swiftmailer-5.4.1/lib/swift_required.php';

$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('para.registros321@gmail.com')
  ->setPassword('pararegistros321');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance()
  ->setSubject('Hacis Proyectos contacto')
  ->setFrom(array('para.registros321@gmail.com' => 'Hacis Proyectos'))
  ->setTo(array('yoel.zalas@gmail.com'))
  ->setContentType('text/html')
  ->setBody($body);

$result = $mailer->send($message);
