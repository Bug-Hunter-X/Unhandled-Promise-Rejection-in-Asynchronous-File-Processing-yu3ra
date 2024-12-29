# Node.js Unhandled Promise Rejection Example

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The `bug.js` file shows asynchronous file processing that doesn't properly handle potential errors.  The `bugSolution.js` file shows the corrected version with proper error handling.

## Problem

Asynchronous operations in Node.js often use promises. If a promise is rejected and the rejection is not caught, the process might crash silently in production without clear error messages, making debugging difficult. 

## Solution

Always handle promise rejections using `.catch()` to prevent unexpected crashes and improve application stability.  The solution demonstrates best practice error handling for asynchronous operations.