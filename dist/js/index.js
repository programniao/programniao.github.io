// 选项卡
function tab_class(nav_list,nav_cont,list_class,cont_class,this_class,newcont_class) {
    for(let i = 0; i < nav_list.length; i++) {
    nav_list[i].index = i;

        nav_list[i].onclick = function () {
            for(let j = 0; j < nav_list.length; j++) {
                nav_list[j].className = list_class;
                nav_cont[j].className = cont_class;
            }
            this.className = this_class;
            nav_cont[this.index].className = newcont_class;
        }
    }

}
