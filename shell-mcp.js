const { createLanguageModelStdioServer } = require('@modelcontextprotocol/server-stdio');
const server = createLanguageModelStdioServer({
  name: 'shell-mcp',
  version: '1.0.0',
  capabilities: {
    tools: {},
    resources: {},
    roots: {},
  },
});

server.setRequestHandler('tools/list', async () => ({
  tools: [
    {
      name: 'ls',
      description: 'List directory contents',
      inputSchema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'Directory path' },
        },
        required: ['path'],
      },
    },
    {
      name: 'curl',
      description: 'Fetch URL content',
      inputSchema: {
        type: 'object',
        properties: {
          url: { type: 'string', description: 'URL to fetch' },
        },
        required: ['url'],
      },
    },
  ],
}));

server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;
  if (name === 'ls') {
    const { path = '.' } = args;
    const fs = require('fs');
    const files = fs.readdirSync(path);
    return { content: [{ type: 'text', text: files.join('\\n') }] };
  } if (name === 'curl') {
    const { url } = args;
    const { execSync } = require('child_process');
    const output = execSync(`curl -s "${url}" | head -c 2000`);
    return { content: [{ type: 'text', text: output.toString() }] };
  }
});

server.run();