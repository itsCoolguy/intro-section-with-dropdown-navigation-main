const mobileMenu = document.querySelector('#mobile-menu')
const blackOverlay = document.querySelector('#black-overlay')
const mobileFeaturesDropdown = document.querySelector('#mobile-features-dropdown');
const mobileCompanyDropdown = document.querySelector('#mobile-company-dropdown');
const desktopFeaturesDropdown = document.querySelector('#features-dropdown-desktop');
const desktopCompanyDropdown = document.querySelector('#company-dropdown-desktop');

const mobileFeaturesButton = document.querySelector('#mobile-menu-features');
const mobileCompanyButton = document.querySelector('#mobile-menu-company');
const desktopFeaturesButton = document.querySelector('#desktop-menu-features');
const dekstopCompanyButton = document.querySelector('#desktop-menu-company');

let openMenus = [];

function changeProperty(element, property, value, timeout) {
    setTimeout(() => {
        element.style[property] = value;
    }, Number(timeout))
}

function openMenu() {
    blackOverlay.style.visibility = 'visible';
    mobileMenu.style.transform = 'translate3d(-65vw, 0, 0)';
}

function closeMenu() {
    changeProperty(blackOverlay, 'visibility', 'hidden', 250);
    mobileMenu.style.removeProperty('transform');
}

function openMobileFeatures() {
    if (openMenus.includes('features')) {
        mobileFeaturesDropdown.style.maxHeight = '0px';
        openMenus.splice(openMenus.indexOf('features'), 1);
        return
    }
    mobileFeaturesDropdown.style.maxHeight = '150px';
    openMenus.push('features');
}

function openMobileCompany() {
    if (openMenus.includes('company')) {
        mobileCompanyDropdown.style.maxHeight = '0px';
        mobileCompanyDropdown.style.marginTop = '0px';
        openMenus.splice(openMenus.indexOf('company'), 1);
        return
    }
    mobileCompanyDropdown.style.maxHeight = '150px';
    mobileCompanyDropdown.style.marginTop = '10px';
    openMenus.push('company');
}

function openDesktopFeatures() {
    if (openMenus.includes('featuresDesktop')) {
        desktopFeaturesDropdown.style.visibility = 'hidden';
        desktopFeaturesDropdown.style.maxHeight = '0px';
        desktopFeaturesDropdown.style.padding = '5px 15px 5px 15px';
        openMenus.splice(openMenus.indexOf('featuresDesktop'), 1);
        return
    }
    desktopFeaturesDropdown.style.padding = '20px 15px 15px 15px';
    desktopFeaturesDropdown.style.maxHeight = '200px';
    desktopFeaturesDropdown.style.visibility = 'visible';
    openMenus.push('featuresDesktop');
}

function openDesktopCompany() {
    if (openMenus.includes('companyDesktop')) {
        desktopCompanyDropdown.style.visibility = 'hidden';
        desktopCompanyDropdown.style.maxHeight = '0px';
        desktopCompanyDropdown.style.padding = '5px 15px 5px 15px';
        openMenus.splice(openMenus.indexOf('companyDesktop'), 1);
        return
    }
    desktopCompanyDropdown.style.padding = '20px 15px 15px 15px';
    desktopCompanyDropdown.style.maxHeight = '200px';
    desktopCompanyDropdown.style.visibility = 'visible';
    openMenus.push('companyDesktop');
}