let product = {
    foto : 'foto',
    articul: 'art',
    description: 'Object product',
    info: inFo
}

function inFo(product) {
    let parent = document.getElementById(product);
    parent.style.width = '300px';
    
    let child = document.createElement('div');
    child.style.background = 'red';
    child.style.height = '90px';
    
    
    let foto = document.createElement('h1');
    foto.innerHTML = this.foto;
    foto.style.textAlign = "center";
    
    let art = document.createElement('div');
    art.innerHTML = this.articul;
    art.style.textAlign = 'center';
    art.style.width = '25%';
    art.style.background = 'blue';
    art.style.padding = '45px 0';
    
    
    let desc = document.createElement('div');
    desc.innerHTML =  this.description;
    desc.style.textAlign = 'center';
    desc.style.width = '75%';
    desc.style.background = 'green';
    desc.style.padding = '45px 0';
    
    let chSecond = document.createElement('div');
    chSecond.style.display = 'flex'; 
    
    child.appendChild(foto);
    chSecond.appendChild(art);
    chSecond.appendChild(desc);

    let text = document.createTextNode(this.foto);
      
    parent.appendChild(child);
    parent.appendChild(chSecond);
}