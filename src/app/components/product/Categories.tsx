const url = "http://localhost:5005/api/";

async function fetchCategories() {
  const response = await fetch(`${url}category`);
  const categories = await response.json();
  return categories;
}

interface Category {
  id: number;
  category: string;
}

const Categories = async ({ category, handleCategory }: any) => {
  const allCategories = await fetchCategories();
  const categories = allCategories.data;

  return (
    <div>
      <select
        className="border border-blue-400 p-3 rounded-lg w-72 focus:border-blue-600"
        id="category"
        name="category"
        value={category}
        onChange={handleCategory}
      >
        <option value="">Categories</option>
        {categories.map((cat: Category) => (
          <option key={cat.id} value={cat.id}>
            {cat.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
