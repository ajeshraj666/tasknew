// Banner Slider

$(document).ready(function () {
  $(".bannerText").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    speed: 800,
  });
});

// ===========what we do=====================

$(document).ready(function () {
  $(".logoSlider").slick({
    slidesToShow: 5.7,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay:true,
    // prevArrow: $(".prev"),
    // nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
// ===========Testimonial Slider=====================

$(document).ready(function () {
  $(".testimonialSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev1"),
    nextArrow: $(".next1"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

// ===========Testimonial Slider=====================

$(document).ready(function () {
  $(".blogSlider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev2"),
    nextArrow: $(".next2"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
// =========== Sub Services =====================

$(document).ready(function () {
  $(".step-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev3"),
    nextArrow: $(".next3"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
// =========== Focus slider About Page=====================

$(document).ready(function () {
  $(".focus-slider-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev4"),
    nextArrow: $(".next4"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
// =========== Team Slider About Page=====================

$(document).ready(function () {
  $(".team-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    prevArrow: $(".prev5"),
    nextArrow: $(".next5"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

// ======================Testimonial Rating==========================
$(document).ready(function () {
  $(".my-rating-readonly").starRating({
    starSize: 18,
    initialRating: 5,
    useFullStars: true,
    readOnly: true,
  });
});

// =====================Check Out Intl Tel Input================================================
function initializePhoneInput(selector) {
  const shippingFormWrapper = document.querySelector(
    selector + " .phone_number"
  );
  if (shippingFormWrapper !== null) {
    const phoneInput = window.intlTelInput(shippingFormWrapper, {
      preferredCountries: ["au"],

      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    $(selector + " .phone_number").on("blur", function () {
      contactPhone(selector, phoneInput);
    });
  }
}
function contactPhone(selector, phoneInput) {
  const phoneNumber = phoneInput.getNumber();
  $(selector + " .phone_number").val(phoneNumber);
}

initializePhoneInput(".service-enquiry");
initializePhoneInput("#enquiryFormContact");
initializePhoneInput("#careerApply");
initializePhoneInput(".step-1");
initializePhoneInput(".step-2");
initializePhoneInput(".step-3");

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// ===========================Country===============================
document.addEventListener("DOMContentLoaded", function () {
  const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "North Korea", code: "KP" },
    { name: "South Korea", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Vatican City", code: "VA" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];
  const select = document.querySelector("#s-one-f-nine");

  countries.forEach(function (country) {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    select.appendChild(option);
  });
});

// ======================================

// ================== Read more button===============================
document.addEventListener("DOMContentLoaded", function () {
  var readMoreBtn = document.getElementById("read-more-btn");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var description = document.querySelector(
        ".about-page .about-company-long-description"
      );
      description.classList.toggle("expanded");
      if (description.classList.contains("expanded")) {
        this.innerHTML =
          'Show Less <svg xmlns="http://www.w3.org/2000/svg" width="71" height="16" viewBox="0 0 71 16" fill="none"> <path d="M70.7071 8.70711C71.0976 8.31658 71.0976 7.68342 70.7071 7.29289L64.3431 0.928932C63.9526 0.538408 63.3195 0.538408 62.9289 0.928932C62.5384 1.31946 62.5384 1.95262 62.9289 2.34315L68.5858 8L62.9289 13.6569C62.5384 14.0474 62.5384 14.6805 62.9289 15.0711C63.3195 15.4616 63.9526 15.4616 64.3431 15.0711L70.7071 8.70711ZM0 9H70V7H0V9Z" fill="#D400F8"></path> </svg>';
      } else {
        this.innerHTML =
          'Read More <svg xmlns="http://www.w3.org/2000/svg" width="71" height="16" viewBox="0 0 71 16" fill="none"> <path d="M70.7071 8.70711C71.0976 8.31658 71.0976 7.68342 70.7071 7.29289L64.3431 0.928932C63.9526 0.538408 63.3195 0.538408 62.9289 0.928932C62.5384 1.31946 62.5384 1.95262 62.9289 2.34315L68.5858 8L62.9289 13.6569C62.5384 14.0474 62.5384 14.6805 62.9289 15.0711C63.3195 15.4616 63.9526 15.4616 64.3431 15.0711L70.7071 8.70711ZM0 9H70V7H0V9Z" fill="#D400F8"></path> </svg>';
      }
    });
  }
});
// ================== more locations button===============================
document.addEventListener("DOMContentLoaded", function () {
  var readMoreBtn = document.getElementById("moreLocations");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();
      var description = document.querySelector(
        ".contact-address .address-outer"
      );
      description.classList.toggle("expanded");
      if (description.classList.contains("expanded")) {
        this.innerHTML =
          'Hide Locations <i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none"> <path d="M0.00669386 18.7499C0.00647095 18.5858 0.0391681 18.4233 0.102899 18.2718C0.166629 18.1202 0.260132 17.9827 0.378012 17.867L6.85244 11.4753C7.04841 11.282 7.20386 11.0524 7.30992 10.7997C7.41598 10.547 7.47057 10.2761 7.47057 10.0026C7.47057 9.72908 7.41598 9.45823 7.30992 9.20554C7.20386 8.95284 7.04841 8.72324 6.85244 8.52986L0.38645 2.14825C0.265548 2.03299 0.169112 1.89511 0.10277 1.74267C0.0364274 1.59022 0.00150755 1.42626 4.69759e-05 1.26036C-0.0014136 1.09445 0.0306144 0.929915 0.0942628 0.776356C0.157911 0.622797 0.251905 0.483289 0.37076 0.36597C0.489614 0.248651 0.630949 0.155871 0.786518 0.0930455C0.942088 0.0302195 1.10877 -0.00139468 1.27685 4.70013e-05C1.44493 0.00148869 1.61104 0.0359573 1.76548 0.101442C1.91992 0.166927 2.0596 0.262116 2.17637 0.381456L8.64236 6.76307C9.51173 7.6228 10 8.78789 10 10.0026C10 11.2173 9.51173 12.3824 8.64236 13.2421L2.16793 19.6337C1.9909 19.8086 1.76529 19.9277 1.51966 19.976C1.27404 20.0242 1.01943 19.9995 0.78805 19.9049C0.556674 19.8102 0.358932 19.65 0.219846 19.4444C0.0807598 19.2388 0.00658035 18.9971 0.00669386 18.7499Z" fill="white"></path> </svg></i>';
      } else {
        this.innerHTML =
          'View All Locations  <i><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none"> <path d="M0.00669386 18.7499C0.00647095 18.5858 0.0391681 18.4233 0.102899 18.2718C0.166629 18.1202 0.260132 17.9827 0.378012 17.867L6.85244 11.4753C7.04841 11.282 7.20386 11.0524 7.30992 10.7997C7.41598 10.547 7.47057 10.2761 7.47057 10.0026C7.47057 9.72908 7.41598 9.45823 7.30992 9.20554C7.20386 8.95284 7.04841 8.72324 6.85244 8.52986L0.38645 2.14825C0.265548 2.03299 0.169112 1.89511 0.10277 1.74267C0.0364274 1.59022 0.00150755 1.42626 4.69759e-05 1.26036C-0.0014136 1.09445 0.0306144 0.929915 0.0942628 0.776356C0.157911 0.622797 0.251905 0.483289 0.37076 0.36597C0.489614 0.248651 0.630949 0.155871 0.786518 0.0930455C0.942088 0.0302195 1.10877 -0.00139468 1.27685 4.70013e-05C1.44493 0.00148869 1.61104 0.0359573 1.76548 0.101442C1.91992 0.166927 2.0596 0.262116 2.17637 0.381456L8.64236 6.76307C9.51173 7.6228 10 8.78789 10 10.0026C10 11.2173 9.51173 12.3824 8.64236 13.2421L2.16793 19.6337C1.9909 19.8086 1.76529 19.9277 1.51966 19.976C1.27404 20.0242 1.01943 19.9995 0.78805 19.9049C0.556674 19.8102 0.358932 19.65 0.219846 19.4444C0.0807598 19.2388 0.00658035 18.9971 0.00669386 18.7499Z" fill="white"></path> </svg></i>';
      }
    });
  }
});

// ======================validations======================
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enquiryForm")
    .addEventListener("submit", function (event) {
      let valid = true;

      // Location validation
      const location = document.getElementById("location");
      const locationError = document.getElementById("locationError");
      if (location.value === "") {
        location.classList.add("error");
        locationError.style.display = "block";
        valid = false;
      } else {
        location.classList.remove("error");
        locationError.style.display = "none";
      }

      // Name validation
      const name = document.getElementById("name");
      const nameError = document.getElementById("nameError");
      if (name.value.trim() === "") {
        name.classList.add("error");
        nameError.style.display = "block";
        valid = false;
      } else {
        name.classList.remove("error");
        nameError.style.display = "none";
      }

      // Email validation
      const email = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        email.classList.add("error");
        emailError.style.display = "block";
        valid = false;
      } else {
        email.classList.remove("error");
        emailError.style.display = "none";
      }

      // Phone validation
      const phone = document.getElementById("phone");
      const phoneError = document.getElementById("phoneError");
      if (phone.value.trim() === "") {
        phone.classList.add("error");
        phoneError.style.display = "block";
        valid = false;
      } else {
        phone.classList.remove("error");
        phoneError.style.display = "none";
      }

      // Service validation
      const service = document.getElementById("service");
      const serviceError = document.getElementById("serviceError");
      if (service.value === "") {
        service.classList.add("error");
        serviceError.style.display = "block";
        valid = false;
      } else {
        service.classList.remove("error");
        serviceError.style.display = "none";
      }

      // Message validation
      const message = document.getElementById("message");
      const messageError = document.getElementById("messageError");
      if (message.value.trim() === "") {
        message.classList.add("error");
        messageError.style.display = "block";
        valid = false;
      } else {
        message.classList.remove("error");
        messageError.style.display = "none";
      }

      if (!valid) {
        event.preventDefault();
      }
    });
});

// ==========================service form validation============================================
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("serviceEnquiryForm2")
    .addEventListener("submit", function (event) {
      let valid = true;

      // Name validation
      const name = document.getElementById("name2");
      const nameError = document.getElementById("nameError2");
      if (name.value.trim() === "") {
        name.classList.add("error");
        nameError.style.display = "block";
        valid = false;
      } else {
        name.classList.remove("error");
        nameError.style.display = "none";
      }

      // Email validation
      const email = document.getElementById("email2");
      const emailError = document.getElementById("emailError2");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        email.classList.add("error");
        emailError.style.display = "block";
        valid = false;
      } else {
        email.classList.remove("error");
        emailError.style.display = "none";
      }

      // Phone validation
      const phone = document.getElementById("phone2");
      const phoneError = document.getElementById("phoneError2");
      if (phone.value.trim() === "") {
        phone.classList.add("error");
        phoneError.style.display = "block";
        valid = false;
      } else {
        phone.classList.remove("error");
        phoneError.style.display = "none";
      }

      // Service validation
      const service = document.getElementById("service2");
      const serviceError = document.getElementById("serviceError2");
      if (service.value === "") {
        service.classList.add("error");
        serviceError.style.display = "block";
        valid = false;
      } else {
        service.classList.remove("error");
        serviceError.style.display = "none";
      }

      // Message validation
      const message = document.getElementById("message2");
      const messageError = document.getElementById("messageError2");
      if (message.value.trim() === "") {
        message.classList.add("error");
        messageError.style.display = "block";
        valid = false;
      } else {
        message.classList.remove("error");
        messageError.style.display = "none";
      }

      if (!valid) {
        event.preventDefault();
      }
    });
});

// ===============feedback
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("complaintForm")
    .addEventListener("submit", function (event) {
      let valid = true;

      // Name validation (Optional)
      const name = document.getElementById("name");
      const nameError = document.getElementById("nameError");
      if (name.value.trim() === "") {
        name.classList.remove("error");
        nameError.style.display = "block";
      } else {
        name.classList.remove("error");
        nameError.style.display = "none";
      }

      // NDIS number validation
      const number = document.getElementById("number");
      const numberError = document.getElementById("numberError");
      if (number.value.trim() === "") {
        number.classList.add("error");
        numberError.style.display = "block";
        valid = false;
      } else {
        number.classList.remove("error");
        numberError.style.display = "none";
      }

      // Message validation
      const message = document.getElementById("message");
      const messageError = document.getElementById("messageError");
      if (message.value.trim() === "") {
        message.classList.add("error");
        messageError.style.display = "block";
        valid = false;
      } else {
        message.classList.remove("error");
        messageError.style.display = "none";
      }

      // Complaint validation
      const complaint = document.getElementById("complaint");
      const complaintError = document.getElementById("complaintError");
      if (complaint.value.trim() === "") {
        complaint.classList.add("error");
        complaintError.style.display = "block";
        valid = false;
      } else {
        complaint.classList.remove("error");
        complaintError.style.display = "none";
      }

      // Work validation
      const work = document.getElementById("work");
      const workError = document.getElementById("workError");
      if (work.value.trim() === "") {
        work.classList.add("error");
        workError.style.display = "block";
        valid = false;
      } else {
        work.classList.remove("error");
        workError.style.display = "none";
      }

      // Documents validation
      const documents = document.getElementById("documents");
      const documentsError = document.getElementById("documentsError");
      if (documents.value === "") {
        documents.classList.add("error");
        documentsError.style.display = "block";
        valid = false;
      } else {
        documents.classList.remove("error");
        documentsError.style.display = "none";
      }

      // Organisation validation
      const organisation = document.getElementById("organisation");
      const organisationError = document.getElementById("organisationError");
      if (organisation.value === "") {
        organisation.classList.add("error");
        organisationError.style.display = "block";
        valid = false;
      } else {
        organisation.classList.remove("error");
        organisationError.style.display = "none";
      }

      // Support validation
      const support = document.getElementById("support");
      const supportError = document.getElementById("supportError");
      if (support.value === "") {
        support.classList.add("error");
        supportError.style.display = "block";
        valid = false;
      } else {
        support.classList.remove("error");
        supportError.style.display = "none";
      }

      if (!valid) {
        event.preventDefault();
      }
    });
});

//===================== custom file upload

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("file");
  const fileName = document.getElementById("file-name");

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      fileName.textContent = `Selected file: ${fileInput.files[0].name}`;
    } else {
      fileName.textContent = "";
    }
  });
});
