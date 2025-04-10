document.addEventListener('DOMContentLoaded', function() {
    // Initialize login modal
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'), {
        backdrop: 'static',
        keyboard: false
    });
    loginModal.show();

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'مشرف' && password === '00') {
            loginModal.hide();
            Swal.fire({
                title: 'تم الدخول بنجاح',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        } else {
            Swal.fire({
                title: 'خطأ في الدخول',
                text: 'اسم المستخدم أو كلمة المرور غير صحيحة',
                icon: 'error'
            });
        }
    });

    // Sidebar toggle
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Add Driver Button
    document.getElementById('addDriverBtn').addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('addDriverModal'));
        modal.show();
    });

    // Add Project Button
    document.getElementById('addProjectBtn').addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('addProjectModal'));
        modal.show();
    });

    // Quick Add Project Button
    document.getElementById('addProjectQuick').addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('addProjectModal'));
        modal.show();
    });

    // Change Password Button
    document.getElementById('changePasswordBtn').addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('changePasswordModal'));
        modal.show();
    });

    // Logout Button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        Swal.fire({
            title: 'تأكيد تسجيل الخروج',
            text: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا'
        }).then((result) => {
            if (result.isConfirmed) {
                loginModal.show();
            }
        });
    });

    // Project Form Submission
    document.getElementById('projectForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const projectName = document.getElementById('projectName').value;
        
        // In a real app, you would send this to your backend
        // Here we'll just simulate it
        Swal.fire({
            title: 'تمت الإضافة بنجاح',
            text: `تم إضافة المشروع "${projectName}"`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
        
        // Add to projects dropdown
        const projectSelect = document.getElementById('project');
        const option = document.createElement('option');
        option.value = projectName;
        option.textContent = projectName;
        projectSelect.appendChild(option);
        
        // Close modal and reset form
        bootstrap.Modal.getInstance(document.getElementById('addProjectModal')).hide();
        this.reset();
    });

    // Driver Form Submission
    document.getElementById('driverForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, you would collect all form data and send to backend
        Swal.fire({
            title: 'تمت الإضافة بنجاح',
            text: 'تم إضافة السائق بنجاح',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
        
        // Close modal
        bootstrap.Modal.getInstance(document.getElementById('addDriverModal')).hide();
    });

    // Password Form Submission
    document.getElementById('passwordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (currentPassword !== '00') {
            Swal.fire({
                title: 'خطأ',
                text: 'كلمة المرور الحالية غير صحيحة',
                icon: 'error'
            });
            return;
        }
        
        if (newPassword !== confirmPassword) {
            Swal.fire({
                title: 'خطأ',
                text: 'كلمة المرور الجديدة غير متطابقة',
                icon: 'error'
            });
            return;
        }
        
        Swal.fire({
            title: 'تم التغيير بنجاح',
            text: 'تم تغيير كلمة المرور بنجاح',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
        
        // Close modal
        bootstrap.Modal.getInstance(document.getElementById('changePasswordModal')).hide();
        this.reset();
    });

    // Load regions and vehicle types
    const regions = [
        "الرياض", "مكة المكرمة", "المدينة المنورة", "القصيم", "الشرقية",
        "عسير", "تبوك", "حائل", "الحدود الشمالية", "جازان",
        "نجران", "الباحة", "الجوف", "الاحساء", "الطائف",
        "الدوادمي", "الخرج", "بيشة", "النعيرية", "الزلفي",
        "المجمعة", "القطيف", "الدمام"
    ];

    const vehicleTypes = [
        "سيدان بدجت", "بيجو", "هايس لايت", "سيدان اوتورند",
        "يورفان الجديد", "يورفان القديم", "سيدان الصافي",
        "دايرايربدجت", "كيتا مؤقت بيجو بدجت", "كيتا", "بدجت مؤقت"
    ];

    // Populate regions dropdown
    const regionSelect = document.getElementById('region');
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // Populate vehicle types dropdown
    const vehicleTypeSelect = document.getElementById('vehicleType');
    vehicleTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        vehicleTypeSelect.appendChild(option);
    });

    // Sample projects (in a real app, these would come from a backend)
    const sampleProjects = ["مشروع الرياض", "مشروع جدة", "مشروع الدمام"];
    const projectSelect = document.getElementById('project');
    sampleProjects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        projectSelect.appendChild(option);
    });
});
