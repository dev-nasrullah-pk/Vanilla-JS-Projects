let filterBtns = document.querySelectorAll(".filter-btn");
const menuItems = [
    // Starters
    { id: 1, name: "Garlic Parmesan Wings", category: "Starters", price: "Rs. 650", desc: "Crispy chicken wings tossed in garlic butter and parmesan." },
    { id: 2, name: "Loaded Nachos", category: "Starters", price: "Rs. 750", desc: "Tortilla chips with melted cheese, jalapenos, and salsa." },
    { id: 3, name: "Dynamite Shrimp", category: "Starters", price: "Rs. 950", desc: "Crispy fried shrimp coated in spicy mayo sauce." },
    { id: 4, name: "Mozzarella Sticks", category: "Starters", price: "Rs. 580", desc: "Golden fried cheese sticks served with marinara dip." },
    { id: 5, name: "Stuffed Mushrooms", category: "Starters", price: "Rs. 620", desc: "Baked mushrooms stuffed with herbs and cream cheese." },
    { id: 6, name: "Chicken Tender Strips", category: "Starters", price: "Rs. 540", desc: "Hand-breaded tenders served with honey mustard." },

    // Fast Food
    { id: 7, name: "Smokey BBQ Burger", category: "Fast Food", price: "Rs. 890", desc: "Beef patty, smoked cheese, crispy onion rings, BBQ sauce." },
    { id: 8, name: "Zinger Crunch Burger", category: "Fast Food", price: "Rs. 620", desc: "Crispy fried chicken breast with spicy mayo and lettuce." },
    { id: 9, name: "Philly Cheesesteak", category: "Fast Food", price: "Rs. 980", desc: "Sliced beef steak with caramelized onions and melted cheese." },
    { id: 10, name: "Club Sandwich Deluxe", category: "Fast Food", price: "Rs. 720", desc: "Triple decker sandwich with chicken, egg, and cheese." },
    { id: 11, name: "Pepperoni Passion Pizza", category: "Fast Food", price: "Rs. 1450", desc: "Loaded with beef pepperoni and extra mozzarella." },
    { id: 12, name: "Grilled Chicken Wrap", category: "Fast Food", price: "Rs. 590", desc: "Tortilla wrap filled with grilled chicken and garlic sauce." },

    // Desi Special
    { id: 13, name: "Special Mutton Karahi", category: "Desi Special", price: "Rs. 2200", desc: "Fresh mutton cooked in traditional tomato and ginger gravy." },
    { id: 14, name: "Chicken Biryani Deluxe", category: "Desi Special", price: "Rs. 480", desc: "Long grain basmati rice with aromatic spices and chicken." },
    { id: 15, name: "Reshmi Handi", category: "Desi Special", price: "Rs. 1350", desc: "Boneless chicken cooked in a rich, velvety cream gravy." },
    { id: 16, name: "Beef Seekh Kabab", category: "Desi Special", price: "Rs. 850", desc: "Charcoal grilled minced beef skewers with herbs." },
    { id: 17, name: "Butter Chicken", category: "Desi Special", price: "Rs. 1250", desc: "Tender chicken cooked in sweet and creamy tomato butter sauce." },
    { id: 18, name: "Garlic Naan Basket", category: "Desi Special", price: "Rs. 220", desc: "Freshly baked clay oven bread brushed with garlic butter." },

    // Beverages
    { id: 19, name: "Iced Spanish Latte", category: "Beverages", price: "Rs. 550", desc: "Espresso shot with sweetened condensed milk and ice." },
    { id: 20, name: "Mint Margarita", category: "Beverages", price: "Rs. 380", desc: "Refreshing blend of fresh mint, lemon, and sprite." },
    { id: 21, name: "Classic Cappuccino", category: "Beverages", price: "Rs. 420", desc: "Rich espresso topped with steamed milk foam." },
    { id: 22, name: "Peach Iced Tea", category: "Beverages", price: "Rs. 340", desc: "Brewed black tea infused with natural peach flavor." },
    { id: 23, name: "Nutella Milkshake", category: "Beverages", price: "Rs. 680", desc: "Thick creamy shake made with real Nutella and ice cream." },
    { id: 24, name: "Fresh Blue Lagoon", category: "Beverages", price: "Rs. 400", desc: "Citrus blue curacao drink topped with lemon soda." },

    // Desserts
    { id: 25, name: "Sizzling S'mores Brownie", category: "Desserts", price: "Rs. 650", desc: "Warm chocolate brownie served with vanilla ice cream." },
    { id: 26, name: "New York Cheesecake", category: "Desserts", price: "Rs. 720", desc: "Classic dense cheesecake with blueberry topping." },
    { id: 27, name: "Molten Lava Cake", category: "Desserts", price: "Rs. 590", desc: "Gooey chocolate cake with a melting chocolate center." },
    { id: 28, name: "Lotus Biscoff Sundae", category: "Desserts", price: "Rs. 780", desc: "Vanilla gelato layered with crushed Biscoff and spread." },
    { id: 29, name: "Traditional Gulab Jamun", category: "Desserts", price: "Rs. 300", desc: "Warm milk solid donuts soaked in cardamom sugar syrup." },
    { id: 30, name: "Red Velvet Slice", category: "Desserts", price: "Rs. 490", desc: "Soft red velvet sponge layered with cream cheese frosting." }
];


const displayMenu = (items) => {
    const container = document.querySelector(".menu-Grid");
    container.innerHTML = items.map(item =>
          `<div class="menu-card">
    <span class="category-tag">${item.category}</span>
    <div class="card-header">
        <h3 class="card-title">${item.name}</h3>
        <span class="price">${item.price}</span>
    </div>
    <p class="description">${item.desc}</p>
</div>`
     
    ).join("")
}
const filterMenu = (list, selectedCategory) =>
    selectedCategory === "All" ? list : list.filter(item => item.category === selectedCategory);

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active")
        let category = btn.innerText.trim()
        let result = filterMenu(menuItems, category);
        displayMenu(result);
    })
})
displayMenu(menuItems)