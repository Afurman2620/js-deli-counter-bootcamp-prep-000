function takeANumber(line,name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}


function nowServing (line){
  if (line.length > 0) return `Currently serving ${line.shift()}.`;
  else return "There is nobody waiting to be served!";
}

function currentLine(line){
  var n = `The line is currently: `
  var deliLine = []
  if (line.lenght === 0) return "The line is currently empty."
  else{
    for (let n = 0; n < deliLine.length; n++){
        deliLine[n] = `${[n+1]}. ${DeliLine[n]}`;
      }
    n += deliLine.join(', ')
    return n;
  }
