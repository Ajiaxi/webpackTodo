export function renderA () {
    let a = document.getElementById('one');

    a.innerHTML = 
    `<ul>
        <li> 1 </li>
        <li> 2 </li>
        <li> 3 </li>
    </ul>`

    let ul = document.createElement('ul');
    ul.innerHTML = 
    `<ul>
        <li> 1 </li>
        <li> 2 </li>
        <li> 3 </li>
    </ul>`
    return ul;

}