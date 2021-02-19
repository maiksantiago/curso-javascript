import '../css/saludo.css';

export const saludo = (nombre) => {
    const div = document.createElement('div');

    div.innerHTML = `Hola desde ${nombre}`;
    div.setAttribute("align", "center");

    document.body.append(div);
}