const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${req.method} ${req.url} at ${timestamp} `);

    next();
}

app.use(logger);
app.get('/', (req, res) => {
    res.send('Request logged successfully');
});

class HTTPerror extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = 'HTTPError';
    }
}

class InvaildUserError extends HTTPerror {
    constructor() {
        super('Invalid user credentials provided.', 400);
        this.name = 'InvalidUserError';
    }
}

class ErrorHandler {
    static handle(error) {
        if(error instanceof InvaildUserError) {
            return error;
        }
        if(error instanceof HTTPerror) {
            return error;
        }
        return new HTTPerror('Internal server error occured', 500);
    }
}

const errorHandler = (err, req, res, next) => {
    const handleError = ErrorHandler.handle(err);
    console.error(` [${new Date().toISOString()}] ${handleError.name}: ${handledError.message}`);
    res.status(handleError.status || 500).json({
        success: false,
        message: handleError.message,
        error: process.env.NODE_ENV === 'production' ? {} : err.stack
    });
}

app.use(express.json());
app.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            throw new InvaildUserError();
        }

        const isValid = false;
        if(!isValid) {
            throw new InvaildUserError();
        }
        res.jion({ message: 'Login successful' });
    }

    catch(error) {
        next(error);
    }
});

app.use(errorHandler);
app.listen(3005);
console.log("localhost:3005");
