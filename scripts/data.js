// Catering data
const lunchCaterers = [
    {
        name: "Neo Garden Package A",
        pricePerPerson: 19.71,
        deliveryCharge: 98.10,
        minPax: 50,
        highlights: {
            "Main Course (choose 1)": "Sin Chow Mee Hoon, Yang Chow Fried Rice, Thai Pineapple Rice, Fried Hong Kong Mee",
            "Vegetables (choose 1)": "Loh Han Chye, Mixed Cabbage, Braised Bean Curd, Xiao Bai Cai with Mushroom",
            "Fish (choose 1)": "Sweet & Sour Fish, Dried Chili Fish, Breaded Fish Fillet w Mayo, Spring Onion Fish",
            "Chicken (choose 1)": "Lemon Chicken, Honey Chicken, Sweet & Sour Chicken, Black Pepper Chicken",
            "Finger Food (choose 1)": "Spring Roll, Fish Ball, Breaded Scallop, Samosa",
            "Dessert (choose 1)": "Ice Jelly w Cocktail, Chin Chow w Logan, Almond Jelly w Logan"
        },
        features: ["Disposable Cutlery Included", "Multiple Main Course Options", "Comprehensive Menu"],
        note: "May exceed budget with delivery costs"
    },
    {
        name: "Elsie's Kitchen - Nostalgic Taste",
        pricePerPerson: 16.67,
        deliveryCharge: 98.10,
        minPax: 50,
        highlights: {
            "Rice & Noodles (choose 1)": "Nasi Goreng Kampung, Thai Pineapple Fried Rice, Mamak-Indonesian Mie Goreng",
            "Meat (choose 1)": "Sticky Lemon Chicken, Kunyit-Ginger Fried Chicken, Golden Cereal Fish",
            "Vegetables (choose 1)": "Nonya Chap Chye, Chop Suey Mixed Vegetables, Xiao Bai Chye with Mushrooms",
            "Finger Food (choose 1)": "Thai Fish Cake, Potato Samosa, Honey Shrimp Wanton, Seafood Money Bag",
            "Desserts (choose 1)": "Pulut Hitam Tart, Tau Suan with You Tiao, Pandan Buttercream Choux"
        },
        features: ["Disposable Cutlery Included", "Local Nostalgic Flavors", "Authentic Asian Cuisine"],
        note: "Best value for traditional flavors"
    },
    {
        name: "Liang Food Caterer Standard Buffet A",
        pricePerPerson: 17.75,
        deliveryCharge: 58.00,
        minPax: 30,
        highlights: {
            "Main 1 (choose 1)": "Curry Chicken, Rendang Chicken, Oven Baked Teriyaki Chicken, Thai Basil Chicken",
            "Main 2 (choose 1)": "Sweet Sour Fish with Pineapple, Grilled Fish w/ Lemon Butter, Assam Fish, Stir Fry with Ginger",
            "Main 3 (choose 1)": "Stir Fry Mixed Vegetables, Lontong Vegetables, Vegetarian Mixed Vegetables",
            "Main 4 (choose 1)": "Crabbites Egg Fried Rice, Biryani Rice, Fried Bee Hoon, Laksa Linguine",
            "Sides/Snacks (choose 1)": "Prawn Wanton, Breaded Scallop, Ngoh Hiang, Thai Fishcake",
            "Desserts (choose 1)": "Chendol Gula Melaka, Mixed Fruit Platter, Chocolate Eclair"
        },
        features: ["Disposable Cutlery Included", "Free Delivery >$1000", "Vegetarian Options", "Diverse Menu"],
        note: "Most flexible option with lowest minimum"
    }
];

const teabreakCaterers = [
    {
        name: "Neo Garden High Tea B",
        pricePerPerson: 8.39,
        deliveryCharge: 98.10,
        minPax: 80,
        highlights: {
            "Salads (choose 1)": "Potato Salad, Garden Salad, Caesar Salad, Tropical Fruits Salad",
            "Sandwiches (choose 1)": "Egg Mayo, Tuna Mayo, Cheddar Cheese, Sardine, Veggie",
            "Cakes/Pastry (choose 1)": "Mini Custard Puff, Swiss Roll, Butter Cake, Marble Cake",
            "Deep Fried (choose 1)": "Fish Ball, Spring Roll, Breaded Scallop, Mini Curry Puff",
            "Dim Sum/Kueh (choose 1)": "Steamed Yam Cake, Mini Soon Kueh, Mini Red Bean Pau"
        },
        features: ["Disposable Cutlery Included", "Variety of Sandwiches", "Fresh Fruit Platter"],
        note: "Requires minimum 80 guests"
    },
    {
        name: "Elsie's Kitchen Classic Tea Menu",
        pricePerPerson: 8.75,
        deliveryCharge: 98.10,
        minPax: 80,
        highlights: {
            "Noodles (choose 1)": "Seafood White Bee Hoon, Nonya Fried Mee Siam, Mamak-Indonesian Mie Goreng, Vegetarian Black Bee Hoon",
            "Finger Food (select 6)": "Ebi Fry, Breaded Salad Roll, Thai Fish Cake, Potato Samosa, Rocky Shrimp Ball, Sambal Fishball, Sardine Puff, Seafood Gyoza, Seafood Money Bag",
            "Dim Sum (choose 1)": "Steamed Red Bean Bun, Crystal Dumpling, Chicken Siew Mai",
            "Desserts (choose 1)": "Almond Logan, Bubur Hitam, Cheng Teng, Tropical Fresh Fruit",
            "Cakes (choose 1)": "Pandan Cake, Gula Melaka Butter Cake, Ondeh Cake"
        },
        features: ["Disposable Cutlery Included", "Local Specialty Items", "Hot & Cold Beverages"],
        note: "Premium pricing with extensive options"
    },
    {
        name: "Liang Food Caterer Tea Reception B",
        pricePerPerson: 9.00,
        deliveryCharge: 58.00,
        minPax: 60,
        highlights: {
            "Dim Sum (choose 1)": "Chicken Siew Mai, Mini Har Kao, Salted Egg Custard Pau",
            "Snacks (choose 1)": "Sotong Ball, Fish Ball, Spring Roll, Thai Fishcake",
            "Sandwiches (choose variety)": "Egg Mayonnaise, Tuna Mayonnaise, Butter & Kaya",
            "Pastries (choose 1)": "Chocolate Éclair, Cream Puffs, Swiss Roll",
            "Fruits (choose 1)": "Watermelon, Honeydew"
        },
        features: ["Disposable Cutlery Included", "Fresh Fruits Choose 1", "Plant-based Options"],
        note: "Simple but comprehensive tea reception (*Free delivery if food >$1000 before GST)"
    }
];
