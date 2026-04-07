const { app, arg } = require("@azure/functions");

const PROPERTY_TYPE = "string";

// Hello function - responds with hello message
async function mcpToolHello(_toolArguments, context) {
    console.log(_toolArguments);
    // Get name from the tool arguments
    const mcptoolargs = context.triggerMetadata.mcptoolargs;
    const name = mcptoolargs?.name;

    console.info(`Hello ${name}, I am MCP Tool!`);
    
    return `Hello ${name || 'World'}, I am MCP Tool!`;
}

// Register the hello tool
app.mcpTool('hello', {
    toolName: 'hello',
    description: 'Simple hello world MCP Tool that responses with a hello message.',
    toolProperties:{
        name: arg.string().describe('Required property to identify the caller.').optional()
    },
    handler: mcpToolHello
});
