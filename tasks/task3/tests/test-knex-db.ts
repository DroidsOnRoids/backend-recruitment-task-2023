import Knex from '../src/knex';

export default class TestKnexDb {
  private readonly dbName = `test_${Math.ceil(Math.random() * 1000000000)}`;

  async knexWithReadyDb(): Promise<Knex> {
    await this.setUpDb(); 
    return this.knex;
  }

  get dbUrlBase(): string {
    const dbUrlBase = process.env.DB_URL_BASE;
    if (!dbUrlBase) {
      throw new Error('DB URL BASE is not set');
    }
    return dbUrlBase;
  }

  get dbUrl(): string {
    return `${this.dbUrlBase}/${this.dbName}`;
  }

  async setUpDb(): Promise<void> {
    await this.createDb();
    await this.runMigrations();
  }

  get knex(): Knex {
    return new Knex(this.dbUrl);
  }

  private async createDb(): Promise<void> {
    const knex = new Knex(this.dbUrlBase);
    try {
      await knex.rawKnex.raw(`CREATE DATABASE ${this.dbName}`);
    } catch(err) {
      if ((err as any).code === '42P04') {
        return;
      }
      throw err;
    }
    await knex.close();
  }

  private async runMigrations(): Promise<void> {
    const knex = this.knex;
    await knex.runMigrations();
    await knex.close();
  }
}


