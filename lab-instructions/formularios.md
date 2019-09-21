<h1>Laboratorio formularios HTML everis en AZC</h1>

<p>En esta pagina aparecen las diferentes actividades a realizar para el laboratorio de formularios HTML, para practicar lo visto en las sesiones.</p>

<a href="https://everis-allianz-lab.azurewebsites.net"><strong>https://everis-allianz-lab.azurewebsites.net</strong></a>

<ol>
    <li>
        <strong>Formulario registro curso HTML</strong>
        <br />
        <p>
            Se debe crear una pagina web que permita registrarse a un curso de HTML. La pagina debe recibir la siguiente información:
        </p>
        <ul>
            <li>
                Nombre del aspirante
                <br />
                nombre parametro: <em>name</em>
            </li>
            <li>
                Número de identificación del aspirante
                <br />
                nombre parametro: <em>identification</em>
            </li>
            <li>
                Fecha de nacimiento
                <br />
                nombre parametro: <em>birthdate</em>
            </li>
            <li>
                Edad
            </li>
            <li>
                Género
                <br />
                nombre parametro: <em>gender</em>
            </li>
            <li>
                Ocupación
                <br />
                nombre parametro: <em>ocupation</em>
            </li>
            <li>
                Horas a invertir semanalmente
                <br />
                nombre parametro: <em>hours_per_week</em>
            </li>
            <li>
                Declaración de aceptación de las politicas de privacidad de la pagina
                <br />
                nombre parametro: <em>page_privacy_declaration_acceptance</em>
            </li>
            <li>
                Declaración de vericidad de la información
                <br />
                nombre parametro: <em>info_vericity_declaration</em>
            </li>
        </ul>
        <p>
            El formulario debe tener un campo oculto que contenga el correo de la persona que desarrolló la pagina web, el nombre de este parametro debe ser <em>provider</em>
        </p>
        <p>
            Al final del formulario deben existir dos botones, uno para limpiarlo y otro para enviarlo.
        </p>
        <p>
            El método de envío de información debe ser GET y se debe envíar a la página https://everis-allianz-lab.azurewebsites.net/form-get
        </p>
    </li>
</ol>