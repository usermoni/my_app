import { Route } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import BookModal from "../detail";



const MyproductWebpage = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    const [onChange,setOnchange]=useState(false)
    // Sample product data
    const products = [
        {
            id: 1,
            name: "Harry potter and the socurers stone",
            description: "J.K Rowling",
            price: 199,
            imageUrl: "/SorcerersStone_2017.png",
            aboutBook:"Ten-year-old Harry Potter is an orphan who lives in the fictional London suburb of Little Whinging, Surrey, with the Dursleys: his uncaring Aunt Petunia, loathsome Uncle Vernon, and spoiled cousin Dudley. The Dursleys barely tolerate Harry, and Dudley bullies him. One day Harry is astonished to receive a letter addressed to him in the cupboard under the stairs (where he sleeps). Before he can open the letter, however, Uncle Vernon takes it. Letters for Harry subsequently arrive each day, in increasing numbers, but Uncle Vernon tears them all up, and finally, in an attempt to escape the missives, the Dursleys go to a miserable shack on a small island. On Harry’s 11th birthday, a giant named Hagrid arrives and reveals that Harry is a wizard and that he has been accepted at the Hogwarts School of Witchcraft and Wizardry. He also sheds light on Harry’s past, informing the boy that his parents, a wizard and a witch, were killed by the evil wizard Voldemort and that Harry acquired the lightning-bolt scar on his forehead during the fatal confrontation"
        },
        {
            id: 2,
            name: "Heidi",
            description: "Johanna spyri",
            price: 248,
            imageUrl: "/heidi.jpg"
        },
        {
            id: 3,
            name: "The complete shrlock holme",
            description: "connan doyle",
            price: 500,
            imageUrl: "/sherlock.jpg"
        },
        {
            id: 4,
            name: "black Beauty",
            description: "Anna Sewell",
            price: 350,
            imageUrl: "/black.jpg"
        },
        {
            id: 5,
            name: "peter pan",
            description: "Jm Barries",
            price: 300,
            imageUrl: "/peterpan.jpg"
        },
        {
            id: 6,
            name: "The Old Man and the Sea",
            description: "Ernest Hemingway",
            price: 400,
            imageUrl: "/oldman.jpg"
        },
        {
            id: 7,
            name: "The Red Badge of Courage",
            description: "Stephen Crane",
            price: 150,
            imageUrl: "/red.jpg"
        }
    ];
    useEffect(() => {
        if (selectedBook) {
        }
      }, [selectedBook]);

    const handleSearchChange = (event:any) => {
        setSearchQuery(event.target.value);
    };

    const handlePriceRangeChange = (event:any) => {
        setPriceRange(event.target.value);
    };
    
    const handleBookClick = (book:any) => {
        console.log("Clicked book:", book);
        setSelectedBook(book);
        setOnchange(true);
        router.push({
            pathname: '/detail',
            query:  book,
        })        
    };


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!priceRange || priceRange === "all" || 
        (priceRange === "100-200" && product.price >= 100 && product.price <= 200) ||
        (priceRange === "200-300" && product.price >= 200 && product.price <= 300) ||
        (priceRange === "300-400" && product.price >= 300 && product.price <= 400))
    );

    const priceRanges = [
        { label: "All", value: "all" },
        { label: "100-200", value: "100-200" },
        { label: "200-300", value: "200-300" },
        { label: "300-400", value: "300-400" }
    ];
 console.log(selectedBook,"selectedBook")
    return (
        
        <div className="m-4">
            <div className="text-xl font-bold">
                List of Products
            </div>
            <div className="flex justify-between">
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="mt-4 p-2 border border-gray-300 rounded-md w-full py-4"
                    />
                </div>
                <div className="pt-2 px-20">
                    <FormControl fullWidth className="w-52 py-2">
                        <InputLabel id="price-range-label">Price Range</InputLabel>
                        <Select
                            labelId="price-range-label"
                            id="price-range-select"
                            value={priceRange}
                            label="Price Range"
                            onChange={handlePriceRangeChange}
                        >
                            {priceRanges.map((range, index) => (
                                <MenuItem key={index} value={range.value}>
                                    {range.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 px-4  pt-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className=" rounded-lg shadow-md border border-double overflow-hidden 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300" 
                    onClick={() => handleBookClick(product)}>

                        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-scale-down pt-3" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="mt-2 text-lg font-bold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            {onChange && (
                <BookModal  onClose={() => setSelectedBook(null)} />
            )}
        </div>
    );
}

export default MyproductWebpage;



