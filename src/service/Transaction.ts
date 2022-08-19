import BaseClient from './baseApi'

export class Transaction extends BaseClient {
  constructor() {
    super('https://warren-transactions-api.herokuapp.com/api')
  }
}

export default new Transaction()
