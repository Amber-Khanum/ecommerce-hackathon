import { useRouter } from 'next/router';

const ItemDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the id from the URL query parameters

  // Dummy data based on the "id" passed in the URL
  const items = {
    sideTable1: {
      name: "Side Table 1",
      description: "A beautiful modern side table with a minimalist design.",
      price: "$250",
      image: "/image/Mask.png", // Example image path
    },
    sideTable2: {
      name: "Side Table 2",
      description: "Stylish and durable, perfect for any living room.",
      price: "$300",
      image: "/image/Mask1.png", // Example image path
    }
  };

  const item = items[id] || {}; // Get the item based on the "id" parameter

  return (
    <div className="item-details">
      <h1>{item.name}</h1>
      <Image src={item.image} alt={item.name} width={600} height={400} />
      <p>{item.description}</p>
      <p><strong>Price: {item.price}</strong></p>
    </div>
  );
};

export default ItemDetails;
