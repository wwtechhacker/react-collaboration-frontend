import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

type Props = {
    data: any;
}

const PortfolioCard: React.FC<Props> = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 345, height: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={data.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" component={'p'} sx={{ mb: 2 }}>
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default PortfolioCard;