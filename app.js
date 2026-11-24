const el=id=>document.getElementById(id);
function node(tag,text,cls){const n=document.createElement(tag);if(text!=null)n.textContent=text;if(cls)n.className=cls;return n}
function picture(src,alt,cls){const img=node('img',null,cls);img.src=src;img.alt=alt;img.loading='lazy';return img}
let region='Semua',limit=12;
const photo=p=>p.image||'photos/'+p.start+'.webp';
function draw(){
 const q=el('search').value.trim().toLocaleLowerCase();
 const found=packages.filter(p=>(region==='Semua'||p.region===region)&&[p.title,p.summary,p.region,...p.places].join(' ').toLocaleLowerCase().includes(q));
 el('count').textContent=found.length?found.length+' pakej ditemui':'Tiada pakej sepadan. Cuba bandar lain atau pilih Semua.';
 el('grid').replaceChildren();for(const p of found.slice(0,limit)){
 const card=node('button',null,'card');const inside=node('span',null,'inside');inside.append(node('span',p.region+' · '+p.duration,'tag'),node('strong',p.title),node('span',p.summary,'muted'));card.append(picture(photo(p),p.title),inside,node('span','Lihat itinerari →','go'));card.onclick=()=>openDetail(p);el('grid').append(card)}
 el('more').hidden=found.length<=limit;
}
function openDetail(p){
 const content=node('div',null,'details');content.append(node('span',p.region+' · '+p.duration,'tag'),node('h2',p.title),node('p',p.summary));
 const days=p.days||(typeof itineraries!=='undefined'&&itineraries[p.start]);
 if(days?.length){content.append(node('h3','Itinerari perjalanan'));const list=node('ol');for(const d of days)list.append(node('li',d));content.append(list)}
 content.append(node('h3','Rancang mengikut destinasi'));const select=node('select');select.setAttribute('aria-label','Destinasi dalam pakej');for(const place of new Set([...p.places,...(typeof itineraryPlaces!=='undefined'&&itineraryPlaces[p.start]||[])]))select.add(new Option(place,place));const partners=node('div');select.onchange=()=>renderPartners(partners,select.value,{start:p.start,airport:p.airport});content.append(select,partners);if(select.value)select.onchange();
 if(p.start&&p.end){const original=node('details',null,'source');original.append(node('summary','Lihat jadual, sorotan dan syarat asal · hlm. '+p.start+'–'+p.end));original.ontoggle=()=>{if(original.open&&original.children.length===1)for(let i=p.start;i<=p.end;i++)original.append(picture('pages/'+String(i).padStart(3,'0')+'.webp','Booklet halaman '+i))};content.append(original)}
 el('body').replaceChildren(picture(photo(p),p.title,'cover'),content);el('detail').showModal();el('detail').scrollTop=0;
}
for(const r of ['Semua',...new Set(packages.map(p=>p.region))]){const b=node('button',r);b.setAttribute('aria-pressed',String(r===region));b.onclick=()=>{region=r;limit=12;for(const x of el('filters').children)x.setAttribute('aria-pressed',String(x===b));draw()};el('filters').append(b)}
el('search').oninput=()=>{limit=12;draw()};el('more').onclick=()=>{limit+=12;draw()};el('detail').onclick=e=>{if(e.target===el('detail'))el('detail').close()};draw();
const archive=node('details',null,'archive');archive.append(node('summary','Semak semua halaman booklet asal'));const pager=node('input');pager.type='number';pager.min=1;pager.max=136;pager.value=1;pager.setAttribute('aria-label','Nombor halaman booklet');const pageImg=node('img');const pageLabel=node('label','Halaman ');pageLabel.append(pager,document.createTextNode(' daripada 136'));archive.append(pageLabel,pageImg);function showPage(){const n=Math.min(136,Math.max(1,Number(pager.value)||1));pager.value=n;pageImg.src='pages/'+String(n).padStart(3,'0')+'.webp';pageImg.alt='Booklet asal, halaman '+n}archive.ontoggle=()=>{if(archive.open)showPage()};pager.onchange=showPage;document.querySelector('footer').append(archive);
