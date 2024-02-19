import { ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";

interface Parameter {
    onClose: () => void;
}

const BookModal = ({ onClose }: Parameter) => {
    const router = useRouter();
    const { id } = router.query;
    const products = [
        {
            id: 1,
            name: "Harry potter and the socurers stone",
            description: "J.K Rowling",
            price: 199,
            imageUrl: "/SorcerersStone_2017.png",
            aboutBook: "Ten-year-old Harry Potter is an orphan who lives in the fictional London suburb of Little Whinging, Surrey, with the Dursleys: his uncaring Aunt Petunia, loathsome Uncle Vernon, and spoiled cousin Dudley. The Dursleys barely tolerate Harry, and Dudley bullies him. One day Harry is astonished to receive a letter addressed to him in the cupboard under the stairs (where he sleeps). Before he can open the letter, however, Uncle Vernon takes it. Letters for Harry subsequently arrive each day, in increasing numbers, but Uncle Vernon tears them all up, and finally, in an attempt to escape the missives, the Dursleys go to a miserable shack on a small island. On Harry’s 11th birthday, a giant named Hagrid arrives and reveals that Harry is a wizard and that he has been accepted at the Hogwarts School of Witchcraft and Wizardry. He also sheds light on Harry’s past, informing the boy that his parents, a wizard and a witch, were killed by the evil wizard Voldemort and that Harry acquired the lightning-bolt scar on his forehead during the fatal confrontation"
        },
        {
            id: 2,
            name: "Heidi",
            description: "Johanna spyri",
            price: 248,
            imageUrl: "/heidi.jpg",
            aboutBook:"The novel opens with Aunt Dete taking her niece, Heidi, to stay with the young girl’s grandfather, a goatherd who lives alone in the Swiss Alps. Dete, who has taken care of Heidi since she was orphaned as a baby, has a new job and can no longer care for the child. However, villagers express concern about Heidi living with her grandfather. He is a bitter old man who has become reclusive and has rejected religion. Nevertheless, Heidi is left with him, and the odd couple—after some initial reluctance on the grandfather’s part—are happy together. Away from her aunt’s oppression, the little girl’s spirits soar, and her goodness and faith soften the old man’s heart. She quickly comes to love life on the mountain and makes friends with Peter the goatherd and his blind grandmother, among others."
        },
        {
            id: 3,
            name: "The complete shrlock holme",
            description: "connan doyle",
            price: 500,
            imageUrl: "/sherlock.jpg",
            aboutBook:"“The Adventures of Sherlock Holmes,” a collection of twelve short stories written by Sir Arthur Conan Doyle and first published in 1892, introduced readers to one of literature’s most iconic characters: the legendary detective Sherlock Holmes. Through his keen intellect, astute observations, and deductive reasoning, Holmes solves perplexing mysteries that baffle both the police and ordinary citizens. Doyle’s compelling narratives and the enigmatic personality of Sherlock Holmes have made this collection a cornerstone of detective fiction and an enduring source of inspiration"
        },
        {
            id: 4,
            name: "black Beauty",
            description: "Anna Sewell",
            price: 350,
            imageUrl: "/black.jpg",
            aboutBook:"The story is narrated in the first person as an autobiographical memoir told by the titular horse named Black Beauty—beginning with his carefree days as a foal on an English farm with his mother, to his difficult life pulling cabs in London, to his happy retirement in the country. Along the way, he meets with many hardships and recounts many tales of cruelty and kindness. Each short chapter recounts an incident in Black Beauty's life containing a lesson or moral typically related to the kindness, sympathy, and understanding treatment of horses, with Sewell's detailed observations and extensive descriptions of horse behaviour lending the novel a good deal of verisimilitude"
        },
        {
            id: 5,
            name: "peter pan",
            description: "Jm Barries",
            price: 300,
            imageUrl: "/peterpan.jpg",
            aboutBook:"Peter Pan, a child who never grows up, visits the Darling nursery and brings the children to Neverland so that Wendy can mother the Lost Boys. Peter was once a normal child, but he ran away to Neverland so he would never have to grow up and die. He used to visit his own mother's window and listen to stories, but after she shut it on him, he started visiting others. He takes the Darling children on adventures and saves them from pirates. After the Darling children return home and grow up, Peter takes Wendy's daughter and granddaughter to Neverland as well."
        },
        {
            id: 6,
            name: "The Old Man and the Sea",
            description: "Ernest Hemingway",
            price: 400,
            imageUrl: "/oldman.jpg",
            aboutBook:"The Old Man and the Sea was a great success and is one of Hemingway’s finest works. Ernest Hemingway won the Nobel Prize for Literature in 1954.  This article explains and presents the story of the Old man and the sea summary. The routines of life in a Cuban fishing village are very beautifully presented in the opening pages with the characteristic economy of language.The existence of an old fisherman Santiago is crafted in a very elemental manner. It shows the shrug off the old man’s powerful shoulders. Age and luck both are now against him, and Santiago clearly knows that he must row out “beyond all people,” away from land"
        },
        {
            id: 7,
            name: "The Red Badge of Courage",
            description: "Stephen Crane",
            price: 150,
            imageUrl: "/red.jpg",
            aboutBook:"The story of The Red Badge of Courage is one of growth and development of a young man in the face of war and his reaction to the realities of war. The novel's themes of fear and courage, self-preservation, the indifference of war, and solitude are reiterated in Henry's mind through the narrator's voice as well as in the actions of those around him. The death of Jim Conklin shocks Henry into understanding that the he so urgently seeks comes with a price. Henry Fleming and Wilson both react to the danger of war, first with fear, then with acceptance, and finally, with proactive aggression as they fight to overcome their own fear along with that of their fellow soldiers. Many fearful images adorn the description of Henry's view of war and of the enemy. For example, the war is depicted as a bloody machine, and the Confederate troops are compared to dragons. Additionally, there is the matter of emotional and physical solitude that makes Henry feel alone in his fear, separates him from other soldiers, and frightens him when he is alone in the forest. Henry finds that the red badge, which symbolizes blood, battle, and things of a disturbing nature, is not what defines courage. Henry completes the battle and accepts who he is, former cowardice and all. Published in 1895 and celebrated, though criticized for being anti-war, it is a fascinating look at what a youth goes through both mentally and physically in crisis situations such as a battle where the odds are stacked against the main character "
        }
    ];

    // Find the product with the matching ID
    const selectedProduct = products.find(product => product.id === parseInt(id as string));

    // If no product found, return null or display a message
    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    const { name, price, imageUrl, aboutBook } = selectedProduct;

    const handleClose = () => {
        onClose(); // Ensure onClose is called as a function
    };

    return (
        <div className=" bg-white ">
            <div className="flex  mb-4">
                <div onClick={router.back} className="cursor-pointer">
                    <ArrowBackIosNew className="text-gray-600" />
                </div>
                <div className="text-3xl font-semibold ml-2">{name}</div>
            </div>
            <div className="flex justify-center">
                <img src={imageUrl} alt={name} className=" rounded-md" width={200} height={120}/>
            </div>
            <div>
                <p className="text-xl font-semibold mb-2 flex justify-center p-10">Price: ${price}</p>
                <p className="text-2xl text-gray-600 px-10">{aboutBook}</p>
            </div>

        </div>
    );
};

export default BookModal;
