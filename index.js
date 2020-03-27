// Import stylesheets
import './style.css';

function print(...anything) {
  anything.forEach((text)=>{
    document.getElementById("console").innerText += text;
  })
}

const tafelVan = 13;

const tafelBegin = 1;
const tafelEinde = 11;

for (let i=tafelBegin; i <= tafelEinde; i++) {
  print(i, " x ", tafelVan, " = ", i * tafelVan, "\n");
}
