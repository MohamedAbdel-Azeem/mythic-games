import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


export default function GameRating({value} : {value: number}) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        value={value}
        precision={0.25}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 , color: 'gray' }} fontSize="inherit" />}
      />
        <Box sx={{ ml: 2 , color: 'text-textColor' }}>{getLabel(value)}</Box>
    </Box>
  );
}

function getLabel(rating : number) : string{
    if (rating < 2){
      return "Skip";
    }
    if (rating < 3 ){
      return "Meh";
    }
    if (rating < 4){
      return "OK+";
    }
    if (rating < 5){
      return "Recommended+";
    }
    return "Exceptional!";
}
