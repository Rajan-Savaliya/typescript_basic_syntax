//Function
let fightRobotArmy3 = (robots: {count: number, type: string, magic: string}): number => {
  console.log('fight')
  return 5
}

//Class
class Animal {
  public sing: string = 'alalalala'
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `hello ${this.sing}`
  }
}

let lion = new Animal("rarararararrrrrr")
lion.greet();
lion.sing