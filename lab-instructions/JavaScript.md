<h1>Laboratorio JavaScript everis en AZC</h1>

<p>
    En esta pagina aparecen las diferentes actividades a realizar para el laboratorio de JavaScript, para practicar lo visto en las sesiones.
</p>

<ol>
    <li>
        <strong>Lea con atención el siguiente enunciado:</strong>
        <p>
            Una tienda vende un chocolate por un peso, también intercambia tres envoltorios de chocolate por un nuevo chocolate.
            <br />
            Tienes 15 pesos ¿Cuántos chocolates puedes comer?
            <br />
            La respuesta es 22.
            <br />
            Sencillo ¿verdad?
        </p>
        <p>
            Se requiere hacer un algoritmo genérico para realizar el calculo, dado lo siguiente:
            <br />
            Una tienda vende un chocolate por P peso, también intercambia K envoltorios de chocolate por un nuevo chocolate.
            Si tienes N pesos. ¿Cuántos chocolates puedes comer?
        </p>
        <p>
            Dadas las entradas P, K y N, devuelve la cantidad máxima de chocolates que se pueden comer.
            <br />
            Cree un método con el nombre "getCount", que reciba tres parámetros de entrada (P, K, N) de tipo númerico, y retorna un valor igualmente númerico.
            <ul>
                <li>
                    P va de 1 hasta 1000.
                </li>
                <li>
                    K va de 2 hasta 1000.
                </li>
                <li>
                    N va de 3 hasta 1000000.
                </li>
            </ul>
        </p>
        <p>
            Finalmente, se deben crear tres campos en pantalla que reciban los valores para P, K y N, y, un boton que al darle click debe llamar el método "getCount" con los valores ingresados para P, K y N, y debe mostrar el resultado en otro campo en pantalla con el titulo "Total chocolates".
        </p>
    </li>
    <li>
        <strong>Formulario registro curso HTML</strong>
        <br />
        <p>
            A partir del formulario creado en el <a href="formularios.md#formularioRegistroCursoHTML" target="_blank">laboratorio HTML</a> realizar las siguientes acciones:
        </p>
        <ul>
            <li>
                Agregar escucha a evento change en campo con name birthdate, calcular edad según la fecha ingresada y poner edad calculada en campo Edad.
            </li>
            <li>
                Agrega escucha a evento change y a evento input en campo con name hours_per_week y mostrar valor actual al lado del label con titulo para este campo.
            </li>
            <li>
                Agregar escucha a evento submit del formulario y realizar las siguientes validaciones, si todas las validaciones son verdaderas se debe permitir el envío del formulario, pero si alguna falla, se debe mostrar mensaje de error y el formulario no debe ser envíado:
                <ul>
                    <li>
                        Nombre del aspirante
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que el valor tenga más de 4 caracteres
                            </li>
                            <li>
                                Validar que el valor no tenga ningun número
                            </li>
                        </ul>
                    </li>
                    <li>
                        Número de identificación del aspirante
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que el valor tenga más de 7 caracteres
                            </li>
                            <li>
                                Validar que el valor solo tenga numeros
                            </li>
                        </ul>
                    </li>
                    <li>
                        Fecha de nacimiento
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que la fecha sea valida
                            </li>
                        </ul>
                    </li>
                    <li>
                        Edad
                        <ul>
                            <li>
                                Validar que la edad sea mayor a 10 y menor a 100
                            </li>
                        </ul>
                    </li>
                    <li>
                        Género
                        <ul>
                            <li>
                                Validar que una opción haya sido elegida
                            </li>
                        </ul>
                    </li>
                    <li>
                        Ocupación
                        <ul>
                            <li>                        
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que el valor tenga más de 3 caracteres
                            </li>
                        </ul>
                    </li>
                    <li>
                        Horas a invertir semanalmente
                        <ul>
                            <li>
                                Validar que el valor este entre 1 y 40
                            </li>
                        </ul>
                    </li>
                    <li>
                        Declaración de aceptación de las politicas de privacidad de la pagina
                        <ul>
                            <li>
                                Validar que la el campo este elegido
                            </li>
                        </ul>
                    </li>
                    <li>
                        Declaración de vericidad de la información
                        <ul>
                            <li>
                                Validar que la el campo este elegido
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <strong>Formulario registrar nueva cuenta</strong>
        <br />
        <p>
            A partir del formulario creado en el <a href="formularios.md#formularioRegistrarNuevaCuenta" target="_blank">laboratorio HTML</a> realizar las siguientes acciones:
        </p>
        <ul>
            <li>
                Agregar evento change a campos con name password y password_confirmation y validar que los valores diligenciados sean iguales, en caso contrario mostrar un error.
                <br />
                El error unicamente debe aparecer si los dos campos están diligenciados.
                <br />
                Adicionalmente para el campo con name password, se debe validar la robustes de la contraseña.
                <br />
                Tener en cuenta número de caracteres, combinación de mayusculas y minusculas, números y caracteres especiales.
                <br />
                La contraseña no puede tener el usuario, ni los nombres y apellidos.
                <br />
                Si la contraseña es debil, se debe mostrar error tan pronto se termine de digitar.
            </li>
            <li>
                Agregar escucha a evento submit del formulario y realizar las siguientes validaciones, si todas las validaciones son verdaderas se debe permitir el envío del formulario, pero si alguna falla, se debe mostrar mensaje de error y el formulario no debe ser envíado:
                <ul>
                    <li>
                        Nombres
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que el valor tenga más de 4 caracteres
                            </li>
                            <li>
                                Validar que el valor no tenga ningun número
                            </li>
                        </ul>
                    </li>
                    <li>
                        Apellidos
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que el valor tenga más de 4 caracteres
                            </li>
                            <li>
                                Validar que el valor no tenga ningun número
                            </li>
                        </ul>
                    </li>
                    <li>
                        Usuario
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Validar que el valor tenga más de 6 caracteres
                            </li>
                            <li>
                                Validar que el valor no tenga ningun caracter especial
                            </li>
                        </ul>
                    </li>
                    <li>
                        Contraseña
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Misma validación aplicada en evento change
                            </li>
                        </ul>
                    </li>
                    <li>
                        Confirmación de contraseña
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                            <li>
                                Misma validación aplicada en evento change
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <strong>Formulario iniciar sesión</strong>
        <br />
        <p>
            A partir del formulario creado en el <a href="formularios.md#formularioIniciarSesion" target="_blank">laboratorio HTML</a> realizar las siguientes acciones:
        </p>
        <ul>
            <li>
                Agregar escucha a evento submit del formulario y realizar las siguientes validaciones, si todas las validaciones son verdaderas se debe permitir el envío del formulario, pero si alguna falla, se debe mostrar mensaje de error y el formulario no debe ser envíado:
                <ul>
                    <li>
                        Usuario
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                        </ul>
                    </li>
                    <li>
                        Contraseña
                        <ul>
                            <li>
                                Validar que el campo haya sido diligenciado
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ol>