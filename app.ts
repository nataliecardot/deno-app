const text = 'This is some text to store in a file!';

const encoder = new TextEncoder();
const data = encoder.encode(text);

// Since Deno is secure by default (when you execute a file, it cannot read to file, write to file, send HTTP requests) & requires explicit execution permissions, have to set appropriate permissions with --allow-write flag when executing TS file. Allowing to write to a file message.txt only: `deno run --allow-write=message.txt app.ts`
Deno.writeFile('message.txt', data).then(() => {
  console.log('Wrote to file!');
});
