(function($,W,D)
{
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var showStatus = function (statusName) {
        statusName = statusName || false;
        var statusArea = $( "#sendingText" );
        var sendMessageBtn = $( "#sendMessageBtn" );
        var message;
        if (statusName == 'sending') {
            message = 'Enviando su mensaje...'
            statusArea.html(message);
            sendMessageBtn.hide();
        } else if (!statusName) {
            message = '';
            statusArea.html(message);
            sendMessageBtn.show();
        }
    }

    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            var registerForm = $("#register-form");
            registerForm.validate({
                rules: {
                    nombre: "required",
                    apellidos: "required",
                    empresa: {
                        required: false
                        // minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefono: {
                        required: true,
                        minlength: 6
                    },
                    mensaje: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    nombre: "Ingrese un nombre.",
                    apellidos: "Los apellidos son requeridos.",
                    email: "Ingrese un email válido",
                    telefono: "ingrese un telefono válido",
                    mensaje: "escriba su mensaje."
                },

                submitHandler: function(form) {
                    showStatus('sending');
                    $.ajax({
                        type: "POST",
                        url: "mail/send-mail-service.php",
                        data: JSON.stringify(registerForm.serializeObject()),
                        // timeout: 3000,
                        success: function(data) {
                            if (data == '') {
                                registerForm[0].reset();
                                showStatus();
                                swal(
                                    "En buena hora!",
                                    "El mensaje ha sido enviado con éxito.",
                                    "success"
                                );

                            } else {
                                console.log("success with messasge", data);
                                swal({
                                    title: "Oops!",
                                    text: "Ha ocurrido un error mientras se enviaba el mensaje, por favor contáctese con el administrador.",
                                    type: "warning",
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "I got it",
                                    closeOnConfirm: false,
                                    html: false
                                });
                            }
                        },
                        error: function(error) {
                            console.log("error from server", error);
                            swal({
                                    title: "Oops!",
                                    text: "Ha ocurrido un error mientras se enviaba el mensaje, por favor contáctese con el administrador.",
                                    type: "warning",
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "I got it",
                                    closeOnConfirm: false,
                                    html: false
                            });
                        }
                    });
                    return false;
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);