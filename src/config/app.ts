import express, { Express } from 'express';

class App {

   public app: Express;

   constructor() {
      this.app = express();
      this.config();
   }

   private config(): void {
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
   }
}

export default new App().app;