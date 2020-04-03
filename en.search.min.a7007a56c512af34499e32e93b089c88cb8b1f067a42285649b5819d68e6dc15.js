'use strict';(function(){const input=document.querySelector('#book-search-input');const results=document.querySelector('#book-search-results');input.addEventListener('focus',init);input.addEventListener('keyup',search);document.addEventListener('keypress',focusSearchFieldOnKeyPress);function focusSearchFieldOnKeyPress(e){if(input===document.activeElement){return;}
const characterPressed=String.fromCharCode(e.charCode);if(!isHotkey(characterPressed)){return;}
input.focus();e.preventDefault();}
function isHotkey(character){const dataHotkeys=input.getAttribute('data-hotkeys')||'';return dataHotkeys.indexOf(character)>=0;}
function init(){input.removeEventListener('focus',init);input.required=true;loadScript('/mung0001/source.git/flexsearch.min.js');loadScript('/mung0001/source.git/en.search-data.min.e5abaf429bc5e47c45a0111865f1cb8dd814e8522cb2d42afc4e09a2efb2a561.js',function(){input.required=false;search();});}
function search(){while(results.firstChild){results.removeChild(results.firstChild);}
if(!input.value){return;}
const searchHits=window.bookSearchIndex.search(input.value,10);searchHits.forEach(function(page){const li=document.createElement('li'),a=li.appendChild(document.createElement('a'));a.href=page.href;a.textContent=page.title;results.appendChild(li);});}
function loadScript(src,callback){const script=document.createElement('script');script.defer=true;script.async=false;script.src=src;script.onload=callback;document.head.appendChild(script);}})();