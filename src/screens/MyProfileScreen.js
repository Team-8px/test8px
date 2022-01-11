import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listPosts } from "../actions/postActions";
import { API_URL } from "../constants/defaultUrl";

const MyProfileScreen = () => {
  const dispatch = useDispatch();

  const {
    productList: { products },
    postList: { posts },
  } = useSelector((state) => state);
  console.log(products, posts);

  useEffect(() => {
    dispatch(listPosts());
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>상품 목록</h1>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} style={{ display: "flex" }}>
              <div>
                <img src={`${API_URL}/${product.itemImage}`} alt="상품사진" />
              </div>
              <div>
                <ul>
                  <li>상품명: {product.itemName}</li>
                  <li>상품가격: {product.price}</li>
                  <li>상품링크: {product.link}</li>
                </ul>
              </div>
            </div>
          );
        })}
      <hr />
      <h1>게시글 목록</h1>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id} style={{ display: "flex" }}>
              <div>
                <ul>
                  <li>게시글: {post.content}</li>
                  <li>게시사진 이미지 주소모음: {post.image}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyProfileScreen;
