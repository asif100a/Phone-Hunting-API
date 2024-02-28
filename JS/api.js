const loadPhone = async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
};

const displayPhones = (phones) => {
    // console.log(phones)

    const phonesContainer = document.getElementById('phones-container');
        // Clear the Phone Container before Searching
        phonesContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phone);

        // Step-1: Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-80 bg-white border-2 border-gray-200 p-5`;
        // Step-2: Set innerHtml
        phoneCard.innerHTML = `
            <figure class="bg-[#0D6EFD0D] py-12" ><img src="${phone.image}"
            alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary px-10 text-white">Show Details</button>
                </div>
            </div>
        `;
        // Step-3: Append child
        phonesContainer.appendChild(phoneCard);
    });
};

// Handle Search Button
const handleButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
};

// loadPhone();