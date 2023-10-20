function addEventListener() {
	document.querySelector('#masterKey').addEventListener('keyup', onMasterKeyKeyup);
	document.querySelector('#siteKey').addEventListener('keyup', onSiteKeyKeyup);
	document.querySelector('#size').addEventListener('input', onSizeInput);
	
	let nodes = document.querySelectorAll('#charset input');
	for(let i=0;i<nodes.length;++i) {
		nodes[i].addEventListener('change', onCharsetChange);
	}
	document.querySelector('#isForceAllSet').addEventListener('change', onIsForceAllSetChange);
	
	document.querySelector('#advSettingLink').addEventListener('click', onAdvSettingLinkClick);
	
	document.querySelector('#password').addEventListener('click', onPasswordClick);
};


function onMasterKeyKeyup(e) {
	PwGen.setMasterKey(document.querySelector('#masterKey').value);
};
function onSiteKeyKeyup(e) {
	let siteKey = document.querySelector('#siteKey').value.toLowerCase();
	PwGen.setSiteKey(siteKey);
};
function onSizeInput(e) {
	let size = document.querySelector('#size').value;
	document.querySelector('#sizeValue').value = size;
	PwGen.setSize(size);
};
function onCharsetChange(e) {
	let nodes = document.querySelectorAll('#charset input');
	let flag = 0;
	for(let i=0;i<nodes.length;++i) {
		if(!nodes[i].checked) continue;
		flag |= (1<<i);
	}
	PwGen.setCharsetFlag(flag);
};
function onIsForceAllSetChange(e) {
	PwGen.setIsForceAllSet(document.querySelector('#isForceAllSet').checked);
};

function onAdvSettingLinkClick(e) {
	let node = document.querySelector('html');
	node.setAttribute('isOpen', !(node.getAttribute('isOpen')=='true'));
};

function onPasswordClick(e) {
	document.querySelector('#password').select();
};


PwGen.addListener((pw)=>{
	if(PwGen.siteKey.length <= 0) {
		pw = '';
	}
	document.querySelector('#password').value = pw;
});
addEventListener();
