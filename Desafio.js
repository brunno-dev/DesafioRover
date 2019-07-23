/*
Se virar para a esquerda fica na posição OESTE (W)
Se virar para a direita fica na posição LESTE (E)

*/

/*  AO PEDIR PARA SEGUIR EM FRENTE:
    Se a direção for NORTE(N) y-1
    Se a direção for OESTE(W) x-1
    Se a direção for SUL(S) y+1
    Se a direção for LESTE(E) x+1
*/
const rover = {
  direction: "N",
  position: [0, 0],
  travelLog: []
};

const rover2 = {
  direction: "N",
  position: [10, 10],
  travelLog: []
};

// turnLeft function
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log(`turnLeft was called! Direction is: [${rover.direction}]`);
}

function turnRight(rover) {
  switch (rover.direction) {

    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
  console.log(`turnRight was called! Direction is: [${rover.direction}]`);
}

function moveForward(rover) {
  switch (rover.direction) {

    case "N":
      rover.position[1]--;
      break;

    case "E":
      rover.position[0]++;
      break;

    case "S":
      rover.position[1]++;
      break;

    case "W":
      rover.position[0]--;
      break;
  }
  if (rover.position[0] < 0) {
    rover.position[0] = 0;
    console.log("Sorry! I can't stay out of the grid.")
  }
  if (rover.position[0] > 9) {
    rover.position[0] = 9;
    console.log("Sorry! I can't stay out of the grid.")
  }
  if (rover.position[1] < 0) {
    rover.position[1] = 0;
    console.log("Sorry! I can't stay out of the grid.")
  }
  if (rover.position[1] > 9) {
    rover.position[1] = 9;
    console.log("Sorry! I can't stay out of the grid.")
  } else {
    console.log(`moveForward was called! Position is: [${rover.position}]`);
  }
}

function moveBackward(rover) {
  switch (rover.direction) {

    case "N":
      rover.position[1]++;
      break;

    case "E":
      rover.position[0]--;
      break;

    case "S":
      rover.position[1]--;
      break;

    case "W":
      rover.position[0]++;
      break;
  }
  if (rover.position[0] < 0) {
    rover.position[0] = 0;
    console.log("Sorry! I can't stay out of the grid.")
  }
  if (rover.position[0] > 9) {
    rover.position[0] = 9;
    console.log("Sorry! I can't stay out of the grid.")
  }
  if (rover.position[1] < 0) {
    rover.position[1] = 0;
    console.log("Sorry! I can't stay out of the grid.")
  }
  if (rover.position[1] > 9) {
    rover.position[1] = 9;
    console.log("Sorry! I can't stay out of the grid.")
  } else {
    console.log(`moveBackward was called! Position is: [${rover.position}]`);
  }
}


function commandList(orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {

      case "l":
        turnLeft(rover);
        break;

      case "r":
        turnRight(rover);
        break;

      case "f":
        moveForward(rover);
        break;

      case "b":
        moveBackward(rover);
        break;
      default:
        console.log("Sorry! I only know: l(left), r(right), f(forward) or b(backward).");
    }
  }
}
commandList("ffzzyrfb")