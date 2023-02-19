const NavigationSidebarItem = (navigation, active) => {
    if (active === navigation.navName) {
        return(`
            <a href="${navigation.navLink}" class="list-group-item list-group-item-action active">
                <i class="${navigation.navIcon}"></i>
                <span class="d-none d-xl-inline-block">${navigation.navName}</span>
            </a>
        `)
    } else {
        return(`
            <a href="${navigation.navLink}" class="list-group-item list-group-item-action">
                <i class="${navigation.navIcon}"></i>
                <span class="d-none d-xl-inline-block">${navigation.navName}</span>
            </a>
        `)
    }
}
export default NavigationSidebarItem;