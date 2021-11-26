import request from 'supertest';
import App from '../src/app';

export class TestApp {
  private readonly app: App;

  constructor(dbUrl: string) {
    this.app = App.fromDbUrl(dbUrl);
  }

  supertestRequest(): request.SuperTest<request.Test> {
    return request(this.app.app); 
  }

  async close(): Promise<void> {
    this.app.close();
  }
}
