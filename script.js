

document.addEventListener('DOMContentLoaded', function () {
    
    // 1. تفعيل قائمة الهامبرغر (ضروري جداً للموبايل)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على الروابط (للانتقال لسكشن الحجز)
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // 2. رسالة ترحيبية في الكونسول (اختياري)
    console.log('%c🦷 عيادة د. أحمد ستار جاهزة للحجوزات عبر Calendly', 'color: #2c7da0; font-size: 16px; font-weight: bold;');

});