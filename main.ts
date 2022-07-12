const main = async (input?: string[]): Promise<void> => {
  console.log("Hello, World!");
};

main();

// const captureStdin = async (): Promise<string[]> => {
//   const stream = (await import("readline")).createInterface({
//     input: process.stdin,
//   });
//   const input: string[] = [];
//   for await (const line of stream) {
//     input.push(line);
//   }
//   return input;
// };
