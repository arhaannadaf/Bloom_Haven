<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!$conn) {
        die("Database connection error: " . $conn->connect_error);
    }

    // Debugging: Show SQL query execution
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("SQL Error: " . $conn->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        die("Query Execution Error: " . $conn->error);
    }

    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['username'] = $user['email'];
        echo "Login successful! Redirecting...";
         header("Location: BloomHaven.html");
        exit();
    } else {
        echo "Invalid username or password";
    }
}
?>
