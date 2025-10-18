<?php
$servername = "localhost";  // Use "localhost" for local development
$username = "root";         // Default username in XAMPP
$password = "";             // Leave empty (default for XAMPP)
$dbname = "registration_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
