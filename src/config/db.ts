
import mongoose, { Connection } from 'mongoose';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
const env: any = dotenv.config().parsed;


/**
 * Database class to connect into mongodb
 */
export class Database {

  private static instance: Database;
  private connection!: any;


  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      this.connection = await mongoose.connect(env.MONGODB_URL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if (this.connection) {
      await this.connection?.disconnect();
      console.log('Disconnected from MongoDB');
    }
  }

  public getConnection(): Connection {
    if (!this.connection) {
      throw new Error('Not connected to MongoDB');
    }
    return this.connection;
  }
}
