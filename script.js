// Expiry Date Check
const expiryDate = new Date("2029-03-08T23:59:59");
const now = new Date();

function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (now > expiryDate) {
    document.documentElement.innerHTML = `
        <head>
            <title>Access Expired</title>
            <style>
                body { text-align:center; font-family:Arial; margin-top:20%; }
            </style>
        </head>
        <body>
            <h2>Access Expired</h2>
            <p>This system is no longer active.</p>
            <p>Please contact administrator.</p>
        </body>
    `;
    throw new Error("Page expired");
}

// Login Function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');
    
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
    
    const matchedUser = validUsers.find(user => 
        user.username === username && user.password === password
    );
    
    if (matchedUser) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', matchedUser.username);
        sessionStorage.setItem('password', matchedUser.password);
        
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        console.log('Welcome ' + matchedUser.username);
    } else {
        loginError.textContent = 'Invalid username or password';
    }
}

// Auto-login check on load
window.onload = function() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        console.log('Welcome back ' + sessionStorage.getItem('username'));
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

// Tab Toggle Function
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

// Reset border on input
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

// Global Variables
let totalAmount = 0;
let originalTotal = 0;
let quantities = {};
let discountApplied = false;

const packages = {
    "2400": { name: "🔎 Market Mapping Per Pin Code", price: 2400, hsn: "9983" },
    "10": { name: " 💻 Unverified Data Entry Per Lead", price: 10, hsn: "9983" },
    "5": { name: "📞 India Data Verification Calling Per Minute", price: 5, hsn: "9983" },
    "15": { name: "📞 India Need Analysis Calling Per minute", price: 15, hsn: "9983" },
    "12": { name: "📞 India Call to Fix Appointments Per minute", price: 12, hsn: "9983" },
    "20": { name: "📞 India Negotiation Calls Per minute", price: 20, hsn: "9983" },
    "18": { name: "📞 India Payment Follow Up Calls Per minute", price: 18, hsn: "9983" },
    "35000": { name: "📞India Uncounted Telecalling Per Month(5 Days/Week & Max 8 hours/Day)", price: 35000, hsn: "9983" },
    "35500": { name: "🔎+💻 Market Mapping + Data Entry Uncounted Per Month", price: 35500, hsn: "9983" },
    "50": { name: "Prepare Send Quotations Online Per quotation", price: 50, hsn: "9983" },
    "2001": { name: "Prepare BOQ/Presentation etc per BOQ per day max 8 hrs", price: 2001, hsn: "9983" },
    "2002": { name: "Sheet CRM Excel etc Data Updation per sheet per day max 8 hrs", price: 2002, hsn: "9983" },
    "25": { name: "Document Format Change per page with avaliable unpaid online resources", price: 25, hsn: "9983" },
    "4": { name: "Document Upload DownLoad per page with avaliable unpaid online resources", price: 4, hsn: "9983" },
    "1500": { name: "🚗 Pune Visit less than 30 kms from Lohegaon per visit upto 2.5 hrs", price: 1500, hsn: "9983" },
    "5000": { name: "🚗 Pune Visit 31 to 100 kms from Lohegaon per day upto 3 visits", price: 5000, hsn: "9983" },
    "7000": { name: "🚗 Visit 100 to 500 kms from Pune Lohegaon per day upto 3 visits", price: 7000, hsn: "9983" },
    "2500": { name: "Google Sheet Set Up Per Sheet", price: 2500, hsn: "9983" },
    "1299": { name: "Weekly Monitoring Once A Week", price: 1299, hsn: "9983" },
    "14": { name: "India Any type Telecalling per minute", price: 14, hsn: "9983" },
    "37": { name: "India Per Dialed Call Basis Telecalling", price: 37, hsn: "9983" },
};

const maxQuantities = {
    "qty-2400": 10, "qty-10": 500, "qty-5": 500, "qty-15": 500, "qty-12": 500,
    "qty-20": 500, "qty-18": 500, "qty-35000": 1, "qty-35500": 1, "qty-50": 50,
    "qty-2001": 5, "qty-2002": 5, "qty-25": 1000, "qty-4": 1000, "qty-1500": 3,
    "qty-5000": 15, "qty-7000": 15, "qty-2500": 4, "qty-1299": 15, "qty-14": 500,
    "qty-37": 1000,
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
    const qrElement = document.getElementById("qrCode");
    if (qrElement) qrElement.style.display = "none";
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
    const qrImage = document.getElementById("upiQRImage");
    if (qrImage) qrImage.src = qrURL;
    const qrElement = document.getElementById("qrCode");
    if (qrElement) qrElement.style.display = "flex";
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
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.disabled = false;
        });
    } else {
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.disabled = true;
                el.value = "";
            }
        });
    }
    const downloadBtn = document.getElementById("downloadQuotationButton");
    if (downloadBtn) downloadBtn.disabled = false;
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
        "qty-37": 0.03,
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
    const startDateField = document.getElementById("serviceStartDate");
    if (startDateField) startDateField.value = serviceStartDateObj.toISOString().split('T')[0];
    let latestEnd = serviceStartDateObj;
    Object.values(serviceDates).forEach(d => {
        const end = new Date(d.end);
        if (end > latestEnd) latestEnd = end;
    });
    const endDateField = document.getElementById("serviceEndDate");
    if (endDateField) endDateField.value = latestEnd.toISOString().split('T')[0];
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

// Download Code Verification
const validDownloadCodes = [
    "SRM@DOWNLOAD123",
    "ADMIN@789", 
    "SALES@2026",
    "QUOTATION@2026"
];

let downloadAuthorized = false;

function showDownloadModal() {
    const modal = document.getElementById('downloadCodeModal');
    if (modal) modal.style.display = 'flex';
    const input = document.getElementById('downloadCodeInput');
    if (input) input.value = '';
    const error = document.getElementById('downloadCodeError');
    if (error) error.textContent = '';
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadCodeModal');
    if (modal) modal.style.display = 'none';
}

function verifyDownloadCode() {
    const enteredCode = document.getElementById('downloadCodeInput').value;
    
    if (validDownloadCodes.includes(enteredCode)) {
        downloadAuthorized = true;
        closeDownloadModal();
        downloadQuotation();
        setTimeout(() => { downloadAuthorized = false; }, 300000);
    } else {
        const error = document.getElementById('downloadCodeError');
        if (error) error.textContent = 'Invalid download code!';
    }
}

// Add Enter key support for download code
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('downloadCodeInput');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifyDownloadCode();
            }
        });
    }
});

// Original downloadQuotation function
window.originalDownloadQuotation = async function() {
    calculateServiceDates();
    
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

    // Header
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("SALES REVIEW MANAGEMENT", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Quotation", 105, 25, { align: "center" });
    doc.line(10, 30, 200, 30);

    // Company Details
    doc.setFontSize(10);
    doc.text("SALES REVIEW MANAGEMENT", 10, 40);
    doc.text("404 Marigold, Park Springs,", 10, 45);
    doc.text("Porwal Road, Lohegaon,", 10, 50);
    doc.text("Pune- 411047,", 10, 55);
    doc.text("Email: salesreviewmanagement@gmail.com", 10, 60);
    doc.text("Phone: +91 75178 92718", 10, 65);

    // Customer Details
    const name = document.getElementById("name").value || "Input Reqd";
    const address = document.getElementById("address").value || "Input Reqd";
    const email = document.getElementById("email").value || "Input Reqd";
    const mobile = document.getElementById("mobile").value || "Input Reqd";
    const quotationRef = document.getElementById("quotationRef").value || "Input Reqd";
    const UPIId = document.getElementById("UPIId").value || "Input Reqd";
    const paymentAmountField = document.getElementById("paymentAmount").value || "0";
    const paymentDate = document.getElementById("paymentDate").value || "Input Reqd";
    const serviceStartDate = document.getElementById("serviceStartDate").value || "Input Reqd";
    const serviceEndDate = document.getElementById("serviceEndDate").value || "Input Reqd";

    doc.text("Bill To:", 10, 70);
    doc.setFont("helvetica", "bold");
    doc.text(`Name: ${name}`, 10, 75);
    doc.setFont("helvetica", "normal");
    const addressLines = doc.splitTextToSize(`Address: ${address}`, 180);
    doc.text(addressLines, 10, 80);
    doc.text(`Email: ${email}`, 10, 90);
    doc.text(`Mobile: ${mobile}`, 10, 95);

    // Quotation Details
    doc.text(`Quotation Date: ${new Date().toLocaleDateString()}`, 140, 40);
    doc.text(`Ref: ${quotationRef}`, 140, 45);
    let yPos = 50;

    if (UPIId && UPIId !== "Input Reqd"){
        doc.text(`UPI ID: ${UPIId}`, 90, yPos);
        yPos += 5;
    }

    const bankPaymentIdVal = document.getElementById("bankPaymentId")?.value || "Input Reqd";
    if (bankPaymentIdVal && bankPaymentIdVal !== "Input Reqd") {
        doc.text(`BANK PAYMENT ID: ${bankPaymentIdVal}`, 90, yPos);
        yPos += 5;
    }

    doc.text(`Payment Amount: Rs=${paymentAmountField}`, 140, 55);
    doc.text(`Payment Date: ${paymentDate}`, 140, 60);
    doc.text(`Service Start: ${serviceStartDate}`, 140, 65);
    doc.text(`Service End: ${serviceEndDate}`, 140, 70);

    // Table Header
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.text("SR No.", 10, 105);
    doc.text("Description", 25, 105);
    doc.text("Qty", 80, 105, { align: "right" });
    doc.text("Unit Price", 100, 105, { align: "right" });
    doc.text("Total", 115, 105, { align: "right" });
    doc.text("GST Type", 138, 105, { align: "right" });
    doc.text("GST %", 150, 105, { align: "right" });
    doc.text("GST Amt", 165, 105, { align: "right" });
    doc.text("Service End", 185, 105, { align: "right" });
    doc.text("HSN", 195, 105);
    doc.line(10, 107, 200, 107);

    // Table Content
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

            const serviceEnd = serviceDates[key] ? serviceDates[key].end : "Input Reqd";
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
            }

            doc.text(srNo.toString(), 8, y);
            doc.text(descriptionLines, 20, y);
            doc.text(qty.toString(), 82, y, { align: "right" });
            doc.text(`Rs=${price.toLocaleString()}`, 95, y, { align: "right" });
            doc.text(`Rs=${lineTotal.toLocaleString()}`, 115, y, { align: "right" });
            doc.text(gstType, 139, y, { align: "right" });
            doc.text(`${gstPercent}%`, 147, y, { align: "right" });
            doc.text(`Rs=${gstAmount.toLocaleString()}`, 159, y, { align: "right" });
            doc.text(serviceEnd, 183, y, { align: "right" });
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

    // Totals Section
    if (y + 40 > pageHeight - 40) {
        doc.addPage();
        y = 20;
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

    // Amount in Words
    y += 12;
    if (y + 20 > pageHeight - 40) {
        doc.addPage();
        y = 20;
    }

    doc.setFont("helvetica", "normal");
    const amountForWords = (discountApplied && discountAmount > 0) ? finalAmount : totalWithGST;
    const amountInWords = numberToWords(Math.round(amountForWords));
    const amountLines = doc.splitTextToSize(`Amount in Words: ${amountInWords}`, 180);
    doc.text(amountLines, 10, y);
    y += amountLines.length * lineHeight + 8;

    // Terms and Conditions on new page
    doc.addPage();
    y = 20;

    addHeading("1. Introduction");
    addSubHeading("1.1 General Challenges Observed");
    addParagraph("In many organizations, sales efforts are ongoing but lack a structured and consistent approach, which leads to inefficiencies despite continuous activity. Lead data is often collected from multiple sources without proper organization, resulting in duplication, irrelevance, or incomplete information. Follow-ups are frequently inconsistent, either delayed or missed entirely, due to the absence of a defined system. Calling is done without a standardized script, leading to variations in communication quality. Additionally, there is limited visibility into the sales pipeline, making it difficult to track progress or take timely action, while field execution remains unplanned and reactive.");
    doc.line(marginLeft, y, 190, y);
    y += 8;

    addSubHeading("1.2 VMGF SRM Approach (Service-wise Structured Solution)");
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

    addSubHeading("1.3 What is Unique in VMGF SRM (Execution Advantage)");
    addParagraph("The VMGF SRM model is built around a system-first execution approach, where every activity—from data creation to follow-up—is pre-defined, approved, and trackable. Unlike typical sales efforts that rely on individual judgment, VMGF SRM ensures that each lead moves through clearly defined stages with corresponding actions, eliminating randomness and improving consistency across the entire pipeline.");
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

    addHeading("4. About the VMGF SRM Model");
    addParagraph("The VMGF SRM model is designed to improve efficiency and effectiveness of the sales process rather than relying on uncertain outcomes.");

    addSubHeading("4.1 Why VMGF SRM is Better Than Hiring an Individual Resource");
    addParagraph("Hiring a single individual for sales execution often leads to dependency on that person's skills, consistency, and availability.");

    addSubHeading("4.2 Why VMGF SRM Adds Value Even with an Existing Sales Team");
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

    // Footer
    const footerText = "404/Marigold, Porwal Road, Lohegaon, Pune 411047 (Mobile - 7517892719) (Email - salesreviewmanagement@gmail.com) (Website - https://sites.google.com/view/srmtech)";
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setFont("helvetica", "normal");
        doc.text(footerText, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
    }
    
    // Add QR Code Page
    try {
        const paymentAmountForQR = (discountApplied && discountAmount > 0) ? finalAmount : totalWithGST;
        if (paymentAmountForQR > 0) {
            doc.addPage();
            let qrY = 40;
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
            
            doc.setPage(doc.getNumberOfPages());
            doc.setFontSize(7);
            doc.text(footerText, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
        }
    } catch (error) {
        console.error("Failed to add QR code to PDF:", error);
    }

    doc.save(`SRM_Quotation_${name.replace(/[^a-z0-9]/gi, '_')}_${quotationRef.replace(/[^a-z0-9]/gi, '_')}.pdf`);
};

// Assign the original function
window.originalDownloadQuotation = window.originalDownloadQuotation || window.downloadQuotation;
window.downloadQuotation = async function() {
    if (!downloadAuthorized) {
        showDownloadModal();
        return;
    }
    await window.originalDownloadQuotation();
};

// ========== DISABLE RIGHT CLICK AND DEV TOOLS ==========
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }
});
// ========== END DISABLE RIGHT CLICK ==========