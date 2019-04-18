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
  value = value.replace(/Dog/gi, 'Cat');
  value = value.replace(/dog/gi, 'cat');
  value = value.replace(/Dogs/gi, 'Cats');
  value = value.replace(/dogs/gi, 'cats');
  node.nodeValue = value;
}

window.onload = findAndReplace();