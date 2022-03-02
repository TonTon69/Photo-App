import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

import productApi from "../../../../api/productApi";
import Banner from "../../../../components/Banner";
import PostFiltersForm from "../../../../components/PostFiltersForm";
import Images from "../../../../constants/images";

interface IProduct {
    id: number;
    name: string;
    salePrice: number;
}

function Main() {
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 120,
        name_like: "",
    });
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productApi.getAll(pagination);
                console.log(response);
                setProductList(response.data);

                const count = Math.ceil(
                    pagination._totalRows / pagination._limit
                );
                setTotalPages(count);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
        };
        fetchProductList();
    }, [pagination]);

    const handlePageChange = (event: unknown, newPage: number) => {
        setPagination({
            ...pagination,
            _page: newPage,
        });
    };

    const handleFiltersChange = (newFilters: { searchTerm: string }) => {
        setPagination({
            ...pagination,
            _page: 1,
            name_like: newFilters.searchTerm,
        });
    };

    return (
        <div className="product-main">
            <Banner
                title="Your awesome products"
                backgroundUrl={Images.ORANGE_BG}
            />

            <PostFiltersForm onSubmit={handleFiltersChange} />

            <ul>
                {productList.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.salePrice}đ
                    </li>
                ))}
            </ul>

            <Pagination
                count={totalPages}
                color="primary"
                siblingCount={1}
                boundaryCount={1}
                onChange={handlePageChange}
            />
        </div>
    );
}

export default Main;
