window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function getOperatingSystem() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('win') !== -1) {
        return 'Windows';
    } else if (userAgent.indexOf('mac') !== -1) {
        return 'Mac';
    } else if (userAgent.indexOf('linux') !== -1) {
        return 'Linux';
    } else if (userAgent.indexOf('android') !== -1) {
        return 'Android';
    } else if (userAgent.indexOf('iphone') !== -1) {
        return 'iOS';
    }
    return 'Unknown';
}




document.getElementById("downloadButton").addEventListener("click", function() {
    const os = getOperatingSystem();
    let downloadLink;


    if (os === 'Windows') {
        downloadLink = 'https://github.com/20obb/jailbreak/releases/download/untagged-23f09dbf7859026f070f/Honeypi-beta-windows.zip';
    } else if (os === 'Mac') {
        downloadLink = 'https://github.com/20obb/jailbreak/releases/download/rebox/for-mac-HoenyPi.txt';
    } else if (os === 'Linux') {
        downloadLink = 'https://github.com/20obb/jailbreak/releases/download/rebox/Honeypi-beta-windows.zip';
    } else {

        downloadLink = 'https://github.com/20obb/jailbreak/releases/download/rebox/for-linux-HoenyPi.txt';
    }

    window.location.href = downloadLink;
});