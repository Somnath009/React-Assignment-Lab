# Assignment 7: Authentication System

## Problem Statement
Implement an Authentication System integrated with Assignment 6 Task Management.

## Features
- **Login Screen**: Interactive form with username/password validation.
- **Logout Action**: Clears authentication state and storage tokens.
- **Protected Dashboard**: Route guard restricting unauthorized access.
- **Remember User**: Checkbox toggles persistence between `localStorage` and `sessionStorage`.
- **JWT Token Simulation**: Generates signed base64 JWT token string (`header.payload.signature`) displayed on dashboard.

## Validations
- Username Required validation alert.
- Password Required validation alert.
- Password Strength Meter with character rule indicators and progress bar.
