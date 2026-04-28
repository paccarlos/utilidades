interface TFactura {
    fecha: string;
    importante: boolean;
    total: number;
}
export declare class Facturas {
    crear(params: TFactura): number;
}
export {};
