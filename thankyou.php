<!DOCTYPE html>
<html>
<head>
	<title>Bedankt voor het invullen!</title>
	<link rel="stylesheet" type="text/css" href="cbLeadPortal.css">
</head>
<body>
	<div class="formcontainer">
		<h1>Bedankt <?php echo $_GET['firstname'] . '&nbsp;' . $_GET['lastname']; ?> ! Wij nemen contact met u op voor verdere afhandeling van uw aanvraag!</h1>
	</div>
	<script type="text/javascript">
		window.setTimeout(function(){
			window.location = "index.html";
		}, 5000);
	</script>
</body>
</html>