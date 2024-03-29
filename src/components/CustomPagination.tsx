import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';

export default function CustomPagination() {

    const navigate = useNavigate();
    const { pageNumber = '1' } = useParams();
    console.log("Page number is ",pageNumber);
    return (
        <Pagination
            count={3}
            color="standard"
            variant="outlined"
            shape="rounded"
            page={parseInt(pageNumber)}
            onChange={(event, page) => {
                navigate(`/games/Games/${page}`);
            }}
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