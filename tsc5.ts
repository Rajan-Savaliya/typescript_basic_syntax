//! Be Care full to use this
let whatever: any = 'aafnrgnar noooooooooooooooo!!';
whatever = true;

//! void ====> use: that function not return anything
let sing = (): void => {
  console.log('lalalala');

}

//! never ==> use:  not return anything : throw error
let error = (): never => {
  throw Error('oopes');
}
