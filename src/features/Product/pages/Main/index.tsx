import { Box, Container, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import productApi from "../../../../api/productApi";
import Banner from "../../../../components/Banner";
import PostFiltersForm from "../../../../components/PostFiltersForm";
import Images from "../../../../constants/images";
import { ListParams, Product } from "../../../../models";

function Main() {
    const [productList, setProductList] = useState<Product[]>([]);
    const [pagination, setPagination] = useState<ListParams>({
        _page: 1,
        _limit: 10,
        name_like: "",
    });
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productApi.getAll(pagination);
                console.log(response);
                setProductList(response.data);

                const count = Math.ceil(
                    response.pagination._totalRows / response.pagination._limit
                );
                setTotalPages(count);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
        };
        fetchProductList();

        // return fetchProductList;
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

            <Container>
                <Box sx={{ my: 4 }}>
                    <PostFiltersForm onSubmit={handleFiltersChange} />

                    <Box sx={{ my: 4 }}>
                        <ul>
                            {productList.map((product) => (
                                <li key={product.id}>
                                    {product.name} - {product.salePrice}đ
                                </li>
                            ))}
                        </ul>
                    </Box>

                    <Pagination
                        count={totalPages}
                        color="primary"
                        siblingCount={1}
                        boundaryCount={1}
                        onChange={handlePageChange}
                    />
                </Box>
            </Container>
        </div>
    );
}

export default Main;
