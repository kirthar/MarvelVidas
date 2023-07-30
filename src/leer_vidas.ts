import * as path from "fs"






function readNumberFromFile(filePath: string): Promise<number> {
    return new Promise((resolve, reject) => {
      path.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const numberValue = parseInt(data.trim(), 10);
          if (isNaN(numberValue)) {
            reject(new Error('The content of the file is not a valid number.'));
          } else {
            resolve(numberValue);
          }
        }
      });
    });
}

export default readNumberFromFile


