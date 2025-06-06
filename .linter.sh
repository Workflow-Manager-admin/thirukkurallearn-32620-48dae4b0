#!/bin/bash
cd /home/kavia/workspace/code-generation/thirukkurallearn-32620-48dae4b0/thirukkurallearn_web_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

