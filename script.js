
async function displayAssets() {
    const address = document.getElementById('wallet-address').value;
    try {
        
        const assets = await wallet.getAssets(address); 
        document.getElementById('assets-output').innerText = JSON.stringify(assets, null, 2);
    } catch (error) {
        document.getElementById('assets-output').innerText = 'Error displaying assets: ' + error;
    }
}


async function mintAsset() {
    const name = document.getElementById('asset-name').value;
    const quantity = parseInt(document.getElementById('asset-quantity').value);
    const policy = document.getElementById('asset-policy').value;
    const assetDetails = { name, quantity, policy };

    try {
        
        const minted = await wallet.mintAsset(assetDetails); 
        document.getElementById('mint-output').innerText = 'Minted Asset: ' + JSON.stringify(minted, null, 2);
    } catch (error) {
        document.getElementById('mint-output').innerText = 'Error minting asset: ' + error;
    }
}


async function transferAsset() {
    const fromAddress = document.getElementById('from-address').value;
    const toAddress = document.getElementById('to-address').value;
    const asset = document.getElementById('transfer-asset-name').value;
    const amount = parseInt(document.getElementById('transfer-quantity').value);
    const assetDetails = { asset, amount };

    try {
        
        const transfer = await wallet.transfer(fromAddress, toAddress, assetDetails);
        document.getElementById('transfer-output').innerText = 'Transfer complete: ' + JSON.stringify(transfer, null, 2);
    } catch (error) {
        document.getElementById('transfer-output').innerText = 'Error transferring asset: ' + error;
    }
}


async function lockAda() {
    const amount = parseInt(document.getElementById('lock-amount').value);
    const contractAddress = document.getElementById('contract-address').value;

    try {
    
        const lockTx = await wallet.lockAda(amount, contractAddress);
        document.getElementById('lock-output').innerText = 'Locked tAda: ' + JSON.stringify(lockTx, null, 2);
    } catch (error) {
        document.getElementById('lock-output').innerText = 'Error locking tAda: ' + error;
    }
}


async function unlockAda() {
    
    const lockId = 'lockId'; 

    try {
        
        const unlockTx = await wallet.unlockAda(lockId);
        document.getElementById('lock-output').innerText = 'Unlocked tAda: ' + JSON.stringify(unlockTx, null, 2);
    } catch (error) {
        document.getElementById('lock-output').innerText = 'Error unlocking tAda: ' + error;
    }
}


async function getUSDADARate() {
    try {
        
        const response = await fetch('https://api.example-oracle.com/usd-ada-rate');
        const data = await response.json();
        document.getElementById('oracle-output').innerText = 'USD/ADA Rate: ' + data.rate;
    } catch (error) {
        document.getElementById('oracle-output').innerText = 'Error fetching USD/ADA rate: ' + error;
    }
}
