declare const Exception: {
    error(module: string, message: string): void;
    success(module: string, message: string): void;
    info(module: string, message: string): void;
    warning(module: string, message: string): void;
};
export { Exception };
