export default (source: string) => {
  return {
    error: (...args: any[]) => {
      console.error(`[${source} - ERROR]:`, ...args);
    },
    warn: (...args: any[]) => {
      console.warn(`[${source} - WARN]:`, ...args);
    },
    info: (...args: any[]) => {
      console.info(`[${source} - INFO]:`, ...args);
    },
    log: (...args: any[]) => {
      console.log(`[${source} - LOG]:`, ...args);
    },
  };
};