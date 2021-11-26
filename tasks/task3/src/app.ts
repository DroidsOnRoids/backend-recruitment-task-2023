import express from 'express';
import Knex from './knex';
import { v4 as uuidv4 } from 'uuid';

type Color = 'black' | 'white' | 'empty';

class Move {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly player: Player,
  ) {}
}

class Board {
  private readonly board: string[][];

  constructor() {
    this.board = [
      ['empty', 'empty'],
      ['empty', 'empty'],
    ];
  }

  applyMove(move: Move): void {
    this.board[move.y][move.x] = move.player.color;
  }

  toArray() { 
    return this.board;
  }
}

class Player {
  constructor(
    public readonly color: Color,
  ) {}
 
  static fromToken(token: string): Player {
    const color: Color = token.match(/first-player/) ? 'black' : 'white';
    return new this(color);
  }
}

export default class App {
  public readonly app: any;
  private readonly board = new Board();

  constructor(private readonly knex: Knex) {
    this.app = express();

    this.app.use(express.json());

    this.app.post('/moves', async (req: express.Request, res: express.Response): Promise<void> => {
      const token = String(req.headers.authorization);
      const player = Player.fromToken(token);
      const move = new Move(parseInt(req.body.x), parseInt(req.body.y), player);
      await this.knex.rawKnex('moves').insert({
        id: uuidv4(),
        x: move.x,
        y: move.y,
        color: move.player.color,
      });
      this.board.applyMove(move);
      res.json({ success: true });
    });

    this.app.get('/board', async (req: express.Request, res: express.Response): Promise<void> => {
      const board = new Board();
      const results = await this.knex.rawKnex('moves').select('*');
      console.log(results);
      results.forEach((r: any) => {
        const move = new Move(r.x, r.y, new Player(r.color));
        board.applyMove(move);
        console.log(r);
      });
      res.json({ board: board.toArray() });
    });

    this.app.post('/pets', async (req: express.Request, res: express.Response): Promise<void> => {
      await this.knex.rawKnex('pets').insert({
        id: uuidv4(),
        name: String(req.body.name),
        species: String(req.body.species),
      });
      res.json({ key: 'value' });
    });

    this.app.get('/pets', async (req: express.Request, res: express.Response): Promise<void> => {
      const results = await this.knex.rawKnex('pets').select('*');
      res.json({
        pets: results.map((p: any) => ({ name: String(p.name) })),
      });
    });
  }

  static fromDbUrl(url: string) {
    return new this(new Knex(url));
  }
 
  listen() {
    this.app.listen(3000);
  }

  async close(): Promise<void> {
    await this.knex.close();
  }
}
