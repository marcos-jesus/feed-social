import { format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'

export function PublishedAt(date: number | Date) {
  return format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
}
