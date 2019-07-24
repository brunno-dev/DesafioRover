/*Parâmetros dos Robôs */
const rover = {
  direction: "N",
  position: [0, 0],
  travelLog: []
};

const roverTwo = {
  direction: "N",
  position: [10, 10],
  travelLog: []
};


/*Direção exata ao virar para a esquerda */
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

/*Direção exata ao virar para a direita */
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

/*Função que move para frente e cria limites no grid 10x10*/
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

/*Função que move para trás e cria limites no grid 10x10 */
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

/*Função que chama os comandos para o robô virar (r,l) ou andar (f,b)*/
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
/*Chamada para movimentação do robô */
commandList("ffzzyrfb")