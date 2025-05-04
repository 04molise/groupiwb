// utils/backup.js

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { exec } = require('child_process');  // We will use this to run shell commands for backups

// Function to back up the database
const backupDatabase = async () => {
    try {
        const date = new Date().toISOString().split('T')[0];  // Get current date (yyyy-mm-dd)
        const backupFile = path.join(__dirname, `../backups/backup-${date}.gz`);  // Define the backup file path

        // Command to dump MongoDB database to a .gz file
        const command = `mongodump --uri="mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority" --archive=${backupFile} --gzip`;

        // Execute the command to create a backup
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Backup failed: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Backup stderr: ${stderr}`);
                return;
            }
            console.log(`Backup successful: ${stdout}`);
        });

        return backupFile;  // Return the backup file location

    } catch (error) {
        console.error('Error in backupDatabase:', error);
        throw new Error('Failed to back up the database.');
    }
};

module.exports = { backupDatabase };
