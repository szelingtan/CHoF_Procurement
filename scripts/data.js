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
            "Dessert (choose 1)": "Ice Jelly w Cocktail, Chin Chow w Logan, Almond Jelly w Logan",
            "Drinks (choose 1)": "Fruit Punch, Orange, Blackcurrant"
        },
        features: ["Disposable Cutlery Included"],
        note: "Only sweet drinks available. May have to procure coffee/tea separately."
    },
    {
        name: "Stamford Catering (8+1 Courses)",
        pricePerPerson: 19.62,
        deliveryCharge: 0.00,
        minPax: 30,
        highlights: {
            "Mains (choose 1)": "Signature Wok-Fried Egg Rice with Silver Fish, Yang Chow Fried Rice, Nasi Goreng, Signature Mee Goreng, Hong Kong Fried Egg Noodles, Vegetarian Fried Bee Hoon",
            "Chicken (choose 1)": "Signature Curry Chicken with Potatoes, Ayam Masak Merah, Prawn Paste Mid Wing, Roasted Chicken Chop with BBQ Sauce, Baked Teriyaki Chicken Chop with Pickles, Thai Crispy Chicken Chop with Plum Sauce",
            "Ocean Catch (choose 1)": "Fish Fillet with Assam Paste, Sweet and Sour Fish Fillet, Salted Egg Fish Fillet, Gong Bao Fish Fillet, Steamed Fish Otah",
            "Beancurd / Egg (choose 1)": "Crab Stick Gui Hua Egg, Foo Yong Chicken Sausage Egg, Sze Chuan Mapo Tofu, Braised Egg Beancurd and Vegetables in Silky Egg Gravy",
            "Vegetables (choose 1)": "Signature Curry Vegetables, Nonya Chap Chye, Chinese Cabbage Luo Han Zhai, Stir Fry Cauliflower and Broccoli",
            "Dim Sum (choose 1)": "Steamed Cabbage Roll with Shrimp, Vegetables Spring Roll with Sweet Sauce, Golden Chicken Ngoh Hiang Roll, Steamed Mini Chicken & Shrimp Siew Mai with Sweet Sauce",
            "Finger Food (choose 1)": "Seafood Crouton w Tartar Dip, Cabbage Spring Roll with Sweet Sauce, Seafood Pocket with Dip, Golden Sotong Ball, Sambal Fish Ball, Fried Samosa",
            "Dessert (choose 1)": "Chilled Almond Beancurd with Longan, Chilled Cheng Tng with Snow Fungus and Longan, Chilled Honeydew Sago, Agar Agar with Fruit Cocktail",
            "Beverage (choose 1)": "Refreshing Tropical Punch Juice, Lemongrass Pandan Drink, Wintermelon Tea, Iced Lemon Tea"   
        },
        features: ["Disposable Cutlery Included", "MOHT Registered"],
        note: "Wide variety of authentic Asian dishes with chef recommendations"
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
            "Desserts (choose 1)": "Chendol Gula Melaka, Mixed Fruit Platter, Chocolate Eclair",
            "Drinks (choose 1)": "Tropical Fruit Punch, Iced Lemon Tea, Yuzu, Peach Muscato"
        },
        features: ["Disposable Cutlery Included", "Free Delivery >$1000"],
        note: "May consider Yuzu for the drink option or procure coffee/tea separately."
    }
];

const teabreakCaterers = [
    {
        name: "Neo Garden High Tea Package B",
        pricePerPerson: 8.39,
        deliveryCharge: 98.10,
        minPax: 80,
        highlights: {
            "*Salads": "Potato Salad, Garden Salad, Caesar Salad, Tropical Fruits Salad",
            "*Sandwiches": "Egg Mayo, Tuna Mayo, Cheddar Cheese, Sardine, Veggie",
            "*Cakes/Pastry": "Mini Custard Puff, Swiss Roll, Butter Cake, Marble Cake",
            "*Deep Fried": "Fish Ball, Spring Roll, Breaded Scallop, Mini Curry Puff, Crispy Golden Long Spring Roll, Sotong You Tiao, Curry Samosa, Sotong Ball",
            "*Dim Sum/Kueh": "Steamed Yam Cake, Mini Soon Kueh, Mini Red Bean Pau, Mala Chicken Siew Mai (+$0.50), Steamed Chicken Siew Mai, Steamed Har Kau (+$0.50), Steamed Pumpkin Cake, Mini Rice Kueh, Steamed Mini Honey Chicken Pau, Assorted Nonya Kueh (+$0.50)",
            "*Chicken": "Honey Drumlet, Hot & Spicy Drumlet, Crispy Mid-Wing, Chicken Nugget, Teriyaki Mid-Wing",
            "*Dessert": "Ice Jelly w Cocktail, Almond Jelly w Longan, Chin Chow W Longan, Fresh Fruits Platter",
            "Beverage (choose 1)": "Homemade Herbal Drink - Roselle Hawthorn (+$1.00), Homemade Herbal Drink - Ginseng Chrysanthemum (+$1.00), Homemade Herbal Drink - Loh Han Guo (+$1.00), Fruit Punch, Blackcurrant Drink, Coffee - Sugar & Creamer, Tea - Sugar & Creamer"
        },
        features: ["Disposable Cutlery Included"],
        note: "Choose 5 options from any of the starred categories + 1 beverage. Maximum of 2 options from each starred category."
    },
    {
        name: "Stamford Catering Classic High Tea D",
        pricePerPerson: 9.81,
        deliveryCharge: 0.00,
        minPax: 50,
        highlights: {
            "*Salad": "Mixed Garden Salad with Thousand Island Dressing, Japanese Potato Salad, International Fruit Salad, Thai Mango Salad",
            "*Sandwich": "Egg Mayonnaise Sandwich, Chicken Ham Finger Sandwich, Crab Stick Mayo Sandwich, Vegetables Finger Sandwich, Sardine Finger Sandwich, Tuna Mousse Finger Sandwich",
            "*Pastry": "Mini Assorted Swiss Roll, Mini Chocolate Brownies, Traditional Mini English Carrot Cakes, Mini Marble Cake Slice, Mini Chocolate Sliced Cake, Baked Mini Chicken Pie",
            "*Deep Fried": "Breaded Butterfly Shrimp w Thai Dipping Sauce, Golden Fish Goujons with Tartar Sauce, Golden Fish Ball, Sotong Ball, Golden Prawn Ball w Tartar Dip, Curry Samosa, Vegetable Gyoza with Vinegar Dip, Potato Curry Puff, Spring Roll with Sweet Sauce, Golden Seafood Pocket",
            "*Dim Sum": "Cabbage Roll w Shrimp, Chicken Ngoh Hiang Roll, Steamed Chee Cheong Fan, Mini Carrot Cake with Sweet Sauce, Steamed Mini Yam Cake w Sweet Sauce, Steamed Mini Chicken & Shrimp Siew Mai w Sweet Sauce, Steamed Mini Har Kao with Sweet Sauce, Steam Mini Lotus Pau, Steamed Mini Vegetable Pau, Steamed Red Bean Mini Pau, Steamed Fish Otah",
            "*Chicken Delights": "Spicy Nuggets, Buffalo Drumlets, Chicken Cocktail Sausage, Chicken Nuggets with Tartar Dip, BBQ Mini Drumlet, Teriyaki Mini Drumlet, Golden Mid Wing, Honey Glazed Mid Wing",
            "*Mains": "Pan-Fried Carrot Cake with Egg, Yong Chow Fried Rice, Mee Goreng, Singapore Style Fried Bee Hoon, Vegetarian Fried Bee Hoon, Mee Siam Goreng, Roti Prata w Curry Gravy",
            "*Desserts": "Cold Honeydew Sago (Seasonal and subject to substitution), Grass Jelly with Longan, Agar Agar with Fruit Cocktails, Chilled Almond Beancurd with Longans, Hot Tau Suan, Hot Bubur Pulut Hitam",
            "Beverage (choose 1)": "Refreshing Tropical Punch Juice, Wintermelon Tea, Iced Lemon Tea, Grapefruit Pomelo, Hot Coffee with Sugar and Creamer, Hot Tea with Sugar and Creamer"
        },
        features: ["Disposable Cutlery Included", "MOHT Registered"],
        note: "Choose 6 options from any of the starred categories + 1 beverage"
    },
    {
        name: "Liang Food Caterer Tea Reception B",
        pricePerPerson: 9.00,
        deliveryCharge: 58.00,
        minPax: 60,
        highlights: {
            "Dim Sum (choose 1)": "Chicken Siew Mai, Mini Har Kao, Cabbage Roll, Salted Egg Custard Pau, Chicken Char Siew Pau, Liang Yong Pau",
            "Snacks (choose 1)": "Sotongball, Fishball, Prawn Wanton, Springroll, Samosa (Potato), Curry Puff (Potato), Thai Fishcake, Chicken Nugget, Plant Based Calamari (VEG), Plant Based Fishless Finger (VEG)",
            "Sandwiches (choose 1)": "Egg Mayonnaise, Tuna Mayonnaise, Butter & Kaya, Chicken Ham & Cheese, Vegetarian Sandwich (With Cucumber, Salad & Tomatoes ONLY)",
            "Pastries or Fruits (choose 1)": "Chocolate Éclair, Cream Puffs, Swiss Roll, Watermelon, Honeydew",
            "Beverage (choose 1)": "Coffee, Tea, Hot Milo, Iced Lemon Tea"
        },
        features: ["Disposable Cutlery Included"],
        note: "Free delivery if food >$1000 before GST"
    }
];
