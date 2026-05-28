// ==================== SPECIAL LOGINS WITH PREFILLED DATA ====================
const specialLogins = [
    {
        username: 'Eskay',
        password: 'Eskay@26526#',
        name: 'Eskay Elevators I Pvt. Ltd.',
        address: 'Eskay House at Eskay Resorts, Off Link Rd, Borivali West, Mumbai, Maharashtra 400091',
        email: 'hrm.elevators@eskaygroupindia.com'
    },
    {
        username: 'MNC Corp',
        password: 'MNC@2024Secure',
        name: 'MNC Corporation Pvt Ltd',
        address: '345 Business Park, Andheri East, Mumbai - 400069, Maharashtra',
        email: 'accounts@mnccorp.com'
    },
    {
        username: 'ABC Corp',
        password: 'ABC@2024Secure',
        name: 'ABC Corporation Pvt Ltd',
        address: '123 Business Park, Andheri East, Mumbai - 400069, Maharashtra',
        email: 'accounts@abccorp.com'
    },
    {
        username: 'XYZ Industries',
        password: 'XYZ#789Strong',
        name: 'XYZ Industries Limited',
        address: '456 Industrial Estate, Pune - 411001, Maharashtra',
        email: 'sales@xyzindustries.com'
    }
];

function getSpecialLoginData(username) {
    return specialLogins.find(login => login.username === username);
}

// ==================== QUOTATION REFERENCE GENERATOR ====================
function generateQuotationRef(loginId) {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeStr = hours + minutes + seconds;
    const reversedTime = timeStr.split('').reverse().join('');
    
    return `SRM_${loginId}_${day}_${month}_${year}_${reversedTime}`;
}

// ==================== ALL PASSWORDS DATA ====================
const allLoginPasswords = [
    { username: 'admin', password: 'Admin@123' },
    { username: 'sales', password: 'Sales@2026' },
    { username: 'manager', password: 'Manager@456' },
    { username: 'srm', password: 'Srm@123' },
    { username: 'accounts', password: 'Acc@789' },
    { username: 'director', password: 'Dir@999' },
    { username: 'Manisha.Patil', password: 'Srm@123' },
    { username: 'Rupesh Vaidya', password: 'Rav@07091978' }
];

const allDiscountCodes = [
    { code: 'SRMDISC', discount: '16.67%' },
    { code: 'SPECIAL007', discount: '33.33%' },
    { code: 'TRIAL007', discount: '50%' }
];

const allDownloadCodes = [
    'SRM@DOWNLOAD123',
    'ADMIN@789',
    'SALES@2026',
    'QUOTATION@2026'
];

const upiDetails = {
    upiId: 'rupesh78.rv@okaxis',
    payeeName: 'Sales Review Management'
};

// Function to display all passwords (for admin only)
function showAllLoginPasswords() {
    const displayDiv = document.getElementById('passwordDisplay');
    let html = '<p style="font-weight:bold; margin-bottom:10px;">🔐 LOGIN CREDENTIALS:</p>';
    allLoginPasswords.forEach(user => {
        html += `<p>📌 ${user.username} → ${user.password}</p>`;
    });
    displayDiv.innerHTML = html;
}

// Function to show ALL special login credentials
function showAllSpecialLogins() {
    const displayDiv = document.getElementById('passwordDisplay');
    if (specialLogins.length === 0) {
        displayDiv.innerHTML = '<p>No special logins configured.</p>';
        return;
    }
    
    let html = '<p style="font-weight:bold; margin-bottom:10px;">🏢 ALL SPECIAL LOGIN CREDENTIALS (Auto-filled Companies):</p>';
    
    specialLogins.forEach(login => {
        html += `<div style="background:#e8f0fe; padding:8px; border-radius:6px; margin-bottom:10px;">`;
        html += `📌 <strong>Username:</strong> ${login.username}<br>`;
        html += `📌 <strong>Password:</strong> ${login.password}<br>`;
        html += `📌 <strong>Company:</strong> ${login.name}<br>`;
        html += `📌 <strong>Address:</strong> ${login.address}<br>`;
        html += `📌 <strong>Email:</strong> ${login.email}</div>`;
    });
    
    html += '<p style="font-size:11px; color:#666; margin-top:10px;">⚠️ These are special logins with auto-filled company details. Mobile number field remains editable.</p>';
    displayDiv.innerHTML = html;
}

function showAllDiscountCodes() {
    const displayDiv = document.getElementById('passwordDisplay');
    let html = '<p style="font-weight:bold; margin-bottom:10px;">🏷️ DISCOUNT CODES:</p>';
    allDiscountCodes.forEach(dc => {
        html += `<p>📌 ${dc.code} → ${dc.discount} off</p>`;
    });
    displayDiv.innerHTML = html;
}

function showAllDownloadCodes() {
    const displayDiv = document.getElementById('passwordDisplay');
    let html = '<p style="font-weight:bold; margin-bottom:10px;">⬇️ DOWNLOAD PASSWORDS:</p>';
    allDownloadCodes.forEach(code => {
        html += `<p>📌 ${code}</p>`;
    });
    displayDiv.innerHTML = html;
}

function showUPIDetails() {
    const displayDiv = document.getElementById('passwordDisplay');
    let html = '<p style="font-weight:bold; margin-bottom:10px;">💳 UPI PAYMENT DETAILS:</p>';
    html += `<p>📌 UPI ID: ${upiDetails.upiId}</p>`;
    html += `<p>📌 Payee Name: ${upiDetails.payeeName}</p>`;
    displayDiv.innerHTML = html;
}

function showAllInfo() {
    const displayDiv = document.getElementById('passwordDisplay');
    let html = '<p style="font-weight:bold; margin-bottom:10px;">🔐 ALL PASSWORDS & INFORMATION:</p>';
    html += '<p style="font-weight:bold; margin-top:10px;">📌 LOGIN CREDENTIALS:</p>';
    allLoginPasswords.forEach(user => {
        html += `<p style="margin-left:15px;">${user.username} → ${user.password}</p>`;
    });
    html += '<p style="font-weight:bold; margin-top:10px;">📌 SPECIAL LOGINS (Auto-filled):</p>';
    specialLogins.forEach(login => {
        html += `<p style="margin-left:15px; background:#fff3cd; padding:4px;">${login.username} → ${login.password} (${login.name})</p>`;
    });
    html += '<p style="font-weight:bold; margin-top:10px;">📌 DISCOUNT CODES:</p>';
    allDiscountCodes.forEach(dc => {
        html += `<p style="margin-left:15px;">${dc.code} → ${dc.discount} off</p>`;
    });
    html += '<p style="font-weight:bold; margin-top:10px;">📌 DOWNLOAD PASSWORDS:</p>';
    allDownloadCodes.forEach(code => {
        html += `<p style="margin-left:15px;">${code}</p>`;
    });
    html += '<p style="font-weight:bold; margin-top:10px;">📌 UPI DETAILS:</p>';
    html += `<p style="margin-left:15px;">UPI ID: ${upiDetails.upiId}</p>`;
    html += `<p style="margin-left:15px;">Payee Name: ${upiDetails.payeeName}</p>`;
    displayDiv.innerHTML = html;
}

// ==================== LOGIN FUNCTION ====================
const validUsers = [
    { username: 'admin', password: 'Admin@123' },
    { username: 'sales', password: 'Sales@2026' },
    { username: 'manager', password: 'Manager@456' },
    { username: 'srm', password: 'Srm@123' },
    { username: 'accounts', password: 'Acc@789' },
    { username: 'director', password: 'Dir@999' },
    { username: 'Manisha.Patil', password: 'Srm@123' },
    { username: 'Rupesh Vaidya', password: 'Rav@07091978' }
];

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');
    
    const specialLogin = getSpecialLoginData(username);
    let matchedUser = null;
    
    if (specialLogin && specialLogin.password === password) {
        matchedUser = { username: specialLogin.username, password: specialLogin.password };
    } else {
        matchedUser = validUsers.find(user => 
            user.username === username && user.password === password
        );
    }
    
    if (matchedUser) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', matchedUser.username);
        sessionStorage.setItem('password', matchedUser.password);
        
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        const specialData = getSpecialLoginData(matchedUser.username);
        if (specialData) {
            const nameField = document.getElementById('name');
            const addressField = document.getElementById('address');
            const emailField = document.getElementById('email');
            
            nameField.value = specialData.name;
            addressField.value = specialData.address;
            emailField.value = specialData.email;
            
            nameField.readOnly = true;
            addressField.readOnly = true;
            emailField.readOnly = true;
            
            const mobileField = document.getElementById('mobile');
            mobileField.value = '';
            mobileField.readOnly = false;
            mobileField.required = true;
        } else {
            document.getElementById('name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mobile').value = '';
            
            document.getElementById('name').readOnly = false;
            document.getElementById('address').readOnly = false;
            document.getElementById('email').readOnly = false;
            document.getElementById('mobile').readOnly = false;
        }
        
        const adminPasswordPanel = document.getElementById('adminPasswordPanel');
        if (matchedUser.username === 'admin') {
            adminPasswordPanel.style.display = 'block';
        } else {
            adminPasswordPanel.style.display = 'none';
        }
        
        const quotationRef = generateQuotationRef(matchedUser.username);
        document.getElementById('quotationRef').value = quotationRef;
        document.getElementById('quotationRef').readOnly = true;
        
        console.log('Welcome ' + matchedUser.username);
    } else {
        loginError.textContent = 'Invalid username or password';
    }
}

window.onload = function() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        const username = sessionStorage.getItem('username');
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        const specialData = getSpecialLoginData(username);
        if (specialData) {
            const nameField = document.getElementById('name');
            const addressField = document.getElementById('address');
            const emailField = document.getElementById('email');
            
            nameField.value = specialData.name;
            addressField.value = specialData.address;
            emailField.value = specialData.email;
            
            nameField.readOnly = true;
            addressField.readOnly = true;
            emailField.readOnly = true;
        } else {
            document.getElementById('name').readOnly = false;
            document.getElementById('address').readOnly = false;
            document.getElementById('email').readOnly = false;
            document.getElementById('mobile').readOnly = false;
        }
        
        const adminPasswordPanel = document.getElementById('adminPasswordPanel');
        if (username === 'admin') {
            adminPasswordPanel.style.display = 'block';
        } else {
            adminPasswordPanel.style.display = 'none';
        }
        
        const quotationRef = generateQuotationRef(username);
        document.getElementById('quotationRef').value = quotationRef;
        document.getElementById('quotationRef').readOnly = true;
        
        console.log('Welcome back ' + username);
    }
};

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').textContent = '';
}

function showTab(tabId) {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const quotationRef = document.getElementById("quotationRef").value.trim();

    if (!name || !address || !email || !mobile || !quotationRef) {
        document.querySelectorAll("#name,#address,#email,#mobile,#quotationRef").forEach(el => {
            if (!el.value.trim()) {
                el.style.border = "2px solid red";
            }
        });
        return;
    }

    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

["name", "address", "email", "mobile", "quotationRef"].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("input", function() {
            if (this.value.trim()) {
                this.style.border = "";
            }
        });
    }
});

// ==================== MAIN APPLICATION LOGIC ====================
window.jsPDF = window.jspdf.jsPDF;

let totalAmount = 0;
let originalTotal = 0;
let quantities = {};
let discountApplied = false;
let srmVerified = false;

// Logo URL - Update this to your actual logo URL
const LOGO_URL = "logo.png";

const packages = {
    "2400": { name: "🔎 Market Mapping Per Pin Code", price: 2400, hsn: "9983", durationDays: 3 },
    "10": { name: " 💻 Unverified Data Entry Per Lead", price: 10, hsn: "9983", durationDays: 0.03 },
    "5": { name: "📞 India Data Verification Calling Per Minute", price: 5, hsn: "9983", durationDays: 0.03 },
    "15": { name: "📞 India Need Analysis Calling Per minute", price: 15, hsn: "9983", durationDays: 0.03 },
    "12": { name: "📞 India Call to Fix Appointments Per minute", price: 12, hsn: "9983", durationDays: 0.03 },
    "20": { name: "📞 India Negotiation Calls Per minute", price: 20, hsn: "9983", durationDays: 0.03 },
    "18": { name: "📞 India Payment Follow Up Calls Per minute", price: 18, hsn: "9983", durationDays: 0.03 },
    "35000": { name: "📞India Uncounted Telecalling Per Month(5 Days/Week & Max 8 hours/Day)", price: 35000, hsn: "9983", durationDays: 30 },
    "35500": { name: "🔎+💻 Market Mapping + Data Entry Uncounted Per Month", price: 35500, hsn: "9983", durationDays: 30 },
    "50": { name: "Prepare Send Quotations Online Per quotation", price: 50, hsn: "9983", durationDays: 0.35 },
    "2001": { name: "Prepare BOQ/Presentation etc per BOQ per day max 8 hrs", price: 2001, hsn: "9983", durationDays: 1 },
    "2002": { name: "Sheet CRM Excel etc Data Updation per sheet per day max 8 hrs", price: 2002, hsn: "9983", durationDays: 4 },
    "25": { name: "Document Format Change per page with avaliable unpaid online resources", price: 25, hsn: "9983", durationDays: 4 },
    "4": { name: "Document Upload DownLoad per page with avaliable unpaid online resources", price: 4, hsn: "9983", durationDays: 4 },
    "1500": { name: "🚗 Pune Visit less than 30 kms from Lohegaon per visit upto 2.5 hrs", price: 1500, hsn: "9983", durationDays: 1 },
    "5000": { name: "🚗 Pune Visit 31 to 100 kms from Lohegaon per day upto 3 visits", price: 5000, hsn: "9983", durationDays: 1 },
    "7000": { name: "🚗 Visit 100 to 500 kms from Pune Lohegaon per day upto 3 visits", price: 7000, hsn: "9983", durationDays: 1 },
    "2500": { name: "📊 Google Sheet Set Up Online", price: 2500, hsn: "9983", durationDays: 15 },
    "1299": { name: "📊 Weekly Monitoring Online", price: 1299, hsn: "9983", durationDays: 7 },
    "7495": { name: "📊 Monthly Monitoring Online", price: 7495, hsn: "9983", durationDays: 30 },
    "4495": { name: "📊 Quarterly Monitoring Online", price: 4495, hsn: "9983", durationDays: 90 },
    "50000": { name: "📊 Daily Monitoring Online", price: 50000, hsn: "9983", durationDays: 30 },
    "9295": { name: "📍 Weekly Monitoring On Site", price: 9295, hsn: "9983", durationDays: 7 },
    "48475": { name: "📍 Monthly Monitoring On Site", price: 48475, hsn: "9983", durationDays: 30 },
    "24275": { name: "📍 Quarterly Monitoring On Site", price: 24275, hsn: "9983", durationDays: 90 },
    "224999": { name: "📍 Daily Monitoring On Site", price: 224999, hsn: "9983", durationDays: 20 },
    "14": { name: "India Any type Telecalling per minute", price: 14, hsn: "9983", durationDays: 0.03 },
    "37": { name: "India Per Dialed Call Basis Telecalling", price: 37, hsn: "9983", durationDays: 0.03 },
};

const maxQuantities = {
    "qty-2400": 10, "qty-10": 500, "qty-5": 500, "qty-15": 500, "qty-12": 500,
    "qty-20": 500, "qty-18": 500, "qty-35000": 1, "qty-35500": 1, "qty-50": 50,
    "qty-2001": 5, "qty-2002": 5, "qty-25": 1000, "qty-4": 1000, "qty-1500": 3,
    "qty-5000": 15, "qty-7000": 15, "qty-2500": 4, "qty-1299": 15, "qty-7495": 12,
    "qty-4495": 4, "qty-50000": 12, "qty-9295": 5, "qty-48475": 12, "qty-24275": 6,
    "qty-224999": 3, "qty-14": 500, "qty-37": 1000,
};

function updateQuantity(id, change) {
    if (new Date() > new Date("2029-03-08T23:59:59")) return;

    let quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText) || 0;
    let maxQty = maxQuantities[id] || Infinity;

    currentQuantity += change;
    if (currentQuantity > maxQty) currentQuantity = maxQty;
    if (currentQuantity < 0) currentQuantity = 0;

    quantityElement.innerText = currentQuantity;
    quantities[id] = currentQuantity;

    originalTotal = 0;
    const allQtys = document.querySelectorAll('[id^="qty-"]');
    allQtys.forEach(span => {
        let price = span.id.split('-')[1];
        let q = parseInt(span.innerText) || 0;
        originalTotal += (price * q);
    });

    if (discountApplied) {
        applyDiscount();
    } else {
        const gstAmount = Math.round((originalTotal * 18) / 100);
        totalAmount = originalTotal + gstAmount;
        updateTotal();
    }
    updateServiceDisplay();
}

function updateTotal() {
    const totalEl = document.getElementById("total");
    if (discountApplied) {
        totalEl.innerHTML =
            `<s>Original: Rs=${originalTotal.toLocaleString()}</s><br>` +
            `Discount: -Rs=${Math.round(originalTotal * (window.discountPercent || 0) / 100).toLocaleString()}<br>` +
            `Subtotal: Rs=${(window.discountedPreGST || originalTotal).toLocaleString()}<br>` +
            `GST (18%): Rs=${(window.discountedGST || 0).toLocaleString()}<br>` +
            `<strong>Total Payable: Rs=${totalAmount.toLocaleString()}</strong>`;
    } else {
        const gstAmount = Math.round((originalTotal * 18) / 100);
        const totalWithGST = originalTotal + gstAmount;
        totalEl.innerHTML =
            `Subtotal: Rs=${originalTotal.toLocaleString()}<br>` +
            `GST (18%): Rs=${gstAmount.toLocaleString()}<br>` +
            `<strong>Total Payable: Rs=${totalWithGST.toLocaleString()}</strong>`;
        totalAmount = totalWithGST;
    }
    hideQRCode();
}

function hideQRCode() {
    document.getElementById("qrCode").style.display = "none";
}

function showQRCode() {
    if (totalAmount <= 0) {
        alert("Please add items first.");
        return;
    }
    const upiId = "rupesh78.rv@okaxis";
    const name = "Sales Review Management";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${totalAmount}&cu=INR`;
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}`;
    document.getElementById("upiQRImage").src = qrURL;
    document.getElementById("qrCode").style.display = "flex";
}

function payViaUPI() {
    if (totalAmount <= 0) {
        alert("Please add items first.");
        return;
    }
    const upiId = "rupesh78.rv@okaxis";
    const name = "Sales Review Management";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${totalAmount}&cu=INR`;
    if (isMobile()) {
        window.location.href = upiLink;
    } else {
        showQRCode();
    }
}

function applyDiscount() {
    let discountCode = document.getElementById("discount").value.trim().toUpperCase();
    let discountAmount = 0;
    let discountPercent = 0;
    
    originalTotal = 0;
    const allQtys = document.querySelectorAll('[id^="qty-"]');
    allQtys.forEach(span => {
        let price = span.id.split('-')[1];
        let q = parseInt(span.innerText) || 0;
        originalTotal += (price * q);
    });

    switch (discountCode) {
        case "SRMDISC":
            discountPercent = 16.67;
            discountAmount = originalTotal / 6;
            discountApplied = true;
            break;
        case "SPECIAL007":
            discountPercent = 33.33;
            discountAmount = originalTotal / 3;
            discountApplied = true;
            break;
        case "TRIAL007":
            discountPercent = 50;
            discountAmount = originalTotal / 2;
            discountApplied = true;
            break;    
        default:
            alert("Invalid discount code!");
            discountApplied = false;
            totalAmount = originalTotal;
            updateTotal();
            return;
    }

    window.discountPercent = discountPercent;
    window.discountFactorCalculated = true;
    
    const discountedPreGST = originalTotal - discountAmount;
    const discountedGST = Math.round((discountedPreGST * 18) / 100);
    const finalAmountWithGST = discountedPreGST + discountedGST;
    totalAmount = Math.round(finalAmountWithGST / 10) * 10;
    
    window.discountedPreGST = Math.round(discountedPreGST);
    window.discountedGST = discountedGST;
    
    updateTotal();
}

function checkSRMCode() {
    const codeInput = document.getElementById("srmCode").value.trim().toUpperCase();
    const today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();

    const daySum = String(day).split('').reduce((a,b)=>Number(a)+Number(b),0);
    const dayPart = daySum;

    const monthNames = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
    const monthLettersCount = monthNames[monthIndex].length;
    const monthCalc = monthLettersCount * day;
    const monthDigitSum = String(monthCalc).split('').reduce((a,b)=>Number(a)+Number(b),0);
    const monthLetter = String.fromCharCode(64 + monthDigitSum);

    const dynamicCode = `${dayPart}${monthLetter}${year}`;
    const fields = ["UPIId", "bankPaymentId", "paymentAmount", "paymentDate"];

    if (codeInput === dynamicCode) {
        srmVerified = true;
        fields.forEach(id => document.getElementById(id).disabled = false);
    } else {
        srmVerified = false;
        fields.forEach(id => {
            const el = document.getElementById(id);
            el.disabled = true;
            el.value = "";
        });
    }
    document.getElementById("downloadQuotationButton").disabled = false;
    updateServiceDisplay();
}

function calculateTotalServiceDays() {
    let totalDays = 0;
    Object.keys(quantities).forEach(id => {
        const qty = quantities[id] || 0;
        if (qty > 0) {
            const priceKey = id.split("-")[1];
            const pkg = packages[priceKey];
            if (pkg) {
                totalDays += Math.ceil(pkg.durationDays * qty);
            }
        }
    });
    return totalDays;
}

function getMaxServiceDays() {
    let maxDays = 0;
    Object.keys(quantities).forEach(id => {
        const qty = quantities[id] || 0;
        if (qty > 0) {
            const priceKey = id.split("-")[1];
            const pkg = packages[priceKey];
            if (pkg) {
                const days = Math.ceil(pkg.durationDays * qty);
                if (days > maxDays) maxDays = days;
            }
        }
    });
    return maxDays;
}

function getIndividualServiceDays() {
    let serviceDays = {};
    Object.keys(quantities).forEach(id => {
        const qty = quantities[id] || 0;
        if (qty > 0) {
            const priceKey = id.split("-")[1];
            const pkg = packages[priceKey];
            if (pkg) {
                serviceDays[id] = Math.ceil(pkg.durationDays * qty);
            }
        }
    });
    return serviceDays;
}

function updateServiceDisplay() {
    const paymentDate = document.getElementById("paymentDate").value;
    const displayDiv = document.getElementById("serviceInfoDisplay");
    const upiId = document.getElementById("UPIId").value;
    const paymentAmt = document.getElementById("paymentAmount").value;
    const isFilled = srmVerified && paymentDate && upiId && paymentAmt;
    
    if (isFilled) {
        const paymentDateObj = new Date(paymentDate);
        const serviceStartDateObj = new Date(paymentDateObj);
        serviceStartDateObj.setDate(paymentDateObj.getDate() + 7);
        const maxDays = getMaxServiceDays();
        const serviceEndDateObj = new Date(serviceStartDateObj);
        serviceEndDateObj.setDate(serviceStartDateObj.getDate() + maxDays);
        displayDiv.innerHTML = `<span>📅 Service:</span> ${serviceStartDateObj.toISOString().split('T')[0]} to ${serviceEndDateObj.toISOString().split('T')[0]}`;
    } else {
        const maxDays = getMaxServiceDays();
        if (maxDays > 0) {
            displayDiv.innerHTML = `<span>⏱️ Service:</span> Pay Dt +${maxDays} days`;
        } else {
            displayDiv.innerHTML = ``;
        }
    }
}

function calculateServiceDates() {
    const paymentDate = document.getElementById("paymentDate").value;
    if (!paymentDate) return;

    const paymentDateObj = new Date(paymentDate);
    const serviceStartDateObj = new Date(paymentDateObj);
    serviceStartDateObj.setDate(paymentDateObj.getDate() + 7);

    const serviceDurations = {
        "qty-2400": 3, "qty-10": 0.03, "qty-5": 0.03, "qty-15": 0.03,
        "qty-12": 0.03, "qty-20": 0.03, "qty-18": 0.03, "qty-35000": 30,
        "qty-35500": 30, "qty-50": 0.35, "qty-2001": 1, "qty-2002": 4,
        "qty-25": 4, "qty-4": 4, "qty-1500": 1, "qty-5000": 1,
        "qty-7000": 1, "qty-2500": 15, "qty-1299": 7, "qty-14": 0.03,
        "qty-37": 0.03, "qty-7495": 30, "qty-4495": 90, "qty-50000": 20,
        "qty-9295": 7, "qty-48475": 30, "qty-24275": 90, "qty-224999": 20,
    };

    let serviceDates = {};
    Object.keys(quantities).forEach(id => {
        const qty = quantities[id] || 0;
        if (qty > 0) {
            const baseDays = serviceDurations[id] || 30;
            const endDate = new Date(serviceStartDateObj);
            endDate.setTime(serviceStartDateObj.getTime() + (baseDays * qty * 24 * 60 * 60 * 1000));
            serviceDates[id] = {
                start: serviceStartDateObj.toISOString().split('T')[0],
                end: endDate.toISOString().split('T')[0]
            };
        }
    });

    window.serviceDates = serviceDates;
    document.getElementById("serviceStartDate").value = serviceStartDateObj.toISOString().split('T')[0];
    
    let latestEnd = serviceStartDateObj;
    Object.values(serviceDates).forEach(d => {
        const end = new Date(d.end);
        if (end > latestEnd) latestEnd = end;
    });
    document.getElementById("serviceEndDate").value = latestEnd.toISOString().split('T')[0];
}

function numberToWords(num) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Lakh", "Crore"];

    if (num === 0) return "Zero";

    let numStr = num.toString();
    let words = [];

    if (numStr.length > 7) {
        let crorePart = parseInt(numStr.slice(0, -7));
        if (crorePart > 0) {
            words.push(convertLessThanThousand(crorePart) + " " + thousands[3]);
        }
        numStr = numStr.slice(-7);
    }

    if (numStr.length > 5) {
        let lakhPart = parseInt(numStr.slice(0, -5));
        if (lakhPart > 0) {
            words.push(convertLessThanThousand(lakhPart) + " " + thousands[2]);
        }
        numStr = numStr.slice(-5);
    }

    if (numStr.length > 3) {
        let thousandPart = parseInt(numStr.slice(0, -3));
        if (thousandPart > 0) {
            words.push(convertLessThanThousand(thousandPart) + " " + thousands[1]);
        }
        numStr = numStr.slice(-3);
    }

    let hundredPart = parseInt(numStr);
    if (hundredPart > 0) {
        words.push(convertLessThanThousand(hundredPart));
    }

    function convertLessThanThousand(n) {
        let result = "";
        if (n >= 100) {
            result += units[Math.floor(n / 100)] + " Hundred ";
            n %= 100;
        }
        if (n >= 20) {
            result += tens[Math.floor(n / 10)] + " ";
            n %= 10;
        }
        if (n >= 10 && n < 20) {
            result += teens[n - 10] + " ";
            n = 0;
        }
        if (n > 0 && n < 10) {
            result += units[n] + " ";
        }
        return result.trim();
    }

    return words.join(" ").trim() + " Rupees Only";
}

function removeEmojis(text) {
    return text.replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, "").trim();
}

async function generateQRCodeAsImage(upiLink) {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(upiLink, { 
            width: 150,
            margin: 2,
            errorCorrectionLevel: 'H'
        }, (err, url) => {
            if (err) reject(err);
            else resolve(url);
        });
    });
}

// Global variable to store logo data for all pages
let cachedLogoData = null;

// Function to load logo (called once and reused for all pages)
async function loadLogoData() {
    if (!LOGO_URL) return null;
    if (cachedLogoData) return cachedLogoData;
    
    try {
        const response = await fetch(LOGO_URL);
        const blob = await response.blob();
        return await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                cachedLogoData = reader.result;
                resolve(cachedLogoData);
            };
            reader.readAsDataURL(blob);
        });
    } catch(e) {
        console.log("Logo load error:", e);
        return null;
    }
}

// Function to add logo to current page (top-right corner)
function addLogoToCurrentPage(doc) {
    if (cachedLogoData) {
        // Position: Top Right Corner (x=170, y=10, width=30, height=30)
        doc.addImage(cachedLogoData, 'PNG', 170, 10, 30, 30);
    }
}

// Function to add page number to current page (bottom-right corner)
function addPageNumber(doc, currentPage, totalPages) {
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(`Page ${currentPage} of ${totalPages}`, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 10, { align: "right" });
}

const validDownloadCodes = ["SRM@DOWNLOAD123", "ADMIN@789", "SALES@2026", "QUOTATION@2026"];

function showDownloadModal() {
    document.getElementById('downloadCodeModal').style.display = 'flex';
    document.getElementById('downloadCodeInput').value = '';
    document.getElementById('downloadCodeError').textContent = '';
}

function closeDownloadModal() {
    document.getElementById('downloadCodeModal').style.display = 'none';
}

function verifyAndDownload() {
    const enteredCode = document.getElementById('downloadCodeInput').value;
    if (validDownloadCodes.includes(enteredCode)) {
        closeDownloadModal();
        downloadQuotation();
    } else {
        document.getElementById('downloadCodeError').textContent = 'Invalid download code!';
    }
}

function requestDownloadCode() {
    showDownloadModal();
}

document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('downloadCodeInput');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifyAndDownload();
            }
        });
    }
});

// Service details mapping for detailed explanations
const serviceDetails = {
    "qty-2400": "• Complete list of businesses in the pin code\n• Contact person names and designations\n• Phone numbers and email addresses\n• Address with Google Maps link\n• Categorization by industry type",
    "qty-10": "• Raw data collection from available online sources\n• No verification of accuracy\n• Basic fields: Name, Contact, Address\n• Quick turnaround within 24 hours",
    "qty-35500": "• Complete Market Mapping for entire city/area\n• Unlimited data entry for the month\n• Daily data updates\n• Priority support\n• Monthly progress reports",
    "qty-5": "• Call duration tracking (per minute billing)\n• Basic information verification\n• Confirmation of contact details\n• Call recording available\n• Daily call summary report",
    "qty-15": "• Understanding prospect requirements\n• Identifying decision makers\n• Budget range assessment\n• Timeline for purchase\n• Competitor information gathering",
    "qty-12": "• Schedule meetings with decision makers\n• Confirm availability\n• Send calendar invites\n• Reminder calls before meetings\n• Appointment confirmation rate tracking",
    "qty-20": "• Price negotiations support\n• Terms discussion\n• Objection handling\n• Closing assistance\n• Post-negotiation follow-up",
    "qty-18": "• Payment reminder calls\n• Overdue payment follow-up\n• Payment confirmation verification\n• Resolution of payment issues\n• Daily payment tracking report",
    "qty-35000": "• Unlimited calling minutes per month\n• Dedicated telecaller assigned\n• 5 days/week, 8 hours/day operation\n• Custom scripts as per your need\n• Weekly performance review",
    "qty-14": "• Any type of telecalling support\n• Flexible call objectives\n• Customizable scripts\n• Per minute billing\n• Suitable for campaigns",
    "qty-37": "• Fixed cost per connected call\n• No billing for unanswered calls\n• Call duration limited to 3 minutes\n• Ideal for quick updates/reminders\n• Best for high volume campaigns",
    "qty-50": "• Professional quotation template\n• Company logo integration\n• Product/service details\n• Pricing and GST calculation\n• Email ready format",
    "qty-2001": "• Detailed BOQ preparation\n• Presentation creation\n• Up to 8 hours work per day\n• Revisions included\n• Industry standard format",
    "qty-2002": "• CRM data entry\n• Excel sheet management\n• Data cleaning and formatting\n• Daily progress tracking\n• Custom template creation",
    "qty-25": "• Document format conversion\n• PDF to Word/Excel\n• Image to text conversion\n• Template application\n• Up to 500 pages per order",
    "qty-4": "• Document upload to cloud\n• Download management\n• File organization\n• Access control setup\n• Bulk upload support",
    "qty-1500": "• On-site visit within 30 km radius\n• Up to 2.5 hours duration\n• Travel included\n• Meeting attendance\n• Site inspection support",
    "qty-5000": "• Extended travel 31-100 km\n• Full day coverage\n• Up to 3 client visits per day\n• Accommodation not included\n• Local conveyance included",
    "qty-7000": "• Outstation visits 100-500 km\n• Multi-day trips possible\n• Up to 3 visits per day\n• Basic travel allowance included\n• Daily report submission",
    "qty-2500": "• Custom Google Sheet setup\n• Formulas and automation\n• Data validation rules\n• Sharing and permission settings\n• Template ready for use",
    "qty-1299": "• Weekly sales data review\n• Performance analysis\n• Bottleneck identification\n• Recommendations report\n• 1 hour per week commitment",
    "qty-7495": "• Comprehensive monthly analysis\n• Sales trend identification\n• Team performance tracking\n• Strategic recommendations\n• Monthly review meeting",
    "qty-4495": "• Quarterly performance review\n• Year-on-year comparison\n• Strategic planning support\n• Market trend analysis\n• 3 months data consolidation",
    "qty-50000": "• Daily monitoring (20 days/month)\n• Real-time sales tracking\n• Instant alerts for deviations\n• Daily dashboard updates\n• Hourly monitoring available",
    "qty-9295": "• On-site weekly review\n• Physical meeting at your office\n• In-person team interaction\n• On-ground issue resolution\n• Printed reports provided",
    "qty-48475": "• On-site monthly review\n• Full day engagement\n• Strategic planning meeting\n• Team training session\n• Physical document signing",
    "qty-24275": "• Quarterly on-site review\n• 3 months performance summary\n• Future roadmap planning\n• Stakeholder presentation\n• Physical report submission",
    "qty-224999": "• Daily on-site monitoring\n• 20 days per month coverage\n• Full-time presence\n• Immediate issue resolution\n• Physical dashboard display"
};

async function downloadQuotation() {
    const isFilled = srmVerified && document.getElementById("paymentDate").value && 
                     document.getElementById("UPIId").value && document.getElementById("paymentAmount").value;
    
    let serviceStartDisplay = "";
    let serviceEndDisplay = "";
    let individualServiceDays = getIndividualServiceDays();
    let maxDays = getMaxServiceDays();
    
    if (isFilled) {
        calculateServiceDates();
        serviceStartDisplay = document.getElementById("serviceStartDate").value || "Input Reqd";
        serviceEndDisplay = document.getElementById("serviceEndDate").value || "Input Reqd";
    } else {
        if (maxDays > 0) {
            serviceStartDisplay = `Pay Dt +${maxDays} days`;
            serviceEndDisplay = `Pay Dt +${maxDays} days`;
        } else {
            serviceStartDisplay = "TBD";
            serviceEndDisplay = "TBD";
        }
    }
    
    try {
        const loginUsername = sessionStorage.getItem('username') || "Not provided";
        const loginPassword = sessionStorage.getItem('password') || "Not provided";
        
        const name = document.getElementById("name").value || "";
        const address = document.getElementById("address").value || "";
        const email = document.getElementById("email").value || "";
        const mobile = document.getElementById("mobile").value || "";
        const quotationRef = document.getElementById("quotationRef").value || "Not provided";
        
        const srmCode = document.getElementById("srmCode").value || "Not provided";
        const discountCode = document.getElementById("discount").value || "Not provided";
        const UPIId = document.getElementById("UPIId").value || "Not provided";
        const bankPaymentId = document.getElementById("bankPaymentId").value || "Not provided";
        const paymentAmount = document.getElementById("paymentAmount").value || "Not provided";
        const paymentDate = document.getElementById("paymentDate").value || "Not provided";
        
        const marketMapping = document.getElementById("qty-2400")?.innerText || "0";
        const unverifiedData = document.getElementById("qty-10")?.innerText || "0";
        const marketMappingUncounted = document.getElementById("qty-35500")?.innerText || "0";
        const dataVerification = document.getElementById("qty-5")?.innerText || "0";
        const needAnalysis = document.getElementById("qty-15")?.innerText || "0";
        const fixAppointments = document.getElementById("qty-12")?.innerText || "0";
        const negotiationCalls = document.getElementById("qty-20")?.innerText || "0";
        const paymentFollowUp = document.getElementById("qty-18")?.innerText || "0";
        const uncountedTelecalling = document.getElementById("qty-35000")?.innerText || "0";
        const anyTypeTelecalling = document.getElementById("qty-14")?.innerText || "0";		
        const sendQuotations = document.getElementById("qty-50")?.innerText || "0";
        const prepareBOQ = document.getElementById("qty-2001")?.innerText || "0";
        const sheetCRM = document.getElementById("qty-2002")?.innerText || "0";
        const puneVisitLess = document.getElementById("qty-1500")?.innerText || "0";
        const puneVisit31 = document.getElementById("qty-5000")?.innerText || "0";
        const visit100 = document.getElementById("qty-7000")?.innerText || "0";
        const googleSheet = document.getElementById("qty-2500")?.innerText || "0";
        const weeklyMonitoring = document.getElementById("qty-1299")?.innerText || "0";
        const monthlyMonitoringOnline = document.getElementById("qty-7495")?.innerText || "0";
        const quarterlyMonitoringOnline = document.getElementById("qty-4495")?.innerText || "0";
        const dailyMonitoringOnline = document.getElementById("qty-50000")?.innerText || "0";
        const weeklyMonitoringOnSite = document.getElementById("qty-9295")?.innerText || "0";
        const monthlyMonitoringOnSite = document.getElementById("qty-48475")?.innerText || "0";
        const quarterlyMonitoringOnSite = document.getElementById("qty-24275")?.innerText || "0";
        const dailyMonitoringOnSite = document.getElementById("qty-224999")?.innerText || "0";
        const anyDialedTelecalling = document.getElementById("qty-37")?.innerText || "0";
        const formatChange = document.getElementById("qty-25")?.innerText || "0";
        const DocUploadDownload = document.getElementById("qty-4")?.innerText || "0";
        
        const formData = new FormData();
        
        formData.append('entry.872749785', loginUsername);
        formData.append('entry.1643993223', loginPassword);
        formData.append('entry.562425599', name);
        formData.append('entry.1391090316', address);
        formData.append('entry.1057894666', email);
        formData.append('entry.758021766', mobile);
        formData.append('entry.1153401378', marketMapping);
        formData.append('entry.777987194', unverifiedData);
        formData.append('entry.1398645920', marketMappingUncounted);
        formData.append('entry.890804251', dataVerification);
        formData.append('entry.1371977545', needAnalysis);
        formData.append('entry.121718252', fixAppointments);
        formData.append('entry.951193387', negotiationCalls);
        formData.append('entry.1079966301', paymentFollowUp);
        formData.append('entry.1121688364', uncountedTelecalling);
        formData.append('entry.330093648', anyTypeTelecalling);
        formData.append('entry.1892458138', sendQuotations);
        formData.append('entry.1560194372', prepareBOQ);
        formData.append('entry.1210445780', sheetCRM);
        formData.append('entry.789585548', puneVisitLess);
        formData.append('entry.1150100318', puneVisit31);
        formData.append('entry.1236257171', visit100);
        formData.append('entry.1764846561', googleSheet);
        formData.append('entry.1540111939', weeklyMonitoring);
        formData.append('entry.1039918144', srmCode);
        formData.append('entry.1455608193', discountCode);
        formData.append('entry.1991514139', UPIId);
        formData.append('entry.1295396949', bankPaymentId);
        formData.append('entry.1151944515', paymentAmount);
        formData.append('entry.118811196', paymentDate);
        formData.append('entry.1571834767', quotationRef);
        formData.append('entry.924425991', anyDialedTelecalling);
        formData.append('entry.1282287823', formatChange);
        formData.append('entry.1451318980', DocUploadDownload);
        formData.append('entry.555123456', monthlyMonitoringOnline);
        formData.append('entry.555123457', quarterlyMonitoringOnline);
        formData.append('entry.555123458', dailyMonitoringOnline);
        formData.append('entry.555123459', weeklyMonitoringOnSite);
        formData.append('entry.555123460', monthlyMonitoringOnSite);
        formData.append('entry.555123461', quarterlyMonitoringOnSite);
        formData.append('entry.555123462', dailyMonitoringOnSite);
        
        fetch('https://docs.google.com/forms/d/e/1FAIpQLScj5lFe2z5fra4G_LFnreZ-onz_gH9KmuTcMsnVGPO_vsG4Rg/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).catch(err => console.log('Form error:', err));
        
        console.log('Form data sent successfully');
    } catch (e) {
        console.log('Submission error:', e);
    }
    
    const serviceDates = window.serviceDates || {};    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let y = 115;
    const marginLeft = 15;
    const usableWidth = doc.internal.pageSize.width - marginLeft - marginLeft;

    function addParagraph(text, spacing = 6) {
        const lines = doc.splitTextToSize(text, usableWidth);
        if (y + (lines.length * 5) > pageHeight - 20) {
            doc.addPage();
            y = 20;
        }
        doc.text(lines, marginLeft, y);
        y += (lines.length * 5) + spacing;
    }

    function addHeading(text) {
        if (y > pageHeight - 30) {
            doc.addPage();
            y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(text, marginLeft, y);
        y += 8;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
    }

    function addSubHeading(text) {
        if (y > pageHeight - 25) {
            doc.addPage();
            y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(text, marginLeft, y);
        y += 6;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
    }

    function addBullet(text, spacing = 4) {
        const bulletText = "• " + text;
        const lines = doc.splitTextToSize(bulletText, usableWidth - 5);
        if (y + (lines.length * 5) > pageHeight - 20) {
            doc.addPage();
            y = 20;
        }
        doc.text(lines, marginLeft + 3, y);
        y += (lines.length * 5) + spacing;
    }

    // Load logo data first (for all pages)
    await loadLogoData();

    let headerY = 15;
    
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("SALES REVIEW MANAGEMENT", 105, headerY, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Quotation", 105, headerY + 10, { align: "center" });
    doc.line(10, headerY + 15, 200, headerY + 15);
    
    // Add logo on first page (top-right corner)
    addLogoToCurrentPage(doc);

    let companyY = headerY + 25;
    doc.setFontSize(10);
    doc.text("SALES REVIEW MANAGEMENT", 10, companyY);
    doc.text("404 Marigold, Park Springs,", 10, companyY + 5);
    doc.text("Porwal Road, Lohegaon,", 10, companyY + 10);
    doc.text("Pune- 411047,", 10, companyY + 15);
    doc.text("Email: salesreviewmanagement@gmail.com", 10, companyY + 20);
    doc.text("Phone: +91 75178 92718", 10, companyY + 25);

    const name = document.getElementById("name").value || "Input Reqd";
    const address = document.getElementById("address").value || "Input Reqd";
    const email = document.getElementById("email").value || "Input Reqd";
    const mobile = document.getElementById("mobile").value || "Input Reqd";
    const quotationRef = document.getElementById("quotationRef").value || "Input Reqd";
    const UPIId = document.getElementById("UPIId").value || "Input Reqd";
    const paymentAmountField = document.getElementById("paymentAmount").value || "0";
    const paymentDate = document.getElementById("paymentDate").value || "Input Reqd";

    doc.text("Bill To:", 10, companyY + 35);
    doc.setFont("helvetica", "bold");
    doc.text(`Name: ${name}`, 10, companyY + 40);
    doc.setFont("helvetica", "normal");
    const addressLines = doc.splitTextToSize(`Address: ${address}`, 180);
    doc.text(addressLines, 10, companyY + 45);
    doc.text(`Email: ${email}`, 10, companyY + 55);
    doc.text(`Mobile: ${mobile}`, 10, companyY + 60);

    doc.text(`Quotation Date: ${new Date().toLocaleDateString()}`, 140, companyY + 5);
    doc.text(`Ref: ${quotationRef}`, 140, companyY + 10);
    let yPos = companyY + 15;

    if (UPIId && UPIId !== "Input Reqd"){
        doc.text(`UPI ID: ${UPIId}`, 90, yPos);
        yPos += 5;
    }

    const bankPaymentIdVal = document.getElementById("bankPaymentId")?.value || "Input Reqd";
    if (bankPaymentIdVal && bankPaymentIdVal !== "Input Reqd") {
        doc.text(`BANK PAYMENT ID: ${bankPaymentIdVal}`, 90, yPos);
        yPos += 5;
    }

    doc.text(`Paid Amount: Rs=${paymentAmountField}`, 140, companyY + 20);
    doc.text(`Paid Date: ${paymentDate}`, 140, companyY + 25);
    doc.text(`Service: ${serviceStartDisplay}`, 140, companyY + 30);
    doc.text(`Service End: ${serviceEndDisplay}`, 140, companyY + 35);

    let tableY = companyY + 70;
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.text("SR No.", 10, tableY);
    doc.text("Description", 25, tableY);
    doc.text("Qty", 80, tableY, { align: "right" });
    doc.text("Unit Price", 100, tableY, { align: "right" });
    doc.text("Total", 115, tableY, { align: "right" });
    doc.text("GST Type", 138, tableY, { align: "right" });
    doc.text("GST %", 150, tableY, { align: "right" });
    doc.text("GST Amt", 165, tableY, { align: "right" });
    doc.text("Service End", 185, tableY, { align: "right" });
    doc.text("HSN", 195, tableY);
    doc.line(10, tableY + 2, 200, tableY + 2);
    
    y = tableY + 8;

    doc.setFontSize(6);
    doc.setFont("helvetica", "normal");
    let srNo = 1;
    let subtotalBeforeGST = 0;
    let totalGSTAmount = 0;
    const lineHeight = 6;

    Object.keys(quantities).forEach(key => {
        if (quantities[key] > 0) {
            const priceKey = key.split("-")[1];
            const pkg = packages[priceKey];
            if (!pkg) return;
            const hsn = pkg.hsn || "-";
            const packageName = removeEmojis(pkg.name);
            const qty = quantities[key];
            const price = pkg.price;
            const lineTotal = qty * price;
            
            const gstElement = document.getElementById(`gst-${priceKey}`);
            const gstType = gstElement ? gstElement.value : "CGST+SGST";
            let gstPercent = 18;
            const gstAmount = Math.round((lineTotal * gstPercent) / 100);
            
            subtotalBeforeGST += lineTotal;
            totalGSTAmount += gstAmount;

            let serviceEnd = "";
            if (isFilled && serviceDates[key]) {
                serviceEnd = serviceDates[key].end;
            } else if (!isFilled && individualServiceDays[key]) {
                serviceEnd = `Pay Dt +${individualServiceDays[key]} days`;
            } else {
                serviceEnd = "TBD";
            }
            
            const descriptionLines = doc.splitTextToSize(packageName, 60);
            const rowHeight = descriptionLines.length * lineHeight;

            if (y + rowHeight > pageHeight - 40) {
                doc.addPage();
                y = 20;
                doc.setFontSize(6);
                doc.setFont("helvetica", "bold");
                doc.text("SR No.", 10, y);
                doc.text("Description", 25, y);
                doc.text("Qty", 80, y, { align: "right" });
                doc.text("Unit Price", 100, y, { align: "right" });
                doc.text("Total", 115, y, { align: "right" });
                doc.text("GST Type", 138, y, { align: "right" });
                doc.text("GST %", 150, y, { align: "right" });
                doc.text("GST Amt", 165, y, { align: "right" });
                doc.text("Service End", 185, y, { align: "right" });
                doc.text("HSN", 195, y);
                doc.line(10, y + 2, 200, y + 2);
                y += 10;
                doc.setFontSize(6);
                doc.setFont("helvetica", "normal");
                // Add logo on new page
                addLogoToCurrentPage(doc);
            }

            doc.text(srNo.toString(), 8, y);
            doc.text(descriptionLines, 20, y);
            doc.text(qty.toString(), 82, y, { align: "right" });
            doc.text(`Rs=${price.toLocaleString()}`, 95, y, { align: "right" });
            doc.text(`Rs=${lineTotal.toLocaleString()}`, 115, y, { align: "right" });
            doc.text(gstType, 139, y, { align: "right" });
            doc.text(`${gstPercent}%`, 147, y, { align: "right" });
            doc.text(`Rs=${gstAmount.toLocaleString()}`, 159, y, { align: "right" });
            
            let displayServiceEnd = serviceEnd;
            if (displayServiceEnd.length > 25) {
                displayServiceEnd = displayServiceEnd.substring(0, 22) + "...";
            }
            doc.text(displayServiceEnd, 183, y, { align: "right" });
            doc.text(hsn, 195, y);

            y += rowHeight + 4;
            srNo++;
        }
    });

    const totalWithGST = subtotalBeforeGST + totalGSTAmount;
    let discountAmount = 0;
    let finalAmount = totalWithGST;
    
    if (discountApplied) {
        const discountCode = document.getElementById("discount").value.trim().toUpperCase();
        let discountPercent = 0;
        switch (discountCode) {
            case "SRMDISC": discountPercent = 16.67; break;
            case "SPECIAL007": discountPercent = 33.33; break;
            case "TRIAL007": discountPercent = 50; break;
            default: discountPercent = 0;
        }
        discountAmount = Math.round((subtotalBeforeGST * discountPercent) / 100);
        const gstOnDiscount = Math.round((discountAmount * 18) / 100);
        finalAmount = totalWithGST - discountAmount - gstOnDiscount;
        finalAmount = Math.round(finalAmount / 10) * 10;
    }

    if (y + 40 > pageHeight - 40) {
        doc.addPage();
        y = 20;
        addLogoToCurrentPage(doc);
    }

    doc.line(10, y, 200, y);
    y += 8;
    doc.text("Total (Before GST)", 140, y, { align: "right" });
    doc.text(`Rs=${subtotalBeforeGST.toLocaleString()}`, 170, y, { align: "right" });
    
    y += 6;
    doc.text("Total GST Amount (18%)", 140, y, { align: "right" });
    doc.text(`Rs=${totalGSTAmount.toLocaleString()}`, 170, y, { align: "right" });
    
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Total with GST", 140, y, { align: "right" });
    doc.text(`Rs=${totalWithGST.toLocaleString()}`, 170, y, { align: "right" });

    if (discountApplied && discountAmount > 0) {
        y += 8;
        doc.setFont("helvetica", "normal");
        doc.text("Discount Applied", 140, y, { align: "right" });
        doc.text(`-Rs=${discountAmount.toLocaleString()}`, 170, y, { align: "right" });
        
        y += 6;
        doc.setFont("helvetica", "bold");
        doc.text("Final Amount (After Discount)", 140, y, { align: "right" });
        doc.text(`Rs=${finalAmount.toLocaleString()}`, 170, y, { align: "right" });
    }

    y += 12;
    if (y + 20 > pageHeight - 40) {
        doc.addPage();
        y = 20;
        addLogoToCurrentPage(doc);
    }

    doc.setFont("helvetica", "normal");
    const amountForWords = (discountApplied && discountAmount > 0) ? finalAmount : totalWithGST;
    const amountInWords = numberToWords(Math.round(amountForWords));
    const amountLines = doc.splitTextToSize(`Amount in Words: ${amountInWords}`, 180);
    doc.text(amountLines, 10, y);
    y += amountLines.length * lineHeight + 8;

    // Service Details & Deliverables Section
    const selectedServices = [];
    Object.keys(quantities).forEach(key => {
        const qty = quantities[key];
        if (qty > 0) {
            const priceKey = key.split("-")[1];
            const pkg = packages[priceKey];
            if (pkg) {
                const details = serviceDetails[key];
                if (details) {
                    selectedServices.push({
                        name: removeEmojis(pkg.name),
                        qty: qty,
                        details: details
                    });
                }
            }
        }
    });
    
    if (selectedServices.length > 0) {
        doc.addPage();
        y = 20;
        addLogoToCurrentPage(doc);
        
        addHeading("Service Details & Deliverables");
        addParagraph("The following services have been selected and include the deliverables mentioned below:");
        y += 8;
        
        for (let i = 0; i < selectedServices.length; i++) {
            const service = selectedServices[i];
            
            if (y > pageHeight - 60) {
                doc.addPage();
                y = 20;
                addLogoToCurrentPage(doc);
            }
            
            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.text(`${i + 1}. ${service.name} (Qty: ${service.qty})`, marginLeft, y);
            y += 6;
            
            doc.setFontSize(8);
            doc.setFont("helvetica", "normal");
            const detailLines = doc.splitTextToSize(service.details, usableWidth - 10);
            for (let j = 0; j < detailLines.length; j++) {
                doc.text(detailLines[j], marginLeft + 5, y);
                y += 4;
            }
            y += 6;
            
            doc.setDrawColor(200, 200, 200);
            doc.line(marginLeft, y, marginLeft + usableWidth, y);
            y += 6;
        }
        
        y += 4;
    }

    // Services Not Included Section
    const allServices = [
        { id: "qty-2400", name: "🔎 Market Mapping" },
        { id: "qty-10", name: "💻 Unverified Data Entry" },
        { id: "qty-35500", name: "🔎+💻 Market Mapping + Data Entry Uncounted" },
        { id: "qty-5", name: "📞 India Data Verification Calling" },
        { id: "qty-15", name: "📞 India Need Analysis Calling" },
        { id: "qty-12", name: "📞 India Call to Fix Appointments" },
        { id: "qty-20", name: "📞 India Negotiation Calls" },
        { id: "qty-18", name: "📞 India Payment Follow Up Calls" },
        { id: "qty-35000", name: "📞 India Uncounted Telecalling" },
        { id: "qty-14", name: "📞 India Any Type Telecalling" },
        { id: "qty-37", name: "📞 India Per Dialed Call Basis Telecalling" },
        { id: "qty-50", name: "Prepare Send Quotations Online" },
        { id: "qty-2001", name: "Prepare BOQ/Presentation etc" },
        { id: "qty-2002", name: "Sheet CRM Excel etc Data Updation" },
        { id: "qty-25", name: "Document Format Change" },
        { id: "qty-4", name: "Document Upload DownLoad" },
        { id: "qty-1500", name: "🚗 Pune Visit less than 30 kms" },
        { id: "qty-5000", name: "🚗 Pune Visit 31 to 100 kms" },
        { id: "qty-7000", name: "🚗 Visit 100 to 500 kms" },
        { id: "qty-2500", name: "📊 Google Sheet Set Up Online" },
        { id: "qty-1299", name: "📊 Weekly Monitoring Online" },
        { id: "qty-7495", name: "📊 Monthly Monitoring Online" },
        { id: "qty-4495", name: "📊 Quarterly Monitoring Online" },
        { id: "qty-50000", name: "📊 Daily Monitoring Online" },
        { id: "qty-9295", name: "📍 Weekly Monitoring On Site" },
        { id: "qty-48475", name: "📍 Monthly Monitoring On Site" },
        { id: "qty-24275", name: "📍 Quarterly Monitoring On Site" },
        { id: "qty-224999", name: "📍 Daily Monitoring On Site" }
    ];
    
    const notIncludedServices = [];
    allServices.forEach(service => {
        const qtyElement = document.getElementById(service.id);
        if (qtyElement && (parseInt(qtyElement.innerText) || 0) === 0) {
            notIncludedServices.push(removeEmojis(service.name));
        }
    });
    
    if (notIncludedServices.length > 0) {
        if (y + 30 > pageHeight - 40) {
            doc.addPage();
            y = 20;
            addLogoToCurrentPage(doc);
        }
        
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text("Services not included in this quotation are:", marginLeft, y);
        y += 8;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        
        let lineText = "";
        for (let i = 0; i < notIncludedServices.length; i++) {
            if (lineText.length + notIncludedServices[i].length + 2 > 80) {
                doc.text(lineText, marginLeft + 5, y);
                y += 5;
                lineText = notIncludedServices[i];
            } else if (lineText === "") {
                lineText = notIncludedServices[i];
            } else {
                lineText += ", " + notIncludedServices[i];
            }
        }
        if (lineText !== "") {
            doc.text(lineText, marginLeft + 5, y);
            y += 5;
        }
        
        y += 5;
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("- If required, will be charged extra.", marginLeft + 5, y);
        y += 12;
    }

    // Terms & Conditions Section
    doc.addPage();
    y = 20;
    addLogoToCurrentPage(doc);

    addHeading("1. Introduction");
    addSubHeading("1.1 General Challenges Observed");
    addParagraph("In many organizations, sales efforts are ongoing but lack a structured and consistent approach, which leads to inefficiencies despite continuous activity. Lead data is often collected from multiple sources without proper organization, resulting in duplication, irrelevance, or incomplete information. Follow-ups are frequently inconsistent, either delayed or missed entirely, due to the absence of a defined system. Calling is done without a standardized script, leading to variations in communication quality. Additionally, there is limited visibility into the sales pipeline, making it difficult to track progress or take timely action, while field execution remains unplanned and reactive.");
    doc.line(marginLeft, y, 190, y);
    y += 8;

    addSubHeading("1.2 SRM Approach (Service-wise Structured Solution)");
    doc.setFont("helvetica", "bold");
    doc.text("Service", marginLeft, y);
    doc.text("Approach", 80, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text("Market Mapping", marginLeft, y);
    doc.text("Targeted data creation using defined keywords", 80, y);
    y += 6;
    doc.text("Calling Support", marginLeft, y);
    doc.text("Structured calling using approved scripts", 80, y);
    y += 6;
    doc.text("Sales Pipeline", marginLeft, y);
    doc.text("Defined stages with stage-wise communication", 80, y);
    y += 6;
    doc.text("Field Execution", marginLeft, y);
    doc.text("Planned and controlled on-ground visits", 80, y);
    y += 10;
    doc.line(marginLeft, y, 190, y);
    y += 8;

    addSubHeading("1.3 What is Unique in SRM (Execution Advantage)");
    addParagraph("The SRM model is built around a system-first execution approach, where every activity—from data creation to follow-up—is pre-defined, approved, and trackable. Unlike typical sales efforts that rely on individual judgment, SRM ensures that each lead moves through clearly defined stages with corresponding actions, eliminating randomness and improving consistency across the entire pipeline.");
    addParagraph("A key differentiator is the centralized Google Sheet-based follow-up system that integrates execution directly into the workflow. Each lead entry includes action buttons such as \"Send Email\" and \"Send WhatsApp\", which trigger pre-approved, stage-wise drafts instantly. This reduces manual effort, speeds up execution, and ensures that communication remains aligned with the defined process at every step.");
    addParagraph("Additionally, all communication is dynamically personalized, automatically incorporating the unique name of each prospect within emails and WhatsApp messages. This ensures relevance and improves engagement quality while maintaining scale. The system is optimized for Google Chrome usage to ensure smooth functionality and prevent data inconsistencies, thereby maintaining operational reliability.");
    doc.line(marginLeft, y, 190, y);
    y += 8;

    addSubHeading("1.4 Expected Benefits (Service-wise)");
    doc.setFont("helvetica", "bold");
    doc.text("Market Mapping", marginLeft, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    addParagraph("• Better quality and relevant data", 2);
    addParagraph("• Organized lead database", 2);
    addParagraph("• Easy filtering and usage", 2);
    addParagraph("• Reduced time in data search", 2);
    addParagraph("• Improved targeting accuracy", 6);

    doc.setFont("helvetica", "bold");
    doc.text("Calling Support", marginLeft, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    addParagraph("• More structured conversations", 2);
    addParagraph("• Consistent communication approach", 2);
    addParagraph("• Better tracking of calls", 2);
    addParagraph("• Reduced random calling", 2);
    addParagraph("• Improved engagement with prospects", 6);

    doc.setFont("helvetica", "bold");
    doc.text("Sales Pipeline Drafting", marginLeft, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    addParagraph("• Clear follow-up structure", 2);
    addParagraph("• No missed communication", 2);
    addParagraph("• Consistent messaging", 2);
    addParagraph("• Better tracking of lead status", 2);
    addParagraph("• Improved coordination", 6);

    doc.setFont("helvetica", "bold");
    doc.text("Field Execution", marginLeft, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    addParagraph("• Direct market presence", 2);
    addParagraph("• Better client interaction", 2);
    addParagraph("• Improved visibility in market", 2);
    addParagraph("• Coverage of targeted locations", 2);
    addParagraph("• Support for physical meetings", 6);

    doc.line(marginLeft, y, 190, y);
    y += 8;

    addSubHeading("1.5 Operating Principle");
    doc.setFont("helvetica", "bold");
    doc.text("Right Data - Better Conversations - Consistent Follow-up - Strong Pipeline", marginLeft, y);
    y += 10;
    doc.line(marginLeft, y, 190, y);
    y += 10;

    addHeading("2. Common Terms (Applicable to All Services)");
    addSubHeading("2.1 Execution Readiness");
    addSubHeading("2.1.1 Define Sales Stages");
    addParagraph("Before any execution begins, all sales stages will be clearly defined in coordination with the client to ensure a structured and aligned approach.");
    addSubHeading("2.1.2 Define Stage-wise To-Do List");
    addParagraph("For each defined sales stage, a detailed and actionable To-Do list will be created to ensure clarity in execution.");
    addSubHeading("2.1.3 Approval of Sales Stages and To-Do");
    addParagraph("Once the stages and corresponding To-Do actions are defined, they will be presented to the client for formal review and approval.");
    addSubHeading("2.1.4 Create Stage-wise Email Drafts");
    addParagraph("Email drafts will be developed for each stage of the sales process based on the objective of that stage.");
    addSubHeading("2.1.5 Create Stage-wise WhatsApp Drafts");
    addParagraph("In addition to email communication, WhatsApp drafts will be created for each stage to enable quick and effective communication with prospects.");
    addSubHeading("2.1.6 Approval of All Communication Drafts");
    addParagraph("All email and WhatsApp drafts prepared for different stages will be shared with the client for review and approval before being used.");
    addSubHeading("2.1.7 Prepare Basic Calling Script");
    addParagraph("A structured calling script will be prepared to guide conversations during outbound calling activities.");
    addSubHeading("2.1.8 Approval of Calling Script");
    addParagraph("The prepared calling script will be shared with the client for review and approval before implementation.");
    addSubHeading("2.1.9 Conduct Demo Calls");
    addParagraph("Demo calls will be conducted using the approved script to validate the communication approach before full-scale execution.");
    addSubHeading("2.1.10 Approval of Demo Calls");
    addParagraph("Execution will commence only after the demo calls are reviewed and approved by the client in writing.");
    addSubHeading("2.1.11 Final Alignment Before Start");
    addParagraph("Execution will begin only after all the above steps have been completed and approved.");
    addSubHeading("2.1.12 Minimum Engagement & Termination");
    addParagraph("The engagement between the parties shall be for a minimum period of six (6) months from the effective date of the agreement.");
    addParagraph("Notwithstanding the above, either party shall have the right to terminate this agreement by providing one (1) month prior written notice to the other party.");
    addSubHeading("2.1.13 Communication & Liability");
    addParagraph("The Client agrees that email, WhatsApp messages, and other communication drafts approved by them may be used for communication with potential clients for business development purposes.");
    addSubHeading("2.1.14 Arbitration & Jurisdiction");
    addParagraph("In the event of any dispute, the same shall be resolved through arbitration in accordance with the provisions of the appropriate Act(s).");
    addBullet("The seat and venue of arbitration shall be Pune, Maharashtra.");
    addBullet("The arbitration shall be conducted by a sole arbitrator mutually appointed by both parties.");
    addBullet("The language of arbitration shall be English.");
    addParagraph("Subject to the above, courts in Pune, Maharashtra shall have exclusive jurisdiction over all matters arising out of this agreement.");

    addSubHeading("2.2 Payment Terms");
    addBullet("100% advance before starting each service");
    addBullet("Work begins only after confirmation");
    addBullet("Additional scope to be approved separately");

    addSubHeading("2.3 Infrastructure Responsibility");
    addParagraph("Desktop & WiFi : Client");
    addParagraph("Mobile & SIM : Client");
    addParagraph("Official Email ID : Client");
    addParagraph("Laptop (if required) : Client");
    addParagraph("Marketing Materials : Client");
    addParagraph("Any Other Requirements : Client");

    addSubHeading("2.4 Engagement Terms");
    addParagraph("The engagement will operate with a minimum commitment period of six months to ensure sufficient time for process stabilization and measurable execution.");

    addSubHeading("2.5 Leave Policy");
    addParagraph("The engagement includes provision for one sick leave and one casual leave within each monthly cycle.");

    addSubHeading("2.6 Non-Solicitation");
    addParagraph("The client acknowledges that all personnel deployed under this engagement represent trained and managed resources.");
    addParagraph("Accordingly, the client agrees not to directly or indirectly hire, engage, or solicit any such personnel during the tenure of this agreement and for a period of six months thereafter.");

    addSubHeading("2.7 Acceptance");
    addParagraph("This proposal shall be considered accepted upon completion of three key actions: signing of the document, written confirmation via official email, and receipt of 100% advance payment for the selected services.");

    addHeading("3. Scope of Services");
    addSubHeading("3.1 Market Mapping (Lead Generation Engine)");
    addParagraph("Market Mapping focuses on creating a structured, relevant, and usable lead database aligned with the client's target market.");

    addSubHeading("3.2 Calling Support (Execution Layer)");
    addParagraph("Calling Support converts structured data into meaningful business conversations through a controlled and process-driven approach.");

    addSubHeading("3.3 Sales Pipeline Drafting (Follow-up System)");
    addParagraph("Sales Pipeline Drafting is designed to bring structure and consistency to the follow-up process.");

    addSubHeading("3.4 Field Execution (Ground-Level Execution)");
    addParagraph("Field Execution provides on-ground support by physically representing your business in the market through planned and structured visits.");

    addHeading("4. About the SRM Model");
    addParagraph("The SRM model is designed to improve efficiency and effectiveness of the sales process rather than relying on uncertain outcomes.");

    addSubHeading("4.1 Why SRM is Better Than Hiring an Individual Resource");
    addParagraph("Hiring a single individual for sales execution often leads to dependency on that person's skills, consistency, and availability.");

    addSubHeading("4.2 Why SRM Adds Value Even with an Existing Sales Team");
    addParagraph("Even when a client already has a sales team, challenges such as inconsistent follow-ups, lack of structured tracking, and variability in communication often remain.");

    addHeading("5. Why This Model Works");
    addBullet("Structured data");
    addBullet("Controlled calling");
    addBullet("Consistent follow-ups");
    addBullet("Ground execution");

    addHeading("6. Commercial Notes");
    addSubHeading("6.1 Standard Sheet Setup");
    addParagraph("Only Standard Sheet Set up with 10 Email Drafts + 10 Whatsapp Draft = INR 3500/- per month.");
    addParagraph("Extra INR 2000 for 1 Email Draft + 1 Whatsapp Draft + Travel allowance as per clause 3.4.3.");
    addSubHeading("6.2 Non-Standard Changes");
    addParagraph("Any non-standard changes in the sheet will be charged as per actuals which will include development and testing only.");

    addHeading("7. Start Date");
    addParagraph("The execution start date will be mutually agreed upon after confirmation of selected services, receipt of approval on scope, and completion of advance payment formalities.");
    addParagraph("Proposed Start Date: 7 days from receipt of payment, Acceptance Email with attached signed copy of this quotation along with the hard copy.");

    addHeading("8. Final Scope Confirmation");
    addParagraph("The above selection shall be considered final for the purpose of execution, commercials, and resource allocation.");

    const footerText = "404/Marigold, Porwal Road, Lohegaon, Pune 411047 (Mobile - 7517892719) (Email - salesreviewmanagement@gmail.com) (Website - https://sites.google.com/view/srmtech)";
    const pageCount = doc.getNumberOfPages();
    
    // Add footer and page numbers to all pages
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Add footer text at bottom center
        doc.setFontSize(7);
        doc.setFont("helvetica", "normal");
        doc.text(footerText, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
        
        // Add page number at bottom right corner
        addPageNumber(doc, i, pageCount);
    }
    
    try {
        const paymentAmountForQR = (discountApplied && discountAmount > 0) ? finalAmount : totalWithGST;
        if (paymentAmountForQR > 0) {
            doc.addPage();
            let qrY = 40;
            addLogoToCurrentPage(doc);
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.text("Payment Information", 105, qrY, { align: "center" });
            qrY += 20;
            
            const upiLink = `upi://pay?pa=rupesh78.rv@okaxis&pn=Sales%20Review%20Management&am=${paymentAmountForQR}&cu=INR`;
            const qrImageData = await generateQRCodeAsImage(upiLink);
            
            const qrSize = 90;
            const qrX = (doc.internal.pageSize.width / 2) - (qrSize / 2);
            doc.addImage(qrImageData, 'PNG', qrX, qrY, qrSize, qrSize);
            qrY += qrSize + 15;
            
            doc.setFontSize(11);
            doc.setFont("helvetica", "bold");
            doc.text("Payment Instructions:", 105, qrY, { align: "center" });
            qrY += 10;
            
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text("1. Scan the QR code using any UPI app (Google Pay, PhonePe, Paytm, etc.)", 105, qrY, { align: "center" });
            qrY += 7;
            doc.text("2. Verify the payee name and amount before payment", 105, qrY, { align: "center" });
            qrY += 7;
            doc.text("3. Enter your UPI PIN to complete the payment", 105, qrY, { align: "center" });
            qrY += 7;
            doc.text("4. After payment, share the transaction ID with our team and the signed copy of this quotation", 105, qrY, { align: "center" });
            qrY += 15;
            
            doc.setFontSize(9);
            doc.text("For Other Payment Modes Contact us on 7517892718 or salesreviewmanagement@gmail.com", 105, qrY, { align: "center" });
            qrY += 6;
            doc.text(`Amount: Rs ${paymentAmountForQR.toLocaleString()}`, 105, qrY, { align: "center" });
            
            // Add footer and page number to QR page
            const newPageCount = doc.getNumberOfPages();
            doc.setPage(newPageCount);
            doc.setFontSize(7);
            doc.setFont("helvetica", "normal");
            doc.text(footerText, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
            addPageNumber(doc, newPageCount, newPageCount);
        }
    } catch (error) {
        console.error("Failed to add QR code to PDF:", error);
    }

    doc.save(`SRM_Quotation_${name.replace(/[^a-z0-9]/gi, '_')}_${quotationRef.replace(/[^a-z0-9]/gi, '_')}.pdf`);
}

// Disable Right Click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.key === 'u') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.key === 's') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && e.key === 'C') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && e.key === 'J') { e.preventDefault(); return false; }
});