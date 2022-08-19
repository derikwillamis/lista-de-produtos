import { StatusOptions } from "@/types/Transaction"

type Color = '#e32d55' | '#e77494' | '#efb9c9'

type ChipOptions = {
  [statusOptions in StatusOptions]: {
    color: Color,
    label: String
  }
}

export function formatedStatus(status: StatusOptions) {
  const statusOptions: ChipOptions = {
    created: { color: '#e32d55', label: 'Concluída' },
    processed: { color: '#e77494', label: 'Solicitada' },
    processing: { color: '#efb9c9', label: 'Processando' }
  }
  return statusOptions[status]
}
