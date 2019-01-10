<?php
    $subject = 'Contacto AnaAnzorena.com - '.$_POST['list'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $name = $_POST['nombre'];
    $header = "From: ".$name." <".$email.">";
    $msj= $_POST['msj'];
    $list= $_POST['list'];

    $datos=
    "Nombre: ".$name."\r\n\r\n".
    "Teléfono: ".$tel."\r\n\r\n".
    "Email: ".$email."\r\n\r\n".
    $msj."\r\n\r\n";

    if($name == "Ingresa tu nombre" || $name == "" || $email == "Ingresa tu email" || $email == "" || $tel =="Ingresa tu telefono" || $tel =="" || $msj=="" || $msj=="Escribi tu mensaje"){

    }else{
        mail('hola@anaanzorena.com', $subject, $datos, $header);
    }

    
    /*if ($_POST['submit']) {
    if (mail('mm@theuxdepartment.com', $subject, $datos, $header)) {
    echo "<script language='javascript'>
    alert('Mensaje enviado, muchas gracias.');
    var element = document.getElementById('dir_home');
    var contenido = document.createTextNode('Hola Mundo!');
    element.appendChild(contenido);
   </script>";
    } else {
    echo 'Fall&oacute; el envio';
    }
    }*/

    //window.location.href = 'http://testing.theuxdepartment.com/AnaAnzorena';
?>