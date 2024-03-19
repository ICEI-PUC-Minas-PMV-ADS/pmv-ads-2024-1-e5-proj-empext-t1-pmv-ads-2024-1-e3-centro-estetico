import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ClientTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="filled">Preenchido</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="Procedimento" className="h-8 w-[320px]" />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar Resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 h-4 w-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
