const rooms = [
    { roomNo: "101", type: "Deluxe Suite", price: 8000, status: "Available" },
    { roomNo: "102", type: "Standard Room", price: 4000, status: "Booked" },
    { roomNo: "103", type: "Deluxe Suite", price: 3000, status: "Available" },
    { roomNo: "104", type: "Standard Room", price: 5000, status: "Booked" },
    { roomNo: "105", type: "Deluxe Suite", price: 4000, status: "Available" },
    { roomNo: "106", type: "Standard Room", price: 7000, status: "Booked" },
    { roomNo: "107", type: "Deluxe Suite", price: 11000, status: "Available" },
    { roomNo: "108", type: "Standard Room", price: 10000, status: "Booked" },
    { roomNo: "209", type: "Executive Suite", price: 12000, status: "Available" },
    { roomNo: "210", type: "Deluxe Suite", price: 8500, status: "Booked" },
    { roomNo: "301", type: "Standard Room", price: 5500, status: "Available" },
    { roomNo: "302", type: "Presidential Suite", price: 140000, status: "Available" }
];

const renderRoom = (roomList) => {
    const container = document.querySelector(".rooms-grid");
    let singleBanner = roomList.filter(item => item).map(item =>
        `<div class="room-card">
    <div class="card-header">
        <h3>Room ${item.roomNo}</h3>
        <span class="status-badge ${item.status.toLowerCase()}">${item.status}</span>
    </div>
    <h4>${item.type}</h4>
    <p class="price">Rs. ${item.price} / night</p>
</div>`
    )
        .join("")
    container.innerHTML = singleBanner;
}

const SearchInput = document.getElementById("room-search")
SearchInput.addEventListener("input", (e) => {
    let SearchBar = e.target.value.toLowerCase();
    let filtered = rooms.filter(item => item.type.toLowerCase().includes(SearchBar) ||
        item.roomNo.includes(SearchBar)

    )
    renderRoom(filtered)
})

const btn_All = document.querySelector(".btn-all");
const btn_Available = document.querySelector(".btn-available");
const btn_booked = document.querySelector(".btn-booked");

btn_All.addEventListener("click", () => {
    renderRoom(rooms)
})
btn_Available.addEventListener("click", () => {
    let filtered = rooms.filter(item => item.status === "Available")
    renderRoom(filtered)
})
btn_booked.addEventListener("click", () => {
    let filtered = rooms.filter(item => item.status === "Booked")
    renderRoom(filtered)
})  
 