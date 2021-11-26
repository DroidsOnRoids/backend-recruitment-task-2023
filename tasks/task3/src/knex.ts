import KnexConnection from 'knex';

export default class Knex {
  public readonly rawKnex: any;

  constructor(connection: string) {
    this.rawKnex = KnexConnection({
      debug: false,
      client: 'pg',
      connection,
      searchPath: ['knex', 'public'],
    });
  }

  async runMigrations(): Promise<void> {
    await this.rawKnex.migrate.latest();
  }

  async close(): Promise<void> {
    await this.rawKnex.destroy();
  }
}
