const PARTS=8;
const files=Array.from({length:PARTS},(_,i)=>`./chunks/game.part${String(i+1).padStart(2,'0')}.txt`);
try{
  const source=(await Promise.all(files.map(async file=>{
    const res=await fetch(file,{cache:'no-store'});
    if(!res.ok)throw new Error(`${file}: HTTP ${res.status}`);
    return res.text();
  }))).join('');
  const url=URL.createObjectURL(new Blob([source],{type:'text/javascript'}));
  await import(url);
  setTimeout(()=>URL.revokeObjectURL(url),30000);
}catch(error){
  console.error(error);
  const layer=document.getElementById('toastLayer');
  const box=document.createElement('div');
  box.className='toast';box.style.cssText='top:30%;background:#ff0055;color:#fff';
  box.textContent='GAME LOAD ERROR · '+error.message;
  (layer||document.body).appendChild(box);
}