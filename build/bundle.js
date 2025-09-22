/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ========================================
   CSS3 ANIMATIONS LOCATIONS:
   ========================================
   1. Keyframe Animations: Lines 175-242, 503-510, 705-721
   2. Transition Effects: Used throughout with \$transition variable
   3. Transform Effects: Hover states and carousel animations
   4. Modal Animations: Lines 654-669
   5. Hero Section Animations: Lines 203-214
   6. Carousel Animations: Lines 355-384
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;
}
.navbar.scrolled {
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.navbar.scrolled .nav-logo span {
  font-size: 1.2rem;
}
.navbar.scrolled .nav-link {
  font-size: 0.9rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b35;
  transition: all 0.3s ease;
}
.nav-logo .logo-image {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
}
.nav-logo span {
  transition: all 0.3s ease;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}
.nav-link:hover {
  color: #ff6b35;
}
.nav-link.active {
  color: #ff6b35;
}
.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ff6b35;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.hero-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff6b35, #1e3a8a);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease 0.2s both;
}

.cta-button {
  background: linear-gradient(135deg, #ff6b35, #1e3a8a);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  animation: fadeInUp 1s ease 0.4s both;
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.2;
}
.hero-video video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
  position: relative;
}
.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #ff6b35;
}

.about-section {
  background: #f8f9fa;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-image {
  text-align: center;
}
.about-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.services-section {
  background: #ffffff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
.service-card .service-icon {
  font-size: 2.5rem;
  color: #ff6b35;
  margin-bottom: 20px;
  display: block;
  transition: all 0.3s ease;
}
.service-card .service-icon i {
  transition: all 0.3s ease;
}
.service-card:hover .service-icon i {
  transform: scale(1.2);
  color: #1e3a8a;
}
.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}
.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}
.service-card .learn-more {
  color: #ff6b35;
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0;
  transition: all 0.3s ease;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.service-card:hover .learn-more {
  opacity: 1;
}

.portfolio-section {
  background: #f8f9fa;
  padding: 0;
  margin: 0;
}

.full-carousel-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b35, #ff6b35);
  color: #ffffff;
  opacity: 0.3;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: scale(0.9);
}
.carousel-slide.active {
  opacity: 1;
  transform: scale(1);
}
.carousel-slide.prev-slide {
  opacity: 0.6;
  transform: scale(0.95);
}
.carousel-slide.next-slide {
  opacity: 0.6;
  transform: scale(0.95);
}

.slide-content {
  text-align: center;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slide-content h3 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.slide-content p {
  font-size: 1.4rem;
  margin-bottom: 30px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  max-width: 600px;
  text-align: center;
}
.slide-content img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 15px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 20;
  backdrop-filter: blur(10px);
}
.carousel-btn .btn-text {
  color: #ffffff;
}
.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-50%) scale(1.05);
}
.carousel-btn.prev {
  left: 50px;
}
.carousel-btn.next {
  right: 50px;
}

.carousel-dots {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 20;
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.6);
}
.dot.active {
  background: #ffffff;
  transform: scale(1.3);
  border-color: #ffffff;
}
.dot:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: scale(1.1);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.background-section {
  background: url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover fixed;
  position: relative;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
}

.background-text {
  font-size: 1.2rem;
  margin-top: 20px;
}

.contact-section {
  background: #ffffff;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.contact-info .contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
}
.contact-info .contact-item .contact-label {
  font-weight: bold;
  color: #ff6b35;
  margin-right: 15px;
  min-width: 80px;
}
.contact-info .booking-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, #ff6b35, #1e3a8a);
  color: #ffffff;
  border-radius: 25px;
  transition: all 0.3s ease;
  margin-top: 10px;
}
.contact-info .booking-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  color: #ffffff;
}
.contact-info .booking-link .booking-text {
  color: #ffffff;
}
.contact-info .location-link {
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}
.contact-info .location-link:hover {
  color: #ff6b35;
  text-decoration: underline;
}
.contact-info .location-link span {
  cursor: pointer;
}

.social-media {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: #ff6b35;
  color: #ffffff;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 5px;
  gap: 8px;
}
.social-link i {
  font-size: 1.2rem;
  transition: all 0.3s ease;
}
.social-link span {
  transition: all 0.3s ease;
}
.social-link:hover {
  background: #ff4602;
  transform: translateY(-3px);
  color: #ffffff;
}
.social-link:hover i {
  transform: scale(1.2);
}

.footer {
  background: #2c3e50;
  color: #ffffff;
  text-align: center;
  padding: 30px 0;
}
.footer p {
  margin: 0;
}

.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s ease;
}
.modal.show {
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #ffffff;
  padding: 40px;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  position: relative;
  animation: slideInUp 0.3s ease;
}
.modal-content .modal-icon {
  text-align: center;
  margin-bottom: 20px;
}
.modal-content .modal-icon i {
  font-size: 3rem;
  color: #ff6b35;
  animation: pulse 2s infinite;
}
.modal-content h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}
.modal-content p {
  margin-bottom: 15px;
  line-height: 1.6;
}
.modal-content ul {
  margin: 20px 0;
  padding-left: 20px;
}
.modal-content ul li {
  margin-bottom: 10px;
  line-height: 1.5;
  color: #555;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #999;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.close:hover {
  color: #333;
  background: rgba(0, 0, 0, 0.1);
}

.modal-button {
  background: linear-gradient(135deg, #ff6b35, #1e3a8a);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}
.modal-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }

  .about-content,
.contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
@media (max-width: 768px) {
  .nav-menu {
    gap: 20px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .full-carousel-container {
    height: 100vh;
  }

  .slide-content h3 {
    font-size: 2.5rem;
    top: 15%;
  }
  .slide-content p {
    font-size: 1.2rem;
    top: 25%;
    max-width: 500px;
  }

  .carousel-btn {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  .carousel-btn.prev {
    left: 30px;
  }
  .carousel-btn.next {
    right: 30px;
  }

  .social-media {
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .nav-container {
    flex-direction: column;
    gap: 20px;
  }

  .nav-menu {
    gap: 15px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .full-carousel-container {
    height: 100vh;
  }

  .slide-content h3 {
    font-size: 2rem;
    top: 10%;
  }
  .slide-content p {
    font-size: 1rem;
    top: 20%;
    max-width: 400px;
  }

  .carousel-btn {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  .carousel-btn.prev {
    left: 20px;
  }
  .carousel-btn.next {
    right: 20px;
  }

  .modal-content {
    padding: 20px;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["// SCSS Variables - FerroHub Sports Theme\r\n$primary-color: #ff6b35; // Orange - matches FerroHub branding\r\n$secondary-color: #1e3a8a; // Blue - sports theme\r\n$accent-color: #f59e0b; // Golden yellow\r\n$text-color: #333;\r\n$light-bg: #f8f9fa;\r\n$dark-bg: #2c3e50;\r\n$white: #ffffff;\r\n$black: #000000;\r\n$shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n$transition: all 0.3s ease;\r\n\r\n/* ========================================\r\n   CSS3 ANIMATIONS LOCATIONS:\r\n   ========================================\r\n   1. Keyframe Animations: Lines 175-242, 503-510, 705-721\r\n   2. Transition Effects: Used throughout with $transition variable\r\n   3. Transform Effects: Hover states and carousel animations\r\n   4. Modal Animations: Lines 654-669\r\n   5. Hero Section Animations: Lines 203-214\r\n   6. Carousel Animations: Lines 355-384\r\n   ======================================== */\r\n\r\n// SCSS Mixins\r\n@mixin flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin section-padding {\r\n  padding: 80px 0;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n\r\n@mixin button-style {\r\n  background: linear-gradient(135deg, $primary-color, $secondary-color);\r\n  color: $white;\r\n  border: none;\r\n  padding: 12px 30px;\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  transition: $transition;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n\r\n  &:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\r\n  }\r\n}\r\n\r\n@mixin card-style {\r\n  background: $white;\r\n  border-radius: 10px;\r\n  padding: 30px;\r\n  box-shadow: $shadow;\r\n  transition: $transition;\r\n\r\n  &:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\r\n  }\r\n}\r\n\r\n// Global Styles\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Arial', sans-serif;\r\n  line-height: 1.6;\r\n  color: $text-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.container {\r\n  @include container;\r\n}\r\n\r\n// Sticky Navigation\r\n.navbar {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  background: rgba(255, 255, 255, 0.95);\r\n  backdrop-filter: blur(10px);\r\n  z-index: 1000;\r\n  transition: $transition;\r\n  padding: 20px 0;\r\n\r\n  &.scrolled {\r\n    padding: 10px 0;\r\n    background: rgba(255, 255, 255, 0.98);\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n\r\n    .nav-logo span {\r\n      font-size: 1.2rem;\r\n    }\r\n\r\n    .nav-link {\r\n      font-size: 0.9rem;\r\n    }\r\n  }\r\n}\r\n\r\n.nav-container {\r\n  @include container;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: $primary-color;\r\n  transition: $transition;\r\n\r\n  .logo-image {\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-right: 10px;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  span {\r\n    transition: $transition;\r\n  }\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 30px;\r\n}\r\n\r\n.nav-item {\r\n  position: relative;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  color: $text-color;\r\n  font-weight: 500;\r\n  transition: $transition;\r\n  position: relative;\r\n\r\n  &:hover {\r\n    color: $primary-color;\r\n  }\r\n\r\n  &.active {\r\n    color: $primary-color;\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      bottom: -5px;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: $primary-color;\r\n      animation: slideIn 0.3s ease;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes slideIn {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n// Hero Section\r\n.hero-section {\r\n  min-height: 100vh;\r\n  @include flex-center;\r\n  background: linear-gradient(135deg, $primary-color, $secondary-color);\r\n  color: $white;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.hero-content {\r\n  text-align: center;\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n.hero-title {\r\n  font-size: 3.5rem;\r\n  margin-bottom: 20px;\r\n  animation: fadeInUp 1s ease;\r\n}\r\n\r\n.hero-subtitle {\r\n  font-size: 1.3rem;\r\n  margin-bottom: 30px;\r\n  animation: fadeInUp 1s ease 0.2s both;\r\n}\r\n\r\n.cta-button {\r\n  @include button-style;\r\n  animation: fadeInUp 1s ease 0.4s both;\r\n}\r\n\r\n.hero-video {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  opacity: 0.2;\r\n\r\n  video {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n// Section Styles\r\nsection {\r\n  @include section-padding;\r\n}\r\n\r\n.section-title {\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n  margin-bottom: 50px;\r\n  color: $text-color;\r\n  position: relative;\r\n\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -10px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 60px;\r\n    height: 3px;\r\n    background: $primary-color;\r\n  }\r\n}\r\n\r\n// About Section\r\n.about-section {\r\n  background: $light-bg;\r\n}\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 50px;\r\n  align-items: center;\r\n}\r\n\r\n.about-text {\r\n  p {\r\n    margin-bottom: 20px;\r\n    font-size: 1.1rem;\r\n    line-height: 1.8;\r\n  }\r\n}\r\n\r\n.about-image {\r\n  text-align: center;\r\n\r\n  img {\r\n    max-width: 100%;\r\n    border-radius: 10px;\r\n    box-shadow: $shadow;\r\n  }\r\n}\r\n\r\n// Services Section (Multi-column Layout)\r\n.services-section {\r\n  background: $white;\r\n}\r\n\r\n.services-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 30px;\r\n}\r\n\r\n.service-card {\r\n  @include card-style;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: $transition;\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n  &:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\r\n  }\r\n\r\n  .service-icon {\r\n    font-size: 2.5rem;\r\n    color: $primary-color;\r\n    margin-bottom: 20px;\r\n    display: block;\r\n    transition: $transition;\r\n\r\n    i {\r\n      transition: $transition;\r\n    }\r\n  }\r\n\r\n  &:hover .service-icon i {\r\n    transform: scale(1.2);\r\n    color: $secondary-color;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 15px;\r\n    color: $text-color;\r\n  }\r\n\r\n  p {\r\n    color: #666;\r\n    line-height: 1.6;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .learn-more {\r\n    color: $primary-color;\r\n    font-weight: 600;\r\n    font-size: 0.9rem;\r\n    opacity: 0;\r\n    transition: $transition;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &:hover .learn-more {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n// Portfolio Carousel Section\r\n.portfolio-section {\r\n  background: $light-bg;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.full-carousel-container {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin-left: calc(-50vw + 50%);\r\n  margin-right: calc(-50vw + 50%);\r\n}\r\n\r\n.carousel-track {\r\n  display: flex;\r\n  height: 100%;\r\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  will-change: transform;\r\n}\r\n\r\n.carousel-slide {\r\n  min-width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: linear-gradient(135deg, $primary-color, $secondary-color);\r\n  color: $white;\r\n  opacity: 0.3;\r\n  transition: opacity 0.6s ease, transform 0.6s ease;\r\n  transform: scale(0.9);\r\n\r\n  &.active {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n\r\n  &.prev-slide {\r\n    opacity: 0.6;\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  &.next-slide {\r\n    opacity: 0.6;\r\n    transform: scale(0.95);\r\n  }\r\n}\r\n\r\n.slide-content {\r\n  text-align: center;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  h3 {\r\n    font-size: 3rem;\r\n    margin-bottom: 20px;\r\n    color: $white;\r\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 3;\r\n  }\r\n\r\n  p {\r\n    font-size: 1.4rem;\r\n    margin-bottom: 30px;\r\n    line-height: 1.6;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 3;\r\n    max-width: 600px;\r\n    text-align: center;\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n  }\r\n}\r\n\r\n.carousel-btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: rgba(255, 255, 255, 0.2);\r\n  color: $white;\r\n  border: 2px solid rgba(255, 255, 255, 0.3);\r\n  padding: 15px 25px;\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  transition: $transition;\r\n  z-index: 20;\r\n  backdrop-filter: blur(10px);\r\n\r\n  .btn-text {\r\n    color: $white;\r\n  }\r\n\r\n  &:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n    border-color: rgba(255, 255, 255, 0.6);\r\n    transform: translateY(-50%) scale(1.05);\r\n  }\r\n\r\n  &.prev {\r\n    left: 50px;\r\n  }\r\n\r\n  &.next {\r\n    right: 50px;\r\n  }\r\n}\r\n\r\n.carousel-dots {\r\n  position: absolute;\r\n  bottom: 50px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  display: flex;\r\n  gap: 20px;\r\n  z-index: 20;\r\n}\r\n\r\n.dot {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background: rgba(255, 255, 255, 0.4);\r\n  cursor: pointer;\r\n  transition: $transition;\r\n  border: 2px solid rgba(255, 255, 255, 0.6);\r\n\r\n  &.active {\r\n    background: $white;\r\n    transform: scale(1.3);\r\n    border-color: $white;\r\n  }\r\n\r\n  &:hover {\r\n    background: rgba(255, 255, 255, 0.7);\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(30px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n// Background Image Section\r\n.background-section {\r\n  background: url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover fixed;\r\n  position: relative;\r\n  min-height: 400px;\r\n  @include flex-center;\r\n}\r\n\r\n.background-overlay {\r\n  background: rgba(0, 0, 0, 0.6);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  @include flex-center;\r\n  color: $white;\r\n  text-align: center;\r\n}\r\n\r\n.background-text {\r\n  font-size: 1.2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n// Contact Section\r\n.contact-section {\r\n  background: $white;\r\n}\r\n\r\n.contact-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 50px;\r\n  align-items: center;\r\n}\r\n\r\n.contact-info {\r\n  .contact-item {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    font-size: 1.1rem;\r\n\r\n    .contact-label {\r\n      font-weight: bold;\r\n      color: $primary-color;\r\n      margin-right: 15px;\r\n      min-width: 80px;\r\n    }\r\n  }\r\n\r\n  .booking-link {\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: $text-color;\r\n    font-weight: 600;\r\n    padding: 15px 25px;\r\n    background: linear-gradient(135deg, $primary-color, $secondary-color);\r\n    color: $white;\r\n    border-radius: 25px;\r\n    transition: $transition;\r\n    margin-top: 10px;\r\n\r\n    &:hover {\r\n      transform: translateY(-2px);\r\n      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\r\n      color: $white;\r\n    }\r\n\r\n    .booking-text {\r\n      color: $white;\r\n    }\r\n  }\r\n\r\n  .location-link {\r\n    text-decoration: none;\r\n    color: $text-color;\r\n    transition: $transition;\r\n\r\n    &:hover {\r\n      color: $primary-color;\r\n      text-decoration: underline;\r\n    }\r\n\r\n    span {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.social-media {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 15px;\r\n  justify-items: center;\r\n}\r\n\r\n.social-link {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 12px 20px;\r\n  background: $primary-color;\r\n  color: $white;\r\n  border-radius: 25px;\r\n  text-decoration: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  transition: $transition;\r\n  margin: 5px;\r\n  gap: 8px;\r\n\r\n  i {\r\n    font-size: 1.2rem;\r\n    transition: $transition;\r\n  }\r\n\r\n  span {\r\n    transition: $transition;\r\n  }\r\n\r\n  &:hover {\r\n    background: darken($primary-color, 10%);\r\n    transform: translateY(-3px);\r\n    color: $white;\r\n\r\n    i {\r\n      transform: scale(1.2);\r\n    }\r\n  }\r\n}\r\n\r\n// Footer\r\n.footer {\r\n  background: $dark-bg;\r\n  color: $white;\r\n  text-align: center;\r\n  padding: 30px 0;\r\n\r\n  p {\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n// Modal\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 2000;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  animation: fadeIn 0.3s ease;\r\n\r\n  &.show {\r\n    display: flex;\r\n    @include flex-center;\r\n  }\r\n}\r\n\r\n.modal-content {\r\n  background: $white;\r\n  padding: 40px;\r\n  border-radius: 15px;\r\n  max-width: 600px;\r\n  width: 90%;\r\n  position: relative;\r\n  animation: slideInUp 0.3s ease;\r\n\r\n  .modal-icon {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n\r\n    i {\r\n      font-size: 3rem;\r\n      color: $primary-color;\r\n      animation: pulse 2s infinite;\r\n    }\r\n  }\r\n\r\n  h2 {\r\n    margin-bottom: 20px;\r\n    color: $text-color;\r\n    text-align: center;\r\n  }\r\n\r\n  p {\r\n    margin-bottom: 15px;\r\n    line-height: 1.6;\r\n  }\r\n\r\n  ul {\r\n    margin: 20px 0;\r\n    padding-left: 20px;\r\n\r\n    li {\r\n      margin-bottom: 10px;\r\n      line-height: 1.5;\r\n      color: #555;\r\n    }\r\n  }\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 20px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  color: #999;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  transition: $transition;\r\n\r\n  &:hover {\r\n    color: $text-color;\r\n    background: rgba(0, 0, 0, 0.1);\r\n  }\r\n}\r\n\r\n.modal-button {\r\n  @include button-style;\r\n  margin-top: 20px;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(1.1);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n// Responsive Design\r\n@media (max-width: 1024px) {\r\n  .hero-title {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .about-content,\r\n  .contact-content {\r\n    grid-template-columns: 1fr;\r\n    gap: 30px;\r\n  }\r\n\r\n  .services-grid {\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .nav-menu {\r\n    gap: 20px;\r\n  }\r\n\r\n  .hero-title {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .hero-subtitle {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .section-title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .services-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .full-carousel-container {\r\n    height: 100vh;\r\n  }\r\n\r\n  .slide-content {\r\n    h3 {\r\n      font-size: 2.5rem;\r\n      top: 15%;\r\n    }\r\n\r\n    p {\r\n      font-size: 1.2rem;\r\n      top: 25%;\r\n      max-width: 500px;\r\n    }\r\n  }\r\n\r\n  .carousel-btn {\r\n    width: 60px;\r\n    height: 60px;\r\n    font-size: 1.5rem;\r\n\r\n    &.prev {\r\n      left: 30px;\r\n    }\r\n\r\n    &.next {\r\n      right: 30px;\r\n    }\r\n  }\r\n\r\n  .social-media {\r\n    flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .nav-container {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .nav-menu {\r\n    gap: 15px;\r\n  }\r\n\r\n  .hero-title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .section-title {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  .full-carousel-container {\r\n    height: 100vh;\r\n  }\r\n\r\n  .slide-content {\r\n    h3 {\r\n      font-size: 2rem;\r\n      top: 10%;\r\n    }\r\n\r\n    p {\r\n      font-size: 1rem;\r\n      top: 20%;\r\n      max-width: 400px;\r\n    }\r\n  }\r\n\r\n  .carousel-btn {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 1.2rem;\r\n\r\n    &.prev {\r\n      left: 20px;\r\n    }\r\n\r\n    &.next {\r\n      right: 20px;\r\n    }\r\n  }\r\n\r\n  .modal-content {\r\n    padding: 20px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/Pickleball.png":
/*!*******************************!*\
  !*** ./assets/Pickleball.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca48d5d30e084bb2e25d.png";

/***/ }),

/***/ "./assets/ferroHub.jpg":
/*!*****************************!*\
  !*** ./assets/ferroHub.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47fad7248035ff453d80.jpg";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ferroHub.jpg */ "./assets/ferroHub.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Pickleball.png */ "./assets/Pickleball.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"utf-8\" />\r\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <title>FerroHub Sports - Premier Pickleball & Sports Facility</title>\r\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\">\r\n    </head>\r\n    <body>\r\n        <!-- Sticky Navigation -->\r\n        <nav class=\"navbar\" id=\"navbar\">\r\n            <div class=\"nav-container\">\r\n                <div class=\"nav-logo\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"FerroHub Sports Logo\" class=\"logo-image\">\r\n                    <span>FerroHub Sports</span>\r\n                </div>\r\n                <ul class=\"nav-menu\" id=\"nav-menu\">\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"#home\" class=\"nav-link\">Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"#about\" class=\"nav-link\">About</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"#facilities\" class=\"nav-link\">Facilities</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"#gallery\" class=\"nav-link\">Gallery</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"#contact\" class=\"nav-link\">Contact</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n\r\n        <!-- Hero Section -->\r\n        <section id=\"home\" class=\"hero-section\">\r\n            <div class=\"hero-content\">\r\n                <h1 class=\"hero-title\">Welcome to FerroHub Sports</h1>\r\n                <p class=\"hero-subtitle\">Your Game. Your Space. Bangalore's Premier Sporting Facility</p>\r\n                <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"cta-button\">Book Now</a>\r\n            </div>\r\n            <div class=\"hero-video\">\r\n                <video autoplay muted loop>\r\n                    <source src=\"https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4\" type=\"video/mp4\">\r\n                    Your browser does not support the video tag.\r\n                </video>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- About Section -->\r\n        <section id=\"about\" class=\"about-section\">\r\n            <div class=\"container\">\r\n                <h2 class=\"section-title\">About FerroHub Sports</h2>\r\n                <div class=\"about-content\">\r\n                    <div class=\"about-text\">\r\n                        <p>FerroHub Sports is Bangalore's premier sporting facility, offering world-class pickleball courts and football & cricket turf. Located in the heart of Vasanth Nagar, we provide a modern, well-equipped space for sports enthusiasts of all levels.</p>\r\n                        <p>With a 4.8+ Google rating and over 897 followers on Instagram, we've built a thriving community of athletes and sports lovers. Our facility features state-of-the-art equipment and professional coaching services.</p>\r\n                    </div>\r\n                    <div class=\"about-image\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"FerroHub Sports Pickleball Facility\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Facilities Section with Multi-column Layout -->\r\n        <section id=\"facilities\" class=\"services-section\">\r\n            <div class=\"container\">\r\n                <h2 class=\"section-title\">Our Facilities</h2>\r\n                <div class=\"services-grid\">\r\n                    <div class=\"service-card\" data-modal=\"pickleball-modal\">\r\n                        <div class=\"service-icon\">\r\n                            <i class=\"fas fa-table-tennis\"></i>\r\n                        </div>\r\n                        <h3>Pickleball Courts</h3>\r\n                        <p>Professional-grade pickleball courts with premium equipment and proper lighting for day and night play.</p>\r\n                        <span class=\"learn-more\">Click to learn more →</span>\r\n                    </div>\r\n                    <div class=\"service-card\" data-modal=\"football-modal\">\r\n                        <div class=\"service-icon\">\r\n                            <i class=\"fas fa-futbol\"></i>\r\n                        </div>\r\n                        <h3>Football Turf</h3>\r\n                        <p>High-quality artificial turf perfect for football matches, training sessions, and recreational play.</p>\r\n                        <span class=\"learn-more\">Click to learn more →</span>\r\n                    </div>\r\n                    <div class=\"service-card\" data-modal=\"cricket-modal\">\r\n                        <div class=\"service-icon\">\r\n                            <i class=\"fas fa-baseball-ball\"></i>\r\n                        </div>\r\n                        <h3>Cricket Turf</h3>\r\n                        <p>Well-maintained cricket turf with proper pitch conditions for practice and competitive matches.</p>\r\n                        <span class=\"learn-more\">Click to learn more →</span>\r\n                    </div>\r\n                    <div class=\"service-card\" data-modal=\"running-modal\">\r\n                        <div class=\"service-icon\">\r\n                            <i class=\"fas fa-running\"></i>\r\n                        </div>\r\n                        <h3>Running Track</h3>\r\n                        <p>Dedicated running space and organized running clubs for fitness enthusiasts and marathon training.</p>\r\n                        <span class=\"learn-more\">Click to learn more →</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Gallery Carousel Section -->\r\n        <section id=\"gallery\" class=\"portfolio-section\">\r\n            <div class=\"full-carousel-container\">\r\n                <div class=\"carousel-track\" id=\"carousel-track\">\r\n                    <div class=\"carousel-slide\">\r\n                        <div class=\"slide-content\">\r\n                            <h3>Pickleball Action</h3>\r\n                            <p>Experience the thrill of pickleball on our professional courts with premium equipment and excellent lighting.</p>\r\n                            <img src=\"https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80\" alt=\"Pickleball Court\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-slide\">\r\n                        <div class=\"slide-content\">\r\n                            <h3>Football Turf</h3>\r\n                            <p>High-quality artificial turf perfect for football matches, training sessions, and recreational play.</p>\r\n                            <img src=\"https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80\" alt=\"Football Turf\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-slide\">\r\n                        <div class=\"slide-content\">\r\n                            <h3>Community Events</h3>\r\n                            <p>Join our vibrant community with regular tournaments, social events, and fitness programs.</p>\r\n                            <img src=\"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80\" alt=\"Community Events\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-slide\">\r\n                        <div class=\"slide-content\">\r\n                            <h3>Cricket Practice</h3>\r\n                            <p>Professional cricket turf with proper pitch conditions for practice and competitive matches.</p>\r\n                            <img src=\"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80\" alt=\"Cricket Practice\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-slide\">\r\n                        <div class=\"slide-content\">\r\n                            <h3>Running Club</h3>\r\n                            <p>Join our 56 Run Club for fitness enthusiasts and marathon training sessions.</p>\r\n                            <img src=\"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80\" alt=\"Running Club\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button class=\"carousel-btn prev\" data-direction=\"-1\">\r\n                    <span class=\"btn-text\">Previous</span>\r\n                </button>\r\n                <button class=\"carousel-btn next\" data-direction=\"1\">\r\n                    <span class=\"btn-text\">Next</span>\r\n                </button>\r\n                <div class=\"carousel-dots\">\r\n                    <span class=\"dot active\" data-slide=\"0\"></span>\r\n                    <span class=\"dot\" data-slide=\"1\"></span>\r\n                    <span class=\"dot\" data-slide=\"2\"></span>\r\n                    <span class=\"dot\" data-slide=\"3\"></span>\r\n                    <span class=\"dot\" data-slide=\"4\"></span>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Background Image Section -->\r\n        <section class=\"background-section\">\r\n            <div class=\"background-overlay\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"section-title\">Your Game. Your Space.</h2>\r\n                    <p class=\"background-text\">Join Bangalore's premier sporting community at FerroHub Sports.</p>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Contact Section -->\r\n        <section id=\"contact\" class=\"contact-section\">\r\n            <div class=\"container\">\r\n                <h2 class=\"section-title\">Get In Touch</h2>\r\n                <div class=\"contact-content\">\r\n                    <div class=\"contact-info\">\r\n                        <div class=\"contact-item\">\r\n                            <span class=\"contact-label\">Email:</span>\r\n                            <span>info@ferrohubsports.com</span>\r\n                        </div>\r\n                        <div class=\"contact-item\">\r\n                            <span class=\"contact-label\">Phone:</span>\r\n                            <span>+91 98765 43210</span>\r\n                        </div>\r\n                        <div class=\"contact-item\">\r\n                            <span class=\"contact-label\">Address:</span>\r\n                            <a href=\"https://www.google.com/maps?q=FerroHub+Sports+Millers+Pickleball,+16/A,+Millers+Rd,+above+Advaith+Hyundai,+Kaverappa+Layout,+Vasanth+Nagar,+Bengaluru,+Karnataka+560052&ftid=0x3bae171b5b3139e5:0x2764bc37057755a8&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE1LjAuNzQ0OTgzNDA2MBgAIIgnKmMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAklO&skid=ad6e9725-a39b-4571-b456-e79e4bdb46cc&g_st=com.google.maps.preview.copy\" target=\"_blank\" class=\"location-link\">\r\n                                <span>16/A, Millers Rd, above Advaith Hyundai, Kaverappa Layout, Vasanth Nagar, Bengaluru, Karnataka 560052</span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"contact-item\">\r\n                            <span class=\"contact-label\">Rating:</span>\r\n                            <span>4.8+ Google Rating • 897+ Instagram Followers</span>\r\n                        </div>\r\n                        <div class=\"contact-item\">\r\n                            <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"booking-link\">\r\n                                <span class=\"booking-text\">Book a slot!</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"social-media\">\r\n                        <a href=\"https://www.facebook.com/\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n                            <i class=\"fab fa-facebook-f\"></i>\r\n                            <span>Facebook</span>\r\n                        </a>\r\n                        <a href=\"https://www.twitter.com/\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n                            <i class=\"fab fa-twitter\"></i>\r\n                            <span>Twitter</span>\r\n                        </a>\r\n                        <a href=\"https://www.linkedin.com/\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n                            <i class=\"fab fa-linkedin-in\"></i>\r\n                            <span>LinkedIn</span>\r\n                        </a>\r\n                        <a href=\"https://www.instagram.com/ferrohubsports/\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n                            <i class=\"fab fa-instagram\"></i>\r\n                            <span>Instagram</span>\r\n                        </a>\r\n                        <a href=\"https://www.youtube.com/\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n                            <i class=\"fab fa-youtube\"></i>\r\n                            <span>YouTube</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Footer -->\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <p>&copy; 2025 FerroHub Sports. All rights reserved. | Your Game. Your Space.</p>\r\n            </div>\r\n        </footer>\r\n\r\n        <!-- Modals -->\r\n        <div id=\"hero-modal\" class=\"modal\">\r\n            <div class=\"modal-content\">\r\n                <span class=\"close\" data-modal=\"hero-modal\">Close</span>\r\n                <h2>Welcome to FerroHub Sports</h2>\r\n                <p>Book your court today and experience Bangalore's premier sporting facility. We offer professional pickleball courts, football turf, and cricket facilities with state-of-the-art equipment.</p>\r\n                <p>Join our community of 897+ sports enthusiasts and enjoy regular tournaments, social events, and fitness programs. Your Game. Your Space.</p>\r\n                <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"modal-button\">Book Now</a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Pickleball Modal -->\r\n        <div id=\"pickleball-modal\" class=\"modal\">\r\n            <div class=\"modal-content\">\r\n                <span class=\"close\" data-modal=\"pickleball-modal\">Close</span>\r\n                <div class=\"modal-icon\">\r\n                    <i class=\"fas fa-table-tennis\"></i>\r\n                </div>\r\n                <h2>Pickleball Courts</h2>\r\n                <p>Our state-of-the-art pickleball courts feature:</p>\r\n                <ul>\r\n                    <li>Professional-grade court surfaces with proper lighting</li>\r\n                    <li>Premium paddles and balls available for rent</li>\r\n                    <li>Air-conditioned playing area for comfort</li>\r\n                    <li>Beginner to advanced coaching sessions</li>\r\n                    <li>Tournament-grade equipment and facilities</li>\r\n                </ul>\r\n                <p>Perfect for players of all skill levels, from beginners to competitive players. Book your court today!</p>\r\n                <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"modal-button\">Book Pickleball Court</a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Football Modal -->\r\n        <div id=\"football-modal\" class=\"modal\">\r\n            <div class=\"modal-content\">\r\n                <span class=\"close\" data-modal=\"football-modal\">Close</span>\r\n                <div class=\"modal-icon\">\r\n                    <i class=\"fas fa-futbol\"></i>\r\n                </div>\r\n                <h2>Football Turf</h2>\r\n                <p>Our premium football turf offers:</p>\r\n                <ul>\r\n                    <li>High-quality artificial grass surface</li>\r\n                    <li>Professional goal posts and equipment</li>\r\n                    <li>Flood lighting for evening matches</li>\r\n                    <li>Changing rooms and storage facilities</li>\r\n                    <li>Organized leagues and tournaments</li>\r\n                </ul>\r\n                <p>Ideal for football matches, training sessions, and recreational play. Join our football community!</p>\r\n                <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"modal-button\">Book Football Turf</a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Cricket Modal -->\r\n        <div id=\"cricket-modal\" class=\"modal\">\r\n            <div class=\"modal-content\">\r\n                <span class=\"close\" data-modal=\"cricket-modal\">Close</span>\r\n                <div class=\"modal-icon\">\r\n                    <i class=\"fas fa-baseball-ball\"></i>\r\n                </div>\r\n                <h2>Cricket Turf</h2>\r\n                <p>Our well-maintained cricket facilities include:</p>\r\n                <ul>\r\n                    <li>Professional cricket pitch with proper conditions</li>\r\n                    <li>Net practice areas for batting and bowling</li>\r\n                    <li>Quality cricket equipment available</li>\r\n                    <li>Coaching sessions for all age groups</li>\r\n                    <li>Regular practice matches and tournaments</li>\r\n                </ul>\r\n                <p>Perfect for cricket enthusiasts looking to improve their game or enjoy recreational play.</p>\r\n                <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"modal-button\">Book Cricket Turf</a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Running Modal -->\r\n        <div id=\"running-modal\" class=\"modal\">\r\n            <div class=\"modal-content\">\r\n                <span class=\"close\" data-modal=\"running-modal\">Close</span>\r\n                <div class=\"modal-icon\">\r\n                    <i class=\"fas fa-running\"></i>\r\n                </div>\r\n                <h2>Running Track & Fitness</h2>\r\n                <p>Our running and fitness facilities feature:</p>\r\n                <ul>\r\n                    <li>Dedicated running track with proper surface</li>\r\n                    <li>56 Run Club for marathon training</li>\r\n                    <li>Fitness equipment and training areas</li>\r\n                    <li>Group running sessions and events</li>\r\n                    <li>Personal training and coaching available</li>\r\n                </ul>\r\n                <p>Join our fitness community and achieve your running goals with professional guidance!</p>\r\n                <a href=\"https://linktr.ee/ferrohubsports\" target=\"_blank\" class=\"modal-button\">Join Running Club</a>\r\n            </div>\r\n        </div>\r\n    </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

// Global variables
var currentSlide = 0;
var slides = [];
var totalSlides = 0;
var carouselTrack = null; // DOM Content Loaded

document.addEventListener('DOMContentLoaded', function () {
  initializeNavigation();
  initializeCarousel();
  initializeModal();
  initializeScrollEffects();
  initializeSocialLinks();
  initializeFacilityCards();
}); // Social Media Links

function initializeSocialLinks() {
  var socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      console.log('Social link clicked:', this.href); // Don't prevent default - let the link work normally
    });
  });
} // Facility Cards


function initializeFacilityCards() {
  var facilityCards = document.querySelectorAll('.service-card[data-modal]');
  facilityCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      openModal(modalId);
    });
  });
} // Navigation Functions


function initializeNavigation() {
  var navbar = document.getElementById('navbar');
  var navLinks = document.querySelectorAll('.nav-link'); // Smooth scrolling for navigation links (only internal links)

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href'); // Only prevent default and smooth scroll for internal links (starting with #)

      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        var targetSection = document.querySelector(targetId);

        if (targetSection) {
          var offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      } // For external links (like social media), let them work normally

    });
  }); // Navbar scroll effects

  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset; // Add scrolled class for navbar resizing

    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    } // Update active navigation link


    updateActiveNavLink();
  });
} // Position Indicator - Update active navigation link based on scroll position


function updateActiveNavLink() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  var navbarHeight = document.getElementById('navbar').offsetHeight;
  var currentSection = '';
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - navbarHeight - 50;
    var sectionHeight = section.offsetHeight;
    var scrollTop = window.pageYOffset;

    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  }); // Special case for bottom of page

  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var scrollTop = window.pageYOffset;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    currentSection = 'contact'; // Last section
  } // Update active link


  navLinks.forEach(function (link) {
    link.classList.remove('active');

    if (link.getAttribute('href') === "#".concat(currentSection)) {
      link.classList.add('active');
    }
  });
} // Carousel Functions


function initializeCarousel() {
  slides = document.querySelectorAll('.carousel-slide');
  totalSlides = slides.length;
  carouselTrack = document.getElementById('carousel-track');
  if (slides.length === 0) return; // Initialize carousel

  updateCarousel();
  updateDots(); // Add event listeners for carousel buttons

  addCarouselEventListeners(); // Auto-advance carousel every 6 seconds

  setInterval(function () {
    changeSlide(1);
  }, 6000); // Add touch/swipe support

  addTouchSupport();
}

function addCarouselEventListeners() {
  // Carousel navigation buttons
  var prevBtn = document.querySelector('.carousel-btn.prev');
  var nextBtn = document.querySelector('.carousel-btn.next');

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      return changeSlide(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      return changeSlide(1);
    });
  } // Carousel dots


  var dots = document.querySelectorAll('.dot');
  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      return goToSlide(index);
    });
  });
}

function changeSlide(direction) {
  var previousSlide = currentSlide;
  currentSlide += direction; // Circular motion logic

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  console.log("Carousel: ".concat(previousSlide, " \u2192 ").concat(currentSlide, " (direction: ").concat(direction, ")"));
  updateCarousel();
  updateDots();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  updateDots();
}

function updateCarousel() {
  if (!carouselTrack) return; // Move the track horizontally

  var translateX = -currentSlide * 100;
  carouselTrack.style.transform = "translateX(".concat(translateX, "%)"); // Update slide classes for opacity effects with proper circular logic

  slides.forEach(function (slide, index) {
    slide.classList.remove('active', 'prev-slide', 'next-slide');

    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      // Calculate previous and next slide indices with circular logic
      var prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      var nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;

      if (index === prevIndex) {
        slide.classList.add('prev-slide');
      } else if (index === nextIndex) {
        slide.classList.add('next-slide');
      }
    }
  });
}

function updateDots() {
  var dots = document.querySelectorAll('.dot');
  dots.forEach(function (dot, index) {
    dot.classList.remove('active');

    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

function addTouchSupport() {
  var startX = 0;
  var endX = 0;
  var isDragging = false;
  carouselTrack.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  });
  carouselTrack.addEventListener('touchmove', function (e) {
    if (isDragging) {
      e.preventDefault(); // Prevent scrolling
    }
  });
  carouselTrack.addEventListener('touchend', function (e) {
    if (isDragging) {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
      isDragging = false;
    }
  }); // Also add mouse support for desktop

  carouselTrack.addEventListener('mousedown', function (e) {
    startX = e.clientX;
    isDragging = true;
    e.preventDefault();
  });
  carouselTrack.addEventListener('mousemove', function (e) {
    if (isDragging) {
      e.preventDefault();
    }
  });
  carouselTrack.addEventListener('mouseup', function (e) {
    if (isDragging) {
      endX = e.clientX;
      handleSwipe();
      isDragging = false;
    }
  });
  carouselTrack.addEventListener('mouseleave', function () {
    isDragging = false;
  });

  function handleSwipe() {
    var swipeThreshold = 50;
    var diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        changeSlide(1);
      } else {
        // Swipe right - previous slide
        changeSlide(-1);
      }
    }
  }
} // Modal Functions


function initializeModal() {
  // Add event listener for close button
  var closeBtn = document.querySelector('.close');

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      closeModal(modalId);
    });
  } // Close modal when clicking outside


  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('show');
    }
  }); // Close modal with Escape key

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var _openModal = document.querySelector('.modal.show');

      if (_openModal) {
        _openModal.classList.remove('show');
      }
    }
  });
}

function openModal(modalId) {
  var modal = document.getElementById(modalId);

  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);

  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
} // Scroll Effects and Animations


function initializeScrollEffects() {
  // Intersection Observer for fade-in animations
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions); // Observe elements for animation

  var animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-content');
  animatedElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
} // Utility Functions


function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} // Performance optimization for scroll events


var debouncedScrollHandler = debounce(function () {
  updateActiveNavLink();
}, 10);
window.addEventListener('scroll', debouncedScrollHandler); // Functions are now handled through event listeners - no global assignment needed
// Console log for debugging

console.log('FerroHub Sports - MP1 Loaded Successfully!');
console.log('Features implemented:');
console.log('- Sticky Navigation with Position Indicator');
console.log('- Smooth Scrolling');
console.log('- Full-page Horizontal Carousel with Auto-advance');
console.log('- Modal Windows');
console.log('- Responsive Design');
console.log('- CSS3 Animations');
console.log('- SCSS Variables and Mixins');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map