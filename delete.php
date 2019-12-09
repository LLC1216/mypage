<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exam";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "DELETE FROM fake WHERE phone = '".$_POST["phone"]."' AND name = '".$_POST["name"]."'";
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>