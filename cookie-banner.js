(function() {
    if (document.cookie.indexOf('cookie_consent=') !== -1) return;

    var overlay = document.createElement('div');
    overlay.id = 'cookieBannerOverlay';
    overlay.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:rgba(0,0,0,0.85);z-index:10000;padding:20px;font-family:Lato,sans-serif;';

    overlay.innerHTML = '<div style="max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:20px;flex-wrap:wrap;">' +
        '<div style="flex:1;min-width:250px;color:#fff;font-size:14px;line-height:1.6;">' +
        'Questo sito utilizza cookie tecnici per garantire il corretto funzionamento e cookie di terze parti per migliorare la tua esperienza. ' +
        'Per maggiori informazioni consulta la nostra <a href="./privacy-policy.html" style="color:#8AC6D0;text-decoration:underline;">Privacy & Cookie Policy</a>.' +
        '</div>' +
        '<div style="display:flex;gap:10px;flex-shrink:0;">' +
        '<button id="cookieAcceptAll" style="background:#26A69A;color:#fff;border:none;padding:12px 25px;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.3s;">Accetta tutti</button>' +
        '<button id="cookieRejectAll" style="background:transparent;color:#fff;border:2px solid #fff;padding:12px 25px;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.3s;">Solo necessari</button>' +
        '</div></div>';

    document.body.appendChild(overlay);

    document.getElementById('cookieAcceptAll').addEventListener('click', function() {
        document.cookie = 'cookie_consent=all;path=/;max-age=31536000;SameSite=Lax';
        overlay.remove();
    });

    document.getElementById('cookieRejectAll').addEventListener('click', function() {
        document.cookie = 'cookie_consent=necessary;path=/;max-age=31536000;SameSite=Lax';
        overlay.remove();
    });
})();
