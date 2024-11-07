const mongoose = require('mongoose');

require('dotenv').config();

const connection = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

// export connection
module.exports = connection;