import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../actions/productActions";
import { imageUploadsHandler } from "../util/imageUploads";

const AddProductScreen = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { itemName, price, link, itemImage } = data;

    const image = await imageUploadsHandler(itemImage[0]);

    dispatch(createProduct(itemName, Number(price), link, image));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <br />

      <div>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="itemImage"
          {...register("itemImage")}
        ></input>
      </div>

      <br />
      <br />
      <br />

      <div>
        <input
          name="itemName"
          type="text"
          placeholder="상품명"
          {...register("itemName")}
        />
      </div>
      <div>
        <input
          name="price"
          type="number"
          placeholder="가격"
          {...register("price")}
        />
      </div>
      <div>
        <input
          name="link"
          type="text"
          placeholder="판매링크"
          {...register("link")}
        />
      </div>

      <div>
        <button>저장</button>
      </div>
    </form>
  );
};

export default AddProductScreen;
