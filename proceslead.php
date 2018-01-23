<?php
require_once('credentials.php');
require_once('lib/cbWebService/WSClient.php');

$client = new Vtiger_WSClient($url);
$client->doLogin($username, $key);

// $leads = $client->doDescribe('Leads');

$values = array(
	'firstname' 	=> $_POST['firstname'],
	'phone'			=> $_POST['phone'],
	'lastname'		=> $_POST['lastname'],
	'company'		=> $_POST['companyname'],
	'email'			=> $_POST['email'],
	'leadsource'	=> 'Conference',
	'leadstatus'	=> 'Warm',
	'cf_620'		=> $_POST['interest'],
	'code'			=> $_POST['zipcode']
);

if ($_POST['description'] != '') {
	$values['description'] = $_POST['description'];
}

$result = $client->doCreate('Leads', $values);

// echo '<pre>';
// print_r($leads);
// echo '</pre>';

if ($result !== false) {
	header('Location: thankyou.php?firstname=' . htmlentities($_POST['firstname']) . '&lastname=' . htmlentities($_POST['lastname']));
} else {
	var_dump($result);
}

?>