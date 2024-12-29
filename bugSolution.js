```javascript
const fs = require('fs');

function processFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const content = await processFile('./my-file.txt');
    console.log(content);
  } catch (error) {
    console.error('Error processing file:', error);
  }
}

main().catch(error => {
  console.error('Unhandled error:', error);
});
```