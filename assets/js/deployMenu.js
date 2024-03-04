function insertPrincipalMenu() {

    const menuRef = document.getElementById("menu");

    menuRef.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar: en desarrollo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tareas Tan</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Tareas Serch</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`
}


//insertPrincipalMenu();

/*
`
    <nav>
        <ul>
            <li><a href="./pages/web-07-Aplicaciones-Web-Ejercicio-1.html">Tareas Tan</a></li>
            <li><a href="">Tareas Serch</a></li>
            <li><a href=""></a></li>
        </ul>
    </nav>
    `  
*/ 