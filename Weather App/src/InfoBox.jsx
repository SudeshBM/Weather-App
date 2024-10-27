import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=800&auto=format&fit=";
    const COLD_URL = "https://images.unsplash.com/photo-1505322266409-1c77f8b33a8a?w=800&auto=format&fit=";
    const RAIN_URL = "https://images.unsplash.com/photo-1558409057-bbe679023136?w=800&auto=format&fit=cro";

    return(
    <div className="InfoBox">
        <div className='cardContainer'>   
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
    sx={{ height: 140 }}
    image={info.temp < 0 ? COLD_URL : info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
    title="green iguana"
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.temp < 0 ? <AcUnitIcon/> : info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min temp = {info.tempMin}&deg;C</p>
          <p>Max temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as {info.weather} and feels like  = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent> 
  </Card>
</div> 
</div>
);
}
