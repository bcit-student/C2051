<?php
	$id = $_POST['id'];
	mysql_connect("localhost", "omuser", "omuser") or die("Error connecting");
	mysql_select_db("om") or die("Error selecting DB");
	$query = "SELECT * FROM items WHERE item_id = $id";
	$result = mysql_query($query);
	
	if (mysql_num_rows($result) == 0) {
	echo "Product ID $id not found.";
	return;
	}
	
	$row = mysql_fetch_array($result);
	echo "<strong>Item ID:</strong> {$row['item_id']}<br>";
	echo "<strong>Title:</strong> {$row['title']}<br>";
	echo "<strong>Artist:</strong> {$row['artist']}<br>";
	echo "<strong>Price:</strong> {$row['unit_price']}<br>";	
?>
