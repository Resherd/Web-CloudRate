
const menuItems = [
    { id: 'menu-1', url: 'InfoCloudRate.html' },
    { id: 'menu-2', url: 'DownCloudRate.html' },
    { id: 'menu-3', url: 'InfoTheCreators.html' }
];

menuItems.forEach(({ id, url }) => 
    document.getElementById(id).addEventListener('click', () => 
    setTimeout(() => location.href = url))
);
