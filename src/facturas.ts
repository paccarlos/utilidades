interface TFactura {
    fecha: string;
    importante: boolean;
    total: number;

}


export class Facturas {
    crear(params: TFactura): number {
        return 1
    }
}