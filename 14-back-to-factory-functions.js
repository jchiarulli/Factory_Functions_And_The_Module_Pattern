// Back to Factory Functions
// Factories are simply plain old JS functions
// that return objects for us to use in our code
// Using factories is a powerful way to organize
// and contain the code you're writing
// For example, if we're writing any sort of game
// we're probably going to want objects to
// describe our players and encapsulate all of
// the things our players can do (functions)

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);
console.log(jimmie.getLevel());

// What would happen if we tried to call
// jimmie.die()?
// What if we tried to manipulate the health:
// jimmie.health -= 1000?
// Those things are NOT exposed publicly so we
// would get an error
// This is a very good thing
// Setting up objects like this makes it easier
// for us to use them because we've actually put
// some thought into how and when we're going to
// want to use that information
// Here, we have jimmie's health hiding as a
// private variable inside of the object which
// means we need to export a function if we want
// to manipulate it
// In the long run this will make our code much
// easier to reason about because all of the
// logic is encapsulated in an appropriate place
