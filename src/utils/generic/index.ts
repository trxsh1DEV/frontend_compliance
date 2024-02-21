export const delay = (time: number) => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve(); // resolvendo a Promise após o atraso
    }, time * 1000);
  });
};
