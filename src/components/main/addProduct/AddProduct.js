import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  listProducts,
  saveProduct,
  deleteProduct,
} from "../../../store/actions/productActions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [IsCreateButton, setIsCreateButton] = useState(true);
  const [_id, set_id] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [sizes, setSizes] = useState("");
  const [tags, setTags] = useState("");
  const [quantity, setQuantity] = useState("");
  const productList = useSelector((state) => state.productList);
  const productSave = useSelector((state) => state.productSave);
  const productDelete = useSelector((state) => state.productDelete);

  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  useEffect(() => {
    if (successSave) {
      setIsModalVisible(false);
    }
    dispatch(listProducts());
  }, [successSave, successDelete]);

  const { products, loading, error } = productList;

  const submitHandler = (e) => {
    e.preventDefault();
    const newSizes = sizes.split(" ");
    const newTags = tags.split(" ");
    dispatch(
      saveProduct({
        _id,
        category,
        brand,
        model,
        image,
        price,
        color,
        newSizes,
        newTags,
        quantity,
      })
    );
    set_id("");
    setCategory("");
    setBrand("");
    setModel("");
    setImage("");
    setPrice("");
    setColor("");
    setSizes("");
    setTags("");
    setQuantity("");
  };

  const deleteHandler = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const openModal = (product, isCreate) => {
    set_id(product._id);
    setCategory(product.category);
    setBrand(product.brand);
    setModel(product.model);
    setImage(product.image);
    setPrice(product.price);
    setColor(product.color);
    setSizes(product.sizes?.join(" "));
    setTags(product.tags?.join(" "));
    setQuantity(product.quantity);
    setIsModalVisible((prevState) => !prevState);
    setIsCreateButton(isCreate);
  };

  return (
    <section className="container mx-auto text-center">
      <h2 className="font-bold text-xl">Products</h2>
      <table class="table-auto mx-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Price</th>
            <th class="px-4 py-2">Sizes</th>
            <th class="px-4 py-2">Tags</th>
            <th class="px-4 py-2">Quantity</th>
            <th class="px-4 py-2">Category</th>
            <th class="px-4 py-2">Brand</th>
            <th class="px-4 py-2">Model</th>
            <th class="px-4 py-2">Color</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading === false
            ? products.data.map((product) => {
                return (
                  <tr key={product._id}>
                    <td class="border px-4 py-2">{product._id}</td>
                    <td class="border px-4 py-2">{product.price}$</td>
                    <td class="border px-4 py-2">{product.sizes.join(" ")}</td>
                    <td class="border px-4 py-2">{product.tags.join(" ")}</td>
                    <td class="border px-4 py-2">{product.quantity}</td>
                    <td class="border px-4 py-2">{product.category}</td>
                    <td class="border px-4 py-2">{product.brand}</td>
                    <td class="border px-4 py-2">{product.model}</td>
                    <td class="border px-4 py-2">{product.color}</td>
                    <td class="border px-4 py-2">
                      <div className="flex">
                        <button
                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-1"
                          onClick={() => openModal(product, false)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => deleteHandler(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      {isModalVisible ? (
        <div className="bg-black bg-opacity-25 z-10 fixed inset-0">
          <div className="w-full max-w-xs lg:max-w-2xl lg:mt-6 mx-auto text-right">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => openModal({}, false)}
            >
              X
            </button>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={submitHandler}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  type="text"
                  placeholder="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="brand"
                >
                  Brand
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="brand"
                  type="text"
                  placeholder="Brand"
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="model"
                >
                  Model
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="model"
                  type="text"
                  placeholder="Model"
                  onChange={(e) => setModel(e.target.value)}
                  value={model}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  type="text"
                  placeholder="Image"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="color"
                  type="text"
                  placeholder="Color"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sizes"
                >
                  Sizes
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="sizes"
                  type="text"
                  placeholder="Sizes"
                  onChange={(e) => setSizes(e.target.value)}
                  value={sizes}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tags"
                >
                  Tags
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tags"
                  type="text"
                  placeholder="Tags"
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  placeholder="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {IsCreateButton ? "Create" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {!isModalVisible ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => openModal({}, true)}
        >
          Create product
        </button>
      ) : null}
    </section>
  );
};

export default AddProduct;
