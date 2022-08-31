
const sentence = "hello there from lighthouse labs";
 let count = 0 ;
for (const char of sentence) {
    // process.stdout.write(char);
   // process.stdout.write =  "hello there from lighthouse labs";

   setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, count +=50 ) // <= 1s delay to make it noticeable. Can dial it down later. Question
  
  }

  