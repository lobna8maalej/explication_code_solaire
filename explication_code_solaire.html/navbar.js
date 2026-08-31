document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `

        <nav class="navbar">

            <div class="logo">
                ☀️ Solar Energy
            </div>

            <ul class="nav-links">

                <li>
                    <a href="documentationMrc.html">
                        Accueil
                    </a>
                </li>

                <li>
                    <a href="documentation-backend.html">
                        Panneaux solaires
                    </a>
                </li>

                <li>
                    <a href="explicationModels.html">
                        Batteries
                    </a>
                </li>

                <li>
                    <a href="documentationRoutes.html">
                        Onduleurs
                    </a>
                </li>

                <li>
                    <a href="explicationF.html">
                        Rendez-vous
                    </a>
                </li>

                <li>
                    <a href="explicationF2.html">
                        Devis
                    </a>
                </li>

                <li>
                    <a href="app.html">
                        Paiements
                    </a>
                </li>

 <li>
                    <a href="documentEnv.html">
                        configuration
                    </a>
                </li>
            </ul>

        </nav>

    `;
});