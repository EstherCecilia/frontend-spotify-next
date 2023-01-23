type Freeze = (timeout?: number) => Promise<number>;

export const freeze: Freeze = (timeout = 2000) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
