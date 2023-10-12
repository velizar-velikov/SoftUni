let listOfProduct = input => console.log(input.sort()
                                              .map((x, i) => `${i + 1}.${x}`)
                                              .join('\n'));
listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])