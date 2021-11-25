import { Outlet } from '@tokenscript/token-negotiator';
new Outlet({ tokenName: 'devcon-ticket-local-3002' });

document.hasStorageAccess().then(access => {
    if (access) {
        // Show UX with access to storage.
        console.log('Storage access was granted.');        
        // read from localstorage and store as cookie
        document.cookie = `dcTokens=${localStorage.getItem('dcTokens')}; expires=Fri, 31 Dec 9999 23:59:59 GMT"`;
    } else {
        // Show UX for no access.
        console.log('Storage access was not granted.');
    }
});

// @ts-ignore
window['x'] = function () {
    console.log('monty');
    document.requestStorageAccess();
}

document.body.innerHTML = `<button onclick="x()" class="storage-access-btn-tn">Authorise Access</button>`;
