const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

// Import functions to register them
require('./functions/helloMcpTool');
require('./functions/snippetsMcpTool');
require('./functions/weatherMcpApp');
