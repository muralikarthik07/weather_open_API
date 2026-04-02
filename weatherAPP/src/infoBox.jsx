import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import RainIcon from '@mui/icons-material/Grain'
import CloudIcon from '@mui/icons-material/Cloud';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1765286387038-67c12d3f6699?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  //images
  const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  
  
  return (
    <div className="infoBox">
      <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ 
            height: 160,
            width: 345
         }}
        image={
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
        }
        
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80
            ? <RainIcon />
            : info.temp > 15
            ? <SunnyIcon />
            : <CloudIcon />
          }
          
          
        
        </Typography>
        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
        
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Min Temperature: {info.tempMin}&deg;C</p>
          <p>Max Temperature: {info.tempMax}&deg;C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Feels Like: {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
} 
