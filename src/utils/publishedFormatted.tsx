import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'

export function PublishedAt(date: any) {
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })

  return publishedDateRelativeToNow
}

export function publishedAtTitle(date: any) {
  const publishedDate = format(date, "d 'de' LLLL 'de' yyyy ' às' HH:mm'h'", {
    locale: ptBR,
  })

  return publishedDate
}
