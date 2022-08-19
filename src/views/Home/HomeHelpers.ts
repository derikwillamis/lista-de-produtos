import { StatusOptions } from "@/types/Transaction"

export function percentageProgress(status: StatusOptions) {
  const widths = {
    created: '100%',
    processed: '50%',
    processing: '0%',
  }

  return widths[status]
}
