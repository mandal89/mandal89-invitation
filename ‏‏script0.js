// تفعيل حركة الانبثاق عند التمرير
window.addEventListener('scroll', function() {
    var invitation = document.querySelector('.invitation');
    var position = invitation.getBoundingClientRect();
    
    // إذا كانت الدعوة مرئية في نافذة العرض
    if (position.top < window.innerHeight && position.bottom >= 0) {
        invitation.classList.add('popup'); // إضافة فئة الانبثاق
    }
});
