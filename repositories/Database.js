const path = require('path');
const sqlite3 = require('sqlite3').verbose();

function Database() { };

Database.getConnection = () => {
    if (!Database.connection) {
        const dbPath = path.resolve(__dirname, 'data.db');
        Database.connection = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY);
    }

    return Database.connection;
};

exports.Database = Database; 