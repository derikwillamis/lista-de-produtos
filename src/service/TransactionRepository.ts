import api from '@/service/Transaction'
import { ITransaction } from '@/types/Transaction'

const transactions = '/transactions'

export default {
  async getAll(): Promise<ITransaction[]> {
    const response = await api.get<ITransaction[]>(`${transactions}`)
    return response
  }
}
