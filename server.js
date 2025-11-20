const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Database file paths
const USERS_FILE = './data/users.json';
const SCORES_FILE = './data/scores.json';
const QUESTIONS_FILE = './data/questions.json';

// Create data directory if it doesn't exist
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}

// Initialize data files if they don't exist
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

if (!fs.existsSync(SCORES_FILE)) {
    fs.writeFileSync(SCORES_FILE, JSON.stringify([]));
}

if (!fs.existsSync(QUESTIONS_FILE)) {
    fs.writeFileSync(QUESTIONS_FILE, JSON.stringify([]));
}

// Helper function to read JSON files
function readData(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', file, err);
        return [];
    }
}

// Helper function to write JSON files
function writeData(file, data) {
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error('Error writing file:', file, err);
        return false;
    }
}

// Helper function to serve static files
function serveStaticFile(res, filePath) {
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Handle API requests
    if (pathname.startsWith('/api/')) {
        handleApiRequest(req, res, pathname, parsedUrl);
        return;
    }
    
    // Serve static files
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    if (extname === '' || extname === '.html' || extname === '.js' || extname === '.css') {
        serveStaticFile(res, filePath);
    } else {
        // For other files, try to serve them directly
        serveStaticFile(res, filePath);
    }
});

// Handle API requests
function handleApiRequest(req, res, pathname, parsedUrl) {
    res.setHeader('Content-Type', 'application/json');
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    switch (pathname) {
        case '/api/users':
            if (req.method === 'GET') {
                const users = readData(USERS_FILE);
                res.writeHead(200);
                res.end(JSON.stringify(users));
            } else if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const newUser = JSON.parse(body);
                    const users = readData(USERS_FILE);
                    users.push(newUser);
                    if (writeData(USERS_FILE, users)) {
                        res.writeHead(201);
                        res.end(JSON.stringify({ success: true }));
                    } else {
                        res.writeHead(500);
                        res.end(JSON.stringify({ success: false, error: 'Failed to save user' }));
                    }
                });
            }
            break;
            
        case '/api/users/online':
            if (req.method === 'GET') {
                const users = readData(USERS_FILE);
                res.writeHead(200);
                res.end(JSON.stringify(users));
            } else if (req.method === 'DELETE') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const { username } = JSON.parse(body);
                    let users = readData(USERS_FILE);
                    users = users.filter(user => user.username !== username);
                    if (writeData(USERS_FILE, users)) {
                        res.writeHead(200);
                        res.end(JSON.stringify({ success: true }));
                    } else {
                        res.writeHead(500);
                        res.end(JSON.stringify({ success: false, error: 'Failed to update users' }));
                    }
                });
            }
            break;
            
        case '/api/scores':
            if (req.method === 'GET') {
                const scores = readData(SCORES_FILE);
                // Sort by score (descending) then by timestamp (ascending)
                scores.sort((a, b) => {
                    if (b.score !== a.score) {
                        return b.score - a.score;
                    }
                    return a.timestamp - b.timestamp;
                });
                res.writeHead(200);
                res.end(JSON.stringify(scores));
            } else if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const newScore = JSON.parse(body);
                    const scores = readData(SCORES_FILE);
                    scores.push(newScore);
                    if (writeData(SCORES_FILE, scores)) {
                        res.writeHead(201);
                        res.end(JSON.stringify({ success: true }));
                    } else {
                        res.writeHead(500);
                        res.end(JSON.stringify({ success: false, error: 'Failed to save score' }));
                    }
                });
            }
            break;
            
        case '/api/questions':
            if (req.method === 'GET') {
                const questions = readData(QUESTIONS_FILE);
                res.writeHead(200);
                res.end(JSON.stringify(questions));
            } else if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const newQuestion = JSON.parse(body);
                    const questions = readData(QUESTIONS_FILE);
                    questions.push(newQuestion);
                    if (writeData(QUESTIONS_FILE, questions)) {
                        res.writeHead(201);
                        res.end(JSON.stringify({ success: true }));
                    } else {
                        res.writeHead(500);
                        res.end(JSON.stringify({ success: false, error: 'Failed to save question' }));
                    }
                });
            } else if (req.method === 'DELETE') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const { index } = JSON.parse(body);
                    let questions = readData(QUESTIONS_FILE);
                    questions.splice(index, 1);
                    if (writeData(QUESTIONS_FILE, questions)) {
                        res.writeHead(200);
                        res.end(JSON.stringify({ success: true }));
                    } else {
                        res.writeHead(500);
                        res.end(JSON.stringify({ success: false, error: 'Failed to delete question' }));
                    }
                });
            }
            break;
            
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Endpoint not found' }));
    }
}

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Quiz Server running at http://localhost:${PORT}/`);
});