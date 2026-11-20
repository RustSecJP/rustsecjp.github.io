(function(){
  var main=document.getElementById('main'),toc=document.getElementById('toc');
  if(!main||!toc)return;
  var hs=[].slice.call(main.querySelectorAll('h2'));
  if(hs.length<3||main.querySelector('[data-no-toc]'))return;
  hs.forEach(function(h,i){
    if(!h.id)h.id='s'+(i+1);
    var li=document.createElement('li'),a=document.createElement('a');
    a.href='#'+h.id;a.textContent=h.textContent;li.appendChild(a);toc.appendChild(li);
  });
  toc.parentNode.hidden=false;
  document.querySelector('.wrap').classList.add('has-toc');
  var links=[].slice.call(toc.querySelectorAll('a'));
  if(!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}
    });
  },{rootMargin:'-90px 0px -65% 0px'});
  hs.forEach(function(h){io.observe(h)});
})();
