const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define the 'getCreditScore' endpoint
app.get('/getCreditScore', (req, res) => {
    const { ethAddress, dni } = req.query;

    // Add logic to retrieve credit score based on ethAddress and dni
    // For example, assume the credit score is retrieved from a database
    const creditScore = getCreditScoreFromDatabase(ethAddress, dni);

    res.json({ ethAddress, dni, creditScore });
});

// Function to retrieve credit score from a database (example)
function getCreditScoreFromDatabase(ethAddress, dni) {
    // Add your database logic here
    // For example, return a hardcoded value for demonstration purposes
    return 800;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
