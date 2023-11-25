function objectFactory(library, orders) {
    let output = [];
    for (let order of orders) {
        let obj = {
            name: order.template.name,
        }
        order.parts.forEach(part => obj[part] = library[part]);
        output.push(obj)
    }
    return output;
}
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];

  let result = objectFactory(library, orders);
  console.log(result);