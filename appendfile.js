var fs = require('fs');

fs.appendFile('newfile.txt', 'I am newly created file', function (err) {
    if (err) throw err ;
    console.log('File Created!');
});

fs.open('newfile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('newfile3.txt', 'this is new file', function (err) {
    if (err) throw err;
    console.log('Written');
});

fs.rename('newfile2.txt','renamedfile.txt', function(err){
    if (err) throw err;
    console.log('Renamed file');
});