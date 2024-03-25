import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomPagination() {
    return (
        <Pagination
            count={3}
            color="standard"
            variant="outlined"
            shape="rounded"
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/games/Games/${item.page}`}
                    {...item}
                />
            )}
            sx={{
                '& .MuiPaginationItem-root': {
                    color: '#0f172a', // text color
                    backgroundColor: '#6b7280', // background color
                },
                '& .MuiPaginationItem-root:hover': {
                    backgroundColor: '#1e3a8a', // background color on hover
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#1d4ed8', // background color of selected item
                },
            }}
        />
    );
}