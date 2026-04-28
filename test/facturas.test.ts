import { describe, it, expect } from "vitest";
import { Facturas } from "../src/facturas";

describe("probar facturacion", () => {
    const factura = new Facturas()

    it("debe facturar 100", () => {
        const f = factura.crear({
            fecha: "2024-01-01",
            importante: true,
            total: 100
        })

        expect(f).toBe(1)
    })

    it("debe facturar 200", () => {
        const f = factura.crear({
            fecha: "2024-01-01",
            importante: true,
            total: 200
        })

        expect(f).toBe(2)
    })
})