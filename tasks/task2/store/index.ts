type ProductToAddData = {
  id: string,
  quantity: number,
}

type Result = {
  status: 'success' | 'failure',
  details: any,
}

export class Store {
  placeOrder({ productId, quantity }): Promise<Result> {
    return Promise.resolve({
      status: 'failure',
      details: { error: 'unrecognized id' },
    });
  }

  async addProduct({ id, quantity }: ProductToAddData): Promise<Result> {
    return Promise.resolve({
      status: 'failure',
      details: { error: 'unrecognized id' },
    });
  }
}
