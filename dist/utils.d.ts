declare function date(): {
    day: string;
    month: string;
    year: number;
};
declare function clock(): {
    hours: string;
    minutes: string;
    seconds: string;
    ms: string;
};
declare function timestamp(): string;
declare const times: {
    date: typeof date;
    clock: typeof clock;
    timestamp: typeof timestamp;
};
export { times };
