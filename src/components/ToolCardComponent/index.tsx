import { Card,  CardContent, Typography } from '@mui/material';

type Props = {
    sentence: string,
    imageUrl: string
}

const ToolCard = ({sentence, imageUrl}: Props) => {
    return (
        <Card sx={{ margin: "3rem", width: 315, height: 442, boxShadow: "none"}} style={{backgroundImage: `url(${imageUrl})`, backgroundColor: "transparent", cursor: "pointer"}} className="text-center">
            <CardContent>
                {/* <p className="font-link" style={{color: "black", fontSize: "1rem", padding: "2rem 1rem 2rem 1rem", fontWeight: "600"}}>{sentence}</p> */}
                <Typography
				component='p'
				fontWeight={600}>{sentence}</Typography>
            </CardContent>
        </Card>
    )
}

export default ToolCard;