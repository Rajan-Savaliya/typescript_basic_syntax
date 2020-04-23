//interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('fight')
}

//==>Both same==============================

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
  console.log('fight')
}