
function onClickMenu()
{
    var menus= document.getElementsByClassName("nav-menu");
    if(menus.length >0)
    {
        var menu=menus[0]
        menu.classList.toggle(('active'))
    }
}