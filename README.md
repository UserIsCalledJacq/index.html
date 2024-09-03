<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cardano Smart Contract Interface</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Cardano Smart Contract Interface</h1>

        <!-- Display Assets Section -->
        <section id="display-assets">
            <h2>Display Assets</h2>
            <input type="text" id="wallet-address" placeholder="Enter Wallet Address">
            <button onclick="displayAssets()">Show Assets</button>
            <div id="assets-output"></div>
        </section>

        <!-- Mint Asset Section -->
        <section id="mint-asset">
            <h2>Mint Asset</h2>
            <input type="text" id="asset-name" placeholder="Asset Name">
            <input type="number" id="asset-quantity" placeholder="Quantity">
            <input type="text" id="asset-policy" placeholder="Policy ID">
            <button onclick="mintAsset()">Mint Asset</button>
            <div id="mint-output"></div>
        </section>

        <!-- Transfer Asset Section -->
        <section id="transfer-asset">
            <h2>Transfer Asset</h2>
            <input type="text" id="from-address" placeholder="From Address">
            <input type="text" id="to-address" placeholder="To Address">
            <input type="text" id="transfer-asset-name" placeholder="Asset Name">
            <input type="number" id="transfer-quantity" placeholder="Quantity">
            <button onclick="transferAsset()">Transfer Asset</button>
            <div id="transfer-output"></div>
        </section>

        <!-- Lock and Unlock ADA Section -->
        <section id="lock-ada">
            <h2>Lock and Unlock tAda</h2>
            <input type="number" id="lock-amount" placeholder="Amount to Lock">
            <input type="text" id="contract-address" placeholder="Contract Address">
            <button onclick="lockAda()">Lock ADA</button>
            <button onclick="unlockAda()">Unlock ADA</button>
            <div id="lock-output"></div>
        </section>

        <!-- Oracles Section -->
        <section id="oracles">
            <h2>Oracles</h2>
            <button onclick="getUSDADARate()">Get USD/ADA Rate</button>
            <div id="oracle-output"></div>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
