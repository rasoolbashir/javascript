function toggleSidebar(){
    var sidebar = document.querySelector('.sideBar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'flex' : 'none';
}

document.getElementById('toggleButton').addEventListener('click', toggleSidebar);


function cross(){
    var sidebar1 = document.querySelector('.sideBar');
    sidebar1.style.display = sidebar1.style.display = 'none';
}