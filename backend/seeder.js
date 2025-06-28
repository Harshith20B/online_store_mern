import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config({ path: './backend/.env' })

// Connect to database
await connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Link products to admin
    const sampleProducts = products.map(product => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);

    console.log('✅ Data Imported Successfully'.green);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error Importing Data: ${error.message}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('🗑️  Data Destroyed Successfully'.yellow);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error Destroying Data: ${error.message}`.red);
    process.exit(1);
  }
};

// Command line arguments
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
