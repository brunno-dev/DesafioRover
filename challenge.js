/***Parâmetros dos rovers***/
const Tec = {
  name: "TEC",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

const Toy = {
  name: "TOY",
  direction: "N",
  x: 3,
  y: 0,
  travelLog: [],
};


/***Cria o Grid 10x10***/
const grid = [];

for (var x = 0; x < 10; x++) {
  grid[x] = [];
  for (var y = 0; y < 10; y++) {
    grid[x][y] = '|';
  }
}


/***Obstáculos no Grid***/
const barrier1 = [3, 3];
grid[barrier1[0]].splice(barrier1[1], 1, "@");

const barrier2 = [0, 1];
grid[barrier2[0]].splice(barrier2[1], 1, "@");


/***Direção exata ao virar para a esquerda***/
function turnLeft(nameRover) {

  switch (nameRover.direction) {
    case "N":
      nameRover.direction = "W";
      break;
    case "E":
      nameRover.direction = "N";
      break;
    case "S":
      nameRover.direction = "E";
      break;
    case "W":
      nameRover.direction = "S";
      break;
  }
}

/***Direção exata ao virar para a direita ***/
function turnRight(nameRover) {

  switch (nameRover.direction) {
    case "N":
      nameRover.direction = "E";
      break;
    case "E":
      nameRover.direction = "S";
      break;
    case "S":
      nameRover.direction = "W";
      break;
    case "W":
      nameRover.direction = "N";
      break;
  }
};

/***Função que move para frente, mediante validações do caminho***/
function moveForward(nameRover) {

  const moveX = nameRover.x; //Variável para simplificar os comandos abaixo.
  const moveY = nameRover.y;

  const otherRoverX = function () { //Função que armazena "x" do outro rover.
    if (nameRover === Tec) {
      return (Toy.x);
    } else {
      return (Tec.x);
    }
  };
  const otherRoverY = function () { //Função que armazena "y" do outro rover.
    if (nameRover === Tec) {
      return (Toy.y);
    } else {
      return (Tec.y);
    }
  };

  switch (nameRover.direction) { //função que valida se o rover pode ou não se movimentar.
    case "W":
      if (moveY === 0) { //check para não sair do grid
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX && barrier1[1] === moveY - 1) { //check com o primeiro obstáculo
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX && barrier2[1] === moveY - 1) { //check com o segundo obstáculo
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX && otherRoverY() === moveY - 1) { //check com o outro rover
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.y--; //movimento do rover
        nameRover.travelLog.push([nameRover.x, nameRover.y]); //inclui o array no travelLog
      }
      break;
    case "S": //mesmo passo a passo para o movimento
      if (moveX === 9) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX + 1 && barrier1[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX + 1 && barrier2[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX + 1 && otherRoverY() === moveY) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.x++;
        nameRover.travelLog.push([nameRover.x, nameRover.y]);
      }
      break;
    case "E": //mesmo passo a passo para o movimento
      if (moveY === 9) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX && barrier1[1] === moveY + 1) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX && barrier2[1] === moveY + 1) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX && otherRoverY() === moveY + 1) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.y++;
        nameRover.travelLog.push([nameRover.x, nameRover.y]);
      }
      break;
    case "N": //mesmo passo a passo para o movimento
      if (moveX === 0) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX - 1 && barrier1[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX - 1 && barrier2[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX - 1 && otherRoverY() === moveY) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.x--;
        nameRover.travelLog.push([nameRover.x, nameRover.y]);
      }
      break;
  }
}

/***Função que move para trás, mediante validações do caminho***/
function moveBackward(nameRover) { // mesmo passo a passo do moveForward

  const moveX = nameRover.x;
  const moveY = nameRover.y;

  const otherRoverX = function () {
    if (nameRover === "Tec") {
      return (Toy.x);
    } else {
      return (Tec.x);
    }
  };
  const otherRoverY = function () {
    if (nameRover === "Tec") {
      return (Toy.y);
    } else {
      return (Tec.y);
    }
  };

  switch (nameRover.direction) {
    case "W":
      if (moveY === 9) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX && barrier1[1] === moveY + 1) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX && barrier2[1] === moveY + 1) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX && otherRoverY() === moveY + 1) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.y++;
      }
      break;
    case "S":
      if (moveX === 0) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX - 1 && barrier1[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX - 1 && barrier2[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX - 1 && otherRoverY() === moveY) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.x--;
      }
      break;
    case "E":
      if (moveY === 0) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX && barrier1[1] === moveY - 1) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX && barrier2[1] === moveY - 1) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX && otherRoverY() === moveY - 1) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.y--;
      }
      break;
    case "N":
      if (moveX === 9) {
        console.log(`Sorry! ${nameRover.name} can't stay out of the grid.`);

      } else if (barrier1[0] === moveX + 1 && barrier1[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (barrier2[0] === moveX + 1 && barrier2[1] === moveY) {
        console.log(`Stop ${nameRover.name}! Obstacle!`);

      } else if (otherRoverX() === moveX + 1 && otherRoverY() === moveY) {
        console.log(`Stop ${nameRover.name}! Other Rover!`);

      } else {
        nameRover.x++;
      }
      break;
  }
  nameRover.travelLog.push([nameRover.x, nameRover.y]); //inclui o array do travelLog
}

/***Função que chama os comandos para o robô virar (r,l) ou andar (f,b)***/
function commandList(nameRover, command) {

  for (let i = 0; i < command.length; i++) {
    switch (command[i].toLowerCase()) {
      case "l":
        turnLeft(nameRover);
        break;
      case "r":
        turnRight(nameRover);
        break;
      case "f":
        moveForward(nameRover);
        break;
      case "b":
        moveBackward(nameRover);
        break;
      default:
        return console.log(`Oops..
        Rover ${nameRover.name} know: l, r, f, or b. Try again...`);
    }
  }
};

/***Chamada para movimentação dos robôs (Nomes e Comandos)***/
commandList(Tec, "f");
commandList(Toy, "rFFx");


/***Inclui os robôs no Grid***/
grid[Tec.x].splice(Tec.y, 1, "TEC");
grid[Toy.x].splice(Toy.y, 1, "TOY");


/***Imprime***/
console.log("<===================== Rover Tec =============================>");
console.log("Direction: " + Tec.direction)
console.log(Tec.travelLog);

console.log("<====================== Rover Toy ============================>");
console.log("Direction: " + Toy.direction)
console.log(Toy.travelLog);

console.log("<========================= GRID ==============================>");
console.log(grid);