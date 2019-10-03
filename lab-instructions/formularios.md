<h1>Laboratorio formularios HTML everis en AZC</h1>

<p>
    En esta pagina aparecen las diferentes actividades a realizar para el laboratorio de formularios HTML, para practicar lo visto en las sesiones.
</p>

<ol>
    <li id="formularioRegistroCursoHTML">
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
            El método de envío de información debe ser GET y se debe envíar a la página https://everis-allianz-lab.azurewebsites.net/forms/course
        </p>
    </li>
    <li id="formularioRegistrarNuevaCuenta">
        <strong>Formulario registrar nueva cuenta</strong>
        <br />
        <p>
            Se debe crear una pagina web que permita registrar un nuevo usuario. Para que un usuario se pueda registrar la pagina debe recibir la siguiente información:
        </p>
        <ul>
            <li>
                Nombres
                <br />
                nombre parametro: <em>name</em>
            </li>
            <li>
                Apellidos
                <br />
                nombre parametro: <em>surname</em>
            </li>
            <li>
                Usuario
                <br />
                nombre parametro: <em>username</em>
            </li>
            <li>
                Contraseña
                <br />
                nombre parametro: <em>password</em>
            </li>
            <li>
                Confirmación de contraseña
                <br />
                nombre parametro: <em>password_confirmation</em>
            </li>
        </ul>
        <p>
            El formulario debe tener un campo oculto que contenga el correo de la persona que desarrolló la pagina web, el nombre de este parametro debe ser <em>provider</em>
        </p>
        <p>
            Al final del formulario deben existir un boton para enviar el formulario y un link a la pagina de inicio de sesión (creada en el ejercicio 3).
        </p>
        <p>
            El método de envío de información debe ser POST y se debe envíar a la página https://everis-allianz-lab.azurewebsites.net/forms/subscribe
        </p>
    </li>
    <li id="formularioIniciarSesion">
        <strong>Formulario iniciar sesión</strong>
        <br />
        <p>
            Se debe crear una pagina web que permita iniciar sesión. La pagina debe recibir la siguiente información:
        </p>
        <ul>
            <li>
                Usuario
                <br />
                nombre parametro: <em>username</em>
            </li>
            <li>
                Contraseña
                <br />
                nombre parametro: <em>password</em>
            </li>
        </ul>
        <p>
            El formulario debe tener un campo oculto que contenga el correo de la persona que desarrolló la pagina web, el nombre de este parametro debe ser <em>provider</em>
        </p>
        <p>
            Al final del formulario deben existir un boton para enviar el formulario y un link a la pagina de registrar cuentas (creada en el ejercicio 2).
        </p>
        <p>
            El método de envío de información debe ser POST y se debe envíar a la página https://everis-allianz-lab.azurewebsites.net/forms/login
        </p>
    </li>
    <li>
        <strong>Formulario envío hoja de vida</strong>
        <br />
        <p>
            Se debe crear una pagina web que permita envíar una hoja de vida. La pagina debe recibir la siguiente información:
        </p>
        <ul>
            <li>
                Número de identificación
                <br />
                nombre parametro: <em>identification_number</em>
            </li>
            <li>
                Nombres
                <br />
                nombre parametro: <em>names</em>
            </li>
            <li>
                Apellidos
                <br />
                nombre parametro: <em>last_name</em>
            </li>
            <li>
                Telefono
                <br />
                nombre parametro: <em>phone_number</em>
            </li>
            <li>
                Correo
                <br />
                nombre parametro: <em>email</em>
            </li>
            <li>
                Fecha de nacimiento
                <br />
                nombre parametro: <em>birth_date</em>
            </li>
            <li>
                Documento hoja de vida
                <br />
                nombre parametro: <em>cv_file</em>
            </li>
        </ul>
        <p>
            El formulario debe tener un campo oculto que contenga el correo de la persona que desarrolló la pagina web, el nombre de este parametro debe ser <em>provider</em>
        </p>
        <p>
            Al final del formulario debe existir un boton para enviar el formulario.
        </p>
        <p>
            El método de envío de información debe ser POST y se debe envíar a la página https://everis-allianz-lab.azurewebsites.net/forms/cv el formulario debe usar el tipo de codificación "multipart/form-data"
        </p>
    </li>
</ol>