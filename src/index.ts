export function clamp(valor: number, min: number, max: number) {
    return Math.max(min, Math.min(valor, max));
}