const $=(s,root=document)=>root.querySelector(s);const $$=(s,root=document)=>[...root.querySelectorAll(s)];
const toast=(message)=>{const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2400)};
const overlay=(el,open)=>{el.classList.toggle('open',open);el.setAttribute('aria-hidden',String(!open))};
const command=$('#command-overlay'),modal=$('#case-modal');
function showView(view){const overview=$('#view-overview'),cases=$('#view-cases');overview.hidden=view!=='overview';cases.hidden=view!=='cases';$$('[data-view]').forEach(a=>a.classList.toggle('active',a.dataset.view===view));$('#breadcrumb-current').textContent=view==='cases'?'All cases':'Overview';$('#sidebar').classList.remove('mobile-open')}
$$('[data-view]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showView(a.dataset.view==='overview'?'overview':'cases')}));
$('#view-all').addEventListener('click',()=>showView('cases'));$('#back-overview').addEventListener('click',()=>showView('overview'));
function openNewCase(){overlay(modal,true);setTimeout(()=>$('#case-title').focus(),80)}
$('#new-case').addEventListener('click',openNewCase);$('#new-case-alt').addEventListener('click',openNewCase);
$('#close-modal').addEventListener('click',()=>overlay(modal,false));$('#cancel-modal').addEventListener('click',()=>overlay(modal,false));
modal.addEventListener('click',e=>{if(e.target===modal)overlay(modal,false)});
$('#case-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const title=String(data.get('title')).trim();const repo=String(data.get('repo'));if(!title)return;const row=document.createElement('button');row.className='case-row';row.dataset.status='open';row.dataset.title=title;const type=document.createElement('span');type.className='case-type';type.textContent='NEW';const main=document.createElement('span');main.className='case-main';const strong=document.createElement('strong');strong.textContent=title;const small=document.createElement('small');small.textContent=repo+' · Just now';main.append(strong,small);const status=document.createElement('span');status.className='status-badge status-needs';status.textContent='New';const arrow=document.createElement('span');arrow.className='case-arrow';arrow.textContent='↗';row.append(type,main,status,arrow);$('#case-list').prepend(row);$('#case-list').querySelector('.case-row').scrollIntoView({block:'nearest'});e.currentTarget.reset();overlay(modal,false);showView('overview');toast('Case added to this preview session')});
$('#theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('light');const mode=document.body.classList.contains('light')?'light':'dark';try{localStorage.setItem('bugaura-theme',mode)}catch{};$('#theme-toggle').textContent=mode==='light'?'☼':'◐';toast(mode==='light'?'Light theme enabled':'Dark theme enabled')});
try{if(localStorage.getItem('bugaura-theme')==='light'){document.body.classList.add('light');$('#theme-toggle').textContent='☼'}}catch{}
function openCommand(){overlay(command,true);$('#command-input').value='';setTimeout(()=>$('#command-input').focus(),50)}function closeCommand(){overlay(command,false)}
$('#open-search').addEventListener('click',openCommand);command.addEventListener('click',e=>{if(e.target===command)closeCommand()});
$$('.command-option').forEach(b=>b.addEventListener('click',()=>{const action=b.dataset.action;closeCommand();if(action==='new')openNewCase();else showView(action)}));
$('#command-input').addEventListener('input',e=>{const q=e.target.value.toLowerCase();$$('.command-option').forEach(b=>b.hidden=!b.textContent.toLowerCase().includes(q))});
document.addEventListener('keydown',e=>{const mac=/Mac|iPhone|iPad/.test(navigator.platform);if((mac?e.metaKey:e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}if(e.key==='Escape'){closeCommand();overlay(modal,false)}if(e.key.toLowerCase()==='n'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!e.ctrlKey&&!e.metaKey){openNewCase()}});
$$('.segment').forEach(btn=>btn.addEventListener('click',()=>{$$('.segment').forEach(x=>x.classList.toggle('active',x===btn));const filter=btn.dataset.filter;$$('.case-row').forEach(row=>{row.hidden=filter==='all'?false:filter==='open'?row.dataset.status==='reproduced':row.dataset.status!=='reproduced'})}));
$('#load-more').addEventListener('click',()=>toast('You are viewing all available preview cases'));
$('#github-settings').addEventListener('click',()=>toast('GitHub connection setup will be part of the integration milestone'));
$('#help-button').addEventListener('click',()=>toast('Help centre is coming soon'));
$('#learn-proof').addEventListener('click',()=>toast('Reproduction proof: attempts, environments and evidence stay linked to each case'));
$$('.case-row').forEach(row=>row.addEventListener('click',()=>toast('Case detail view is the next product milestone')));
