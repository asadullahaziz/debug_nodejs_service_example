#!/bin/bash

# Check if DEBUG_MODE is set
if [ "$DEBUG_MODE" = "$SERVICE_NAME" ]; then
    #  Run Node.js app in debug mode
    echo "Starting server in debug mode"
    npm run debug
else
    # Run Node.js noramlly
    echo "Starting server"
    npm start
fi