// Shadowing
let shadowed = 2;

function shadowTestFunc() {
  let shadowed = 3;
  if (true) {
    let shadowed = 4
    console.log(shadowed) // 4
  }

  console.log(shadowed) // 3
}



shadowTestFunc();