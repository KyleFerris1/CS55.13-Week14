import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

function readJsonFile( fileName) {
  const filePath = path.join(dataDir, fileName);
  
  const jsonString = fs.readFileSync(filePath, 'utf8');
  
  return JSON.parse(jsonString);
}

export function getSortedList(){
  const persons = readJsonFile('persons.json');

  const persons2 = readJsonFile('persons2.json');

  const jsonObj = persons.concat(persons2);

  jsonObj.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    }
  );

  return jsonObj.map(
    function(item){
      return{
          id: item.id.toString(),
          name: item.name
    
      };
    }
  );
}

export function getAllIds(){
  const persons = readJsonFile('persons.json');
  
  const persons2 = readJsonFile('persons2.json');

  const jsonObj = persons.concat(persons2);

  return jsonObj.map(
    function(item) {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }
  );
}



export async function getData(idRequested) {
  const filePath = path.join(dataDir, 'persons.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(
    function(obj){
      return obj.id.toString() === idRequested;
    }
  );

  let objReturned;
  if(objMatch.length > 0){
    objReturned = objMatch[0];
  } else{
    objReturned = {};
  }

  return objReturned;
  
}