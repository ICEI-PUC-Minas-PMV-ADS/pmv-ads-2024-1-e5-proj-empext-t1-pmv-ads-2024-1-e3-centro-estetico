import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Clients() {
  return (
    <>
      <Helmet title="Clientes" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Última Consulta</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead className="w-[200px]">Cliente</TableHead>
                <TableHead className="w-[100px]">Procedimento</TableHead>
                <TableHead className="w-[140px]">Valor Consulta</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">
                          Consultar Fichas de Anamnese
                        </span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      821e78f7asdhdf128h
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      18/03/2024
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="font-medium text-muted-foreground">
                          Preenchido
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      João Victor Ramires
                    </TableCell>
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
              })}
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      0duwsdu90823838122
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Sem Registro
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      João Victor Ramires
                    </TableCell>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell className="font-medium"></TableCell>
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
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
