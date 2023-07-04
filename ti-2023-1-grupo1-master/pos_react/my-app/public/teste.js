// Função para criar o componente header
function createHeader() {
    const header = document.createElement('header');
  
    const container = document.createElement('div');
    container.classList.add('container');
    header.appendChild(container);
  
    const logo = document.createElement('h1');
    const logoLink = document.createElement('a');
    logoLink.textContent = 'Não Teams';
    logoLink.href = 'home.html';
    logo.appendChild(logoLink);
    container.appendChild(logo);
  
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const navItems = ['Início', 'Salas de Aula', 'Testes', 'Contato'];
    navItems.forEach(item => {
      const listItem = document.createElement('li');
      const itemLink = document.createElement('a');
      itemLink.textContent = item;
      itemLink.href = `${item.toLowerCase()}.html`;
      listItem.appendChild(itemLink);
      navList.appendChild(listItem);
    });
    const loginItem = document.createElement('li');
    loginItem.classList.add('login');
    const loginLink = document.createElement('a');
    loginLink.textContent = 'Login';
    loginLink.href = 'login.html';
    loginItem.appendChild(loginLink);
    navList.appendChild(loginItem);
    nav.appendChild(navList);
    container.appendChild(nav);
  
    return header;
  }
  
  // Função para criar o componente sidebar
  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('col-3');
  
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar');
    sidebar.appendChild(sidebarContent);
  
    const sidebarTitle = document.createElement('h3');
    sidebarTitle.textContent = 'Outras Disciplinas';
    sidebarContent.appendChild(sidebarTitle);
  
    const sidebarList = document.createElement('ul');
    const sidebarItems = ['História', 'Matemática', 'Química'];
    sidebarItems.forEach(item => {
      const listItem = document.createElement('li');
      const itemLink = document.createElement('a');
      itemLink.textContent = item;
      itemLink.href = '#';
      listItem.appendChild(itemLink);
      sidebarList.appendChild(listItem);
    });
    sidebarContent.appendChild(sidebarList);
  
    return sidebar;
  }
  