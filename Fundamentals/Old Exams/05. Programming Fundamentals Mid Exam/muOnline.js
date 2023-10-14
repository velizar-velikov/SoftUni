// muOnline is the same as dungeonesDark from Array - Exercise with only difference in input way and output formatting
// so coppied dungeonesDark and passed with 100/100
function dungeonestDark(str) {
      let newArr = str.split('|');
      let health = 100;
      let coins = 0;
      let isDead = false;
      for (let i = 0; i < newArr.length; i++) {
          let tokens = newArr[i].split(' ');
          let command = tokens[0];
          let num = Number(tokens[1]);
          if (command == 'potion') {
              let initialHealth = health;
              health += num;
              let healing = num;
              if (health > 100) {
                  health = 100;
                  healing = 100 - initialHealth;
              }
              console.log(`You healed for ${healing} hp.`);
              console.log(`Current health: ${health} hp.`);
          } else if (command == 'chest') {
              coins += num;
              console.log(`You found ${num} bitcoins.`);
          } else {
              let monster = command;
              let attack = num;
              health -= attack;
              if (health > 0) {
                  console.log(`You slayed ${monster}.`);
              } else {
                  isDead = true;
                  let bestRoom = i + 1;
                  console.log(`You died! Killed by ${monster}.`);
                  console.log(`Best room: ${bestRoom}`);
                  break;
              }
          }
      }
      if (!isDead) {
          console.log("You've made it!");
          console.log(`Bitcoins: ${coins}`);
          console.log(`Health: ${health}`);
      }
  }