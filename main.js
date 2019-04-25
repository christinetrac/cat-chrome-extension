var elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Bernie Sanders/gi, 'Grandpa');
  value = value.replace(/bernie sanders/gi, 'Grandpa');
  value = value.replace(/Sanders/gi, 'Grandpa');
  value = value.replace(/Bernie/gi, 'Grandpa');
  value = value.replace(/BernieSanders/gi, 'Grandpa');
  node.nodeValue = value;
}

window.onload = findAndReplace();
