const PARTS=6;
const files=Array.from({length:PARTS},(_,i)=>`./chunks/game.part${String(i+1).padStart(2,'0')}.txt`);

function showBootStatus(text, progress=0, error=false){
  const layer=document.getElementById('toastLayer')||document.body;
  let box=document.getElementById('bootStatus');
  if(!box){
    box=document.createElement('div');
    box.id='bootStatus';
    box.className='toast';
    box.style.cssText='top:9%;min-width:260px;text-align:center;background:#111;color:#fff;border-color:#fff;z-index:99';
    layer.appendChild(box);
  }
  box.innerHTML=`<b style="color:${error?'#ff0055':'#00eaff'}">${text}</b><div style="height:5px;background:#333;margin-top:6px"><div style="width:${Math.max(0,Math.min(100,progress))}%;height:100%;background:linear-gradient(90deg,#00eaff,#ffe300,#ff0055)"></div></div>`;
}

try{
  showBootStatus('GAME BOOT · 0/'+PARTS,2);
  const chunks=[];
  for(let i=0;i<files.length;i++){
    const file=files[i];
    const res=await fetch(file,{cache:'no-store'});
    if(!res.ok)throw new Error(`${file}: HTTP ${res.status}`);
    chunks.push(await res.text());
    showBootStatus(`GAME BOOT · ${i+1}/${PARTS}`,((i+1)/PARTS)*86);
  }
  const source=chunks.join('');
  if(source.length<50000)throw new Error('game source incomplete');
  showBootStatus('COMPILE GAME',92);
  const url=URL.createObjectURL(new Blob([source],{type:'text/javascript'}));
  await import(url);
  showBootStatus('READY · PLAY NOW',100);
  setTimeout(()=>document.getElementById('bootStatus')?.remove(),900);
  setTimeout(()=>URL.revokeObjectURL(url),30000);
}catch(error){
  console.error(error);
  showBootStatus('GAME LOAD ERROR · '+error.message,100,true);
}
