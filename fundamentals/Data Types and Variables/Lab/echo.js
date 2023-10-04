function echo(par) {
    let type = typeof par;
    console.log(type);
    if (type == 'string' || type == 'number') {
        console.log(par);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echo('Hello, JavaScript!')