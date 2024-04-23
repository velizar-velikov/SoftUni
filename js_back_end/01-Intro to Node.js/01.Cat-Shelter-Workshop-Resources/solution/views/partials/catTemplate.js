const catTemplate = (cat) => `
<li>
<img src="${cat.imageUrl}" alt="Black Cat">
<h3>${cat.name}</h3>
<p><span>Breed: </span>${cat.breed}</p>
<p><span>Description: </span>${cat.description}</p>
<ul class="buttons">
    <li class="btn edit"><a href="/cats/${cat.id}/edit">Change Info</a></li>
    <li class="btn delete"><a href="/cats/${cat.id}/shelter">New Home</a></li>
</ul>
</li>
`;

module.exports = { catTemplate };
