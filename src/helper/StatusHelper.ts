import { StatusOptions } from "@/types/Transaction"

export function formatedStatus(status: StatusOptions) {
  const statusOptions = {
    created: 'Concluída',
    processed: 'Solicitada',
    processing: 'Processando'
  }

  return statusOptions[status]
}
