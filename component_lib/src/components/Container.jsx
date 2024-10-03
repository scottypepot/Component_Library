import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Item>
            <CardMedia
                sx={{ height: 140 }}
                image="./src/assets/dota-2.jpg"
                title="dota2"
            />
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Dota 2
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        a multiplayer online battle arena (MOBA) video game in which two teams of five players compete to destroy a large structure defended by the opposing team known as the "Ancient" whilst defending their own.
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </CardActions>
        </Item>
      </Grid>
        <Grid size={3}>
          <Item>
            <CardMedia
                sx={{ height: 140 }}
                image="./src/assets/chained.jpg"
                title="Chained Together"
            />
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Chained Together
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        a multiplayer game where we and at least three other people are chained together in Hell and must escape by climbing an obscenely tall structure filled with lasers, floating objects, and elements of NYC.
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
      </CardActions>
        </Item>
        </Grid>
        <Grid size={3}>
          <Item><CardMedia
                sx={{ height: 140 }}
                image="./src/assets/nba2k24.jpg"
                title="Nba2K24"
            />
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           NBA 2K24
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        builds on the NBA 2K franchise with enhanced features and gameplay, delivering animations and movements pulled from real-world action on the court for a groundbreaking jump in authenticity.
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
      </CardActions>
        </Item>
        </Grid>
        <Grid size={3}>
          <Item><CardMedia
                sx={{ height: 140 }}
                image="./src/assets/valorant.jpg"
                title="green iguana"
            />
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Valorant
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        unfolds in a near-future version of Earth shaped by a cataclysmic event known as First Light, ushering in significant changes to life, technology, and governance across the planet.
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
      </CardActions>
        </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
