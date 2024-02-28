const loadPhone = async (searchPhone, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
    console.log(phones)

    
    const phonesContainer = document.getElementById('phones-container');
    // Clear the Phone Container before Searching
    phonesContainer.textContent = '';

    // If there are more than 12 phones, Show all button
    const showAll = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll) {
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    };
    
    console.log('is Show All', isShowAll);

    // Display only First 12 phones
    if(!isShowAll) {
        phones = phones.slice(0, 12);
    }

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
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-primary px-10 text-white">Show Details</button>
                </div>
            </div>
        `;
        // Step-3: Append child
        phonesContainer.appendChild(phoneCard);
    });

    // Hide the Spinner 
    toggleLoading(false);

};

// Handle Show Details
const showDetails = async(id) => {
    // console.log('clicked', id);
    const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
}; 

// Handle Search Button
const handleButton = (isShowAll) => {
    toggleLoading(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
};

// Toggle Loading Spiner
const toggleLoading = (isLoading) => {
    const toggleSpiner = document.getElementById('spiner');
    if(isLoading) {
        toggleSpiner.classList.remove('hidden');
    }
    else{
        toggleSpiner.classList.add('hidden');
    };
};

// Handle Show all
const handleShowAll = () => {
    handleButton(true);
};

// loadPhone();