import TransactionRepository from './TransactionRepository'

const repositories = {
  transactionRepository: TransactionRepository,
}

type RepositoryNames = keyof typeof repositories
type RepositoryValues<T> = T extends RepositoryNames
  ? typeof repositories[T]
  : never

export default {
  get<K extends RepositoryNames>(name: K) {
    return repositories[name] as RepositoryValues<K>
  },
}
