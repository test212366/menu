const data = [
	{
		title: 'eggs',
		dataset: 'breakfast',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'potatoes',
		dataset: 'lunch',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'shakes',
		dataset: 'shakes',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'eggs2',
		dataset: 'breakfast',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'eggs3',
		dataset: 'breakfast',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'potatoes3',
		dataset: 'lunch',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'potatoes2',
		dataset: 'lunch',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'shakes3',
		dataset: 'shakes',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},
	{
		title: 'shakes2',
		dataset: 'shakes',
		description: 'lorem jfslkjdfslkj lsdjfsldkjflksdj fsdj lsdj sdj kjfsdljfjslkdjflk jsdjflksdjlfjsdlfj ljdsljf ljdsfl jdj ldksj lfjdklj',

	},


]
const items = document.querySelector('.items')
const nav = document.getElementById('nav')

function createMenu() {
	for (let i = 0; i < data.length; i++) {
		const item = data[i];
		let itemMenu = document.createElement('div')
		itemMenu.classList.add('item')
		itemMenu.insertAdjacentHTML('afterbegin', `
		<div data-food="${item.dataset}">
				<h1>${item.title}</h1>
				<p>${item.description}</p>
		</div>
		`)
		items.appendChild(itemMenu)
	}

}
createMenu()


function menuReaload(options) {
	if (options == 'all') {
		items.innerHTML = ''
		createMenu()
	}
	if (options == 'breakfast') {
		items.innerHTML = ''
		data.forEach(item => {
			if (item.dataset == 'breakfast') {
				let itemMenu = document.createElement('div')
				itemMenu.classList.add('item')
				itemMenu.insertAdjacentHTML('afterbegin', `
				<div data-food="${item.dataset}">
				<h1>${item.title}</h1>
				<p>${item.description}</p>
				</div>
				`)
				items.appendChild(itemMenu)
			}
		})
	}
	if (options == 'lunch') {
		items.innerHTML = ''
		data.forEach(item => {
			if (item.dataset == 'lunch') {
				let itemMenu = document.createElement('div')
				itemMenu.classList.add('item')
				itemMenu.insertAdjacentHTML('afterbegin', `
				<div data-food="${item.dataset}">
				<h1>${item.title}</h1>
				<p>${item.description}</p>
				</div>
				`)
				items.appendChild(itemMenu)
			}
		})
	}
	if (options == 'shakes') {
		items.innerHTML = ''
		data.forEach(item => {
			if (item.dataset == 'shakes') {
				let itemMenu = document.createElement('div')
				itemMenu.classList.add('item')
				itemMenu.insertAdjacentHTML('afterbegin', `
				<div data-food="${item.dataset}">
				<h1>${item.title}</h1>
				<p>${item.description}</p>
				</div>
				`)
				items.appendChild(itemMenu)
			}
		})
	}

}


nav.addEventListener('click', e => {
	if (e.target.dataset.button == 'all') menuReaload('all')
	if (e.target.dataset.button == 'breakfast') menuReaload('breakfast')
	if (e.target.dataset.button == 'lunch') menuReaload('lunch')
	if (e.target.dataset.button == 'shakes') menuReaload('shakes')
})