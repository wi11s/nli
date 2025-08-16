#!/usr/bin/env node

const { Command } = require('commander');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const program = new Command();

program
  .name('nli')
  .description('Node.js CLI tool with MongoDB connection')
  .version('1.0.0');

program
  .command('connect')
  .description('Test MongoDB connection')
  .action(async () => {
    try {
      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      console.log('Connected to MongoDB successfully!');
      await client.close();
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
    }
  });

program.parse();