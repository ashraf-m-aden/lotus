import Menu from "../data/menu.json";
import { ref } from "vue";
import { defineStore } from "pinia";

export const menuStore = defineStore("menu", () => {
  const data = Menu.data;
  const searchData = ref();
  const togglesidebar = ref(true);
  const toggleChatBar = ref(false);

  // mutations
  const mutation_opensidebar = () => {
    togglesidebar.value = !togglesidebar.value;
  };
  const mutation_openChatSidebar = () => {
    toggleChatBar.value = !toggleChatBar.value;
  };
  const mutation_searchTerm = (term: any) => {
    const items: any[] = [];
    term = term.toLowerCase();
    data.filter((menuItems: any) => {
      if (
        menuItems.title.toLowerCase().includes(term) &&
        menuItems.type === "link"
      ) {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems: any) => {
        if (
          subItems.title.toLowerCase().includes(term) &&
          subItems.type === "link"
        ) {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter((suSubItems: any) => {
          if (suSubItems.title.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
        });
      });
      searchData.value = items;
    });
  };
  const mutation_setNavActive = (item: any) => {
    if (!item.active) {
      data.forEach((a: any) => {
        if (data.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  };
  const mutation_setActiveRoute = (item: any) => {
    data.filter((menuItem: any) => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter((submenuItems: any) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  };
  // actions
  const opensidebar = (term: any) => {
    mutation_opensidebar();
  };
  const openChatSidebar = (term: any) => {
    mutation_openChatSidebar();
  };
  const searchTerm = (term: any) => {
    mutation_searchTerm(term);
  };
  const setNavActive = (item: any) => {
    mutation_setNavActive(item);
  };
  const setActiveRoute = (item: any) => {
    mutation_setActiveRoute(item);
  };

  return {
    openChatSidebar,
    opensidebar,
    searchData,
    data,
    toggleChatBar,
    togglesidebar,
    searchTerm,
    setNavActive,
    setActiveRoute,
  };
});
