import { Card, CardContent, Typography } from "@mui/material"
import MainTitle from "../MainTitle"

type Props = {
    teamName: string,
    teamIllustration: string,
    color: string
}

const TeamCard = ({teamName, teamIllustration, color}: Props) => {
    return (
        <Card sx={{ margin: "3rem", width: "35%", height: 300, cursor: "pointer", boxShadow: "0px 2px 10px 1px rgba(0,0,0,0.2)"}}>
            <CardContent>
                <div className="is-flex">
                    <div className="is-block">
                        <MainTitle text={teamName} color={color}></MainTitle>
                        <Typography component="p" variant="body1">Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Typography>
                    </div>
                    <img className="illustration" src={teamIllustration} alt="team illustration" width={300}></img>
                </div>
            </CardContent>
        </Card>
    )
}

export default TeamCard;