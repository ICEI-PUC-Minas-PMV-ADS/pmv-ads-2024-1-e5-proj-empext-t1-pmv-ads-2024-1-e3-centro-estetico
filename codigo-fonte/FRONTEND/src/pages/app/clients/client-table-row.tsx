import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function ClientTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Consultar Fichas de Anamnese</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        821e78f7asdhdf128h
      </TableCell>
      <TableCell className="text-muted-foreground">18/03/2024</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-medium text-muted-foreground">Preenchido</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">João Victor Ramires</TableCell>
      <TableCell className="font-medium">Peeling</TableCell>
      <TableCell className="font-medium">R$ 100,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Perfil
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="destructive" size="xs">
          <X className="mr-2 h-3 w-3" />
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  )
}
