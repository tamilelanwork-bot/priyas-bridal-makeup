const selected=new Set();const servicesPanel=document.querySelector('#servicesPanel'),detailsPanel=document.querySelector('#detailsPanel'),count=document.querySelector('#selectionCount'),continueBtn=document.querySelector('#continueBtn');
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{const service=button.dataset.service;if(selected.has(service)){selected.delete(service);button.classList.remove('selected')}else{selected.add(service);button.classList.add('selected')}count.textContent=`${selected.size} selected`;continueBtn.disabled=!selected.size;continueBtn.textContent=selected.size?'CONTINUE TO ENQUIRY →':'CHOOSE AN OPTION TO ENQUIRE →'}));
function back(){detailsPanel.classList.add('hidden');document.querySelector('.selection-bar').classList.remove('hidden');servicesPanel.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'})}
continueBtn.onclick=()=>{if(!selected.size)return;servicesPanel.classList.add('hidden');document.querySelector('.selection-bar').classList.add('hidden');detailsPanel.classList.remove('hidden');document.querySelector('#selectedText').textContent=[...selected].join(' • ');detailsPanel.scrollIntoView({behavior:'smooth',block:'start'})};document.querySelector('#changeSelection').onclick=back;document.querySelector('#backBtn').onclick=back;
document.querySelector('#enquiryForm').addEventListener('submit',event=>{event.preventDefault();const val=id=>document.querySelector(id).value.trim();const lines=['Hi Priya’s Bridal Makeup,','I would like to enquire about:',...Array.from(selected,(name,i)=>`${i+1}. ${name}`),'',`Name: ${val('#name')}`,`Phone: ${val('#phone')}`,`Event date: ${val('#date')||'To be discussed'}`,`Event time: ${val('#time')||'To be discussed'}`,`Type: ${val('#eventType')||'To be discussed'}`,`Location: ${val('#location')||'To be discussed'}`,`Message: ${val('#message')||'None'}`];window.open('https://wa.me/919176099809?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener')});

const artistTabs=document.querySelector('.artist-tabs');
const founderTab=document.querySelector('#founderTab'),teamTab=document.querySelector('#teamTab');
const founderServices=document.querySelector('#founderServices'),teamServices=document.querySelector('#teamServices');
function showArtist(team){
 founderTab.classList.toggle('active',!team);teamTab.classList.toggle('active',team);
 founderTab.setAttribute('aria-selected',String(!team));teamTab.setAttribute('aria-selected',String(team));
 founderServices.classList.toggle('hidden',team);teamServices.classList.toggle('hidden',!team);
}
founderTab.addEventListener('click',()=>showArtist(false));
teamTab.addEventListener('click',()=>showArtist(true));
continueBtn.addEventListener('click',()=>{if(selected.size)artistTabs.classList.add('hidden')});
document.querySelector('#changeSelection').addEventListener('click',()=>artistTabs.classList.remove('hidden'));
document.querySelector('#backBtn').addEventListener('click',()=>artistTabs.classList.remove('hidden'));
