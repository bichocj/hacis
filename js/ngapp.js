angular.module('ngApp', [])
.constant('sendEmailEndPoint', 'mail/send-mail-service.php')
.controller('ngCtrl', function( $scope, $http, sendEmailEndPoint ){
	$scope.messageForm = {};

	$scope.sendMessage = function ( ) {
		if (!$scope.myMessageForm.$valid) {
			swal({
				title: "Datos incorrectos!",
				text: "Lea las sugerencias y llene correctamente el formulario.",
				type: "warning",
				confirmButtonText: "De acuerdo"
			});
		} else {

			console.log("send data", $scope.messageForm);
			$http.post(sendEmailEndPoint, $scope.messageForm).then(function (response) {
				if (response.status == 200 && response.data == '') {
					$scope.messageForm = {};
					// $scope.myMessageForm.$valid = true;
					$scope.myMessageForm.$setPristine();
					swal("En buena hora!", "El mensaje ha sido enviado con éxito.", "success");
				} else {
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

		}
	}
})
;

