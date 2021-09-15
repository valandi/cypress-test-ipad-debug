module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {deviceName: 'iPad (7th generation)', screenOrientation: 'portrait'},
        //{deviceName: 'iPad (7th generation)', screenOrientation: 'landscape'}
    ],
    // set batch name to the configuration
    batchName: 'Demo Batch - Cypress',
    showLogs: true
}
